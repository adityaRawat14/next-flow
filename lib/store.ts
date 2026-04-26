import { create } from 'zustand';
import { WorkflowNode, WorkflowEdge, ExecutionHistoryEntry, Workflow } from '@/types/types';
interface WorkflowState {
  // Workflow data
  currentWorkflow: Workflow | null;
  workflowId: string | null;
  workflowName: string;
  workflowDescription: string;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];

  // UI state
    setCurrentWorkflow: (workflow: Workflow | null) => void;
  selectedNodeId: string | null;
  selectedNodeIds: string[];
  setSelectedNodeId: (nodeId: string | null) => void;
  isExecuting: boolean;
  executionLogs: Array<{
    nodeId: string;
    timestamp: string;
    message: string;
    level: 'info' | 'warning' | 'error' | 'success';
  }>;
  executionResults: Record<string, any>;
  executionHistory: ExecutionHistoryEntry[];

  // Sidebar state
  showNodeLibrary: boolean;
  showHistory: boolean;

  // Actions
  setWorkflowId: (id: string) => void;
  setWorkflowName: (name: string) => void;
  setWorkflowDescription: (description: string) => void;
  setNodes: (nodes: WorkflowNode[]) => void;
  setEdges: (edges: WorkflowEdge[]) => void;
  addNode: (node: WorkflowNode) => void;
  updateNode: (nodeId: string, data: any) => void;
  deleteNode: (nodeId: string) => void;
  addEdge: (edge: WorkflowEdge) => void;
  deleteEdge: (edgeId: string) => void;
  selectNode: (nodeId: string, multiselect?: boolean) => void;
  deselectNode: (nodeId: string) => void;
  clearSelection: () => void;
  setIsExecuting: (executing: boolean) => void;
  addLog: (log: any) => void;
  clearLogs: () => void;
  setExecutionResults: (results: Record<string, any>) => void;
  addExecutionHistory: (entry: ExecutionHistoryEntry) => void;
  setExecutionHistory: (history: ExecutionHistoryEntry[]) => void;
  setShowNodeLibrary: (show: boolean) => void;
  setShowHistory: (show: boolean) => void;
  resetWorkflow: () => void;
}

const initialState = {
   currentWorkflow: null,
  workflowId: null,
  workflowName: 'Untitled Workflow',
  workflowDescription: '',
  nodes: [],
  edges: [],
  selectedNodeId: null,
  selectedNodeIds: [],
  isExecuting: false,
  executionLogs: [],
  executionResults: {},
  executionHistory: [],
  showNodeLibrary: true,
  showHistory: false,
};

export const useWorkflowStore = create<WorkflowState>((set) => ({
  ...initialState,
  setCurrentWorkflow: (workflow: Workflow | null) =>
    set({
      currentWorkflow: workflow,
      workflowId: workflow?.id || null,
      workflowName: workflow?.name || 'Untitled Workflow',
      workflowDescription: workflow?.description || '',
      nodes: workflow?.nodes || [],
      edges: workflow?.edges || [],
    }),
  setWorkflowId: (id: string) => set({ workflowId: id }),
  setWorkflowName: (name: string) => set({ workflowName: name }),
  setWorkflowDescription: (description: string) => set({ workflowDescription: description }),
 setSelectedNodeId: (id: string | null) =>
  set({
    selectedNodeId: id,
    selectedNodeIds: id ? [id] : [],
  }),
  setNodes: (nodes: WorkflowNode[]) => set({ nodes }),
  setEdges: (edges: WorkflowEdge[]) => set({ edges }),

  addNode: (node: WorkflowNode) =>
    set((state) => ({
      nodes: [...state.nodes, node],
    })),

  updateNode: (nodeId: string, data: any) =>
    set((state) => ({
      nodes: state.nodes.map((node) =>
        node.id === nodeId ? { ...node, data: { ...node.data, ...data } } : node
      ),
    })),

  deleteNode: (nodeId: string) =>
    set((state) => ({
      nodes: state.nodes.filter((n) => n.id !== nodeId),
      edges: state.edges.filter((e) => e.source !== nodeId && e.target !== nodeId),
      selectedNodeIds: state.selectedNodeIds.filter((id) => id !== nodeId),
      selectedNodeId: state.selectedNodeId === nodeId ? null : state.selectedNodeId,
    })),

  addEdge: (edge: WorkflowEdge) =>
    set((state) => ({
      edges: [...state.edges, edge],
    })),

  deleteEdge: (edgeId: string) =>
    set((state) => ({
      edges: state.edges.filter((e) => e.id !== edgeId),
    })),

  selectNode: (nodeId: string, multiselect = false) =>
    set((state) => ({
      selectedNodeId: multiselect ? state.selectedNodeId : nodeId,
      selectedNodeIds: multiselect
        ? state.selectedNodeIds.includes(nodeId)
          ? state.selectedNodeIds.filter((id) => id !== nodeId)
          : [...state.selectedNodeIds, nodeId]
        : [nodeId],
    })),

  deselectNode: (nodeId: string) =>
    set((state) => ({
      selectedNodeIds: state.selectedNodeIds.filter((id) => id !== nodeId),
      selectedNodeId: state.selectedNodeId === nodeId ? null : state.selectedNodeId,
    })),

  clearSelection: () =>
    set({
      selectedNodeId: null,
      selectedNodeIds: [],
    }),

  setIsExecuting: (executing: boolean) => set({ isExecuting: executing }),

  addLog: (log: any) =>
    set((state) => ({
      executionLogs: [...state.executionLogs, log],
    })),

  clearLogs: () => set({ executionLogs: [] }),

  setExecutionResults: (results: Record<string, any>) =>
    set({ executionResults: results }),

  addExecutionHistory: (entry: ExecutionHistoryEntry) =>
    set((state) => ({
      executionHistory: [entry, ...state.executionHistory],
    })),

  setExecutionHistory: (history: ExecutionHistoryEntry[]) =>
    set({ executionHistory: history }),

  setShowNodeLibrary: (show: boolean) => set({ showNodeLibrary: show }),
  setShowHistory: (show: boolean) => set({ showHistory: show }),

  resetWorkflow: () => set(initialState),
}));
