export const runtime = "nodejs";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { v4 as uuidv4 } from "uuid";
import { db } from "@/lib/db";

interface ExecutionRequest {
  workflowId: string;
  nodes: any[];
  edges: any[];
  scope?: "full" | "partial" | "single";
  executedNodeIds?: string[];
}

export async function POST(request: NextRequest) {
  export async function POST(request: NextRequest) {
  const {
    executeLLMTask,
    cropImageTask,
    extractFrameTask,
  } = await import("@/lib/trigger");
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    const body = await request.json();
    const {
      workflowId,
      nodes,
      edges,
      scope = "full",
      executedNodeIds = [],
    } = body;

    // Verify user owns this workflow
    const user = await db.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 },
      );
    }

    const workflow = await db.workflow.findUnique({
      where: { id: workflowId },
    });

    if (!workflow || workflow.userId !== user.id) {
      return NextResponse.json(
        { success: false, error: "Workflow not found" },
        { status: 404 },
      );
    }

    const executionId = uuidv4();
    const startTime = new Date();
    const nodeResults: Record<string, any> = {};
    const nodeErrors: Record<string, string> = {};
    const nodeLogs: Record<string, string[]> = {};
    const triggerTaskIds: Record<string, string> = {};

    // Determine which nodes to execute
    const nodesToExecute =
      scope === "full"
        ? nodes
        : scope === "single"
          ? nodes.filter((n:any) => executedNodeIds.includes(n.id))
          : nodes.filter((n:any) => executedNodeIds.includes(n.id));

    // Build dependency graph
    const nodeDependencies = buildDependencyGraph(nodes, edges);

    // Execute nodes with dependency resolution
    const executionOrder = topologicalSort(
      nodesToExecute.map((n:any) => n.id),
      nodeDependencies,
    );

    let status: "success" | "failed" | "partial" = "success";
    let partialFailures = false;

    for (const nodeId of executionOrder) {
      const node = nodes.find((n:any) => n.id === nodeId);
      if (!node) continue;

      try {
        nodeLogs[nodeId] = [];

        // Log execution start
        nodeLogs[nodeId].push(
          `[${new Date().toISOString()}] Starting execution...`,
        );

        // Execute node based on type
        const result = await executeNode(
          node,
          nodeResults,
          nodeLogs[nodeId],
          edges,
        );

        if (result.success) {
          nodeResults[nodeId] = result.output;
          nodeLogs[nodeId].push(
            `[${new Date().toISOString()}] ✅ Completed successfully`,
          );

          if (result.triggerTaskId) {
            triggerTaskIds[nodeId] = result.triggerTaskId;
          }
        } else {
          //@ts-ignore
          nodeErrors[nodeId] = result.error;
          nodeLogs[nodeId].push(
            `[${new Date().toISOString()}] ❌ Failed: ${result.error}`,
          );
          partialFailures = true;
          status = "partial";
        }
      } catch (error) {
        const errorMsg =
          error instanceof Error ? error.message : "Unknown error";
        nodeErrors[nodeId] = errorMsg;
        nodeLogs[nodeId].push(
          `[${new Date().toISOString()}] ❌ Error: ${errorMsg}`,
        );
        partialFailures = true;
        status = "partial";
      }
    }

    if (!partialFailures && status === "success") {
      status = "success";
    } else if (
      partialFailures &&
      Object.keys(nodeErrors).length === nodesToExecute.length
    ) {
      status = "failed";
    }

    const endTime = new Date();
    const duration = endTime.getTime() - startTime.getTime();

    // Save execution history
    const history = await db.executionHistory.create({
      data: {
        workflowId,
        userId: user.id,
        status,
        scope: scope as any,
        executedNodeIds,
        nodeResults: nodeResults as any,
        nodeErrors: nodeErrors as any,
        nodeLogs: nodeLogs as any,
        triggerTaskIds: triggerTaskIds as any,
        startTime,
        endTime,
        duration,
      },
    });

    return NextResponse.json({
      success: status !== "failed",
      data: {
        executionId: history.id,
        status,
        scope,
        nodeResults,
        nodeErrors: Object.keys(nodeErrors).length > 0 ? nodeErrors : undefined,
        nodeLogs,
        duration,
      },
    });
  } catch (error) {
    console.error("[v0] Workflow execution error:", error);
    return NextResponse.json(
      { success: false, error: "Workflow execution failed" },
      { status: 500 },
    );
  }
}

