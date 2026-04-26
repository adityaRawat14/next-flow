import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { v4 as uuidv4 } from 'uuid';
import { db } from '@/lib/db';
import { ExecuteWorkflowSchema } from '@/lib/schemas';
import { executeLLMTask, cropImageTask, extractFrameTask } from '@/lib/trigger';

interface ExecutionRequest {
  workflowId: string;
  nodes: any[];
  edges: any[];
  scope?: 'full' | 'partial' | 'single';
  executedNodeIds?: string[];
}

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { workflowId, nodes, edges, scope = 'full', executedNodeIds = [] } = body;

    // Verify user owns this workflow
    const user = await db.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      );
    }

    const workflow = await db.workflow.findUnique({
      where: { id: workflowId },
    });

    if (!workflow || workflow.userId !== user.id) {
      return NextResponse.json(
        { success: false, error: 'Workflow not found' },
        { status: 404 }
      );
    }

    const executionId = uuidv4();
    const startTime = new Date();
    const nodeResults: Record<string, any> = {};
    const nodeErrors: Record<string, string> = {};
    const nodeLogs: Record<string, string[]> = {};
    const triggerTaskIds: Record<string, string> = {};

    // Determine which nodes to execute
    const nodesToExecute = scope === 'full' 
      ? nodes
      : scope === 'single'
      ? nodes.filter(n => executedNodeIds.includes(n.id))
      : nodes.filter(n => executedNodeIds.includes(n.id));

    // Build dependency graph
    const nodeDependencies = buildDependencyGraph(nodes, edges);

    // Execute nodes with dependency resolution
    const executionOrder = topologicalSort(nodesToExecute.map(n => n.id), nodeDependencies);

    let status: 'success' | 'failed' | 'partial' = 'success';
    let partialFailures = false;

    for (const nodeId of executionOrder) {
      const node = nodes.find(n => n.id === nodeId);
      if (!node) continue;

      try {
        nodeLogs[nodeId] = [];
        
        // Log execution start
        nodeLogs[nodeId].push(`[${new Date().toISOString()}] Starting execution...`);

        // Execute node based on type
        const result = await executeNode(
          node,
          nodeResults,
          nodeLogs[nodeId]
        );

        if (result.success) {
          nodeResults[nodeId] = result.output;
          nodeLogs[nodeId].push(`[${new Date().toISOString()}] ✅ Completed successfully`);

          if (result.triggerTaskId) {
            triggerTaskIds[nodeId] = result.triggerTaskId;
          }
        } else {
          nodeErrors[nodeId] = result.error;
          nodeLogs[nodeId].push(`[${new Date().toISOString()}] ❌ Failed: ${result.error}`);
          partialFailures = true;
          status = 'partial';
        }
      } catch (error) {
        const errorMsg = error instanceof Error ? error.message : 'Unknown error';
        nodeErrors[nodeId] = errorMsg;
        nodeLogs[nodeId].push(`[${new Date().toISOString()}] ❌ Error: ${errorMsg}`);
        partialFailures = true;
        status = 'partial';
      }
    }

    if (!partialFailures && status === 'success') {
      status = 'success';
    } else if (partialFailures && Object.keys(nodeErrors).length === nodesToExecute.length) {
      status = 'failed';
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
      success: status !== 'failed',
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
    console.error('[v0] Workflow execution error:', error);
    return NextResponse.json(
      { success: false, error: 'Workflow execution failed' },
      { status: 500 }
    );
  }
}

// Build dependency graph from edges
function buildDependencyGraph(
  nodes: any[],
  edges: any[]
): Record<string, string[]> {
  const graph: Record<string, string[]> = {};
  
  nodes.forEach(node => {
    graph[node.id] = [];
  });

  edges.forEach(edge => {
    if (!graph[edge.target]) {
      graph[edge.target] = [];
    }
    graph[edge.target].push(edge.source);
  });

  return graph;
}

// Topological sort for execution order
function topologicalSort(nodeIds: string[], dependencies: Record<string, string[]>): string[] {
  const visited = new Set<string>();
  const result: string[] = [];

  function visit(nodeId: string) {
    if (visited.has(nodeId)) return;
    visited.add(nodeId);

    const deps = dependencies[nodeId] || [];
    deps.forEach(dep => visit(dep));

    result.push(nodeId);
  }

  nodeIds.forEach(nodeId => visit(nodeId));
  return result;
}

// Execute individual node
async function executeNode(
  node: any,
  previousResults: Record<string, any>,
  logs: string[]
): Promise<{ success: boolean; output?: any; error?: string; triggerTaskId?: string }> {
  const { data } = node;

  try {
    switch (data.nodeType) {
      case 'text':
        return { success: true, output: { text: data.content } };

      case 'image_upload':
        if (!data.uploadedImageUrl) {
          return { success: false, error: 'No image uploaded' };
        }
        return { success: true, output: { imageUrl: data.uploadedImageUrl } };

      case 'video_upload':
        if (!data.uploadedVideoUrl) {
          return { success: false, error: 'No video uploaded' };
        }
        return { success: true, output: { videoUrl: data.uploadedVideoUrl } };

      case 'llm':
        logs.push('Triggering Gemini API via Trigger.dev...');
        // In production, this would actually call Trigger.dev
        return {
          success: true,
          output: {
            text: 'LLM response (mock)',
          },
          triggerTaskId: `trigger-${Date.now()}`,
        };

      case 'crop_image':
        logs.push('Cropping image via FFmpeg...');
        // In production, trigger FFmpeg task
        return {
          success: true,
          output: { imageUrl: data.imageUrl },
          triggerTaskId: `trigger-${Date.now()}`,
        };

      case 'extract_frame':
        logs.push('Extracting frame from video...');
        // In production, trigger FFmpeg task
        return {
          success: true,
          output: { frameUrl: data.videoUrl },
          triggerTaskId: `trigger-${Date.now()}`,
        };

      default:
        return { success: false, error: `Unknown node type: ${data.nodeType}` };
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Execution error',
    };
  }
}
