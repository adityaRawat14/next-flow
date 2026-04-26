import { WorkflowNode, WorkflowEdge } from '../types/types';
import { v4 as uuidv4 } from 'uuid';

export interface WorkflowTemplate {
  id: string;
  name: string;
  description: string;
  category: 'image' | 'text' | 'video' | 'processing';
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  preview?: string;
}

// Helper to create nodes with proper IDs
const createNode = (label: string, nodeType: string, x: number, y: number, definition?: any): WorkflowNode => {
  return {
    id: uuidv4(),
    data: {
      label,
      nodeType,
      inputs: {},
      outputs: {},
      config: {},
      definition,
    },
    position: { x, y },
  };
};

// Helper to create edges
const createEdge = (source: string, target: string, sourceHandle?: string, targetHandle?: string): WorkflowEdge => {
  return {
    id: `edge-${source}-${target}`,
    source,
    target,
    sourceHandle,
    targetHandle,
  };
};

export const WORKFLOW_TEMPLATES: WorkflowTemplate[] = [
  {
    id: 'template-image-enhance',
    name: 'Image Enhancement',
    description: 'Upload and enhance images with AI',
    category: 'image',
    nodes: [
      createNode('Upload Image', 'image_upload', 50, 100),
      createNode('Enhance', 'llm_processor', 300, 100),
      createNode('Display', 'output_display', 550, 100),
    ],
    edges: [],
  },
  {
    id: 'template-text-analysis',
    name: 'Text Analysis',
    description: 'Analyze and process text with Gemini',
    category: 'text',
    nodes: [
      createNode('Text Input', 'text_input', 50, 100),
      createNode('Analyze', 'llm_processor', 300, 100),
      createNode('Results', 'output_display', 550, 100),
    ],
    edges: [],
  },
  {
    id: 'template-image-generation',
    name: 'Image Generation',
    description: 'Generate images from text descriptions',
    category: 'image',
    nodes: [
      createNode('Prompt', 'text_input', 50, 100),
      createNode('Generate', 'image_generator', 300, 100),
      createNode('Output', 'output_display', 550, 100),
    ],
    edges: [],
  },
  {
    id: 'template-vision-analysis',
    name: 'Vision Analysis',
    description: 'Analyze images with computer vision',
    category: 'image',
    nodes: [
      createNode('Image', 'image_upload', 50, 50),
      createNode('Analysis Prompt', 'text_input', 50, 200),
      createNode('Analyze', 'llm_processor', 300, 125),
      createNode('Results', 'output_display', 550, 125),
    ],
    edges: [],
  },
];

export const getTemplate = (templateId: string): WorkflowTemplate | undefined => {
  return WORKFLOW_TEMPLATES.find(t => t.id === templateId);
};

export const getTemplatesByCategory = (category: WorkflowTemplate['category']): WorkflowTemplate[] => {
  return WORKFLOW_TEMPLATES.filter(t => t.category === category);
};
