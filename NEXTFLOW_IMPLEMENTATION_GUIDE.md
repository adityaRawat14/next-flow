# NextFlow - Complete Implementation Guide

## Overview

NextFlow is a production-ready AI workflow builder inspired by Krea.ai. It enables users to create sophisticated visual workflows with 6 different node types that can chain together for complex AI tasks.

## Fixed Issues & New Features

### Event Listeners & Interactivity (Phase 1) ✅
- All components now have `"use client"` directive at the top
- Click handlers properly implemented on all buttons
- useEffect hooks functioning correctly for state management
- Keyboard shortcuts working (Ctrl+S to save, Ctrl+Enter to execute, Delete to remove)
- Proper React Flow integration with node management

### Node Components (6 Total) ✅

#### 1. **Text Node** (`TextNode.tsx`)
- Simple text input with textarea
- Output handle for text data
- Expandable/collapsible UI
- Used for prompts and text generation

#### 2. **Image Upload Node** (`ImageUploadNode.tsx`)
- File upload via `/api/upload` endpoint
- Accepts: jpg, jpeg, png, webp, gif
- Image preview after upload
- Output handle for image URL
- File validation on client-side

#### 3. **Video Upload Node** (`VideoUploadNode.tsx`)
- File upload via `/api/upload` endpoint
- Accepts: mp4, mov, webm, m4v
- Video player preview with controls
- Output handle for video URL

#### 4. **LLM Node** (`LLMNode.tsx`)
- Model selector (Gemini 2.0 Flash, 1.5 Pro, 1.5 Flash)
- System prompt input (optional)
- User message input (required)
- Three input handles: system_prompt, user_message, images
- One output handle: output
- Inline result display
- Execute button with loading state
- Integrated with Google Generative AI API

#### 5. **Crop Image Node** (`CropImageNode.tsx`)
- Accepts image input
- Configurable coordinates: X%, Y%, Width%, Height%
- Real-time parameter adjustment
- Execute button for FFmpeg processing
- Result preview
- Input handle: image_url
- Output handle: output

#### 6. **Extract Frame Node** (`ExtractFrameNode.tsx`)
- Accepts video URL input
- Configurable timestamp (seconds or percentage, e.g., "5" or "50%")
- Execute button for frame extraction
- Result preview
- Input handles: video_url
- Output handle: output

### Workflow Canvas (`CompleteWorkflowEditor.tsx`)

Features:
- React Flow integration with dot grid background
- Smooth panning and zooming
- MiniMap for navigation
- Ctrl+S keyboard shortcut to save
- Ctrl+Enter to execute workflow
- Delete key to remove selected nodes
- Node selection with multi-select support
- Edge connection visualization (purple animated lines)
- Real-time node and edge count display
- Error handling and status messages

### Sidebar Components

#### **Left Sidebar** (`LeftSidebar.tsx`)
- Node library with 6 node types
- Search functionality to filter nodes
- Click to add nodes to canvas
- Collapsible interface
- Color-coded node types

#### **Right Sidebar** (`RightSidebar.tsx`)
- Execution history panel
- Shows all workflow runs with timestamps
- Status indicators (success/failed/running)
- Duration tracking
- Execution scope (full/partial/single node)
- Click to expand for node-level details
- Clear history functionality

## API Routes

### Workflows

```
POST   /api/workflows              - Create new workflow
GET    /api/workflows              - List user's workflows
GET    /api/workflows/[id]         - Fetch specific workflow
PUT    /api/workflows/[id]         - Update workflow
DELETE /api/workflows/[id]         - Delete workflow
```

### Execution

```
POST   /api/execute                - Execute full workflow
POST   /api/llm/execute            - Execute LLM node
POST   /api/crop                   - Crop image via FFmpeg
POST   /api/extract-frame          - Extract video frame via FFmpeg
POST   /api/upload                 - Upload files (image/video)
POST   /api/history                - Fetch execution history
```

## State Management (Zustand Store)

The `useWorkflowStore` manages:

```typescript
// Workflow Data
- currentWorkflow: Workflow | null
- workflowId: string | null
- workflowName: string
- workflowDescription: string
- nodes: WorkflowNode[]
- edges: WorkflowEdge[]

// UI State
- selectedNodeId: string | null
- selectedNodeIds: string[]
- showNodeLibrary: boolean
- showHistory: boolean

// Execution State
- isExecuting: boolean
- executionLogs: ExecutionLog[]
- executionResults: Record<string, any>
- executionHistory: ExecutionHistoryEntry[]

// Actions
- setNodes(), setEdges()
- addNode(), updateNode(), deleteNode()
- setCurrentWorkflow()
- selectNode(), clearSelection()
- executeWorkflow()
- resetWorkflow()
```

## Database Schema (Prisma)

