-- Create tables for the workflow node editor

-- Workflows table
CREATE TABLE IF NOT EXISTS workflows (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  nodes JSONB NOT NULL DEFAULT '[]',
  edges JSONB NOT NULL DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Workflow executions table
CREATE TABLE IF NOT EXISTS workflow_executions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  workflow_id UUID REFERENCES workflows(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending', -- pending, running, completed, failed
  input_data JSONB,
  output_data JSONB,
  error_message TEXT,
  execution_logs JSONB DEFAULT '[]',
  started_at TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Node definitions table (for storing available node types)
CREATE TABLE IF NOT EXISTS node_definitions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  node_type TEXT NOT NULL UNIQUE,
  display_name TEXT NOT NULL,
  description TEXT,
  category TEXT,
  inputs JSONB NOT NULL DEFAULT '[]',
  outputs JSONB NOT NULL DEFAULT '[]',
  config_schema JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_workflows_user_id ON workflows(user_id);
CREATE INDEX idx_workflow_executions_user_id ON workflow_executions(user_id);
CREATE INDEX idx_workflow_executions_workflow_id ON workflow_executions(workflow_id);
CREATE INDEX idx_workflow_executions_status ON workflow_executions(status);

-- Seed node definitions
INSERT INTO node_definitions (node_type, display_name, description, category, inputs, outputs, config_schema)
VALUES
  (
    'image_upload',
    'Image Upload',
    'Upload or select an image from assets',
    'input',
    '[]'::jsonb,
    '[{"id": "image", "label": "Image", "type": "image"}]'::jsonb,
    '{"type": "object", "properties": {"url": {"type": "string"}}}'::jsonb
  ),
  (
    'text_input',
    'Text Input',
    'Input text prompt',
    'input',
    '[]'::jsonb,
    '[{"id": "text", "label": "Text", "type": "text"}]'::jsonb,
    '{"type": "object", "properties": {"text": {"type": "string"}}}'::jsonb
  ),
  (
    'llm_processor',
    'LLM Processor',
    'Process text/image with Gemini',
    'processing',
    '[{"id": "input", "label": "Input", "type": "any"}, {"id": "prompt", "label": "Prompt", "type": "text"}]'::jsonb,
    '[{"id": "output", "label": "Output", "type": "text"}]'::jsonb,
    '{"type": "object", "properties": {"model": {"type": "string", "default": "gemini-1.5-flash"}, "temperature": {"type": "number", "default": 0.7}}}'::jsonb
  ),
  (
    'image_generator',
    'Image Generator',
    'Generate image from text prompt',
    'generation',
    '[{"id": "prompt", "label": "Prompt", "type": "text"}]'::jsonb,
    '[{"id": "image", "label": "Image", "type": "image"}]'::jsonb,
    '{"type": "object", "properties": {"model": {"type": "string", "default": "gemini-1.5-flash"}}}'::jsonb
  ),
  (
    'output_display',
    'Output Display',
    'Display the final result',
    'output',
    '[{"id": "data", "label": "Data", "type": "any"}]'::jsonb,
    '[]'::jsonb,
    '{"type": "object", "properties": {}}'::jsonb
  )
ON CONFLICT (node_type) DO NOTHING;
