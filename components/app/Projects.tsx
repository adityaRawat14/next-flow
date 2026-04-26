'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CirclePlus, Loader } from 'lucide-react';

export default function Projects() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function handleCreateWorkflow() {
    setIsLoading(true);
    try {
      const response = await fetch('/api/workflows', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Untitled Workflow',
          description: 'A new workflow',
          nodes: [],
          edges: [],
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create workflow');
      }

      const data = await response.json();
      const workflowId = data.data.id;

      // Redirect to the workflow editor
      router.push(`/workflow-editor/${workflowId}`);
    } catch (error) {
      console.error("this error occuring in creating a new workflow", error);
      alert('Failed to create workflow');
      setIsLoading(false);
    }
  }

  return (
    <div className="py-10 text-zinc-500 text-sm flex gap-4 w-[70vw] flex-wrap">
      <div className="flex flex-col gap-2 pl-0.2">
        <button
          onClick={handleCreateWorkflow}
          disabled={isLoading}
          className="w-50 cursor-pointer h-30 border bg-[#262626] border-zinc-800 rounded-md flex justify-center items-center text-white hover:bg-[#333333] transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? <Loader className="animate-spin" /> : <CirclePlus />}
        </button>
        <span className="text-white text-[12px] font-medium">New Workflow</span>
      </div>
    </div>
  );
}