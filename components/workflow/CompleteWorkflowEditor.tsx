"use client";

import React, { useCallback, useEffect, useState } from "react";
import {
  ReactFlow,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  Connection,
  Node,
  Edge,
  NodeChange,
  EdgeChange,
  Background,
  Controls,
  MiniMap,
  useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  Save,
  Play,
  Trash2,
  Loader,
  AlertCircle,
  Plus,
} from "lucide-react";
import { TextNode } from "./nodes/TextNode";
import { ImageUploadNode } from "./nodes/ImageUploadNode";
import { VideoUploadNode } from "./nodes/VideoUploadNode";
import { LLMNode } from "./nodes/LLMNode";
import { CropImageNode } from "./nodes/CropImageNode";
import { ExtractFrameNode } from "./nodes/ExtractFrameNode";
import { LeftSidebar } from "./sidebars/LeftSidebar";
import { RightSidebar } from "./sidebars/RightSidebar";
import { useWorkflowStore } from "@/lib/store";
import { WorkflowNode } from "@/lib/types";
import { WorkflowEdge } from "@/types/types";

const nodeTypes = {
  text: TextNode,
  imageUpload: ImageUploadNode,
  videoUpload: VideoUploadNode,
  llm: LLMNode,
  cropImage: CropImageNode,
  extractFrame: ExtractFrameNode,
};

interface WorkflowEditorProps {
  workflowId: string;
  workflowName: string ;
  workflowDescription?: string;
  initialNodes?: WorkflowNode[];
  initialEdges?: WorkflowEdge[];
}

