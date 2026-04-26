import { NextRequest, NextResponse } from 'next/server';

const nodeDefinitions = [
  {
    id: 'node-image-upload',
    node_type: 'image_upload',
    display_name: 'Image Upload',
    description: 'Upload or select an image',
    category: 'input',
    inputs: [],
    outputs: [
      { id: 'image', label: 'Image', type: 'image' },
      { id: 'url', label: 'URL', type: 'text' },
    ],
    config_schema: {
      properties: {
        allowUrl: { type: 'boolean', default: true },
      },
    },
  },
  {
    id: 'node-text-input',
    node_type: 'text_input',
    display_name: 'Text Input',
    description: 'Input text or prompt',
    category: 'input',
    inputs: [],
    outputs: [
      { id: 'text', label: 'Text', type: 'text' },
    ],
    config_schema: {
      properties: {
        placeholder: { type: 'string', default: 'Enter text...' },
      },
    },
  },
  {
    id: 'node-llm-processor',
    node_type: 'llm_processor',
    display_name: 'LLM Processor',
    description: 'Process with Gemini',
    category: 'processing',
    inputs: [
      { id: 'input', label: 'Input', type: 'any' },
      { id: 'prompt', label: 'Prompt', type: 'text' },
    ],
    outputs: [
      { id: 'output', label: 'Output', type: 'text' },
    ],
    config_schema: {
      properties: {
        model: { type: 'string', default: 'gemini-1.5-flash' },
        temperature: { type: 'number', default: 0.7, min: 0, max: 1 },
        maxTokens: { type: 'number', default: 1024 },
      },
    },
  },
  {
    id: 'node-image-generator',
    node_type: 'image_generator',
    display_name: 'Image Generator',
    description: 'Generate image from prompt',
    category: 'generation',
    inputs: [
      { id: 'prompt', label: 'Prompt', type: 'text' },
    ],
    outputs: [
      { id: 'image', label: 'Image', type: 'image' },
      { id: 'url', label: 'URL', type: 'text' },
    ],
    config_schema: {
      properties: {
        model: { type: 'string', default: 'gemini-1.5-flash' },
        style: { type: 'string', default: 'realistic' },
      },
    },
  },
  {
    id: 'node-output-display',
    node_type: 'output_display',
    display_name: 'Output Display',
    description: 'Display results',
    category: 'output',
    inputs: [
      { id: 'data', label: 'Data', type: 'any' },
    ],
    outputs: [],
    config_schema: {},
  },
];

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      data: nodeDefinitions,
    });
  } catch (error) {
    console.error('[v0] Error fetching nodes:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch nodes' },
      { status: 500 }
    );
  }
}
