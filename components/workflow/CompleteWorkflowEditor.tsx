"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});
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
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  Save,
  Play,
  Trash2,
  Loader,
  AlertCircle,
  Plus,
  ChevronDown,
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
import { NodeType, WorkflowNode } from "@/types/types";
import { WorkflowEdge } from "@/types/types";
const NODE_DEFINITIONS = {
  text: {
    category: "text",
    outputs: [{ id: "text", produces: "text" }],
  },

  imageUpload: {
    category: "image",
    outputs: [{ id: "image", produces: "image" }],
  },

  videoUpload: {
    category: "video",
    outputs: [{ id: "video", produces: "video" }],
  },

  cropImage: {
    category: "image",
    inputs: [{ id: "image", accepts: ["image"] }],
    outputs: [{ id: "image", produces: "image" }],
  },

  extractFrame: {
    category: "image",
    inputs: [{ id: "video", accepts: ["video"] }],
    outputs: [{ id: "image", produces: "image" }],
  },

  llm: {
    category: "llm",
    inputs: [
      { id: "system", accepts: ["text", "llm"] },
      { id: "user", accepts: ["text", "llm"] },
      { id: "image", accepts: ["image"] },
    ],
    outputs: [{ id: "text", produces: "text" }],
  },
};
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
  const addNode1 = useCallback(
    (nodeType: string) => {
      const newNode: Node = {
        id: `${nodeType}-${Date.now()}`,
        data: { label: `${nodeType} Node`, nodeType },
        
        position: {
          x: Math.random() * 150,
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

  const addNode = useCallback(
  (nodeType: string) => {
    const nodeDefinitions = {
      text: {
        category: "text",
        inputs: [],
        outputs: [{ id: "text" }],
      },

      imageUpload: {
        category: "image",
        inputs: [],
        outputs: [{ id: "image" }],
      },

      videoUpload: {
        category: "video",
        inputs: [],
        outputs: [{ id: "video" }],
      },

      cropImage: {
        category: "image",
        inputs: [{ id: "image", accepts: ["image"] }],
        outputs: [{ id: "image" }],
      },

      extractFrame: {
        category: "image",
        inputs: [{ id: "video", accepts: ["video"] }],
        outputs: [{ id: "image" }],
      },

      llm: {
        category: "llm",
        inputs: [
          { id: "system", accepts: ["text", "llm"] },
          { id: "user", accepts: ["text", "llm"] },
          { id: "image", accepts: ["image"] },
        ],
        outputs: [{ id: "text" }],
      },
    };

    const definition = nodeDefinitions[nodeType];

    if (!definition) return;

    const newNode: WorkflowNode = {
      id: `${nodeType}-${Date.now()}`,
      type: nodeType,

      position: {
        x: Math.random() * 500,
        y: Math.random() * 500,
      },

      data: {
        label: `${nodeType} Node`,
        nodeType,
        definition,
      },
    };

    setNodesState((nds) => [...nds, newNode]);
    setError(null);
  },
  []
);

  // Handle node selection
  const onSelectionChange = useCallback((changes: any) => {
    if (changes.nodes && changes.nodes.length > 0) {
      const selectedNodeIds = changes.nodes.map((node: any) => node.id);
      setSelectedNodes(selectedNodeIds);
    } else {
      setSelectedNodes([]);
    }
  }, []);

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


const [menuOpen, setMenuOpen] = useState(false);
const dropdownRef = React.useRef<HTMLDivElement>(null);

useEffect(() => {
  const handler = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      //@ts-ignore
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  document.addEventListener("mousedown", handler);
  return () => document.removeEventListener("mousedown", handler);
}, []);

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
    <div className={`${inter.className} h-screen w-full flex grow bg-[#101010] text-white`}>
        <LeftSidebar onAddNode={addNode}/>
     

      {/* Main Canvas */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
       <div className="px-4 py-2  bg-[#101010] flex items-center gap-4">

  {/* Workflow dropdown trigger */}
  <div ref={dropdownRef} className="relative z-30">

    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="text-xs px-4 py-3 rounded-md bg-[#1a1a1a]  transition flex items-center gap-2"
    >
      <span
  className={`text-white transition-transform duration-200 ${
    menuOpen ? "rotate-180" : "rotate-0"
  }`}
>
  <ChevronDown size={11} />
</span>
      <span className=" hover:bg-[#404040] px-1.5 py-1 transition rounded-md ">{workflowName}</span>
    </button>

    {/* POP dropdown */}
    {menuOpen && (
      <div className="absolute left-0 mt-2 w-56 bg-[#151515] hover:rounded-lg rounded-lg shadow-xl animate-in fade-in zoom-in-95 duration-150 z-50">

        {/* Save */}
        <button
          onClick={() => {
            saveWorkflow();
            setMenuOpen(false);
          }}
          className="w-full flex items-center gap-2 px-4 py-2 text-xs hover:bg-[#222]"
        >
          {isSaving ? (
            <Loader size={14} className="animate-spin" />
          ) : (
            <Save size={14} />
          )}
          Save workflow
        </button>

        {/* Execute */}
        <button
          onClick={() => {
            executeWorkflow();
            setMenuOpen(false);
          }}
          disabled={nodes.length === 0}
          className="w-full flex items-center gap-2 px-4 py-2 text-xs hover:bg-[#222]"
        >
          {isExecuting ? (
            <Loader size={14} className="animate-spin" />
          ) : (
            <Play size={14} />
          )}
          Run workflow
        </button>

        {/* Delete selected */}
        {selectedNodes.length > 0 && (
          <button
            onClick={() => {
              deleteSelectedNodes();
              setMenuOpen(false);
            }}
            className="w-full flex items-center gap-2 px-4 py-2 text-xs hover:bg-[#222] text-red-400"
          >
            <Trash2 size={14} />
            Delete selected nodes
          </button>
        )}

        {/* Divider */}
        <div className="border-t border-[#333] my-1" />

        {/* Description */}
        {workflowDescription && (
          <div className="px-4 py-2 text-[10px] text-gray-500">
            {workflowDescription}
          </div>
        )}

      </div>
    )}

  </div>

  {/* Status indicators */}
  {executionStatus && (
    <span className="text-xs text-green-400">
      {executionStatus}
    </span>
  )}

  {error && (
    <span className="text-xs text-red-400 flex items-center gap-1">
      <AlertCircle size={12} />
      {error}
    </span>
  )}

</div>


        {/* Canvas Area */}
        <div className="flex-1 relative">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onSelectionChange={onSelectionChange}
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
        <RightSidebar />
      )}
    </div>
  );
}