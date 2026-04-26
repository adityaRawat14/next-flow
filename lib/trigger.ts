import { task } from "@trigger.dev/sdk";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GOOGLE_API_KEY!
);

/*
|--------------------------------------------------------------------------
| LLM TASK
|--------------------------------------------------------------------------
*/

export const executeLLMTask = task({
  id: "execute-llm",

  run: async (payload: {
    nodeId: string;
    model: string;
    systemPrompt?: string;
    userMessage: string;
    images?: string[];
  }) => {
    const model = genAI.getGenerativeModel({
      model: payload.model,
      systemInstruction: payload.systemPrompt,
    });

    const content: any[] = [];

    if (payload.images?.length) {
      for (const imageUrl of payload.images) {
        const base64 = await fetchImageAsBase64(imageUrl);

        content.push({
          inlineData: {
            mimeType: "image/jpeg",
            data: base64,
          },
        });
      }
    }

    content.push(payload.userMessage);

    const result = await model.generateContent(content);

    return {
      success: true,
      nodeId: payload.nodeId,
      output: result.response.text(),
    };
  },
});

/*
|--------------------------------------------------------------------------
| CROP IMAGE TASK
|--------------------------------------------------------------------------
*/

export const cropImageTask = task({
  id: "crop-image",

  run: async (payload: {
    nodeId: string;
    imageUrl: string;
    xPercent: number;
    yPercent: number;
    widthPercent: number;
    heightPercent: number;
  }) => {
    // Later replace with FFmpeg or Sharp crop

    return {
      success: true,
      nodeId: payload.nodeId,
      output: payload.imageUrl,
    };
  },
});

/*
|--------------------------------------------------------------------------
| EXTRACT FRAME TASK
|--------------------------------------------------------------------------
*/

export const extractFrameTask = task({
  id: "extract-frame",

  run: async (payload: {
    nodeId: string;
    videoUrl: string;
    timestamp: string | number;
  }) => {
    // Later replace with FFmpeg extraction

    return {
      success: true,
      nodeId: payload.nodeId,
      output: payload.videoUrl.replace(".mp4", "-frame.jpg"),
    };
  },
});

/*
|--------------------------------------------------------------------------
| UTIL
|--------------------------------------------------------------------------
*/

async function fetchImageAsBase64(url: string) {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();

  return Buffer.from(buffer).toString("base64");
}