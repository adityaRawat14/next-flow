'use client';

import React, { useEffect, useState } from 'react';
import { useWorkflowStore } from '@/lib/store';
import {
  Home,
  Settings,
  Save,
  Trash2,
  Copy,
  ChevronRight,
  Plus,
  History,
} from 'lucide-react';
import axios from 'axios';

export const Sidebar: React.FC = () => {
  const [workflows, setWorkflows] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const currentWorkflow = useWorkflowStore((state) => state.currentWorkflow);
  const resetWorkflow = useWorkflowStore((state) => state.resetWorkflow);

  useEffect(() => {
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

    loadWorkflows();
  }, []);

  const handleNewWorkflow = () => {
    resetWorkflow();
  };

  const handleDeleteWorkflow = async (id: string) => {
    if (!confirm('Are you sure you want to delete this workflow?')) {
      return;
    }

    try {
      const response = await axios.delete(`/api/workflows/${id}`);
      if (response.data.success) {
        setWorkflows((w) => w.filter((wf) => wf.id !== id));
      }
    } catch (error) {
      console.error('[v0] Failed to delete workflow:', error);
    }
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-16 bg-[rgb(20,20,20)] border-r border-[rgb(51,51,51)] flex flex-col items-center py-4 space-y-4 z-40">
      {/* Logo */}
      <div className="w-10 h-10 bg-gradient-to-br from-[rgb(59,130,246)] to-[rgb(168,85,247)] rounded-lg flex items-center justify-center mb-4">
        <span className="text-white font-bold">W</span>
      </div>

      {/* Navigation */}
      <button
        title="Home"
        className="p-3 hover:bg-[rgb(51,51,51)] rounded-lg transition-colors text-[rgb(163,163,163)] hover:text-[rgb(59,130,246)]"
      >
        <Home className="w-5 h-5" />
      </button>

      <button
        title="New Workflow"
        onClick={handleNewWorkflow}
        className="p-3 hover:bg-[rgb(51,51,51)] rounded-lg transition-colors text-[rgb(163,163,163)] hover:text-[rgb(59,130,246)]"
      >
        <Plus className="w-5 h-5" />
      </button>

      <button
        title="History"
        className="p-3 hover:bg-[rgb(51,51,51)] rounded-lg transition-colors text-[rgb(163,163,163)] hover:text-[rgb(59,130,246)]"
      >
        <History className="w-5 h-5" />
      </button>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Settings */}
      <button
        title="Settings"
        className="p-3 hover:bg-[rgb(51,51,51)] rounded-lg transition-colors text-[rgb(163,163,163)] hover:text-[rgb(59,130,246)]"
      >
        <Settings className="w-5 h-5" />
      </button>

      <div className="w-full" />
    </div>
  );
};
