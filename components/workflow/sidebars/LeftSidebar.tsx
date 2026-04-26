"use client";

import React, { useState } from "react";
import { PanelLeft, Search } from "lucide-react";

interface LeftSidebarProps {
  onAddNode: (nodeType: string) => void;
}

const NODE_TYPES = [
  { id: "text", label: "Text", color: "bg-yellow-500" },
  { id: "imageUpload", label: "Upload Image", color: "bg-blue-500" },
  { id: "videoUpload", label: "Upload Video", color: "bg-purple-500" },
  { id: "llm", label: "Run LLM", color: "bg-green-500" },
  { id: "cropImage", label: "Crop Image", color: "bg-orange-500" },
  { id: "extractFrame", label: "Extract Frame", color: "bg-red-500" },
];

export function LeftSidebar({ onAddNode }: LeftSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNodes = NODE_TYPES.filter((node) =>
    node.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
   <div
  className={`flex-shrink-0 bg-[#000000] text-white transition-all duration-300 ease-in-out ${
    isCollapsed ? "w-10" : "w-52"
  } flex flex-col border-r border-zinc-800`}
>
      {/* Collapse toggle */}
      <div className="pt-3 pl-2 mt-1 ml-1 flex justify-start text-gray-400">
        <button
          onClick={() =>{console.log("clicked"); setIsCollapsed(!isCollapsed)}}
          className="p-1 hover:bg-zinc-900 cursor-pointer rounded-md transition-colors"
        >
          <PanelLeft size={13} />
        </button>
      </div>

      {/* Search */}
      {!isCollapsed && (
        <div className="px-3 pb-2">
          <div className="relative">
            <Search
              size={13}
              className="absolute left-3 top-2.5 text-gray-500"
            />

            <input
              type="text"
              placeholder="Search nodes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-md pl-8 pr-2 py-1.5 text-xs placeholder-gray-500 focus:outline-none focus:border-zinc-600"
            />
          </div>
        </div>
      )}

      {/* Node list */}
      <nav className="flex-1 overflow-y-auto px-1">
        <ul className={`pt-2 flex flex-col gap-1 ${!isCollapsed && "px-2"}`}>
          {filteredNodes.map((node) => (
            <li key={node.id}>
              <button
                onClick={() => onAddNode(node.id)}
                className={`w-full flex items-center gap-2 py-2 ${
                  !isCollapsed && "px-2"
                } rounded-md transition-all duration-300 hover:bg-zinc-900 ${
                  isCollapsed ? "justify-center" : ""
                }`}
              >
                {/* Dot indicator */}
                <div
                  className={`w-2 h-2 rounded-full ${node.color}`}
                />

                {/* Label */}
                {!isCollapsed && (
                  <span className="text-xs font-light">
                    {node.label}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      {!isCollapsed && (
        <div className="p-3 text-[10px] text-gray-500 text-center border-t border-zinc-800">
          Click a node to add to canvas
        </div>
      )}
    </div>
  );
}