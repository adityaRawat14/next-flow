"use client";

import React, { useState } from "react";
import { Handle, Position } from "@xyflow/react";
import { ChevronDown } from "lucide-react";

export function TextNode({ data, selected }: any) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [content, setContent] = useState(data.content || "");

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    data.content = e.target.value;
  };

  return (
    <div
      className={`bg-[#1a1a1a] border rounded-lg p-4 min-w-[280px] max-w-sm shadow-lg transition-all ${
        selected ? "border-blue-500 border-2" : "border-[#444]"
      } ${data.isExecuting ? "animate-pulse bg-green-500/10" : ""}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-yellow-500" />
          <h3 className="text-sm font-semibold">Text</h3>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-1 hover:bg-[#333] rounded transition"
        >
          <ChevronDown
            size={14}
            className={`transition-transform ${
              isExpanded ? "" : "-rotate-90"
            }`}
          />
        </button>
      </div>

      {/* Content */}
      {isExpanded && (
        <div className="space-y-3">
          <textarea
            value={content}
            onChange={handleContentChange}
            placeholder="Enter text content..."
            className="w-full h-24 bg-[#0a0a0a] border border-[#333] rounded px-3 py-2 text-xs text-gray-300 placeholder-gray-600 focus:outline-none focus:border-blue-500 resize-none"
          />
        </div>
      )}

      {/* Output Handle */}
      <Handle type="source" position={Position.Right} id="output" />
    </div>
  );
}
