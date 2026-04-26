import { TriggerClient, eventTrigger } from 'trigger.dev';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Trigger client
export const client = new TriggerClient({
  id: 'nextflow',
  apiKey: process.env.TRIGGER_API_KEY,
  apiUrl: process.env.TRIGGER_API_URL || 'https://api.trigger.dev',
});

// Google Gemini initialization
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || '');

// LLM Execution Task
export const executeLLMTask = client.defineJob({
  id: 'execute-llm',
  name: 'Execute LLM Node',
  version: '1.0.0',
  trigger: eventTrigger({
    name: 'execute.llm',
  }),
  run: async (payload: {
    nodeId: string;
    model: string;
    systemPrompt?: string;
    userMessage: string;
    images?: string[];
  }) => {
    try {
      const { nodeId, model, systemPrompt, userMessage, images } = payload;

      const model_ = genAI.getGenerativeModel({ model });

      // Build multimodal content
      const content: any[] = [];

      if (systemPrompt) {
        content.push({
          role: 'user',
          parts: [{ text: `System: ${systemPrompt}` }],
        });
        content.push({
          role: 'model',
          parts: [{ text: 'Understood. I will follow these instructions.' }],
        });
      }

      // Add images if provided
      if (images && images.length > 0) {
        for (const imageUrl of images) {
          content.push({
            role: 'user',
            parts: [
              {
                inlineData: {
                  mimeType: 'image/jpeg',
                  data: await fetchImageAsBase64(imageUrl),
                },
              },
            ],
          });
        }
      }

      // Add user message
      content.push({
        role: 'user',
        parts: [{ text: userMessage }],
      });

      const result = await model_.generateContent({
        contents: content as any,
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        },
      });

      const response = result.response.text();

      return {
        success: true,
        nodeId,
        output: response,
        duration: Date.now() - Date.now(),
      };
    } catch (error) {
      return {
        success: false,
        nodeId: payload.nodeId,
        error: error instanceof Error ? error.message : 'LLM execution failed',
      };
    }
  },
});

// Crop Image Task (FFmpeg)
export const cropImageTask = client.defineJob({
  id: 'crop-image',
  name: 'Crop Image',
  version: '1.0.0',
  trigger: eventTrigger({
    name: 'crop.image',
  }),
  run: async (payload: {
    nodeId: string;
    imageUrl: string;
    xPercent: number;
    yPercent: number;
    widthPercent: number;
    heightPercent: number;
  }) => {
    try {
      const { nodeId, imageUrl, xPercent, yPercent, widthPercent, heightPercent } = payload;

      // In production, this would call FFmpeg via a backend service
      // For now, we'll return a mock response
      // In real implementation, use Sharp or FFmpeg child process

      return {
        success: true,
        nodeId,
        output: imageUrl, // Would be cropped image URL from Transloadit
        duration: 1500,
      };
    } catch (error) {
      return {
        success: false,
        nodeId: payload.nodeId,
        error: error instanceof Error ? error.message : 'Image crop failed',
      };
    }
  },
});

// Extract Frame Task (FFmpeg)
export const extractFrameTask = client.defineJob({
  id: 'extract-frame',
  name: 'Extract Frame from Video',
  version: '1.0.0',
  trigger: eventTrigger({
    name: 'extract.frame',
  }),
  run: async (payload: {
    nodeId: string;
    videoUrl: string;
    timestamp: string | number;
  }) => {
    try {
      const { nodeId, videoUrl, timestamp } = payload;

      // Convert timestamp to seconds if percentage
      let seconds = typeof timestamp === 'string' && timestamp.includes('%')
        ? Math.floor(parseFloat(timestamp) * 100) // Simplified calculation
        : typeof timestamp === 'string'
        ? parseInt(timestamp)
        : timestamp;

      // In production, this would use FFmpeg to extract frame
      // Return mock response for now

      return {
        success: true,
        nodeId,
        output: videoUrl.replace('.mp4', '-frame.jpg'), // Would be extracted frame URL
        duration: 2000,
      };
    } catch (error) {
      return {
        success: false,
        nodeId: payload.nodeId,
        error: error instanceof Error ? error.message : 'Frame extraction failed',
      };
    }
  },
});

// Helper function to fetch image as base64
async function fetchImageAsBase64(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();
    return Buffer.from(buffer).toString('base64');
  } catch (error) {
    throw new Error(`Failed to fetch image: ${url}`);
  }
}

// Helper to trigger workflow execution
export async function triggerWorkflowExecution(payload: {
  workflowId: string;
  nodes: any[];
  edges: any[];
}) {
  try {
    // This would integrate with your actual workflow execution logic
    // For now, we return a structure for future implementation
    return {
      success: true,
      executionId: `exec-${Date.now()}`,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Execution failed',
    };
  }
}
