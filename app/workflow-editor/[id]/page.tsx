'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { ReactFlow, ReactFlowProvider } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Loader } from 'lucide-react';
import { CompleteWorkflowEditor } from '@/components/workflow/CompleteWorkflowEditor';
import { useClerk } from '@clerk/nextjs';
interface Workflow {
  id: string;
  name: string;
  description?: string;
  data: {
    nodes: any[];
    edges: any[];
  };
  createdAt: string;
  updatedAt: string;
}

export default function EditorPage() {
  const {redirectToSignIn}=useClerk()
  const router = useRouter();
  const { isLoaded, user } = useUser();

// const params = useParams<{ id: string }>();
// const workflowId = params?.id;

//   const [workflow, setWorkflow] = useState<Workflow | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!isLoaded || !user) return;

//     if (workflowId) {
//       console.log(workflowId)
//       fetchWorkflow();
//     }
//   }, [workflowId, isLoaded, user]);

//   const fetchWorkflow = async () => {
//     try {
//       const response = await fetch(`/api/workflows/${workflowId}`);
//       if (!response.ok) {
//         if (response.status === 404) {
//           router.push('/app/nodes');
//           return;
//         }
//         throw new Error('Failed to fetch');
//       }

//       const data = await response.json();
//       const w = data.data;

//       setWorkflow(w);
//     } catch (error) {
//       console.error('[v0] Error fetching workflow:', error);
//       router.push('/app/nodes');
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!isLoaded || loading) {
//     return (
//       <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
//         <Loader className="w-8 h-8 animate-spin text-blue-500" />
//       </div>
//     );
//   }

//   if (!user) {
//     redirectToSignIn()
//     return null;
//   }

//   if (!workflow) {
//     return (
//       <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center text-white">
//         <div>Workflow not found</div>
//       </div>
//     );
//   }

  const workflow={
    id:"cmof7ktqp0001usy41tm0mlll",
    name:"fsdjflksdjf",
    description:"fkjsdlfj",
    data:{
      nodes:[],
      edges:[]
    }
  }

  return (
    <ReactFlowProvider >
      
      <CompleteWorkflowEditor
        workflowId={workflow.id}
        workflowName={workflow.name}
        workflowDescription={workflow.description}
        initialNodes={workflow.data?.nodes || []}
        initialEdges={workflow.data?.edges || []}
      /> 
    </ReactFlowProvider>
  );
}
