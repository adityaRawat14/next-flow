import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';

// Initialize Transloadit
const Transloadit = require('transloadit');

const transloadit = new Transloadit({
  authKey: process.env.NEXT_PUBLIC_TRANSLOADIT_KEY,
  authSecret: process.env.TRANSLOADIT_SECRET,
});

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File;
    const fileType = formData.get('type') as string; // 'image' or 'video'

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate file type
    const validImageTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    const validVideoTypes = ['video/mp4', 'video/quicktime', 'video/webm', 'video/x-m4v'];

    const isValidImage = fileType === 'image' && validImageTypes.includes(file.type);
    const isValidVideo = fileType === 'video' && validVideoTypes.includes(file.type);

    if (!isValidImage && !isValidVideo) {
      return NextResponse.json(
        { success: false, error: 'Invalid file type' },
        { status: 400 }
      );
    }

    // Create Transloadit assembly
    const assembly = transloadit.addFile({
      fieldname: 'file',
      filename: file.name,
      mimetype: file.type,
      stream: file.stream(),
    });

    // Configure assembly steps based on file type
    if (fileType === 'image') {
      assembly.addStep('optimize', {
        use: ':original',
      });
    } else if (fileType === 'video') {
      assembly.addStep('encode', {
        use: ':original',
      });
    }

    // Execute assembly
    const result = await assembly.save();

    return NextResponse.json({
      success: true,
      data: {
        url: result.results.optimize?.[0]?.url || result.results.encode?.[0]?.url || '',
        filename: file.name,
        fileType,
      },
    });
  } catch (error) {
    console.error('[v0] Upload error:', error);
    return NextResponse.json(
      { success: false, error: 'Upload failed' },
      { status: 500 }
    );
  }
}
