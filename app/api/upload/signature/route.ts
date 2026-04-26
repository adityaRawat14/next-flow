import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import crypto from 'crypto';

export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const key = process.env.NEXT_PUBLIC_TRANSLOADIT_KEY;
    const secret = process.env.TRANSLOADIT_SECRET;

    if (!key || !secret) {
      console.error("Missing Transloadit Keys");
      return NextResponse.json({ error: "Configuration error" }, { status: 500 });
    }

    const expires = new Date(Date.now() + 1 * 60 * 60 * 1000).toISOString();
    
    // Exact structure Transloadit expects
    const params = JSON.stringify({
      auth: { key, expires },
      steps: {
        optimize: {
          robot: "/optimize",
          use: ":original",
        },
      },
    });

    const signature = crypto
      .createHmac('sha384', secret)
      .update(Buffer.from(params, 'utf-8'))
      .digest('hex');
    return NextResponse.json({ params, signature });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}