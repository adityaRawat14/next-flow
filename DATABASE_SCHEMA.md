# NextFlow Database Schema

## Overview

NextFlow uses PostgreSQL with Prisma ORM. The schema is optimized for:
- User data isolation
- Efficient workflow querying
- Execution history tracking
- Cascade deletes on cleanup

## User Table

Stores user accounts linked to Clerk authentication.

```sql
CREATE TABLE User (
  id                String @id @default(cuid())
  clerkId           String @unique
  email             String @unique
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
  
  workflows         Workflow[]
  executionHistory  ExecutionHistory[]
)
```

**Fields:**
- `id` - Primary key (CUID)
- `clerkId` - Clerk user ID (from authentication)
- `email` - User email address
- `createdAt` - Account creation timestamp
- `updatedAt` - Last profile update

**Indexes:**
- `clerkId` (unique, for Clerk lookups)
- `email` (unique, for identity)

**Relations:**
- One-to-many with Workflow
- One-to-many with ExecutionHistory

## Workflow Table

Stores workflow definitions (nodes, edges, metadata).

```sql
CREATE TABLE Workflow (
  id                String @id @default(cuid())
  userId            String
  name              String
  description       String?
  data              Json @default("{}")
  
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
  deletedAt         DateTime?
  
  user              User @relation(fields: [userId], references: [id], onDelete: Cascade)
  nodes             Node[]
  edges             Edge[]
  executionHistory  ExecutionHistory[]
  
  @@index([userId])
  @@index([createdAt])
  @@index([updatedAt])
}
```

**Fields:**
- `id` - Primary key (CUID)
- `userId` - Foreign key to User
- `name` - Workflow display name
- `description` - Optional description
- `data` - JSON storage for full node/edge data
- `createdAt` - When workflow was created
- `updatedAt` - Last modified timestamp
- `deletedAt` - Soft delete timestamp (optional)