export function CompleteWorkflowEditor({
  workflowId,
  workflowName,
  workflowDescription,
  initialNodes = [],
  initialEdges = [],
}: WorkflowEditorProps) {
  const { getNodes, setNodes, getEdges, setEdges } = useReactFlow();
  
  const setNodesStore = useWorkflowStore((s) => s.setNodes);
const setEdgesStore = useWorkflowStore((s) => s.setEdges);
const setWorkflowIdStore = useWorkflowStore((s) => s.setWorkflowId);
const setWorkflowNameStore = useWorkflowStore((s) => s.setWorkflowName);
const setWorkflowDescriptionStore = useWorkflowStore((s) => s.setWorkflowDescription);

  const [nodes, setNodesState] = useState<WorkflowNode[]>(initialNodes);
  const [edges, setEdgesState] = useState<Edge[]>(initialEdges);
  const [selectedNodes, setSelectedNodes] = useState<string[]>([]);
  const [isSaving, setIsSaving] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionStatus, setExecutionStatus] = useState<string | null>(null);
  const [showRightSidebar, setShowRightSidebar] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Update store
 useEffect(() => {
  setNodesStore(nodes);
  setEdgesStore(edges);
  setWorkflowIdStore(workflowId);
  setWorkflowNameStore(workflowName);
  setWorkflowDescriptionStore(workflowDescription || "");
}, [nodes, edges, workflowId, workflowName, workflowDescription]);

  // Handle node changes
  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      const updatedNodes = applyNodeChanges(changes, nodes);
      //@ts-ignore
      setNodesState(updatedNodes);
    },
    [nodes]
  );

  // Handle edge changes
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      const updatedEdges = applyEdgeChanges(changes, edges);
      setEdgesState(updatedEdges);
    },
    [edges]
  );

  // Handle new connections
  const onConnect = useCallback(
    (connection: Connection) => {
      const newEdge = addEdge(
        {
          ...connection,
          animated: true,
          style: { stroke: "#a78bfa", strokeWidth: 2 },
        },
        edges
      );
      setEdgesState(newEdge);
    },
    [edges]
  );

  // Add new node
  const addNode = useCallback(
    (nodeType: string) => {
      const newNode: Node = {
        id: `${nodeType}-${Date.now()}`,
        data: { label: `${nodeType} Node`, nodeType },
        position: {
          x: Math.random() * 500,
          y: Math.random() * 500,
        },
        type: nodeType,
      };
            //@ts-ignore

      setNodesState([...nodes, newNode]);
      setError(null);
    },
    [nodes]
  );

  // Delete selected nodes
  const deleteSelectedNodes = useCallback(() => {
    const nodesToDelete = new Set(selectedNodes);
    const filteredNodes = nodes.filter((n) => !nodesToDelete.has(n.id));
    const filteredEdges = edges.filter(
      (e) => !nodesToDelete.has(e.source) && !nodesToDelete.has(e.target)
    );
    setNodesState(filteredNodes);
    setEdgesState(filteredEdges);
    setSelectedNodes([]);
  }, [nodes, edges, selectedNodes]);

  // Save workflow
  const saveWorkflow = useCallback(async () => {
    setIsSaving(true);
    setError(null);

    try {
      const response = await fetch(`/api/workflows/${workflowId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: workflowName,
          description: workflowDescription,
          nodes,
          edges,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save workflow");
      }

      setExecutionStatus("Workflow saved successfully");
      setTimeout(() => setExecutionStatus(null), 3000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to save workflow"
      );
    } finally {
      setIsSaving(false);
    }
  }, [workflowId, workflowName, workflowDescription, nodes, edges]);

  // Execute workflow
  const clearLogs = useWorkflowStore((s) => s.clearLogs);
const addLog = useWorkflowStore((s) => s.addLog);

  const executeWorkflow = useCallback(async () => {
    if (nodes.length === 0) {
      setError("No nodes to execute");
      return;
    }

    setIsExecuting(true);
    setError(null);
    setExecutionStatus("Executing workflow...");

    try {
      const response = await fetch("/api/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          workflowId,
          nodes,
          edges,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Execution failed");
      }

      setExecutionStatus("Workflow executed successfully");
      console.log("[v0] Execution results:", data);

      // Add to execution history
      if (data.data?.logs) {
        clearLogs();
        data.data.logs.forEach((log: any) => {
          addLog(log);
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Execution failed");
      setExecutionStatus(null);
    } finally {
      setIsExecuting(false);
    }
}, [nodes, edges, workflowId, clearLogs, addLog]);
  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        saveWorkflow();
      }
      if (e.key === "Delete" || e.key === "Backspace") {
        if (selectedNodes.length > 0) {
          deleteSelectedNodes();
        }
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        executeWorkflow();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [saveWorkflow, deleteSelectedNodes, executeWorkflow, selectedNodes]);

  return (
    <div className="h-screen w-full flex flex-grow bg-[#101010] text-white">
    
        <LeftSidebar onAddNode={addNode}/>
     

      {/* Main Canvas */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b border-[#333] bg-[#1a1a1a] px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">{workflowName}</h1>
            {workflowDescription && (
              <p className="text-xs text-gray-400">{workflowDescription}</p>
            )}
          </div>

          <div className="flex items-center gap-3">
          

            {error && (
              <div className="flex items-center gap-2 px-3 py-2 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-xs">
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}

            {executionStatus && (
              <div className="text-xs text-green-400">{executionStatus}</div>
            )}

            <button
              onClick={saveWorkflow}
              disabled={isSaving}
              className="p-2 hover:bg-[#333] rounded transition disabled:opacity-50 flex items-center gap-2"
              title="Save (Ctrl+S)"
            >
              {isSaving ? (
                <Loader size={18} className="animate-spin" />
              ) : (
                <Save size={18} />
              )}
            </button>

            <button
              onClick={executeWorkflow}
              disabled={isExecuting || nodes.length === 0}
              className="p-2 hover:bg-green-500/20 rounded transition disabled:opacity-50 flex items-center gap-2"
              title="Execute (Ctrl+Enter)"
            >
              {isExecuting ? (
                <Loader size={18} className="animate-spin" />
              ) : (
                <Play size={18} />
              )}
            </button>

            {selectedNodes.length > 0 && (
              <button
                onClick={deleteSelectedNodes}
                className="p-2 hover:bg-red-500/20 rounded transition flex items-center gap-2"
                title="Delete selected (Delete)"
              >
                <Trash2 size={18} />
              </button>
            )}
          </div>
        </header>


        {/* Canvas Area */}
        <div className="flex-1 relative">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView
          >
            <Background
              color="#222"
              gap={16}
              size={0.5}
              style={{
                backgroundColor: "#101010",
              }}
            />
            <Controls position="bottom-left" />
          
          </ReactFlow>
        </div>

        {/* Footer */}
        <footer className="border-t border-[#333] bg-[#1a1a1a] px-6 py-3 text-xs text-gray-400 flex justify-between">
          <div>
            <span>{nodes.length} nodes</span>
            <span className="mx-4">·</span>
            <span>{edges.length} connections</span>
            {selectedNodes.length > 0 && (
              <>
                <span className="mx-4">·</span>
                <span>{selectedNodes.length} selected</span>
              </>
            )}
          </div>
          <div className="text-gray-600 text-xs">
            Ctrl+S to save · Ctrl+Enter to execute · Delete to remove selected
          </div>
        </footer>
      </div>

      {/* Right Sidebar */}
      {showRightSidebar && (
        <RightSidebar onCollapse={() => setShowRightSidebar(false)} />
      )}
    </div>
  );
}
