"use client";

import React, { useState } from "react";
import { Handle, Position } from "@xyflow/react";
import { ChevronDown, Loader } from "lucide-react";

export function CropImageNode({ data, selected, id }: any) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [xPercent, setXPercent] = useState(data.xPercent || 0);
  const [yPercent, setYPercent] = useState(data.yPercent || 0);
  const [widthPercent, setWidthPercent] = useState(data.widthPercent || 100);
  const [heightPercent, setHeightPercent] = useState(data.heightPercent || 100);
  const [isExecuting, setIsExecuting] = useState(false);
  const [result, setResult] = useState<string | null>(data.result || null);

  const handleCrop = async () => {
    if (!data.imageUrl) {
      alert("Please connect an image input");
      return;
    }

    setIsExecuting(true);

    try {
      const response = await fetch("/api/crop", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          imageUrl: data.imageUrl,
          xPercent,
          yPercent,
          widthPercent,
          heightPercent,
          nodeId: id,
        }),
      });

      if (!response.ok) throw new Error("Crop failed");

      const result = await response.json();
      setResult(result.data?.url || "");
      data.result = result.data?.url || "";
    } catch (error) {
      alert("Failed to crop image");
      console.error("[v0] Crop Error:", error);
    } finally {
      setIsExecuting(false);
    }
  };

  return (
    <div
      className={`bg-[#1a1a1a] border rounded-lg p-4 min-w-[300px] max-w-sm shadow-lg transition-all ${
        selected ? "border-blue-500 border-2" : "border-[#444]"
      } ${isExecuting ? "animate-pulse bg-orange-500/10" : ""}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-orange-500" />
          <h3 className="text-sm font-semibold">Crop Image</h3>
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
          {/* Coordinates */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs text-gray-400 block mb-1">X %</label>
              <input
                type="number"
                value={xPercent}
                onChange={(e) => {
                  const val = Math.max(0, Math.min(100, Number(e.target.value)));
                  setXPercent(val);
                  data.xPercent = val;
                }}
                min="0"
                max="100"
                className="w-full bg-[#0a0a0a] border border-[#333] rounded px-2 py-1 text-xs text-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1">Y %</label>
              <input
                type="number"
                value={yPercent}
                onChange={(e) => {
                  const val = Math.max(0, Math.min(100, Number(e.target.value)));
                  setYPercent(val);
                  data.yPercent = val;
                }}
                min="0"
                max="100"
                className="w-full bg-[#0a0a0a] border border-[#333] rounded px-2 py-1 text-xs text-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-xs text-gray-400 block mb-1">Width %</label>
              <input
                type="number"
                value={widthPercent}
                onChange={(e) => {
                  const val = Math.max(0, Math.min(100, Number(e.target.value)));
                  setWidthPercent(val);
                  data.widthPercent = val;
                }}
                min="0"
                max="100"
                className="w-full bg-[#0a0a0a] border border-[#333] rounded px-2 py-1 text-xs text-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="text-xs text-gray-400 block mb-1">Height %</label>
              <input
                type="number"
                value={heightPercent}
                onChange={(e) => {
                  const val = Math.max(0, Math.min(100, Number(e.target.value)));
                  setHeightPercent(val);
                  data.heightPercent = val;
                }}
                min="0"
                max="100"
                className="w-full bg-[#0a0a0a] border border-[#333] rounded px-2 py-1 text-xs text-gray-300 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Execute Button */}
          <button
            onClick={handleCrop}
            disabled={isExecuting || !data.imageUrl}
            className="w-full bg-orange-600 hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed rounded px-3 py-2 text-xs font-medium transition flex items-center justify-center gap-2"
          >
            {isExecuting ? (
              <>
                <Loader size={14} className="animate-spin" />
                Cropping...
              </>
            ) : (
              "Crop"
            )}
          </button>

          {/* Result */}
          {result && (
            <div className="bg-[#0a0a0a] border border-orange-500/30 rounded p-2">
              <img
                src={result}
                alt="cropped"
                className="w-full h-auto rounded"
              />
            </div>
          )}
        </div>
      )}

      {/* Input Handle */}
      <Handle type="target" position={Position.Left} id="image_url" />

      {/* Output Handle */}
      <Handle type="source" position={Position.Right} id="output" />
    </div>
  );
}
