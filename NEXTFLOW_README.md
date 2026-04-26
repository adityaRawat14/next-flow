# NextFlow - AI Workflow Builder

A pixel-perfect Krea.ai clone built with Next.js, React Flow, and Trigger.dev. NextFlow is a powerful no-code visual workflow builder focused on LLM-powered content generation, image processing, and video manipulation.

## 🎯 Features

### Core Workflow Interface
- **Pixel-Perfect UI**: Dark theme matching Krea.ai exactly (background, spacing, fonts, animations)
- **Visual Workflow Canvas**: React Flow with dot grid background, smooth panning/zooming, and MiniMap
- **Responsive Design**: Full responsiveness with proper overflow handling
- **Workflow History Panel**: Right sidebar showing all execution runs with timestamps and node-level details

### 6 Node Types

1. **Text Node** - Simple text input with textarea and output handle
2. **Upload Image Node** - File upload via Transloadit (jpg, jpeg, png, webp, gif) with image preview
3. **Upload Video Node** - File upload via Transloadit (mp4, mov, webm, m4v) with video player preview
4. **Run Any LLM Node** - Model selector, system prompt, user message, and multimodal image support
5. **Crop Image Node** - Configurable crop parameters (x%, y%, width%, height%) via FFmpeg on Trigger.dev
6. **Extract Frame from Video Node** - Extract single frame at timestamp via FFmpeg on Trigger.dev

### Advanced Features
- **Type-Safe Connections**: Enforce proper node type connections (image nodes → image inputs, etc.)
- **DAG Validation**: Prevent circular loops/cycles in workflows
- **Selective Execution**: Run full workflow, single node, or selected nodes
- **Parallel Execution**: Independent branches execute concurrently
- **Undo/Redo**: Full undo/redo support for node operations
- **Pulsating Glow Effect**: Visual feedback for executing nodes
- **Node-Level History**: Click run entry to see detailed execution info per node
- **Workflow Persistence**: Save/load workflows from PostgreSQL database

### Authentication & Authorization
- **Clerk Integration**: Complete auth system with sign-in/sign-up
- **Protected Routes**: All workflow routes require authentication
- **User Scoping**: Workflows and history scoped to authenticated user

### Execution Engine
- **Trigger.dev Integration**: All node execution via Trigger.dev tasks
- **Google Gemini API**: LLM execution with vision support for multimodal prompts
- **FFmpeg Processing**: Image cropping and frame extraction via backend tasks
- **Transloadit**: File upload and processing
- **Parallel Task Execution**: Independent nodes triggered concurrently

## 🛠️ Tech Stack

```
Frontend:
- Next.js 16 (App Router)
- React 19.2 with TypeScript
- React Flow (@xyflow/react) - Visual node editor
- Zustand - State management
- Tailwind CSS v4 - Styling
- Lucide React - Icons

Backend:
- Next.js API Routes
- Prisma ORM - Database access
- Zod - Schema validation

Services:
- Clerk - Authentication
- PostgreSQL (Neon) - Database
- Trigger.dev - Workflow execution
- Google Generative AI - LLM API
- Transloadit - File uploads
- FFmpeg - Media processing
```

## 📋 Setup Instructions

### Prerequisites
- Node.js 18+ and pnpm
- Free accounts for: Clerk, Neon PostgreSQL, Google AI Studio, Trigger.dev, Transloadit

### 1. Clone & Install

```bash
git clone <repository>
cd nextflow
pnpm install
```

### 2. Environment Variables

Copy `.env.example` to `.env.local` and fill in all values:

```bash
cp .env.example .env.local
```

Required environment variables:
```
DATABASE_URL="postgresql://user:password@host/database"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
GOOGLE_API_KEY="AIzaSy..."
NEXT_PUBLIC_TRANSLOADIT_KEY="xxxxx"
TRANSLOADIT_SECRET="xxxxx"
TRIGGER_API_KEY="tr_..."
TRIGGER_SECRET_KEY="sk_..."
```

### 3. Database Setup

```bash
# Generate Prisma client
pnpm prisma generate

# Run migrations
pnpm prisma migrate dev

# Seed with sample workflows (optional)
pnpm prisma db seed
```

### 4. Get API Keys

