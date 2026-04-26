'use client';

import React, { useEffect } from 'react';
import { useWorkflowStore } from '@/lib/store';
import { WorkflowCanvas } from './WorkflowCanvas';
import { NodeLibrary } from './NodeLibrary';
import { ExecutionPanel } from './ExecutionPanel';
import { Menu, Plus, Save } from 'lucide-react';
import axios from 'axios';

export const WorkflowEditor: React.FC = () => {
  const [showLibrary, setShowLibrary] = React.useState(true);
  const [workflowName, setWorkflowName] = React.useState('Untitled');
  const [isSaving, setIsSaving] = React.useState(false);

  const currentWorkflow = useWorkflowStore((state) => state.currentWorkflow);
  const nodes = useWorkflowStore((state) => state.nodes);
  const edges = useWorkflowStore((state) => state.edges);
  const nodeDefinitions = useWorkflowStore((state) => state.nodeDefinitions);
  const setShowNodeLibrary = useWorkflowStore((state) => state.setShowNodeLibrary);
  const setNodeDefinitions = useWorkflowStore((state) => state.setNodeDefinitions);

  // Load node definitions on mount
  useEffect(() => {
    const loadNodeDefinitions = async () => {
      try {
        const response = await axios.get('/api/nodes');
        if (response.data.success) {
          setNodeDefinitions(response.data.data);
        }
      } catch (error) {
        console.error('[v0] Failed to load node definitions:', error);
      }
    };

    if (nodeDefinitions.length === 0) {
      loadNodeDefinitions();
    }
  }, [nodeDefinitions.length, setNodeDefinitions]);

  // Update library visibility in store
  useEffect(() => {
    setShowNodeLibrary(showLibrary);
  }, [showLibrary, setShowNodeLibrary]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Toggle library with 'L'
      if (e.key === 'l' && e.ctrlKey) {
        e.preventDefault();
        setShowLibrary(!showLibrary);
      }
      // Save with 'S'
      if (e.key === 's' && e.ctrlKey) {
        e.preventDefault();
        handleSaveWorkflow();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showLibrary, handleSaveWorkflow]);

  const handleSaveWorkflow = async () => {
    if (nodes.length === 0) {
      alert('Cannot save empty workflow');
      return;
    }

    setIsSaving(true);
    try {
      const workflowData = {
        name: workflowName,
        nodes,
        edges,
        description: `Workflow with ${nodes.length} nodes`,
      };

      const response = await axios.post('/api/workflows', workflowData);
      if (response.data.success) {
        alert(`Workflow saved: ${response.data.data.id}`);
      }
    } catch (error) {
      console.error('[v0] Failed to save workflow:', error);
      alert('Failed to save workflow');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="h-screen w-full flex bg-[rgb(13,13,13)]">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-[rgb(20,20,20)] border-b border-[rgb(51,51,51)] flex items-center justify-between px-4 z-50">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowLibrary(!showLibrary)}
            className="p-2 hover:bg-[rgb(51,51,51)] rounded-md transition-colors"
            title="Toggle node library"
          >
            <Menu className="w-5 h-5 text-[rgb(245,245,245)]" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[rgb(59,130,246)] to-[rgb(168,85,247)] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <input
              type="text"
              value={workflowName}
              onChange={(e) => setWorkflowName(e.target.value)}
              className="text-lg font-semibold bg-transparent text-[rgb(245,245,245)] border-b border-transparent hover:border-[rgb(51,51,51)] focus:border-[rgb(59,130,246)] outline-none py-1 px-2 transition-colors"
              placeholder="Workflow name"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleSaveWorkflow}
            disabled={isSaving || nodes.length === 0}
            className="flex items-center gap-2 px-4 py-2 bg-[rgb(59,130,246)] hover:bg-[rgb(37,99,235)] disabled:bg-[rgb(100,100,100)] text-white rounded-md font-medium transition-colors"
          >
            <Save className="w-4 h-4" />
            {isSaving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 mt-16 flex">
        {/* Node Library */}
        {showLibrary && (
          <div className="w-80">
            <NodeLibrary />
          </div>
        )}

        {/* Canvas */}
        <div className="flex-1 overflow-hidden">
          <WorkflowCanvas />
        </div>

        {/* Execution Panel */}
        <div className="w-96">
          <ExecutionPanel />
        </div>
      </div>

      {/* Floating Hints */}
      {nodes.length === 0 && (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[rgb(163,163,163)] mb-2">
              Add a node
            </h2>
            <p className="text-[rgb(100,100,100)]">
              Double click, right click, or press <kbd className="px-2 py-1 bg-[rgb(51,51,51)] rounded text-[rgb(245,245,245)] font-mono">N</kbd>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
