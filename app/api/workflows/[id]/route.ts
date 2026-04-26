export const runtime = "nodejs";
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { db } from '@/lib/db';
import { UpdateWorkflowSchema } from '@/lib/schemas';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; 
 
  console.log("workflow id:", id);

  if (!id) {
    return NextResponse.json(
      { success: false, error: "Missing workflow id" },
      { status: 400 }
    );
  }
  try {
    const { userId } = await auth();
    console.log(userId)
    console.log(id)
    if (!userId) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const workflow = await db.workflow.findUnique({
      where: { id :id },
      include: { nodes: true, edges: true },
    });

    if (!workflow) {
      return NextResponse.json(
        { success: false, error: 'Workflow not found' },
        { status: 404 }
      );
    }

    // Verify user owns this workflow

    const user = await db.user.findUnique({
      where: { clerkId: userId },
    });

    if (!user || workflow.userId !== user.id) {
      return NextResponse.json(
        { success: false, error: 'Forbidden' },
        { status: 403 }
      );
    }

    return NextResponse.json({
      success: true,
      data: workflow,
    });
  } catch (error) {
    console.error('[v0] Error fetching workflow:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch workflow' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      );
    }

    const body = await request.json();
    const validated = UpdateWorkflowSchema.parse(body);

    const workflow = await db.workflow.findUnique({
      where: { id: params.id },
    });

    if (!workflow || workflow.userId !== user.id) {
      return NextResponse.json(
        { success: false, error: 'Workflow not found or access denied' },
        { status: 404 }
      );
    }

    const updatedWorkflow = await db.workflow.update({
      where: { id: params.id },
      data: {
        name: validated.name || workflow.name,
        description: validated.description,
        data: validated.nodes || validated.edges ? {
          nodes: validated.nodes,
          edges: validated.edges,
        } : workflow.data,
      },
      include: { nodes: true, edges: true },
    });

    return NextResponse.json({
      success: true,
      data: updatedWorkflow,
    });
  } catch (error) {
    console.error('[v0] Error updating workflow:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update workflow' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      );
    }

    const workflow = await db.workflow.findUnique({
      where: { id: params.id },
    });

    if (!workflow || workflow.userId !== user.id) {
      return NextResponse.json(
        { success: false, error: 'Workflow not found or access denied' },
        { status: 404 }
      );
    }

    await db.workflow.delete({
      where: { id: params.id },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error('[v0] Error deleting workflow:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete workflow' },
      { status: 500 }
    );
  }
}