1. **Clerk**: Sign up at [clerk.com](https://clerk.com), create application, copy keys
2. **Google AI**: Visit [Google AI Studio](https://ai.google.dev), create API key
3. **Neon PostgreSQL**: Sign up at [neon.tech](https://neon.tech), create database, copy connection string
4. **Trigger.dev**: Sign up at [trigger.dev](https://trigger.dev), create organization, copy keys
5. **Transloadit**: Sign up at [transloadit.com](https://transloadit.com), copy auth key and secret

### 5. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Deploy to Vercel

```bash
# Push to GitHub
git push origin main

# Connect to Vercel and deploy
vercel
```

### Environment Variables on Vercel

Add all environment variables from `.env.local` to Vercel project settings.

### Database on Vercel

Use Neon PostgreSQL's connection pooling for best results with serverless functions.

## 📖 Project Structure

```
nextflow/
├── app/
│   ├── (auth)/
│   │   ├── sign-in/
│   │   └── sign-up/
│   ├── api/
│   │   ├── workflows/
│   │   ├── execute/
│   │   ├── history/
│   │   └── upload/
│   ├── dashboard/
│   ├── editor/[id]/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── workflow/ (to be created)
├── lib/
│   ├── db.ts
│   ├── types.ts
│   ├── schemas.ts
│   ├── store.ts
│   ├── trigger.ts
│   └── execution.ts
├── prisma/
│   └── schema.prisma
├── middleware.ts
└── package.json
```

## 🎬 Sample Workflow: Product Marketing Kit Generator

The reference workflow demonstrates all 6 node types with parallel execution:

### Branch A: Image Processing + Description
1. **Upload Image** → Product photo
2. **Crop Image** → Focus on product (80% width/height)
3. **Text Nodes** → System prompt + product details
4. **LLM Node #1** → Generate product description

### Branch B: Video Frame Extraction
1. **Upload Video** → Product demo video
2. **Extract Frame** → Frame at 50% timestamp

### Convergence: Final Summary
**LLM Node #2** → Waits for both branches, generates marketing tweet using:
- Product description from Branch A
- Cropped image + extracted frame from both branches

This demonstrates parallel execution, dependency resolution, and multimodal LLM input.

## 🔄 Workflow Execution Flow

1. **DAG Validation**: Check for circular dependencies
2. **Topological Sort**: Determine execution order respecting dependencies
3. **Parallel Batching**: Group independent nodes for concurrent execution
4. **Trigger.dev**: Submit node tasks to Trigger.dev for processing
5. **Result Aggregation**: Collect outputs and pass to dependent nodes
6. **History Persistence**: Save execution details to database
7. **UI Updates**: Display real-time logs and results with pulsating glow effects

## 🧪 API Endpoints

### Workflows
- `GET /api/workflows` - List user workflows
- `POST /api/workflows` - Create workflow
- `GET /api/workflows/[id]` - Get workflow details
- `PUT /api/workflows/[id]` - Update workflow
- `DELETE /api/workflows/[id]` - Delete workflow

### Execution
- `POST /api/execute` - Execute workflow/node
- `GET /api/history?workflowId=...` - Get execution history

### Files
- `POST /api/upload` - Upload file to Transloadit

## 🔐 Security

- **Authentication**: Clerk handles all auth flows
- **Authorization**: User scoping on all database queries
- **Type Safety**: TypeScript + Zod validation throughout
- **Environment Secrets**: All API keys in `.env.local`
- **Protected Routes**: Middleware enforces auth on protected paths

## 📊 Database Schema

See `prisma/schema.prisma` for complete schema including:
- **User**: Clerk integration with scoped workflows/history
- **Workflow**: Nodes and edges as JSON, save/load support
- **ExecutionHistory**: Detailed logs per node with Trigger.dev task IDs
- **Node & Edge**: Individual records for querying and filtering

## 🐛 Debugging

### Development Logs
```bash
# View Prisma logs
tail -f .env.local # Check DATABASE_URL is set
pnpm prisma studio # GUI database explorer
```

### Trigger.dev Tasks
- Monitor task execution in Trigger.dev dashboard
- Check task logs for LLM/FFmpeg errors
- Verify webhook configuration for execution updates

### Clerk Authentication
- Use Clerk dashboard to manage users
- Check JWT tokens in browser DevTools
- Verify sign-in/sign-up URLs in middleware

## 📝 Notes for Development

1. **Mock Mode**: Trigger.dev integration uses mock responses in development. Replace with actual calls in production.
2. **File Uploads**: Transloadit requires proper domain configuration in production.
3. **Parallel Execution**: Ensure all node dependencies are correctly mapped in edge connections.
4. **Rate Limiting**: Monitor Gemini API usage and Trigger.dev task quotas.

## 🤝 Contributing

This is a reference implementation. For production use:
1. Enhance error handling and user feedback
2. Add request validation and rate limiting
3. Implement webhook callbacks for long-running tasks
4. Add workflow templates and sample presets
5. Implement workflow versioning and rollbacks

## 📄 License

MIT

## 🎯 Next Steps

1. Set up all required API keys
2. Run database migrations
3. Start dev server and test authentication
4. Create your first workflow
5. Deploy to Vercel

Good luck building! 🚀
