# Quick Start Guide

Get started with Workflow Node Editor in minutes!

## Step 1: Installation

```bash
# Clone the repository
git clone <repo-url>
cd workflow-editor

# Install dependencies
pnpm install
```

## Step 2: Environment Setup

```bash
# Copy the example env file
cp .env.example .env.local
```

Add your API keys:
```env
GEMINI_API_KEY=your_gemini_api_key_here
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
CLERK_SECRET_KEY=your_clerk_secret_here
```

**Note**: Supabase and Clerk are optional. The app works with mock data if not configured.

## Step 3: Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 4: Create Your First Workflow

1. **Choose Start Option**
   - Click "New Empty Workflow" for a blank canvas
   - Or select a template from "Browse Templates"

2. **Add Nodes**
   - Open the Node Library (left panel)
   - Drag nodes to the canvas
   - Available categories: Input, Processing, Generation, Output

3. **Connect Nodes**
   - Click an output port (right side) of one node
   - Drag to an input port (left side) of another node
   - A blue line shows the connection

4. **Configure Properties**
   - Click a node to select it
   - Adjust settings in the right panel
   - Set prompts, models, and parameters

5. **Execute Workflow**
   - Click the "Execute" button (top right)
   - Watch the execution logs in real-time
   - View results in the execution panel

6. **Save Workflow**
   - Click "Save" button
   - Give your workflow a name
   - Reload anytime to use it again

## Available Node Types

### Input Nodes
- **Image Upload** - Load images from files or URLs
- **Text Input** - Enter text prompts

### Processing Nodes
- **LLM Processor** - Use Gemini to process text and images

### Generation Nodes
- **Image Generator** - Create images from text descriptions

### Output Nodes
- **Output Display** - View and export final results

## Example Workflows

### 1. Image Analysis
1. Image Upload → LLM Processor → Output Display
2. Set the LLM prompt: "Describe this image in detail"
3. Execute to analyze images

### 2. Text Enhancement
1. Text Input → LLM Processor → Output Display
2. Set the LLM prompt: "Improve the writing quality"
3. Execute to enhance text

### 3. Image Generation
1. Text Input → Image Generator → Output Display
2. Enter a detailed image description
3. Execute to generate images

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+S` | Save workflow |
| `Ctrl+L` | Toggle node library |
| `Delete` | Remove selected node |
| `Space + Drag` | Pan canvas |
| `Scroll` | Zoom canvas |

## Customization

### Change Theme Colors
Edit `/app/globals.css`:
```css
--primary: rgb(59, 130, 246);  /* Blue */
--background: rgb(13, 13, 13);  /* Dark gray */
```

### Add Custom Nodes
1. Update `/lib/templates.ts` with new node definition
2. Add execution logic in `/lib/execution.ts`
3. Restart dev server

### Modify Node Library
Edit `/app/api/nodes/route.ts` to add/remove node types

## API Integration

### Gemini API Setup

1. Get API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Add to `.env.local`:
   ```env
   GEMINI_API_KEY=your_key_here
   ```
3. Workflows will use Gemini when executing LLM nodes

### Clerk Authentication (Optional)

1. Create account at [clerk.com](https://clerk.com)
2. Get your API keys from dashboard
3. Add to `.env.local`:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
   CLERK_SECRET_KEY=sk_...
   ```
4. Authentication will be enabled automatically

## Troubleshooting

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules .next
pnpm install
pnpm dev
```

### Missing Dependencies
```bash
# Install all dependencies
pnpm install
```

### Port 3000 Already in Use
```bash
# Use different port
pnpm dev -- -p 3001
```

### Gemini API Errors
- Check API key is valid
- Verify key is in `.env.local`
- Try mock mode (runs without real API calls)

## Next Steps

1. ✅ Create your first workflow
2. ✅ Save it for reuse
3. ✅ Explore templates
4. ✅ Integrate with your apps
5. ✅ Deploy to Vercel

## Resources

- [Documentation](./README.md)
- [API Reference](./README.md#api-endpoints)
- [Google Gemini Docs](https://ai.google.dev/docs)
- [React Flow Docs](https://reactflow.dev)

## Getting Help

- Check the README.md for detailed docs
- Look at templates for workflow examples
- Check console logs (F12) for errors
- Review execution logs in the panel

---

Ready to build? Start by clicking "New Empty Workflow" on the home page!
