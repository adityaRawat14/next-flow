"use client";

import React, { useState } from "react";
import { Handle, Position } from "@xyflow/react";
import { ChevronDown, Play, Loader } from "lucide-react";

const MODELS = [
  { value: "gemini-2.0-flash", label: "Gemini 2.0 Flash" },
  { value: "gemini-1.5-pro", label: "Gemini 1.5 Pro" },
  { value: "gemini-1.5-flash", label: "Gemini 1.5 Flash" },
];

export function LLMNode({ data, selected, id }: any) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [systemPrompt, setSystemPrompt] = useState(data.systemPrompt || "");
  const [userMessage, setUserMessage] = useState(data.userMessage || "");
  const [model, setModel] = useState(data.model || "gemini-2.0-flash");
  const [result, setResult] = useState<string | null>(data.result || null);
  const [isExecuting, setIsExecuting] = useState(false);

  const handleExecute = async () => {
    if (!userMessage.trim()) {
      alert("Please enter a user message");
      return;
    }

    setIsExecuting(true);

    try {
      const response = await fetch("/api/llm/execute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model,
          systemPrompt,
          userMessage,
          nodeId: id,
        }),
      });

      if (!response.ok) throw new Error("Execution failed");

      const result = await response.json();
      setResult(result.data?.output || result.data?.result || "");
      data.result = result.data?.output || result.data?.result || "";
    } catch (error) {
      alert("Failed to execute LLM");
      console.error("[v0] LLM Error:", error);
    } finally {
      setIsExecuting(false);
    }
  };

  return (
    <div
      className={`bg-[#1a1a1a] border rounded-lg p-4 min-w-[320px] max-w-md shadow-lg transition-all ${
        selected ? "border-blue-500 border-2" : "border-[#444]"
      } ${data.isExecuting || isExecuting ? "animate-pulse bg-green-500/10" : ""}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500" />
          <h3 className="text-sm font-semibold">Run LLM</h3>
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
          {/* Model Selector */}
          <div>
            <label className="text-xs text-gray-400 block mb-1">Model</label>
            <select
              value={model}
              onChange={(e) => {
                setModel(e.target.value);
                data.model = e.target.value;
              }}
              className="w-full bg-[#0a0a0a] border border-[#333] rounded px-2 py-1 text-xs text-gray-300 focus:outline-none focus:border-blue-500"
            >
              {MODELS.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>
          </div>

          {/* System Prompt */}
          <div>
            <label className="text-xs text-gray-400 block mb-1">
              System Prompt (Optional)
            </label>
            <textarea
              value={systemPrompt}
              onChange={(e) => {
                setSystemPrompt(e.target.value);
                data.systemPrompt = e.target.value;
              }}
              placeholder="System instructions..."
              className="w-full h-16 bg-[#0a0a0a] border border-[#333] rounded px-2 py-1 text-xs text-gray-300 placeholder-gray-600 focus:outline-none focus:border-blue-500 resize-none"
            />
          </div>

          {/* User Message */}
          <div>
            <label className="text-xs text-gray-400 block mb-1">
              User Message
            </label>
            <textarea
              value={userMessage}
              onChange={(e) => {
                setUserMessage(e.target.value);
                data.userMessage = e.target.value;
              }}
              placeholder="User prompt..."
              className="w-full h-16 bg-[#0a0a0a] border border-[#333] rounded px-2 py-1 text-xs text-gray-300 placeholder-gray-600 focus:outline-none focus:border-blue-500 resize-none"
            />
          </div>

          {/* Execute Button */}
          <button
            onClick={handleExecute}
            disabled={isExecuting}
            className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed rounded px-3 py-2 text-xs font-medium transition flex items-center justify-center gap-2"
          >
            {isExecuting ? (
              <>
                <Loader size={14} className="animate-spin" />
                Executing...
              </>
            ) : (
              <>
                <Play size={14} />
                Execute
              </>
            )}
          </button>

          {/* Result */}
          {result && (
            <div className="bg-[#0a0a0a] border border-green-500/30 rounded p-3 mt-3">
              <p className="text-xs text-gray-400 mb-1">Result:</p>
              <p className="text-xs text-green-400 max-h-32 overflow-y-auto whitespace-pre-wrap">
                {result}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Input Handles */}
      <Handle
        type="target"
        position={Position.Left}
        id="system_prompt"
        style={{ top: "30%" }}
      />
      <Handle
        type="target"
        position={Position.Left}
        id="user_message"
        style={{ top: "60%" }}
      />

      {/* Output Handle */}
      <Handle type="source" position={Position.Right} id="output" />
    </div>
  );
}
