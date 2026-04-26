import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const {
      imageUrl,
      xPercent = 0,
      yPercent = 0,
      widthPercent = 100,
      heightPercent = 100,
      nodeId,
    } = await req.json();

    if (!imageUrl) {
      return NextResponse.json(
        { error: "Missing image URL" },
        { status: 400 }
      );
    }

    // For now, return a mock cropped image
    // In production, you would use FFmpeg via Trigger.dev
    // to actually crop the image

    const mockCroppedUrl = `${imageUrl}?crop=true&x=${xPercent}&y=${yPercent}&w=${widthPercent}&h=${heightPercent}`;

    return NextResponse.json({
      data: {
        nodeId,
        url: mockCroppedUrl,
        xPercent,
        yPercent,
        widthPercent,
        heightPercent,
      },
    });
  } catch (error) {
    console.error("[v0] Crop Error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to crop image",
      },
      { status: 500 }
    );
  }
}
