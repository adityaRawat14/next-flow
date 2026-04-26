import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import {  db } from '@/lib/db';
import { CreateWorkflowSchema } from '@/lib/schemas';

// GET all workflows for authenticated user
export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth();
      
    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const user = await db.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) {
      return NextResponse.json({
        success: true,
        data: [],
      });
    }

    const workflows = await db.workflow.findMany({
      where: { userId: user.id },
      include: { nodes: true, edges: true },
      orderBy: { updatedAt: 'desc' },
    });

    return NextResponse.json({
      success: true,
      data: workflows,
    });
  } catch (error) {
    console.error('[v0] Error fetching workflows:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch workflows' },
      { status: 500 }
    );
  }
}

// POST create new workflow
export async function POST(request: NextRequest) {
  console.log("request reaching here")
  try {
    const { userId } = await auth();
    console.log("thi sis user si ",userId)
    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const validated = CreateWorkflowSchema.parse(body);
    // const validated = body;

    // Get or create user
    
    let user = await db.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user) {
      user = await db.user.create({
        data: { 
          clerkId: userId,
          email: userId,
        },
      });
    }

    // Create workflow with nodes and edges
    const workflow = await db.workflow.create({
      data: {
        name: validated.name,
        description: validated.description,
        userId: user.id,
        data: {
          nodes: validated.nodes,
          edges: validated.edges,
        },
        nodes: {
          create: validated.nodes.map((node: any) => ({
            type: node.data?.nodeType || 'text',
            data: node.data || {},
            position: node.position || { x: 0, y: 0 },
          })),
        },
        edges: {
          create: validated.edges.map((edge: any) => ({
            source: edge.source,
            target: edge.target,
            sourceHandle: edge.sourceHandle,
            targetHandle: edge.targetHandle,
          })),
        },
      },
      include: { nodes: true, edges: true },
    });

    return NextResponse.json({
      success: true,
      data: workflow,
    });
  } catch (error) {
    console.log("this is the error :",error)
    console.error(' console.error("this error occuring in creating a new workflow", error);:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create workflow' },
      { status: 500 }
    );
  }
}
