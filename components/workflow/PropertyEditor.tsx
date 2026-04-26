'use client';

import React from 'react';
import { useWorkflowStore } from '@/lib/store';
import { WorkflowNode } from '@/types/types';

export const PropertyEditor: React.FC = () => {
  const selectedNodeId = useWorkflowStore((state) => state.selectedNodeId);
  const nodes = useWorkflowStore((state) => state.nodes);
  const updateNode = useWorkflowStore((state) => state.updateNode);

  const selectedNode = nodes.find((n) => n.id === selectedNodeId) as WorkflowNode | undefined;

  if (!selectedNode) {
    return (
      <div className="h-full flex items-center justify-center text-[rgb(100,100,100)]">
        Select a node to edit properties
      </div>
    );
  }

  const handleConfigChange = (key: string, value: any) => {
    updateNode(selectedNode.id, {
      config: {
        ...selectedNode.data.config,
        [key]: value,
      },
    });
  };

  const configSchema = selectedNode.data.definition?.config_schema;

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-[rgb(51,51,51)] bg-[rgb(25,25,25)]">
        <h3 className="font-semibold text-[rgb(245,245,245)]">
          {selectedNode.data.label}
        </h3>
        <p className="text-xs text-[rgb(100,100,100)] mt-1">
          {selectedNode.data.definition?.description}
        </p>
      </div>

      {/* Properties */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Node Type Info */}
        <div className="bg-[rgb(38,38,38)] rounded-lg p-3 border border-[rgb(51,51,51)]">
          <div className="text-xs font-medium text-[rgb(163,163,163)] uppercase mb-2">
            Node Type
          </div>
          <div className="text-sm text-[rgb(245,245,245)] font-mono">
            {selectedNode.data.nodeType}
          </div>
        </div>

        {/* Configuration Fields */}
        {configSchema && Object.entries(configSchema.properties || {}).map(([key, schema]: [string, any]) => (
          <div key={key}>
            <label className="text-sm font-medium text-[rgb(163,163,163)] capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </label>
            
            {schema.type === 'string' && (
              <input
                type="text"
                value={selectedNode.data.config[key] || schema.default || ''}
                onChange={(e) => handleConfigChange(key, e.target.value)}
                className="w-full mt-1 px-3 py-2 bg-[rgb(38,38,38)] border border-[rgb(51,51,51)] rounded text-sm text-[rgb(245,245,245)] focus:outline-none focus:border-[rgb(59,130,246)]"
              />
            )}

            {schema.type === 'number' && (
              <input
                type="number"
                value={selectedNode.data.config[key] || schema.default || 0}
                onChange={(e) => handleConfigChange(key, parseFloat(e.target.value))}
                min={schema.min}
                max={schema.max}
                step={schema.step || 0.1}
                className="w-full mt-1 px-3 py-2 bg-[rgb(38,38,38)] border border-[rgb(51,51,51)] rounded text-sm text-[rgb(245,245,245)] focus:outline-none focus:border-[rgb(59,130,246)]"
              />
            )}

            {schema.type === 'boolean' && (
              <div className="mt-1">
                <input
                  type="checkbox"
                  checked={selectedNode.data.config[key] || schema.default || false}
                  onChange={(e) => handleConfigChange(key, e.target.checked)}
                  className="w-4 h-4 rounded"
                />
              </div>
            )}

            {schema.description && (
              <p className="text-xs text-[rgb(100,100,100)] mt-1">
                {schema.description}
              </p>
            )}
          </div>
        ))}

        {!configSchema && (
          <div className="text-center text-[rgb(100,100,100)] py-8">
            No configuration options
          </div>
        )}
      </div>
    </div>
  );
};
