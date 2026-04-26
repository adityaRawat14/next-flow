# Workflow Node Editor

A modern, AI-powered workflow builder with node-based visual programming. Connect nodes to create complex automated workflows powered by Gemini AI.

![Workflow Editor](https://via.placeholder.com/800x400?text=Workflow+Editor)

## Features

- 🔗 **Node-Based Visual Editor** - Drag and drop nodes to build workflows
- ⚡ **Real-Time Execution** - Execute workflows instantly and see results
- 🤖 **AI-Powered** - Powered by Google Gemini for intelligent processing
- 📦 **Pre-Built Templates** - Start with existing workflow templates
- 💾 **Workflow Management** - Save, load, and organize your workflows
- 🎨 **Modern Dark Theme** - Beautiful Krea.ai-inspired interface
- 📊 **Execution Logs** - Track execution with detailed logs
- 🔄 **Sequential Execution** - Execute nodes in proper order

## Node Types

### Input Nodes
- **Image Upload** - Upload or select images
- **Text Input** - Input text prompts

### Processing Nodes
- **LLM Processor** - Process with Google Gemini

### Generation Nodes
- **Image Generator** - Generate images from prompts

### Output Nodes
- **Output Display** - Display and view results

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository
```bash
git clone <repo-url>
cd workflow-editor
```

2. Install dependencies
```bash
pnpm install
# or npm install / yarn install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

Fill in the required environment variables:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon key
- `GEMINI_API_KEY` - Your Google Gemini API key
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk publishable key
- `CLERK_SECRET_KEY` - Clerk secret key

4. Run the development server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to start creating workflows!

## Usage

### Creating a Workflow

1. **Start** - Choose between a blank workflow or select a template
2. **Add Nodes** - Drag nodes from the library to the canvas
3. **Connect** - Draw connections between node outputs and inputs
4. **Configure** - Select a node and adjust its properties
5. **Execute** - Click the Execute button to run the workflow
6. **Save** - Save your workflow for later use

### Keyboard Shortcuts

- `Ctrl+L` - Toggle node library
- `Ctrl+S` - Save workflow
- `N` - Add node (when using library modal)

## Architecture

### Project Structure

```
├── app/
│   ├── api/              # API endpoints
│   │   ├── nodes/        # Node definitions
│   │   ├── workflows/    # Workflow CRUD
│   │   ├── execute/      # Workflow execution
│   │   ├── templates/    # Templates
│   │   └── executions/   # Execution history
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   └── workflow/         # Workflow components
│       ├── WorkflowEditor.tsx
│       ├── WorkflowCanvas.tsx
│       ├── NodeLibrary.tsx
│       ├── ExecutionPanel.tsx
│       ├── PropertyEditor.tsx
│       ├── BaseNode.tsx
│       ├── Sidebar.tsx
│       ├── WelcomePage.tsx
│       ├── TemplatesModal.tsx
│       └── WorkflowManager.tsx
├── lib/
│   ├── types.ts          # TypeScript types
│   ├── store.ts          # Zustand state management
│   ├── execution.ts      # Execution engine
│   └── templates.ts      # Workflow templates
└── scripts/
    └── init-db.sql       # Database schema
```

### Technology Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **State Management**: Zustand
- **Node Editor**: Xyflow (React Flow)
- **UI Components**: Shadcn/ui
- **Styling**: Tailwind CSS
- **AI**: Google Gemini API
- **Authentication**: Clerk
- **Database**: Supabase (optional)
- **Icons**: Lucide React

## API Endpoints

### Nodes
- `GET /api/nodes` - Get all node definitions

### Workflows
- `GET /api/workflows` - Get all workflows
- `POST /api/workflows` - Create new workflow
- `GET /api/workflows/:id` - Get specific workflow
- `PUT /api/workflows/:id` - Update workflow
- `DELETE /api/workflows/:id` - Delete workflow

### Execution
- `POST /api/execute` - Execute workflow
- `GET /api/executions` - Get execution history
- `GET /api/executions?workflowId=:id` - Get workflow executions

### Templates
- `GET /api/templates` - Get all templates
- `GET /api/templates?category=:category` - Filter by category
- `GET /api/templates?id=:id` - Get specific template

## Configuration

### Node Definitions

Add new node types in `/lib/templates.ts` or modify the node definitions API.

### Theming

Colors and styles are defined in `/app/globals.css` using CSS variables:
- Primary: Blue (#3b82f6)
- Secondary: Gray (#333333)
- Accent: Purple (#a855f7)
- Background: Very Dark Gray (#0d0d0d)

### Execution Engine

The execution engine in `/lib/execution.ts` handles:
- Sequential node execution
- Dependency resolution
- Error handling
- Logging
- API calls to Gemini

## Development

### Adding a New Node Type

1. Define the node in `/lib/templates.ts`
2. Add execution logic in `/lib/execution.ts`
3. (Optional) Add custom UI in `/components/workflow/`

### Database Setup (Supabase)

Run the SQL migrations from `/scripts/init-db.sql`:

```sql
-- Create tables for workflows, executions, and node definitions
```

## Deployment

### Deploy to Vercel

```bash
vercel deploy
```

Set environment variables in Vercel dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `GEMINI_API_KEY`
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`

## Future Enhancements

- [ ] Real-time collaboration
- [ ] More node types (Video, Audio, Web scraping)
- [ ] Advanced scheduling
- [ ] Workflow marketplace
- [ ] Custom node creation UI
- [ ] Performance monitoring
- [ ] Webhook integrations
- [ ] Version control for workflows

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

## License

MIT License - see LICENSE file for details

## Support

For issues and questions, please open an issue on GitHub or visit [our docs](https://github.com/yourusername/workflow-editor/wiki).

---

Built with ❤️ using Next.js and React Flow
