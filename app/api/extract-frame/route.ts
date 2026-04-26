import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { videoUrl, timestamp = "0", nodeId } = await req.json();

    if (!videoUrl) {
      return NextResponse.json(
        { error: "Missing video URL" },
        { status: 400 }
      );
    }

    // For now, return a mock extracted frame
    // In production, you would use FFmpeg via Trigger.dev
    // to actually extract a frame from the video

    const mockFrameUrl = `${videoUrl}?frame=true&timestamp=${timestamp}`;

    return NextResponse.json({
      data: {
        nodeId,
        url: mockFrameUrl,
        timestamp,
      },
    });
  } catch (error) {
    console.error("[v0] Extract Frame Error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to extract frame",
      },
      { status: 500 }
    );
  }
}
