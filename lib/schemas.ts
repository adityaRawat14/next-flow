import { z } from 'zod';

// Node type schemas
export const TextNodeSchema = z.object({
  label: z.string(),
  nodeType: z.literal('text'),
  content: z.string().default(''),
});

export const ImageUploadNodeSchema = z.object({
  label: z.string(),
  nodeType: z.literal('image_upload'),
  uploadedImageUrl: z.string().optional(),
  uploadedImageFile: z.object({
    name: z.string(),
    type: z.string(),
    size: z.number(),
  }).optional(),
});

export const VideoUploadNodeSchema = z.object({
  label: z.string(),
  nodeType: z.literal('video_upload'),
  uploadedVideoUrl: z.string().optional(),
  uploadedVideoFile: z.object({
    name: z.string(),
    type: z.string(),
    size: z.number(),
  }).optional(),
});

export const LLMNodeSchema = z.object({
  label: z.string(),
  nodeType: z.literal('llm'),
  model: z.string().default('gemini-1.5-flash'),
  systemPrompt: z.string().optional(),
  userMessage: z.string().optional(),
  images: z.array(z.string()).optional(),
  result: z.string().optional(),
  isExecuting: z.boolean().optional(),
});

export const CropImageNodeSchema = z.object({
  label: z.string(),
  nodeType: z.literal('crop_image'),
  imageUrl: z.string().optional(),
  xPercent: z.number().min(0).max(100).default(0),
  yPercent: z.number().min(0).max(100).default(0),
  widthPercent: z.number().min(0).max(100).default(100),
  heightPercent: z.number().min(0).max(100).default(100),
  croppedImageUrl: z.string().optional(),
  isExecuting: z.boolean().optional(),
});

export const ExtractFrameNodeSchema = z.object({
  label: z.string(),
  nodeType: z.literal('extract_frame'),
  videoUrl: z.string().optional(),
  timestamp: z.union([z.string(), z.number()]).default(0),
  extractedFrameUrl: z.string().optional(),
  isExecuting: z.boolean().optional(),
});

// Union schema for all node types
export const NodeDataSchema = z.union([
  TextNodeSchema,
  ImageUploadNodeSchema,
  VideoUploadNodeSchema,
  LLMNodeSchema,
  CropImageNodeSchema,
  ExtractFrameNodeSchema,
]);

// Workflow schemas
export const CreateWorkflowSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().max(1000).optional(),
  nodes: z.array(z.any()).default([]),
  edges: z.array(z.any()).default([]),
});

export const UpdateWorkflowSchema = z.object({
  name: z.string().min(1).max(255).optional(),
  description: z.string().max(1000).optional(),
  nodes: z.array(z.any()).optional(),
  edges: z.array(z.any()).optional(),
});

// Execution schemas
export const ExecuteWorkflowSchema = z.object({
  workflowId: z.string(),
  nodes: z.array(z.any()),
  edges: z.array(z.any()),
  scope: z.enum(['full', 'partial', 'single']).default('full'),
  executedNodeIds: z.array(z.string()).optional(),
});

// File upload schemas
export const FileUploadSchema = z.object({
  fileName: z.string(),
  fileType: z.string(),
  fileSize: z.number(),
  fileContent: z.string(), // base64
});

export type TextNodeData = z.infer<typeof TextNodeSchema>;
export type ImageUploadNodeData = z.infer<typeof ImageUploadNodeSchema>;
export type VideoUploadNodeData = z.infer<typeof VideoUploadNodeSchema>;
export type LLMNodeData = z.infer<typeof LLMNodeSchema>;
export type CropImageNodeData = z.infer<typeof CropImageNodeSchema>;
export type ExtractFrameNodeData = z.infer<typeof ExtractFrameNodeSchema>;
export type CreateWorkflowInput = z.infer<typeof CreateWorkflowSchema>;
export type UpdateWorkflowInput = z.infer<typeof UpdateWorkflowSchema>;
export type ExecuteWorkflowInput = z.infer<typeof ExecuteWorkflowSchema>;
