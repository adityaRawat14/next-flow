'use client';

import React, { useState, useEffect } from 'react';
import { Plus, Zap, Layers } from 'lucide-react';
import { useWorkflowStore } from '@/lib/store';
import { TemplatesModal } from './TemplatesModal';
import { WorkflowTemplate } from '@/lib/templates';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export const WelcomePage: React.FC<{ onGetStarted: () => void }> = ({ onGetStarted }) => {
  const [showTemplates, setShowTemplates] = useState(false);
  const [templates, setTemplates] = useState<WorkflowTemplate[]>([]);
  const setNodes = useWorkflowStore((state) => state.setNodes);
  const setEdges = useWorkflowStore((state) => state.setEdges);

  useEffect(() => {
    const loadTemplates = async () => {
      try {
        const response = await axios.get('/api/templates');
        if (response.data.success) {
          setTemplates(response.data.data.slice(0, 3));
        }
      } catch (error) {
        console.error('[v0] Failed to load templates:', error);
      }
    };

    loadTemplates();
  }, []);

  const handleEmptyWorkflow = () => {
    setNodes([]);
    setEdges([]);
    onGetStarted();
  };

  const handleTemplateSelect = (template: WorkflowTemplate) => {
    setNodes(template.nodes);
    setEdges(template.edges);
    onGetStarted();
  };

  return (
    <div className="min-h-screen bg-[rgb(13,13,13)] flex flex-col items-center justify-center p-6">
      {/* Header */}
      <div className="max-w-3xl w-full text-center mb-12">
        <div className="w-20 h-20 bg-gradient-to-br from-[rgb(59,130,246)] to-[rgb(168,85,247)] rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Layers className="w-10 h-10 text-white" />
        </div>

        <h1 className="text-5xl font-bold text-[rgb(245,245,245)] mb-4">
          Workflow Editor
        </h1>
        <p className="text-xl text-[rgb(100,100,100)] mb-8">
          Create powerful AI workflows by connecting nodes. Build image processors, text analyzers, and more.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={handleEmptyWorkflow}
            className="flex items-center gap-2 px-6 py-3 bg-[rgb(59,130,246)] hover:bg-[rgb(37,99,235)] text-white rounded-lg font-semibold transition-colors"
          >
            <Plus className="w-5 h-5" />
            New Empty Workflow
          </button>
          <button
            onClick={() => setShowTemplates(true)}
            className="flex items-center gap-2 px-6 py-3 bg-[rgb(51,51,51)] hover:bg-[rgb(70,70,70)] text-[rgb(245,245,245)] rounded-lg font-semibold transition-colors"
          >
            <Zap className="w-5 h-5" />
            Browse Templates
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 bg-[rgb(25,25,25)] border border-[rgb(51,51,51)] rounded-lg">
          <div className="text-3xl mb-3">🔗</div>
          <h3 className="text-lg font-bold text-[rgb(245,245,245)] mb-2">
            Connect Nodes
          </h3>
          <p className="text-sm text-[rgb(100,100,100)]">
            Drag and drop nodes to build complex workflows
          </p>
        </div>

        <div className="p-6 bg-[rgb(25,25,25)] border border-[rgb(51,51,51)] rounded-lg">
          <div className="text-3xl mb-3">⚡</div>
          <h3 className="text-lg font-bold text-[rgb(245,245,245)] mb-2">
            Execute Instantly
          </h3>
          <p className="text-sm text-[rgb(100,100,100)]">
            Run workflows and see results in real-time
          </p>
        </div>

        <div className="p-6 bg-[rgb(25,25,25)] border border-[rgb(51,51,51)] rounded-lg">
          <div className="text-3xl mb-3">🤖</div>
          <h3 className="text-lg font-bold text-[rgb(245,245,245)] mb-2">
            AI-Powered
          </h3>
          <p className="text-sm text-[rgb(100,100,100)]">
            Powered by Gemini for intelligent processing
          </p>
        </div>
      </div>

      {/* Popular Templates */}
      {templates.length > 0 && (
        <div className="max-w-4xl w-full">
          <h2 className="text-2xl font-bold text-[rgb(245,245,245)] mb-4">
            Popular Templates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {templates.map((template) => (
              <button
                key={template.id}
                onClick={() => handleTemplateSelect(template)}
                className="p-4 bg-[rgb(25,25,25)] border border-[rgb(51,51,51)] rounded-lg hover:border-[rgb(59,130,246)] hover:bg-[rgb(35,35,35)] transition-all text-left group"
              >
                <div className="w-full h-24 bg-gradient-to-br from-[rgb(59,130,246)]/20 to-[rgb(168,85,247)]/20 rounded-md mb-3 flex items-center justify-center">
                  <span className="text-2xl">
                    {template.category === 'image' ? '🖼️' : template.category === 'text' ? '📝' : '🎬'}
                  </span>
                </div>
                <h3 className="font-bold text-[rgb(245,245,245)] mb-1">
                  {template.name}
                </h3>
                <p className="text-xs text-[rgb(100,100,100)] group-hover:text-[rgb(163,163,163)]">
                  {template.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      <TemplatesModal isOpen={showTemplates} onClose={() => setShowTemplates(false)} />
    </div>
  );
};
