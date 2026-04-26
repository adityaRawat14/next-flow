# NextFlow Documentation Index

Welcome to NextFlow! This index guides you through all available documentation.

## 📚 Start Here

### New to NextFlow?
1. Start with **[NEXTFLOW_README.md](./NEXTFLOW_README.md)** - Complete overview
2. Read **[PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)** - What's built vs what's todo
3. Follow **[QUICK_START.md](./QUICK_START.md)** - Setup and development roadmap

### Want Implementation Details?
1. Check **[IMPLEMENTATION_CHECKLIST.md](./IMPLEMENTATION_CHECKLIST.md)** - Status of all components
2. Review **[API_REFERENCE.md](./API_REFERENCE.md)** - All API endpoints
3. Study **[DATABASE_SCHEMA.md](./DATABASE_SCHEMA.md)** - Database design

## 📖 Documentation Files

### Overview Documents

| File | Purpose | Audience |
|------|---------|----------|
| **NEXTFLOW_README.md** | Complete project overview, architecture, features, and deployment | Everyone |
| **PROJECT_SUMMARY.md** | High-level summary of what's built, what's todo, and next steps | Project managers, developers |
| **QUICK_START.md** | Step-by-step setup guide and development roadmap | New developers |
| **IMPLEMENTATION_CHECKLIST.md** | Detailed status of all components and features | Developers, QA |
| **DOCUMENTATION_INDEX.md** | This file - navigation guide | Everyone |

### Technical References

| File | Purpose | Audience |
|------|---------|----------|
| **API_REFERENCE.md** | Complete API endpoint documentation with examples | Backend developers, integrators |
| **DATABASE_SCHEMA.md** | PostgreSQL schema design and data access patterns | Database engineers, backend developers |

## 🎯 Find What You Need

