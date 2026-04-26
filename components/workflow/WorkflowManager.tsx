'use client';

import React, { useEffect, useState } from 'react';
import { useWorkflowStore } from '@/lib/store';
import { Trash2, Clock, Save, Eye } from 'lucide-react';
import axios from 'axios';

interface SavedWorkflow {
  id: string;
  name: string;
  description?: string;
  created_at: string;
  updated_at: string;
  nodes_count?: number;
}

export const WorkflowManager: React.FC = () => {
  const [workflows, setWorkflows] = useState<SavedWorkflow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const setCurrentWorkflow = useWorkflowStore((state) => state.setCurrentWorkflow);
  const setNodes = useWorkflowStore((state) => state.setNodes);
  const setEdges = useWorkflowStore((state) => state.setEdges);

  useEffect(() => {
    loadWorkflows();
  }, []);

  const loadWorkflows = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('/api/workflows');
      if (response.data.success) {
        setWorkflows(response.data.data);
      }
    } catch (error) {
      console.error('[v0] Failed to load workflows:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadWorkflow = async (workflowId: string) => {
    try {
      const response = await axios.get(`/api/workflows/${workflowId}`);
      if (response.data.success) {
        const workflow = response.data.data;
        setNodes(workflow.nodes || []);
        setEdges(workflow.edges || []);
      }
    } catch (error) {
      console.error('[v0] Failed to load workflow:', error);
    }
  };

  const handleDeleteWorkflow = async (workflowId: string) => {
    if (!confirm('Delete this workflow?')) return;

    try {
      const response = await axios.delete(`/api/workflows/${workflowId}`);
      if (response.data.success) {
        setWorkflows((w) => w.filter((wf) => wf.id !== workflowId));
      }
    } catch (error) {
      console.error('[v0] Failed to delete workflow:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-[rgb(100,100,100)]">Loading workflows...</div>
      </div>
    );
  }

  if (workflows.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <Clock className="w-12 h-12 text-[rgb(100,100,100)] mb-4" />
        <p className="text-[rgb(100,100,100)]">No saved workflows yet</p>
        <p className="text-sm text-[rgb(80,80,80)] mt-1">Create and save your first workflow</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="px-4 py-2 text-xs font-medium text-[rgb(100,100,100)] uppercase">
        Recent Workflows
      </div>
      {workflows.map((workflow) => (
        <div
          key={workflow.id}
          className="mx-2 p-3 bg-[rgb(38,38,38)] border border-[rgb(51,51,51)] rounded-lg hover:border-[rgb(59,130,246)] transition-colors group"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="font-medium text-sm text-[rgb(245,245,245)]">
                {workflow.name}
              </h4>
              {workflow.description && (
                <p className="text-xs text-[rgb(100,100,100)] mt-1">
                  {workflow.description}
                </p>
              )}
              <div className="text-xs text-[rgb(80,80,80)] mt-2">
                {new Date(workflow.updated_at).toLocaleDateString()}
              </div>
            </div>
            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => handleLoadWorkflow(workflow.id)}
                className="p-2 hover:bg-[rgb(59,130,246)] rounded transition-colors text-[rgb(100,100,100)] hover:text-white"
                title="Load workflow"
              >
                <Eye className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDeleteWorkflow(workflow.id)}
                className="p-2 hover:bg-[rgb(239,68,68)] rounded transition-colors text-[rgb(100,100,100)] hover:text-white"
                title="Delete workflow"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
