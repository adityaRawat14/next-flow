"use client";

import React, { useState } from "react";
import { Brain, Clapperboard, Crop, Icon, Image, PanelLeft, Search, SquareDashedMousePointer, Text } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});
interface LeftSidebarProps {
  onAddNode: (nodeType: string) => void;
}

const NODE_TYPES = [
  { id: "text", label: "Text", color: "bg-yellow-500" , Icon:Text },
  { id: "imageUpload", label: "Upload Image", color: "bg-blue-500",Icon:Image },
  { id: "videoUpload", label: "Upload Video", color: "bg-purple-500",Icon:Clapperboard },
  { id: "llm", label: "Run LLM", color: "bg-green-500" ,Icon:Brain},
  { id: "cropImage", label: "Crop Image", color: "bg-orange-500",Icon:Crop },
  { id: "extractFrame", label: "Extract Frame", color: "bg-red-500" ,Icon:SquareDashedMousePointer},
];

export function LeftSidebar({ onAddNode }: LeftSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNodes = NODE_TYPES.filter((node) =>
    node.label.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleToggleSidebar=()=>{
    setIsCollapsed(!isCollapsed);
  }
  return (
   <div
  className={`shrink-0 bg-[#000000] ${inter.className} z-20 text-white transition-all duration-300 ease-in-out ${
    isCollapsed ? "w-10" : "w-40"
  } flex flex-col border-r border-zinc-800`}
>
      {/* Collapse toggle */}
      <div className="pt-3 pl-2 mt-1 ml-1  mb-3 flex justify-start text-gray-400">
        <button
          onClick={handleToggleSidebar}
          className="p-1 hover:bg-zinc-900 hover:text-white cursor-pointer rounded-md transition-colors"
        >
          <PanelLeft  size={13} />
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
              className="w-full bg-zinc-900 border border-zinc-800 cursor-text rounded-md pl-8 pr-2 py-1.5 text-xs placeholder-gray-500 focus:outline-none focus:border-zinc-600"
            />
          </div>
        </div>
      )}

      {/* Node list */}
      <nav className="flex-1 overflow-y-auto px-1">
        <ul className={`pt-2 flex flex-col text-xs font-extralight gap-1 ${!isCollapsed && "px-2"}`}>
        {!isCollapsed &&  <span className="text-[8px] font-medium text-zinc-400 mb-3">Available Nodes</span>}
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
      {/* Icon */}
      <node.Icon size={14} className="text-zinc-300" />

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