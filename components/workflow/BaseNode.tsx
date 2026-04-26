'use client';

import React from 'react';
import { Handle, Position } from '@xyflow/react';
import { WorkflowNode } from '@/types/types';
import { useWorkflowStore } from '@/lib/store';

interface BaseNodeProps {
  data: WorkflowNode['data'];
  isConnectable: boolean;
}

export const BaseNode: React.FC<BaseNodeProps> = ({ data, isConnectable }) => {
  const selectedNodeId = useWorkflowStore((state) => state.selectedNodeId);
  const setSelectedNodeId = useWorkflowStore((state) => state.setSelectedNodeId);
  
  const getPortColor = (type: string) => {
    switch(type) {
      case 'image': return '#3b82f6'; // blue
      case 'text': return '#22c55e'; // green
      case 'any': return '#a855f7'; // purple
      case 'number': return '#f97316'; // orange
      default: return '#6b7280'; // gray
    }
  };

  return (
    <div 
      className="min-w-[200px] rounded-lg bg-[rgb(25,25,25)] border border-[rgb(51,51,51)] p-3 shadow-lg"
      onClick={(e) => {
        e.stopPropagation();
        setSelectedNodeId((e.currentTarget as any).id);
      }}
    >
      {/* Input Handles */}
      {data.definition?.inputs?.map((input, idx) => (
        <Handle
          key={`input-${input.id}`}
          type="target"
          position={Position.Left}
          id={`${data.label}-input-${input.id}`}
          style={{ top: `${60 + idx * 25}px` }}
          isConnectable={isConnectable}
        />
      ))}

      {/* Node Header */}
      <div className="mb-2">
        <div className="text-xs font-medium text-[rgb(163,163,163)] uppercase tracking-wide">
          {data.definition?.category}
        </div>
        <div className="text-sm font-semibold text-[rgb(245,245,245)]">
          {data.label}
        </div>
      </div>

      {/* Node Content */}
      <div className="space-y-2">
        {data.definition?.inputs?.map((input) => (
          <div key={`input-field-${input.id}`} className="flex items-center gap-2">
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: getPortColor(input.type) }}
            />
            <span className="text-xs text-[rgb(163,163,163)]">
              {input.label}
            </span>
          </div>
        ))}
      </div>

      {/* Output Handles */}
      {data.definition?.outputs?.map((output, idx) => (
        <Handle
          key={`output-${output.id}`}
          type="source"
          position={Position.Right}
          id={`${data.label}-output-${output.id}`}
          style={{ top: `${60 + idx * 25}px` }}
          isConnectable={isConnectable}
        />
      ))}
    </div>
  );
};
