# NextFlow Quick Start Guide

## What You Have Now

A complete backend infrastructure for NextFlow with:
- ✅ Clerk authentication (sign-in/sign-up pages)
- ✅ PostgreSQL database with Prisma ORM
- ✅ API routes for workflows, execution, and history
- ✅ Type-safe endpoints with Zod validation
- ✅ Zustand state management
- ✅ Trigger.dev task definitions
- ✅ Dark theme styling (Krea.ai inspired)

## What You Need to Build

### 1. Node Components (High Priority)
Create visual components for each node type in `components/workflow/nodes/`:

```typescript
// components/workflow/nodes/TextNode.tsx
// components/workflow/nodes/ImageUploadNode.tsx
// components/workflow/nodes/VideoUploadNode.tsx
// components/workflow/nodes/LLMNode.tsx
// components/workflow/nodes/CropImageNode.tsx
// components/workflow/nodes/ExtractFrameNode.tsx
```

Each should:
- Display node title and icon
- Show input/output handles
- Render configuration UI
- Display execution results
- Show loading/pulsating glow during execution

### 2. Canvas Components

```typescript
// components/workflow/NodeLibrary.tsx
// Left sidebar with 6 buttons to add nodes

// components/workflow/HistoryPanel.tsx
// Right sidebar showing execution history

// components/workflow/WorkflowToolbar.tsx
// Top bar with save, execute, export/import buttons
```

### 3. Editor Page Enhancement
Update `app/nodes/[id]/page.tsx` to:
- Actually use node components (currently just shows React Flow placeholder)
- Add sidebars for library and history
- Implement toolbar with actions
- Add execution controls

### 4. File Upload Integration
Update `app/api/upload/route.ts` to:
- Actually call Transloadit API (currently scaffolded)
- Handle image validation and preview
- Handle video validation and preview

### 5. Execution Integration
In `app/api/execute/route.ts`, replace mock responses with:
- Real Trigger.dev task submissions
- Real Gemini API calls for LLM nodes
- Real FFmpeg tasks for crop/extract frame
- Webhook callbacks for task completion

## Setup Steps

### 1. Get API Keys (10 minutes)

```bash
# 1. Clerk
# Go to https://clerk.com, create app, get NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY

# 2. Google AI
# Go to https://ai.google.dev, create API key, get GOOGLE_API_KEY

# 3. Neon PostgreSQL
# Go to https://neon.tech, create project, copy DATABASE_URL

# 4. Trigger.dev
# Go to https://trigger.dev, create org, get TRIGGER_API_KEY and TRIGGER_SECRET_KEY

# 5. Transloadit
# Go to https://transloadit.com, get NEXT_PUBLIC_TRANSLOADIT_KEY and TRANSLOADIT_SECRET
```

### 2. Configure Environment

```bash
# Copy template
cp .env.example .env.local

# Edit with your keys
nano .env.local
```

### 3. Setup Database

```bash
# Generate Prisma client
pnpm prisma generate

# Create database tables
pnpm prisma migrate dev --name init

# (Optional) Open database GUI
pnpm prisma studio
```

### 4. Test Authentication

```bash
# Start dev server
pnpm dev

# Visit http://localhost:3000
# Should redirect to sign-in
# Create test account
# Should redirect to /app
```

## Implementation Roadmap

### Phase 1: Visual Components (1-2 days)
1. Create base node wrapper component
2. Create 6 node type components
3. Style to match Krea.ai
4. Add input/output handles
5. Add property editors

### Phase 2: Canvas Features (1 day)
1. Node library sidebar (left)
2. History panel sidebar (right)
3. Toolbar with save/execute buttons
4. Drag-drop node creation
5. Node connection validation

### Phase 3: Execution Flow (1-2 days)
1. Connect execute button to API
2. Add real Trigger.dev submissions
3. Add real Gemini API calls
4. Add real FFmpeg tasks
5. Real-time execution feedback

### Phase 4: Polish (1 day)
1. Error handling and toasts
2. Keyboard shortcuts
3. Undo/redo
4. Workflow templates
5. Demo video recording

## Code Examples

### Adding a Text Node

```typescript
// components/workflow/nodes/TextNode.tsx
import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { TextNodeData } from '@/lib/types';

export function TextNode({ data }: { data: TextNodeData }) {
  return (
    <div className="bg-[#222] border border-blue-500 rounded-lg p-4 min-w-[250px]">
      <div className="text-sm font-bold mb-2">Text</div>
      <textarea
        value={data.content}
        onChange={(e) => {
          // Update store with new content
        }}
        className="w-full h-20 bg-[#1a1a1a] text-white border border-[#444] rounded p-2 text-xs"
        placeholder="Enter text..."
      />
      <Handle type="output" position={Position.Right} />
    </div>
  );
}
```

### Executing a Workflow

```typescript
// In your execute button handler:
const executeWorkflow = async () => {
  setIsExecuting(true);
  try {
    const response = await fetch('/api/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        workflowId,
        nodes,
        edges,
        scope: 'full', // or 'single', 'partial'
      }),
    });

    const data = await response.json();
    
    // Update UI with results
    setExecutionResults(data.data.nodeResults);
    setHistory([...history, data.data]);
  } finally {
    setIsExecuting(false);
  }
};
```

## Useful Resources

- [React Flow Docs](https://reactflow.dev)
- [Trigger.dev Docs](https://trigger.dev/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Clerk Docs](https://clerk.com/docs)
- [Google Generative AI](https://ai.google.dev)
- [Transloadit Docs](https://transloadit.com/docs)

## Testing Checklist

- [ ] Can sign in / sign up
- [ ] Can create new workflow
- [ ] Can add nodes to canvas
- [ ] Can connect nodes
- [ ] Can execute workflow
- [ ] Can see execution history
- [ ] Can click history to see node details
- [ ] Can upload image and see preview
- [ ] Can upload video and see preview
- [ ] Can run LLM with image inputs
- [ ] Can export workflow as JSON
- [ ] Can import workflow from JSON

## Deployment Checklist

- [ ] All environment variables configured on Vercel
- [ ] Database migrations run on Neon
- [ ] Clerk production keys configured
- [ ] Google API key rate limit sufficient
- [ ] Trigger.dev webhooks pointing to production URL
- [ ] Transloadit domain whitelisting updated
- [ ] Error logging configured (Sentry optional)
- [ ] Analytics configured (optional)

## Support & Next Steps

1. Start with Phase 1 (node components)
2. Get basic workflow creation working
3. Wire up execution
4. Test with sample workflows
5. Record demo video
6. Deploy to Vercel

Feel free to customize UI, colors, and features to match your vision!

Good luck! 🚀