// Build dependency graph from edges
function buildDependencyGraph(
  nodes: any[],
  edges: any[],
): Record<string, string[]> {
  const graph: Record<string, string[]> = {};

  nodes.forEach((node) => {
    graph[node.id] = [];
  });

  edges.forEach((edge) => {
    if (!graph[edge.target]) {
      graph[edge.target] = [];
    }
    graph[edge.target].push(edge.source);
  });

  return graph;
}

// Topological sort for execution order
function topologicalSort(
  nodeIds: string[],
  dependencies: Record<string, string[]>,
): string[] {
  const visited = new Set<string>();
  const result: string[] = [];

  function visit(nodeId: string) {
    if (visited.has(nodeId)) return;
    visited.add(nodeId);

    const deps = dependencies[nodeId] || [];
    deps.forEach((dep) => visit(dep));

    result.push(nodeId);
  }

  nodeIds.forEach((nodeId) => visit(nodeId));
  return result;
}

// Execute individual node
async function executeNode(
  node: any,
  previousResults: Record<string, any>,
  logs: string[],
  edges?: any[],
): Promise<{
  success: boolean;
  output?: any;
  error?: string;
  triggerTaskId?: string;
}> {
  const { data } = node;

  try {
    // resolve upstream inputs
    const inputs: Record<string, any[]> = {};

    if (edges) {
      const incoming = edges.filter((e) => e.target === node.id);

      incoming.forEach((edge) => {
        const sourceOutput = previousResults[edge.source];

        const port = edge.targetHandle?.replace("input:", "") || "default";

        if (!inputs[port]) {
          inputs[port] = [];
        }

        inputs[port].push(sourceOutput);
      });
    }

    switch (data.nodeType) {
      case "text":
        return {
          success: true,
          output: {
            text: data.content,
          },
        };

      case "imageUpload":
        if (!data.uploadedImageUrl) {
          return {
            success: false,
            error: "No image uploaded",
          };
        }

        return {
          success: true,
          output: {
            imageUrl: data.uploadedImageUrl,
          },
        };

      case "videoUpload":
        if (!data.uploadedVideoUrl) {
          return {
            success: false,
            error: "No video uploaded",
          };
        }

        return {
          success: true,
          output: {
            videoUrl: data.uploadedVideoUrl,
          },
        };

      case "llm": {
        logs.push("Executing Gemini via Trigger.dev...");

        const systemPrompt = inputs.system?.[0]?.text || data.systemPrompt;

        const userPrompt = inputs.user?.[0]?.text || data.userMessage;

        const images = inputs.image?.map((img) => img.imageUrl) || [];

        const task = await executeLLMTask.trigger({
          nodeId: node.id,
          model: data.model,
          systemPrompt,
          userMessage: userPrompt,
          images,
        });

        return {
          success: true,
          output: {
            text: task.output,
          },
          triggerTaskId: task.id,
        };
      }

      case "cropImage": {
        logs.push("Running cropImage Trigger task...");

        const imageUrl = inputs.image?.[0]?.imageUrl || data.imageUrl;

        if (!imageUrl) {
          return {
            success: false,
            error: "No input image",
          };
        }

        const task = await cropImageTask.trigger({
          nodeId: node.id,
          imageUrl,
          xPercent: data.xPercent,
          yPercent: data.yPercent,
          widthPercent: data.widthPercent,
          heightPercent: data.heightPercent,
        });

        return {
          success: true,
          output: {
            imageUrl: task.output,
          },
          triggerTaskId: task.id,
        };
      }

      case "extractFrame": {
        logs.push("Running extractFrame Trigger task...");

        const videoUrl = inputs.video?.[0]?.videoUrl || data.videoUrl;

        if (!videoUrl) {
          return {
            success: false,
            error: "No input video",
          };
        }

        const task = await extractFrameTask.trigger({
          nodeId: node.id,
          videoUrl,
          timestamp: data.timestamp,
        });

        return {
          success: true,
          output: {
            imageUrl: task.output,
          },
          triggerTaskId: task.id,
        };
      }

      default:
        return {
          success: false,
          error: `Unknown node type: ${data.nodeType}`,
        };
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Execution error",
    };
  }
}
