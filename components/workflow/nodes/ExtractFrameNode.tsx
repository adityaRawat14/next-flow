"use client";

import React, { useState } from "react";
import { Handle, Position } from "@xyflow/react";
import { ChevronDown, Loader } from "lucide-react";

export function ExtractFrameNode({ data, selected, id }: any) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [timestamp, setTimestamp] = useState(data.timestamp || "0");
  const [isExecuting, setIsExecuting] = useState(false);
  const [result, setResult] = useState<string | null>(data.result || null);

  const handleExtract = async () => {
    if (!data.videoUrl) {
      alert("Please connect a video input");
      return;
    }

    setIsExecuting(true);

    try {
      const response = await fetch("/api/extract-frame", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          videoUrl: data.videoUrl,
          timestamp,
          nodeId: id,
        }),
      });

      if (!response.ok) throw new Error("Extraction failed");

      const result = await response.json();
      setResult(result.data?.url || "");
      data.result = result.data?.url || "";
    } catch (error) {
      alert("Failed to extract frame");
      console.error("[v0] Extract Error:", error);
    } finally {
      setIsExecuting(false);
    }
  };

  return (
    <div
      className={`bg-[#1a1a1a] border rounded-lg p-4 min-w-[280px] max-w-sm shadow-lg transition-all ${
        selected ? "border-blue-500 border-2" : "border-[#444]"
      } ${isExecuting ? "animate-pulse bg-red-500/10" : ""}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <h3 className="text-sm font-semibold">Extract Frame</h3>
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
          {/* Timestamp Input */}
          <div>
            <label className="text-xs text-gray-400 block mb-1">
              Timestamp (seconds or percentage)
            </label>
            <input
              type="text"
              value={timestamp}
              onChange={(e) => {
                setTimestamp(e.target.value);
                data.timestamp = e.target.value;
              }}
              placeholder="e.g., 5 or 50%"
              className="w-full bg-[#0a0a0a] border border-[#333] rounded px-2 py-1 text-xs text-gray-300 placeholder-gray-600 focus:outline-none focus:border-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Use seconds (5) or percentage (50%)
            </p>
          </div>

          {/* Execute Button */}
          <button
            onClick={handleExtract}
            disabled={isExecuting || !data.videoUrl}
            className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed rounded px-3 py-2 text-xs font-medium transition flex items-center justify-center gap-2"
          >
            {isExecuting ? (
              <>
                <Loader size={14} className="animate-spin" />
                Extracting...
              </>
            ) : (
              "Extract Frame"
            )}
          </button>

          {/* Result */}
          {result && (
            <div className="bg-[#0a0a0a] border border-red-500/30 rounded p-2">
              <img
                src={result}
                alt="extracted frame"
                className="w-full h-auto rounded"
              />
            </div>
          )}
        </div>
      )}

      {/* Input Handle */}
      <Handle type="target" position={Position.Left} id="video_url" />

      {/* Output Handle */}
      <Handle type="source" position={Position.Right} id="output" />
    </div>
  );
}
