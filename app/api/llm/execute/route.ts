export const runtime = "nodejs";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { model, systemPrompt, userMessage, nodeId } = await req.json();

    if (!model || !userMessage) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const generativeModel = genAI.getGenerativeModel({
      model: model || "gemini-2.0-flash",
      systemInstruction: systemPrompt,
    });

    const result = await generativeModel.generateContent(userMessage);
    const text =
      result.response.text() || "No response from model";

    return NextResponse.json({
      data: {
        nodeId,
        output: text,
        result: text,
        model,
      },
    });
  } catch (error) {
    console.error("[v0] LLM Error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Failed to execute LLM",
      },
      { status: 500 }
    );
  }
}
