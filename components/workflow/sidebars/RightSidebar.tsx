"use client";

import React, { useState, useEffect } from "react";
import { ChevronRight, Clock, Check, X, AlertCircle } from "lucide-react";
import { useWorkflowStore } from "@/lib/store";

interface RightSidebarProps {
  onCollapse: () => void;
}

interface ExecutionEntry {
  id: string;
  timestamp: string;
  status: "success" | "failed" | "running";
  duration: number;
  scope: "full" | "partial" | "single";
  details?: string;
}

export function RightSidebar({ onCollapse }: RightSidebarProps) {
  const [executions, setExecutions] = useState<ExecutionEntry[]>([]);
  const [selectedExecution, setSelectedExecution] = useState<string | null>(null);
  const store = useWorkflowStore();

  useEffect(() => {
    // Fetch execution history
    const fetchHistory = async () => {
      try {
        const response = await fetch("/api/history");
        if (response.ok) {
          const data = await response.json();
          setExecutions(data.data || []);
        }
      } catch (error) {
        console.error("[v0] Failed to fetch history:", error);
      }
    };

    fetchHistory();
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <Check size={16} className="text-green-500" />;
      case "failed":
        return <X size={16} className="text-red-500" />;
      case "running":
        return <AlertCircle size={16} className="text-yellow-500 animate-spin" />;
      default:
        return null;
    }
  };

  const getScopeLabel = (scope: string) => {
    switch (scope) {
      case "full":
        return "Full Workflow";
      case "partial":
        return "Partial";
      case "single":
        return "Single Node";
      default:
        return scope;
    }
  };

  return (
    <div className="w-72 bg-[#0a0a0a] border-l border-[#333] flex flex-col text-white">
      {/* Header */}
      <div className="border-b border-[#333] p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock size={18} />
          <h2 className="font-semibold text-sm">Execution History</h2>
        </div>
        <button
          onClick={onCollapse}
          className="p-1 hover:bg-[#333] rounded transition"
          title="Hide sidebar"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Execution List */}
      <div className="flex-1 overflow-y-auto">
        {executions.length === 0 ? (
          <div className="p-4 text-center text-gray-500 text-xs py-8">
            <p>No executions yet</p>
            <p className="text-gray-600 mt-2">
              Run your workflow to see history
            </p>
          </div>
        ) : (
          <div className="p-4 space-y-2">
            {executions.map((exec) => (
              <button
                key={exec.id}
                onClick={() =>
                  setSelectedExecution(
                    selectedExecution === exec.id ? null : exec.id
                  )
                }
                className={`w-full text-left p-3 border rounded-lg transition ${
                  selectedExecution === exec.id
                    ? "bg-[#2a2a2a] border-blue-500/50"
                    : "bg-[#1a1a1a] border-[#333] hover:border-blue-500/30"
                }`}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(exec.status)}
                    <span className="text-xs font-medium capitalize">
                      {exec.status}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    {exec.duration}ms
                  </span>
                </div>

                {/* Details */}
                <div className="text-xs text-gray-400">
                  <p>{exec.timestamp}</p>
                  <p className="text-gray-600">
                    {getScopeLabel(exec.scope)}
                  </p>
                </div>

                {/* Expanded Details */}
                {selectedExecution === exec.id && exec.details && (
                  <div className="mt-3 pt-3 border-t border-[#333] text-xs text-gray-500">
                    <pre className="whitespace-pre-wrap break-words">
                      {exec.details}
                    </pre>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-[#333] p-4">
        <button
          onClick={() => {
            setExecutions([]);
            localStorage.setItem("executionHistory", "[]");
          }}
          className="w-full text-xs text-gray-500 hover:text-red-400 py-2 transition"
        >
          Clear History
        </button>
      </div>
    </div>
  );
}