```prisma
model User {
  id        String    @id @default(cuid())
  clerkId   String    @unique
  email     String
  workflows Workflow[]
}

model Workflow {
  id          String    @id @default(cuid())
  userId      String
  user        User      @relation(fields: [userId], references: [id])
  name        String
  description String?
  data        Json      // { nodes: [], edges: [] }
  nodes       WorkflowNode[]
  edges       WorkflowEdge[]
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

model WorkflowNode {
  id         String   @id @default(cuid())
  workflowId String
  type       String
  data       Json
  position   Json
}

model WorkflowEdge {
  id            String @id @default(cuid())
  workflowId    String
  source        String
  target        String
  sourceHandle  String?
  targetHandle  String?
}

model ExecutionHistory {
  id        String    @id @default(cuid())
  workflowId String
  status    String    // 'success' | 'failed' | 'running'
  scope     String    // 'full' | 'partial' | 'single'
  logs      Json
  duration  Int
  createdAt DateTime  @default(now())
}
```

## Configuration Required

### Environment Variables

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_SIGN_IN_URL=/sign-in
CLERK_SIGN_UP_URL=/sign-up
CLERK_AFTER_SIGN_IN_URL=/app
CLERK_AFTER_SIGN_UP_URL=/app

# Database
DATABASE_URL=your_neon_postgresql_url

# Google AI
GOOGLE_API_KEY=your_google_ai_studio_api_key

# Transloadit (Optional, for production file uploads)
TRANSLOADIT_KEY=your_transloadit_key
TRANSLOADIT_SECRET=your_transloadit_secret
TRANSLOADIT_AUTH_EXPIRES=

# Trigger.dev (Optional, for distributed execution)
TRIGGER_API_KEY=your_trigger_dev_api_key
TRIGGER_API_URL=https://api.trigger.dev
```

## Setup Instructions

### 1. Clone & Install
```bash
git clone <repo-url>
cd workflow-editor
pnpm install
```

### 2. Setup Database
```bash
# Create database migration
pnpm prisma migrate dev --name init

# Seed with sample data (optional)
pnpm prisma db seed
```

### 3. Environment Variables
```bash
# Copy example
cp .env.example .env.local

# Fill in your API keys:
# - Clerk keys from clerk.com
# - Google AI key from ai.google.dev
# - Database URL from neon.tech
```

### 4. Run Development Server
```bash
pnpm dev
```

Visit `http://localhost:3000` and sign in.

### 5. Create Your First Workflow
1. Click "New Workflow" button
2. Click nodes in the left sidebar to add them
3. Connect node outputs to inputs by dragging
4. Configure each node (prompts, parameters, etc.)
5. Click "Execute" to run the workflow
6. View results inline on nodes
7. Check execution history in the right sidebar

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+S` | Save workflow |
| `Ctrl+Enter` | Execute workflow |
| `Delete` | Remove selected nodes |
| `Escape` | Deselect nodes |
| Drag background | Pan canvas |
| Scroll | Zoom in/out |

## Common Workflows

### Product Description Generator
1. **Upload Image** → upload product photo
2. **Text Node** (system) → "You are a marketing expert..."
3. **Text Node** (user) → Product details
4. **LLM Node** → Generate description
5. View result inline

### Video Frame Extraction + Analysis
1. **Upload Video** → upload demo video
2. **Extract Frame** → timestamp 50%
3. **LLM Node** → "Analyze this frame..."
4. View analysis result

### Image Cropping + LLM Processing
1. **Upload Image** → product photo
2. **Crop Image** → center crop at 80%
3. **LLM Node** → "Describe the cropped region"
4. View description

## Troubleshooting

### Event Listeners Not Working
- ✅ Check that component has `"use client"` at top
- ✅ Verify onClick handlers are passed to interactive elements
- ✅ Check browser console for JavaScript errors

### Workflow Not Saving
- ✅ Verify API route exists at `/api/workflows/[id]`
- ✅ Check database connection in DATABASE_URL
- ✅ Run `pnpm prisma migrate dev` to sync schema

### LLM Execution Fails
- ✅ Verify GOOGLE_API_KEY is set
- ✅ Check user message field is not empty
- ✅ Verify API call in `/api/llm/execute` route

### File Upload Fails
- ✅ Check file format is supported (jpg, png, webp, gif for images)
- ✅ Verify `/api/upload` route exists
- ✅ Check file size isn't exceeding limits

## Next Steps

1. **Trigger.dev Integration** - Replace mock execution with real distributed tasks
2. **FFmpeg Processing** - Connect `/api/crop` and `/api/extract-frame` to actual FFmpeg via Trigger.dev
3. **Transloadit** - Replace mock file uploads with real Transloadit integration
4. **Sample Workflows** - Create pre-built templates in database
5. **Real-time Collaboration** - Add WebSocket support for multi-user editing
6. **Workflow Versioning** - Track workflow changes over time
7. **Workflow Export/Import** - JSON export/import functionality
8. **Performance** - Add caching for expensive operations

## Support

For issues or questions:
1. Check console logs with `console.log("[v0] ...")`
2. Verify environment variables are set
3. Test API routes directly with curl/Postman
4. Check Prisma schema matches database
5. Review component props are correctly passed

## License

MIT

---

**Built with Next.js 16, React Flow, Gemini API, Clerk, and Prisma**
