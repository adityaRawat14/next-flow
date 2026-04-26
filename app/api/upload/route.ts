import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
// Use namespace import instead of default import
import * as TransloaditLib from 'transloadit';

// Transloadit usually exports the constructor as a property or as the module itself
// This handles both cases:
const Transloadit = (TransloaditLib as any).default || TransloaditLib;
const transloadit = new Transloadit({
  authKey: process.env.NEXT_PUBLIC_TRANSLOADIT_KEY!,
  authSecret: process.env.TRANSLOADIT_SECRET!,
});

export async function POST(request: NextRequest) {
  console.log("request commitnfjsdfkl")
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }
console.log("user",userId)
    const formData = await request.formData();
    const file = formData.get("file") as File;
    const fileType = formData.get("type") as string;

    if (!file) {
      return NextResponse.json(
        { success: false, error: "No file provided" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const steps =
      fileType === "image"
        ? {
            optimize: {
              robot: "/optimize",
              use: ":original",
            },
          }
        : {
            encode: {
              robot: "/video/encode",
              use: ":original",
            },
          };

    const result = await transloadit.createAssembly({
      steps,
      files: {
        file: buffer,
      },
    });

    const uploadedUrl =
      result.results?.optimize?.[0]?.ssl_url ||
      result.results?.encode?.[0]?.ssl_url;

    return NextResponse.json({
      success: true,
      data: {
        url: uploadedUrl,
        filename: file.name,
        fileType,
      },
    });
  } catch (error) {
    console.error("[upload error]", error);

    return NextResponse.json(
      { success: false, error: "Upload failed" },
      { status: 500 }
    );
  }
}