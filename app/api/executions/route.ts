export const runtime = "nodejs";
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

// Mock database - in production use Supabase
const executions: any[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { workflowId, status, logs, results, error } = body;

    const execution = {
      id: uuidv4(),
      workflow_id: workflowId,
      user_id: 'demo-user',
      status,
      logs,
      results,
      error,
      created_at: new Date().toISOString(),
    };

    executions.push(execution);

    return NextResponse.json({
      success: true,
      data: execution,
    });
  } catch (error) {
    console.error('[v0] Error saving execution:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save execution' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const workflowId = searchParams.get('workflowId');

    let result = executions;
    if (workflowId) {
      result = executions.filter((e) => e.workflow_id === workflowId);
    }

    return NextResponse.json({
      success: true,
      data: result.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()),
    });
  } catch (error) {
    console.error('[v0] Error fetching executions:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch executions' },
      { status: 500 }
    );
  }
}
