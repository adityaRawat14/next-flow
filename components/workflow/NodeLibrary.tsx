'use client';

import React from 'react';
import { useWorkflowStore } from '@/lib/store';
import { NodeDefinition } from '@/types/types';
import { Search, ChevronDown } from 'lucide-react';

const categoryIcons: Record<string, string> = {
  input: '📥',
  processing: '⚙️',
  generation: '✨',
  output: '📤',
};

export const NodeLibrary: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [expandedCategories, setExpandedCategories] = React.useState<Set<string>>(
    new Set(['input', 'processing', 'generation', 'output'])
  );

  const nodeDefinitions = useWorkflowStore((state) => state.nodeDefinitions);
  const showNodeLibrary = useWorkflowStore((state) => state.showNodeLibrary);

  const groupedNodes = React.useMemo(() => {
    const groups: Record<string, NodeDefinition[]> = {
      input: [],
      processing: [],
      generation: [],
      output: [],
    };

    nodeDefinitions
      .filter((def) =>
        def.display_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        def.description?.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .forEach((def) => {
        groups[def.category]?.push(def);
      });

    return groups;
  }, [nodeDefinitions, searchTerm]);

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  const handleDragStart = (e: React.DragEvent, nodeDefinition: NodeDefinition) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('nodeTypeId', nodeDefinition.id);
  };

  return (
    <div className={`node-library h-full w-80 bg-[rgb(20,20,20)] border-r border-[rgb(51,51,51)] flex flex-col overflow-hidden transition-all ${
      showNodeLibrary ? 'translate-x-0' : '-translate-x-full'
    }`}>
      {/* Header */}
      <div className="p-4 border-b border-[rgb(51,51,51)]">
        <h2 className="text-lg font-semibold text-[rgb(245,245,245)] mb-3">
          Node Library
        </h2>
        <div className="relative">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-[rgb(100,100,100)]" />
          <input
            type="text"
            placeholder="Search nodes or models..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-3 py-2 bg-[rgb(30,30,30)] border border-[rgb(51,51,51)] rounded-md text-sm text-[rgb(245,245,245)] placeholder-[rgb(100,100,100)] focus:outline-none focus:border-[rgb(59,130,246)]"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex-1 overflow-y-auto">
        {Object.entries(groupedNodes).map(([category, nodes]) => (
          <div key={category} className="border-b border-[rgb(51,51,51)]">
            <button
              onClick={() => toggleCategory(category)}
              className="w-full px-4 py-3 flex items-center justify-between bg-[rgb(25,25,25)] hover:bg-[rgb(35,35,35)] transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{categoryIcons[category]}</span>
                <span className="font-medium text-[rgb(245,245,245)] capitalize">
                  {category}
                </span>
                <span className="text-xs text-[rgb(100,100,100)]">
                  ({nodes.length})
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[rgb(100,100,100)] transition-transform ${
                  expandedCategories.has(category) ? 'rotate-0' : '-rotate-90'
                }`}
              />
            </button>

            {expandedCategories.has(category) && (
              <div className="space-y-1 p-2 bg-[rgb(20,20,20)]">
                {nodes.map((nodeDef) => (
                  <div
                    key={nodeDef.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, nodeDef)}
                    className="node-item p-3 cursor-move rounded-md bg-[rgb(38,38,38)] border border-[rgb(51,51,51)] hover:border-[rgb(59,130,246)] transition-all"
                  >
                    <div className="font-medium text-sm text-[rgb(245,245,245)]">
                      {nodeDef.display_name}
                    </div>
                    <div className="text-xs text-[rgb(100,100,100)] mt-1">
                      {nodeDef.description}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Recent Nodes */}
      <div className="border-t border-[rgb(51,51,51)] p-4 bg-[rgb(25,25,25)]">
        <div className="text-xs font-medium text-[rgb(163,163,163)] uppercase mb-2">
          Quick Tip
        </div>
        <p className="text-xs text-[rgb(100,100,100)]">
          Drag nodes to canvas, double-click to add, or press N
        </p>
      </div>
    </div>
  );
};