**Indexes:**
- `userId` (for user's workflow list)
- `createdAt` (for sorting)
- `updatedAt` (for "recently modified")

**Constraints:**
- Foreign key to User with CASCADE delete

**Relations:**
- Many-to-one with User
- One-to-many with Node
- One-to-many with Edge
- One-to-many with ExecutionHistory

**Notes:**
- Full workflow stored as JSON in `data` field
- Nodes and edges also stored as individual records for querying
- Supports soft deletes via `deletedAt` for archival

## Node Table

Stores individual nodes for efficient querying and filtering.

```sql
CREATE TABLE Node (
  id                String @id @default(cuid())
  workflowId        String
  type              String // 'text' | 'image_upload' | 'video_upload' | 'llm' | 'crop_image' | 'extract_frame'
  data              Json
  position          Json @default("{}")
  
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
  
  workflow          Workflow @relation(fields: [workflowId], references: [id], onDelete: Cascade)
  
  @@index([workflowId])
  @@index([type])
}
```

**Fields:**
- `id` - Primary key (CUID)
- `workflowId` - Foreign key to Workflow
- `type` - Node type (text, image_upload, etc.)
- `data` - Node configuration as JSON
- `position` - Canvas position {x, y}
- `createdAt` - Creation timestamp
- `updatedAt` - Last update timestamp

**Indexes:**
- `workflowId` (for listing workflow nodes)
- `type` (for node type filtering)

**Constraints:**
- Foreign key to Workflow with CASCADE delete

**Relations:**
- Many-to-one with Workflow

## Edge Table

Stores connections between nodes.

```sql
CREATE TABLE Edge (
  id                String @id @default(cuid())
  workflowId        String
  source            String // Source node ID
  target            String // Target node ID
  sourceHandle      String?
  targetHandle      String?
  
  createdAt         DateTime @default(now())
  
  workflow          Workflow @relation(fields: [workflowId], references: [id], onDelete: Cascade)
  
  @@index([workflowId])
  @@index([source])
  @@index([target])
  @@unique([workflowId, source, target])
}
```

**Fields:**
- `id` - Primary key (CUID)
- `workflowId` - Foreign key to Workflow
- `source` - Source node ID
- `target` - Target node ID
- `sourceHandle` - Output handle name
- `targetHandle` - Input handle name
- `createdAt` - Creation timestamp

**Indexes:**
- `workflowId` (for listing workflow edges)
- `source` (for finding node outputs)
- `target` (for finding node inputs)
- Unique constraint on (workflowId, source, target)

**Constraints:**
- Foreign key to Workflow with CASCADE delete
- Unique edge per (workflow, source, target)

**Relations:**
- Many-to-one with Workflow

## ExecutionHistory Table

Tracks all workflow executions with node-level details.

```sql
CREATE TABLE ExecutionHistory (
  id                String @id @default(cuid())
  workflowId        String
  userId            String
  status            String // 'success' | 'failed' | 'running' | 'partial'
  scope             String // 'full' | 'partial' | 'single'
  executedNodeIds   Json // string[]
  nodeResults       Json // Record<string, NodeExecutionResult>
  nodeErrors        Json // Record<string, string>
  nodeLogs          Json // Record<string, string[]>
  triggerTaskIds    Json? // Record<string, string>
  
  startTime         DateTime
  endTime           DateTime?
  duration          Int? // milliseconds
  
  createdAt         DateTime @default(now())
  
  workflow          Workflow @relation(fields: [workflowId], references: [id], onDelete: Cascade)
  user              User @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@index([workflowId])
  @@index([userId])
  @@index([createdAt])
  @@index([status])
}
```

**Fields:**
- `id` - Primary key (CUID)
- `workflowId` - Foreign key to Workflow
- `userId` - Foreign key to User
- `status` - Overall execution status
- `scope` - Execution scope (full/partial/single)
- `executedNodeIds` - Array of node IDs executed
- `nodeResults` - Results per node as JSON
- `nodeErrors` - Errors per node as JSON
- `nodeLogs` - Logs per node as JSON array
- `triggerTaskIds` - Trigger.dev task IDs for monitoring
- `startTime` - Execution start timestamp
- `endTime` - Execution end timestamp
- `duration` - Total execution time in ms
- `createdAt` - Record creation timestamp

**Indexes:**
- `workflowId` (for workflow history)
- `userId` (for user's execution history)
- `createdAt` (for sorting by date)
- `status` (for filtering by status)

**Constraints:**
- Foreign key to Workflow with CASCADE delete
- Foreign key to User with CASCADE delete

**Relations:**
- Many-to-one with Workflow
- Many-to-one with User

## NodeExecutionResult JSON Schema

Structure stored in ExecutionHistory.nodeResults:

```typescript
{
  status: 'success' | 'failed',
  output?: any,           // Node output data
  error?: string,         // Error message if failed
  startTime: Date,        // When node execution started
  endTime: Date,          // When node execution ended
  duration: number,       // Execution time in ms
  inputs: Record<string, any>,  // Input values
  logs: string[]          // Execution logs
}
```

## Data Access Patterns

### Get User's Workflows
```sql
SELECT * FROM Workflow 
WHERE userId = 'user-id' 
ORDER BY updatedAt DESC;
```

### Get Workflow with Dependencies
```sql
SELECT 
  w.*,
  json_agg(json_build_object(
    'id', n.id,
    'type', n.type,
    'data', n.data
  )) as nodes,
  json_agg(json_build_object(
    'id', e.id,
    'source', e.source,
    'target', e.target
  )) as edges
FROM Workflow w
LEFT JOIN Node n ON w.id = n.workflowId
LEFT JOIN Edge e ON w.id = e.workflowId
WHERE w.id = 'workflow-id'
GROUP BY w.id;
```

### Get Execution History for Workflow
```sql
SELECT * FROM ExecutionHistory
WHERE workflowId = 'workflow-id'
ORDER BY createdAt DESC
LIMIT 20;
```

### Get Node Execution Details
```sql
SELECT 
  id,
  nodeResults->'node-id' as nodeResult,
  nodeErrors->'node-id' as nodeError,
  nodeLogs->'node-id' as nodeLog
FROM ExecutionHistory
WHERE id = 'execution-id';
```

### Find All Edges from Node
```sql
SELECT * FROM Edge
WHERE source = 'node-id'
AND workflowId = 'workflow-id';
```

### Cascade Delete Workflow
```sql
DELETE FROM Workflow 
WHERE id = 'workflow-id';
-- Automatically deletes related Node, Edge, ExecutionHistory rows
```

## Performance Considerations

### Indexes
All critical queries are indexed:
- User lookups: `clerkId`
- Workflow lists: `userId`, `createdAt`, `updatedAt`
- History retrieval: `workflowId`, `userId`, `createdAt`, `status`
- Edge queries: `workflowId`, `source`, `target`

### JSON Queries
- Node/edge data stored as JSON for schema flexibility
- Can still query JSON fields for filtering
- Denormalized Node/Edge tables for efficient queries

### Soft Deletes
Optional soft delete support via `deletedAt`:
```typescript
// Include deleted workflows
const all = await db.workflow.findMany({ where: { userId } });

// Exclude deleted
const active = await db.workflow.findMany({
  where: { userId, deletedAt: null }
});
```

### Batch Operations
Use Prisma's batch operations for performance:
```typescript
// Create multiple nodes at once
await db.node.createMany({
  data: nodes.map(n => ({
    workflowId,
    type: n.data.nodeType,
    data: n.data,
    position: n.position,
  }))
});
```

## Schema Evolution

### Adding a New Node Type
1. Update Node.type enum
2. Add new schema to `lib/schemas.ts`
3. Update type definitions
4. Create new node component
5. Add to node library

### Adding Workflow Metadata
```prisma
model Workflow {
  // ... existing fields
  tags        String[]
  category    String?
  isPublic    Boolean @default(false)
  viewCount   Int @default(0)
}
```

### Audit Trail (Future)
```prisma
model WorkflowAudit {
  id          String @id @default(cuid())
  workflowId  String
  userId      String
  action      String // 'created' | 'updated' | 'deleted'
  changes     Json
  createdAt   DateTime @default(now())
}
```

## Backup & Recovery

PostgreSQL/Neon features:
- Point-in-time recovery
- Automated daily backups
- WAL archiving for replication
- Export to S3 capability

Recommended backup strategy:
```bash
# Daily backup to S3
pg_dump <database> | gzip > backup-$(date +%Y%m%d).sql.gz
aws s3 cp backup-*.sql.gz s3://backups/nextflow/
```

## Migration Management

All changes go through Prisma migrations:

```bash
# Create migration
pnpm prisma migrate dev --name add_workflow_tags

# Deploy to production
pnpm prisma migrate deploy

# View migration history
pnpm prisma migrate status

# Rollback (use with caution)
pnpm prisma migrate resolve --rolled-back add_workflow_tags
```

## Connection Pooling

For serverless (Vercel):
```
DATABASE_URL="postgresql://user:pass@host/db?sslmode=require"
# Use Neon or PlanetScale connection pooling
```

For local development:
```
DATABASE_URL="postgresql://localhost/nextflow"
```

## Security Best Practices

1. ✅ User data isolation via userId
2. ✅ Never expose internal IDs to client
3. ✅ Validate all inputs via Zod
4. ✅ Use parameterized queries (Prisma)
5. ✅ Encrypt sensitive fields in JSON
6. ✅ Log all audit events
7. ✅ Regular backups to separate storage

## Monitoring

Key metrics to monitor:
- Query performance (slow query log)
- Connection pool usage
- Disk space usage
- Row count per table
- Execution history growth

Set up alerts for:
- Query >1s execution time
- >90% connection pool used
- >80% disk space used
- Failed backups

---

This schema is optimized for production use with thousands of workflows and millions of execution records.