### Setup & Deployment
- **Getting Started**: [QUICK_START.md](./QUICK_START.md#setup-steps)
- **Environment Variables**: [NEXTFLOW_README.md](./NEXTFLOW_README.md#setup-instructions) & [.env.example](./.env.example)
- **Database Setup**: [DATABASE_SCHEMA.md](./DATABASE_SCHEMA.md)
- **Deploy to Vercel**: [NEXTFLOW_README.md](./NEXTFLOW_README.md#deploy-to-vercel)

### API Documentation
- **All Endpoints**: [API_REFERENCE.md](./API_REFERENCE.md)
- **Workflows API**: [API_REFERENCE.md](./API_REFERENCE.md#workflows)
- **Execution API**: [API_REFERENCE.md](./API_REFERENCE.md#execution)
- **Error Handling**: [API_REFERENCE.md](./API_REFERENCE.md#error-responses)

### Database
- **Schema Overview**: [DATABASE_SCHEMA.md](./DATABASE_SCHEMA.md#overview)
- **Table Definitions**: [DATABASE_SCHEMA.md](./DATABASE_SCHEMA.md#user-table)
- **Data Access Patterns**: [DATABASE_SCHEMA.md](./DATABASE_SCHEMA.md#data-access-patterns)
- **Performance Tips**: [DATABASE_SCHEMA.md](./DATABASE_SCHEMA.md#performance-considerations)

### Development
- **Project Structure**: [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md#project-structure)
- **What's Completed**: [IMPLEMENTATION_CHECKLIST.md](./IMPLEMENTATION_CHECKLIST.md#-completed-components)
- **What's Needed**: [IMPLEMENTATION_CHECKLIST.md](./IMPLEMENTATION_CHECKLIST.md#-still-to-implement)
- **Tech Stack**: [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md#key-technologies)
- **Code Examples**: [QUICK_START.md](./QUICK_START.md#code-examples)

### Troubleshooting
- **Setup Issues**: [QUICK_START.md](./QUICK_START.md#setup-steps)
- **API Issues**: [API_REFERENCE.md](./API_REFERENCE.md#error-responses)
- **Database Issues**: [DATABASE_SCHEMA.md](./DATABASE_SCHEMA.md#connection-pooling)

## 🔍 Feature Documentation

### Authentication (Clerk)
- Setup: [QUICK_START.md](./QUICK_START.md#setup-steps)
- Routes: `/sign-in`, `/sign-up`
- Middleware: [middleware.ts](./middleware.ts)
- Protection: [API Routes](./app/api/workflows/route.ts)

### Workflows
- CRUD API: [API_REFERENCE.md#workflows](./API_REFERENCE.md#workflows)
- Database: [DATABASE_SCHEMA.md#workflow-table](./DATABASE_SCHEMA.md#workflow-table)
- Storage: PostgreSQL with Prisma
- Example: [QUICK_START.md#sample-workflow](./QUICK_START.md#sample-workflow-product-marketing-kit-generator)

### Node Types (6 Total)
1. **Text Node** - Text input node
2. **Image Upload** - Upload images (jpg, png, webp, gif)
3. **Video Upload** - Upload videos (mp4, mov, webm, m4v)
4. **LLM Node** - Run Google Gemini with vision
5. **Crop Image** - FFmpeg-based image cropping
6. **Extract Frame** - FFmpeg frame extraction from video

All types defined in: [lib/types.ts](./lib/types.ts)

### Execution Engine
- Flow: [QUICK_START.md#execution-flow](./QUICK_START.md#execution-flow)
- Implementation: [app/api/execute/route.ts](./app/api/execute/route.ts)
- Database: [DATABASE_SCHEMA.md#executionhistory-table](./DATABASE_SCHEMA.md#executionhistory-table)

### Trigger.dev Integration
- Tasks: [lib/trigger.ts](./lib/trigger.ts)
- Setup: [QUICK_START.md#get-api-keys](./QUICK_START.md#get-api-keys-10-minutes)
- Tasks: LLM execution, Image crop, Frame extract

## 📋 Common Tasks

### Add a New API Endpoint
1. Create route file: `app/api/new-endpoint/route.ts`
2. Add Zod schema: `lib/schemas.ts`
3. Update types if needed: `lib/types.ts`
4. Document in: `API_REFERENCE.md`
5. Add tests (future)

### Modify Database Schema
1. Update `prisma/schema.prisma`
2. Create migration: `pnpm prisma migrate dev --name description`
3. Deploy: `pnpm prisma migrate deploy`
4. Update docs: `DATABASE_SCHEMA.md`

### Deploy Changes
1. Commit and push to GitHub
2. Vercel auto-deploys main branch
3. Or manually: `vercel --prod`
4. Check environment variables
5. Run migrations: `pnpm prisma migrate deploy`

### Debug Issues
1. Enable Prisma logging: `DEBUG="prisma:*" pnpm dev`
2. Check API responses: Browser DevTools Network tab
3. View database: `pnpm prisma studio`
4. Check server logs: Vercel dashboard

## 🚀 Quick Links

### External Resources
- [Next.js Docs](https://nextjs.org/docs)
- [React Flow Docs](https://reactflow.dev)
- [Prisma Docs](https://www.prisma.io/docs)
- [Clerk Docs](https://clerk.com/docs)
- [Zod Docs](https://zod.dev)
- [Trigger.dev Docs](https://trigger.dev/docs)
- [Google Generative AI](https://ai.google.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Internal Code
- [Type Definitions](./lib/types.ts)
- [Validation Schemas](./lib/schemas.ts)
- [Zustand Store](./lib/store.ts)
- [Trigger Tasks](./lib/trigger.ts)
- [API Routes](./app/api/)
- [Environment Template](./.env.example)

## 📊 Status Overview

### Infrastructure (✅ Complete)
- [x] Clerk authentication
- [x] PostgreSQL database
- [x] Prisma ORM
- [x] API routes
- [x] Type safety
- [x] Validation
- [x] Error handling

### UI Components (⚙️ In Progress)
- [ ] Node components
- [ ] Canvas features
- [ ] File upload UI
- [ ] History panel
- [ ] Execution controls

### Integrations (⚙️ Mock Mode)
- [ ] Trigger.dev (actual tasks)
- [ ] Google Gemini (real calls)
- [ ] Transloadit (real uploads)
- [ ] FFmpeg (real processing)

## 📞 Getting Help

1. **Setup Issues**: Check [QUICK_START.md](./QUICK_START.md)
2. **API Questions**: See [API_REFERENCE.md](./API_REFERENCE.md)
3. **Database Questions**: Review [DATABASE_SCHEMA.md](./DATABASE_SCHEMA.md)
4. **Implementation Help**: Check [IMPLEMENTATION_CHECKLIST.md](./IMPLEMENTATION_CHECKLIST.md)
5. **General Info**: Read [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)

## 📈 Project Timeline

### Phase 1: Foundation ✅ Complete
- Authentication
- Database
- API routes
- Type system
- Validation

### Phase 2: UI Components 🚧 In Progress
- Node components
- Canvas features
- File uploads
- History panel

### Phase 3: Execution 🚧 Starting
- Real Trigger.dev tasks
- Real Gemini API
- Real file uploads
- Real FFmpeg

### Phase 4: Polish 📅 Planned
- Error handling
- Keyboard shortcuts
- Templates
- Demo video

## 🎓 Learning Path

1. Read [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) (10 min)
2. Follow [QUICK_START.md](./QUICK_START.md) setup (30 min)
3. Run `pnpm dev` and test login (10 min)
4. Review [API_REFERENCE.md](./API_REFERENCE.md) (20 min)
5. Study [DATABASE_SCHEMA.md](./DATABASE_SCHEMA.md) (20 min)
6. Check [IMPLEMENTATION_CHECKLIST.md](./IMPLEMENTATION_CHECKLIST.md) (10 min)
7. Start building components (ongoing)

**Total**: ~2 hours to fully understand the project

## Version Info

- **NextFlow**: v1.0.0
- **Next.js**: 16
- **React**: 19.2
- **Node**: 18+
- **Package Manager**: pnpm

---

**Last Updated**: January 14, 2026

For the latest docs, check the main branch of the repository.
