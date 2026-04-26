import { NodeCategory } from "@/types/types";

export const nodeDefinitions = {
  text: {
    category: "text" as NodeCategory,
    inputs: [],
    outputs: [{ id: "text" }],
  },

  imageUpload: {
    category: "image" as NodeCategory,
    inputs: [],
    outputs: [{ id: "image" }],
  },

  videoUpload: {
    category: "video" as NodeCategory,
    inputs: [],
    outputs: [{ id: "video" }],
  },

  cropImage: {
    category: "image" as NodeCategory,
    inputs: [{ id: "image", accepts: ["image"] }],
    outputs: [{ id: "image" }],
  },

  extractFrame: {
    category: "image" as NodeCategory,
    inputs: [{ id: "video", accepts: ["video"] }],
    outputs: [{ id: "image" }],
  },

  llm: {
    category: "llm" as NodeCategory,
    inputs: [
      { id: "system", accepts: ["text", "llm"] },
      { id: "user", accepts: ["text", "llm"] },
      { id: "image", accepts: ["image"] },
    ],
    outputs: [{ id: "text" }],
  },
} as const;