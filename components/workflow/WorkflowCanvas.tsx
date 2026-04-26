'use client';

import React, { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  Connection,
  useNodesState,
  useEdgesState,
  Panel,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { BaseNode } from './BaseNode';
import { useWorkflowStore } from '@/lib/store';
import { WorkflowNode, WorkflowEdge } from '@/types/types';
import { v4 as uuidv4 } from 'uuid';
import { nodeDefinitions } from '@/lib/nodeDefinitions';

const nodeTypes = {
  default: BaseNode,
};

export const WorkflowCanvas: React.FC = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<WorkflowNode>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<WorkflowEdge>([]);
  
  const storeNodes = useWorkflowStore((state) => state.nodes);
  const storeEdges = useWorkflowStore((state) => state.edges);
  const setStoreNodes = useWorkflowStore((state) => state.setNodes);
  const setStoreEdges = useWorkflowStore((state) => state.setEdges);
  const addNode = useWorkflowStore((state) => state.addNode);
  const showNodeLibrary = useWorkflowStore((state) => state.showNodeLibrary);

  // Sync nodes and edges with store
  React.useEffect(() => {
    if (storeNodes.length > 0 && nodes.length === 0) {
      setNodes(storeNodes);
    }
  }, [storeNodes, nodes.length, setNodes]);

  React.useEffect(() => {
    if (storeEdges.length > 0 && edges.length === 0) {
      setEdges(storeEdges);
    }
  }, [storeEdges, edges.length, setEdges]);

  // Update store when local nodes/edges change
  React.useEffect(() => {
    setStoreNodes(nodes);
  }, [nodes, setStoreNodes]);

  React.useEffect(() => {
    setStoreEdges(edges);
  }, [edges, setStoreEdges]);

  const onConnect = useCallback(
    (connection: Connection) => {
      const edge: WorkflowEdge = {
        id: `edge-${connection.source}-${connection.target}`,
        source: connection.source || '',
        target: connection.target || '',
        sourceHandle: connection.sourceHandle,
        targetHandle: connection.targetHandle,
      };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges]
  );

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const nodeTypeId = e.dataTransfer.getData('nodeTypeId');
    
    if (!nodeTypeId) return;
    
    const definition = nodeDefinitions.find(def => def.id === nodeTypeId);
    if (!definition) return;

    const newNode: WorkflowNode = {
      id: uuidv4(),
      data: {
        label: definition.display_name,
        nodeType: definition.node_type,
        inputs: {},
        outputs: {},
        config: {},
        definition,
      },
      position: { x: e.clientX - 100, y: e.clientY - 50 },
    };

    setNodes((nds) => [...nds, newNode]);
  }, [nodeDefinitions, setNodes]);

  return (
    <div className="w-full h-full" onDragOver={handleDragOver} >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background color="#2a2a2a" gap={12} style={{ backgroundColor: 'rgb(13, 13, 13)' }} />
        <Controls style={{ background: 'rgb(25, 25, 25)', border: '1px solid rgb(51, 51, 51)', borderRadius: '8px' }} />
        <MiniMap 
          style={{ background: 'rgb(20, 20, 20)', border: '1px solid rgb(51, 51, 51)' }}
          maskColor="rgba(59, 130, 246, 0.1)"
        />
      </ReactFlow>
    </div>
  );
};
