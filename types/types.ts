import { Node, Edge } from "@xyflow/react";

// Node Types
export type NodeType =
  | "text"
  | "image_upload"
  | "video_upload"
  | "llm"
  | "crop_image"
  | "extract_frame";
export type NodeCategory = "text" | "image" | "video" | "llm" | "processing";
export interface OutputType {
  id: string;
  label?: string;
  produces?: NodeCategory;
}
export interface InputType {
  id: string;
  label?: string;
  accepts: NodeCategory[];
}
export interface BaseNodeData extends Record<string, unknown> {
  label?: string;
  nodeType: NodeType;

  definition: {
    category: NodeCategory;

    inputs: InputType[];

    outputs: OutputType[];
  };
}

// Text Node
export interface TextNodeData extends BaseNodeData {
  nodeType: "text";
  content: string;
  definition: {
    category: "text";
    outputs: [{ id: "text" }];
    inputs: [];
  };
}

// Image Upload Node
export interface ImageUploadNodeData extends BaseNodeData {
  nodeType: "image_upload";
  uploadedImageUrl?: string;
  uploadedImageFile?: {
    name: string;
    type: string;
    size: number;
  };
  definition: {
    category: "image";
    outputs: [{ id: "image" }];
    inputs: [];
  };
}

// Video Upload Node
export interface VideoUploadNodeData extends BaseNodeData {
  nodeType: "video_upload";
  uploadedVideoUrl?: string;
  uploadedVideoFile?: {
    name: string;
    type: string;
    size: number;
  };
  definition: {
    category: "video";
    inputs: [];

    outputs: [
      {
        id: "video";
        produces: "video";
      },
    ];
  };
}

// LLM Node
export interface LLMNodeData extends BaseNodeData {
  nodeType: "llm";
  model: string;
  systemPrompt?: string;
  userMessage?: string;
  images?: string[];
  result?: string;
  isExecuting?: boolean;
  definition: {
    category: "llm";
    inputs: [
      {
        id: "system";
        accepts: ["text", "llm"];
      },
      {
        id: "user";
        accepts: ["text", "llm"];
      },
      {
        id: "image";
        accepts: ["image"];
      },
    ];
    outputs: [{ id: "text" }];
  };
}

// Crop Image Node
export interface CropImageNodeData extends BaseNodeData {
  nodeType: "crop_image";
  imageUrl?: string;
  xPercent: number;
  yPercent: number;
  widthPercent: number;
  heightPercent: number;
  croppedImageUrl?: string;
  isExecuting?: boolean;
  definition: {
    category: "image";
    inputs: [
      {
        id: "image";
        accepts: ["image"];
      },
    ];
    outputs: [{ id: "image" }];
  };
}

// Extract Frame Node
export interface ExtractFrameNodeData extends BaseNodeData {
  nodeType: "extract_frame";
  videoUrl?: string;
  timestamp: string | number;
  extractedFrameUrl?: string;
  isExecuting?: boolean;
  definition: {
    category: "image";
    inputs: [
      {
        id: "video";
        accepts: ["video"];
      },
    ];
    outputs: [{ id: "image" }];
  };
}

export type NodeData =
  | TextNodeData
  | ImageUploadNodeData
  | VideoUploadNodeData
  | LLMNodeData
  | CropImageNodeData
  | ExtractFrameNodeData;

export type WorkflowNode = Node<NodeData> ;

export interface WorkflowEdge extends Edge {}

// Execution History Types
export type ExecutionStatus = "success" | "failed" | "running" | "partial";
export type ExecutionScope = "full" | "partial" | "single";

export interface NodeExecutionResult {
  status: "success" | "failed";
  output?: any;
  error?: string;
  startTime: Date;
  endTime: Date;
  duration: number;
  inputs: Record<string, any>;
  logs: string[];
}

export interface ExecutionHistoryEntry {
  id: string;
  workflowId: string;
  userId: string;
  status: ExecutionStatus;
  scope: ExecutionScope;
  executedNodeIds: string[];
  nodeResults: Record<string, NodeExecutionResult>;
  nodeErrors: Record<string, string>;
  nodeLogs: Record<string, string[]>;
  startTime: Date;
  endTime?: Date;
  duration?: number;
  triggerTaskIds?: Record<string, string>;
  createdAt: Date;
}

// Trigger.dev Task Types
export interface TriggerTaskPayload {
  nodeId: string;
  nodeType: NodeType;
  inputs: Record<string, any>;
  config: Record<string, any>;
}

export interface TriggerTaskResult {
  nodeId: string;
  status: "success" | "failed";
  output?: any;
  error?: string;
  taskId: string;
  duration: number;
}

// Workflow Types
export interface Workflow {
  id: string;
  userId: string;
  name: string;
  description?: string;
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  createdAt: Date;
  updatedAt: Date;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface ExecutionResponse {
  executionId: string;
  status: ExecutionStatus;
  results: Record<string, NodeExecutionResult>;
  errors?: Record<string, string>;
  duration: number;
  logs: Array<{
    nodeId: string;
    timestamp: string;
    message: string;
    level: "info" | "warning" | "error" | "success";
  }>;
}
