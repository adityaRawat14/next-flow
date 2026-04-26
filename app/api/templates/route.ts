import { NextRequest, NextResponse } from 'next/server';
import { WORKFLOW_TEMPLATES, getTemplate, getTemplatesByCategory } from '@/lib/templates';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const templateId = searchParams.get('id');

    let result;

    if (templateId) {
      result = getTemplate(templateId);
      if (!result) {
        return NextResponse.json(
          { success: false, error: 'Template not found' },
          { status: 404 }
        );
      }
    } else if (category) {
      result = getTemplatesByCategory(category as any);
    } else {
      result = WORKFLOW_TEMPLATES;
    }

    return NextResponse.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error('[v0] Error fetching templates:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch templates' },
      { status: 500 }
    );
  }
}
