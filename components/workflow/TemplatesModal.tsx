'use client';

import React, { useEffect, useState } from 'react';
import { X, Plus } from 'lucide-react';
import { useWorkflowStore } from '@/lib/store';
import { WorkflowTemplate } from '@/lib/templates';
import axios from 'axios';

interface TemplatesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TemplatesModal: React.FC<TemplatesModalProps> = ({ isOpen, onClose }) => {
  const [templates, setTemplates] = useState<WorkflowTemplate[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(false);

  const setCurrentWorkflow = useWorkflowStore((state) => state.setCurrentWorkflow);
  const setNodes = useWorkflowStore((state) => state.setNodes);
  const setEdges = useWorkflowStore((state) => state.setEdges);

  useEffect(() => {
    const loadTemplates = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('/api/templates');
        if (response.data.success) {
          setTemplates(response.data.data);
        }
      } catch (error) {
        console.error('[v0] Failed to load templates:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (isOpen) {
      loadTemplates();
    }
  }, [isOpen]);

  const categories = ['all', 'image', 'text', 'video', 'processing'];
  
  const filteredTemplates = selectedCategory === 'all'
    ? templates
    : templates.filter(t => t.category === selectedCategory);

  const handleSelectTemplate = (template: WorkflowTemplate) => {
    setNodes(template.nodes);
    setEdges(template.edges);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[rgb(25,25,25)] border border-[rgb(51,51,51)] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[rgb(51,51,51)]">
          <h2 className="text-2xl font-bold text-[rgb(245,245,245)]">
            Workflow Templates
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[rgb(51,51,51)] rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-[rgb(245,245,245)]" />
          </button>
        </div>

        {/* Categories */}
        <div className="px-6 py-4 border-b border-[rgb(51,51,51)] flex gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-md font-medium transition-colors capitalize ${
                selectedCategory === cat
                  ? 'bg-[rgb(59,130,246)] text-white'
                  : 'bg-[rgb(51,51,51)] text-[rgb(163,163,163)] hover:bg-[rgb(70,70,70)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          {isLoading ? (
            <div className="flex items-center justify-center h-48">
              <div className="text-[rgb(100,100,100)]">Loading templates...</div>
            </div>
          ) : filteredTemplates.length === 0 ? (
            <div className="flex items-center justify-center h-48">
              <div className="text-center">
                <p className="text-[rgb(100,100,100)] mb-2">No templates found</p>
                <p className="text-sm text-[rgb(100,100,100)]">
                  Start with an empty workflow or select another category
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTemplates.map((template) => (
                <button
                  key={template.id}
                  onClick={() => handleSelectTemplate(template)}
                  className="p-4 bg-[rgb(38,38,38)] border border-[rgb(51,51,51)] rounded-lg hover:border-[rgb(59,130,246)] hover:bg-[rgb(51,51,51)] transition-all group text-left"
                >
                  {/* Preview Placeholder */}
                  <div className="w-full h-32 bg-gradient-to-br from-[rgb(59,130,246)]/20 to-[rgb(168,85,247)]/20 rounded-md mb-3 flex items-center justify-center">
                    <span className="text-3xl">{template.category === 'image' ? '🖼️' : template.category === 'text' ? '📝' : '🎬'}</span>
                  </div>

                  <h3 className="font-bold text-[rgb(245,245,245)] mb-1">
                    {template.name}
                  </h3>
                  <p className="text-xs text-[rgb(100,100,100)] mb-3">
                    {template.description}
                  </p>

                  <div className="flex items-center gap-1 text-xs text-[rgb(163,163,163)] group-hover:text-[rgb(59,130,246)] transition-colors">
                    <Plus className="w-3 h-3" />
                    Use Template
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
