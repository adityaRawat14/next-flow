# NextFlow API Reference

## Authentication
All endpoints require Clerk authentication except `/sign-in` and `/sign-up`.

Add your Clerk token to requests:
```bash
curl -H "Authorization: Bearer YOUR_CLERK_TOKEN" https://api.nextflow.dev/api/...
```

## Workflows

### GET /api/workflows
List all workflows for authenticated user.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "clxxx",
      "userId": "user-xxx",
      "name": "Product Marketing Kit",
      "description": "Generate marketing content",
      "nodes": [...],
      "edges": [...],
      "createdAt": "2026-01-14T10:00:00Z",
      "updatedAt": "2026-01-14T10:00:00Z"
    }
  ]
}
```

### POST /api/workflows
Create a new workflow.

**Request:**
```json
{
  "name": "My Workflow",
  "description": "Optional description",
  "nodes": [],
  "edges": []
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "id": "clxxx",
    "userId": "user-xxx",
    "name": "My Workflow",
    "nodes": [],
    "edges": [],
    "createdAt": "2026-01-14T10:00:00Z",
    "updatedAt": "2026-01-14T10:00:00Z"
  }
}
```

### GET /api/workflows/[id]
Get a specific workflow by ID.

**Response:** Same as single workflow in POST response.

### PUT /api/workflows/[id]
Update a workflow (name, description, nodes, edges).

**Request:**
```json
{
  "name": "Updated Name",
  "description": "Updated description",
  "nodes": [...],
  "edges": [...]
}
```

**Response:** Updated workflow object.

### DELETE /api/workflows/[id]
Delete a workflow permanently.

**Response:**
```json
{
  "success": true
}
```

## Execution

### POST /api/execute
Execute a workflow, single node, or selected nodes.

**Request:**
```json
{
  "workflowId": "clxxx",
  "nodes": [
    {
      "id": "node-1",
      "type": "text",
      "data": {
        "label": "Text",
        "nodeType": "text",
        "content": "Hello"
      },
      "position": { "x": 0, "y": 0 }
    }
  ],
  "edges": [],
  "scope": "full",
  "executedNodeIds": []
}
```

**Parameters:**
- `workflowId` (string, required): Workflow ID
- `nodes` (array, required): Array of nodes to execute
- `edges` (array, required): Array of edges defining dependencies
- `scope` (enum, optional): 'full' | 'partial' | 'single' (default: 'full')
- `executedNodeIds` (array, optional): Node IDs to execute (for partial/single)

**Response:**
```json
{
  "success": true,
  "data": {
    "executionId": "exec-123",
    "status": "success",
    "scope": "full",
    "nodeResults": {
      "node-1": {
        "status": "success",
        "output": { "text": "Hello" },
        "duration": 150,
        "inputs": {},
        "logs": []
      }
    },
    "duration": 150
  }
}
```

**Execution Status Values:**
- `success` - All nodes executed successfully
- `failed` - One or more nodes failed
- `partial` - Some nodes succeeded, some failed
- `running` - Currently executing

**Execution Scope Values:**
- `full` - Execute entire workflow
- `partial` - Execute selected nodes
- `single` - Execute one node

## History

### GET /api/history
Get execution history for user or specific workflow.

**Query Parameters:**
- `workflowId` (optional): Filter by workflow

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "hist-123",
      "workflowId": "clxxx",
      "userId": "user-xxx",
      "status": "success",
      "scope": "full",
      "executedNodeIds": ["node-1", "node-2"],
      "nodeResults": {...},
      "nodeErrors": {},
      "nodeLogs": {
        "node-1": [
          "[2026-01-14T10:00:00Z] Starting execution...",
          "[2026-01-14T10:00:00Z] ✅ Completed successfully"
        ]
      },
      "startTime": "2026-01-14T10:00:00Z",
      "endTime": "2026-01-14T10:00:01Z",
      "duration": 1000,
      "createdAt": "2026-01-14T10:00:01Z"
    }
  ]
}
```

## File Upload

### POST /api/upload
Upload an image or video file to Transloadit.

**Request (FormData):**
```
Content-Type: multipart/form-data

file: <File object>
type: "image" | "video"
```

**Response:**
```json
{
  "success": true,
  "data": {
    "url": "https://cdn.transloadit.com/...",
    "filename": "photo.jpg",
    "fileType": "image"
  }
}
```

**Supported Types:**
- **Images**: jpg, jpeg, png, webp, gif
- **Videos**: mp4, mov, webm, m4v

**Max File Size**: Determined by Transloadit (usually 5GB)

## Node Types & Schemas

### Text Node
```json
{
  "id": "node-1",
  "type": "text",
  "data": {
    "label": "Text",
    "nodeType": "text",
    "content": "Your text here"
  }
}
```

### Image Upload Node
```json
{
  "id": "node-2",
  "type": "image_upload",
  "data": {
    "label": "Image",
    "nodeType": "image_upload",
    "uploadedImageUrl": "https://..."
  }
}
```

### Video Upload Node
```json
{
  "id": "node-3",
  "type": "video_upload",
  "data": {
    "label": "Video",
    "nodeType": "video_upload",
    "uploadedVideoUrl": "https://..."
  }
}
```

### LLM Node
```json
{
  "id": "node-4",
  "type": "llm",
  "data": {
    "label": "LLM",
    "nodeType": "llm",
    "model": "gemini-1.5-flash",
    "systemPrompt": "You are...",
    "userMessage": "Generate...",
    "images": ["https://..."]
  }
}
```

### Crop Image Node
```json
{
  "id": "node-5",
  "type": "crop_image",
  "data": {
    "label": "Crop Image",
    "nodeType": "crop_image",
    "imageUrl": "https://...",
    "xPercent": 10,
    "yPercent": 10,
    "widthPercent": 80,
    "heightPercent": 80
  }
}
```

### Extract Frame Node
```json
{
  "id": "node-6",
  "type": "extract_frame",
  "data": {
    "label": "Extract Frame",
    "nodeType": "extract_frame",
    "videoUrl": "https://...",
    "timestamp": "50%"
  }
}
```

## Edges

Edges connect node outputs to inputs.

```json
{
  "id": "edge-1",
  "source": "node-1",
  "target": "node-2",
  "sourceHandle": "output",
  "targetHandle": "input"
}
```

**Handle Types by Node:**

| Node Type | Output Handles | Input Handles |
|-----------|----------------|---------------|
| Text | `output` | - |
| Image Upload | `output` | - |
| Video Upload | `output` | - |
| LLM | `output` | `system_prompt`, `user_message`, `images` |
| Crop Image | `output` | `image_url`, `x_percent`, `y_percent`, `width_percent`, `height_percent` |
| Extract Frame | `output` | `video_url`, `timestamp` |

## Error Responses

All endpoints return errors in this format:

```json
{
  "success": false,
  "error": "Error message describing what went wrong"
}
```

**Common HTTP Status Codes:**
- `400` - Bad request (invalid input)
- `401` - Unauthorized (not authenticated)
- `403` - Forbidden (don't own resource)
- `404` - Not found (resource doesn't exist)
- `500` - Server error

**Example Error Response:**
```json
{
  "success": false,
  "error": "Workflow not found"
}
```

## Pagination

History endpoint supports pagination via query params (to be implemented):
```
GET /api/history?workflowId=xxx&page=1&limit=20
```

## Rate Limiting

By Trigger.dev task limits:
- LLM nodes: 1000 tasks/month (free tier)
- FFmpeg nodes: 100 tasks/month (free tier)

Monitor usage in Trigger.dev dashboard.

## Webhooks

For async task completion, Trigger.dev will POST to:
```
POST /api/webhooks/trigger
```

(To be implemented)

## Example Workflow Execution

```bash
# 1. Create workflow
curl -X POST http://localhost:3000/api/workflows \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test Workflow",
    "nodes": [...],
    "edges": [...]
  }'

# 2. Execute workflow
curl -X POST http://localhost:3000/api/execute \
  -H "Content-Type: application/json" \
  -d '{
    "workflowId": "workflow-id",
    "nodes": [...],
    "edges": [...],
    "scope": "full"
  }'

# 3. Check history
curl http://localhost:3000/api/history?workflowId=workflow-id
```

## SDK Examples

### JavaScript/TypeScript

```typescript
// Fetch all workflows
const workflows = await fetch('/api/workflows').then(r => r.json());

// Execute workflow
const result = await fetch('/api/execute', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    workflowId: 'xxx',
    nodes,
    edges,
    scope: 'full'
  })
}).then(r => r.json());
```

### Python

```python
import requests

# Fetch workflows
response = requests.get('http://localhost:3000/api/workflows')
workflows = response.json()['data']

# Execute workflow
response = requests.post('http://localhost:3000/api/execute', json={
    'workflowId': 'xxx',
    'nodes': nodes,
    'edges': edges,
    'scope': 'full'
})
result = response.json()
```

## Testing

Use curl, Postman, or any HTTP client:

```bash
# Test auth (should fail without Clerk token)
curl http://localhost:3000/api/workflows

# Test with valid Clerk token
curl -H "Cookie: __session=YOUR_CLERK_SESSION" \
  http://localhost:3000/api/workflows
```

## API Versioning

Currently on API v1 (no versioning prefix). Future versions may use:
```
/api/v2/workflows
```

## Support

For issues or questions:
1. Check QUICK_START.md for setup help
2. Review IMPLEMENTATION_CHECKLIST.md for status
3. Check error response for details
4. Enable Prisma logging: `DEBUG="prisma:*" pnpm dev`
