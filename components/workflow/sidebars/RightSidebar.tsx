"use client";

import React, { useState, useEffect } from "react";
import {
  Clock,
  Check,
  X,
  AlertCircle,
  History,
} from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface ExecutionEntry {
  id: string;
  timestamp: string;
  status: "success" | "failed" | "running";
  duration: number;
  scope: "full" | "partial" | "single";
  details?: string;
}

export function RightSidebar() {
  const [executions, setExecutions] = useState<ExecutionEntry[]>([]);
  const [selectedExecution, setSelectedExecution] =
    useState<string | null>(null);

  const [isCollapsed, setIsCollapsed] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch("/api/history");
        if (res.ok) {
          const data = await res.json();
          setExecutions(data.data || []);
        }
      } catch {
        console.log("history fetch failed");
      }
    };

    fetchHistory();
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <Check size={14} className="text-green-500" />;
      case "failed":
        return <X size={14} className="text-red-500" />;
      case "running":
        return (
          <AlertCircle
            size={14}
            className="text-yellow-500 animate-spin"
          />
        );
    }
  };

  return (
    <>
      {/* Toggle button (always right edge) */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="fixed right-4 top-3 z-50 p-1 font-light px-3 py-1 bg-[#202020] rounded-md hover:bg-[#404040] border border-zinc-800 text-white hover:text-white transition"
      >
        <History size={16} />
      </button>

      {/* Sidebar panel */}
      <div
        className={`${inter.className} fixed right-0 top-0 h-screen transition-all duration-300 ease-in-out bg-black border-l border-zinc-800 text-white flex flex-col ${
          isCollapsed ? "w-0 opacity-0 pointer-events-none" : "w-72"
        }`}
      >
        {!isCollapsed && (
          <>
            {/* Header */}
            <div className="border-b border-zinc-800 p-4 flex gap-2 items-center">
              <Clock size={16} />
              <h2 className="text-xs font-medium">
                Execution History
              </h2>
            </div>

            {/* Execution list */}
            <div className="flex-1 overflow-y-auto">
              {executions.length === 0 ? (
                <div className="p-4 text-center text-gray-500 text-xs">
                  No executions yet
                </div>
              ) : (
                <div className="p-3 space-y-2">
                  {executions.map((exec) => (
                    <button
                      key={exec.id}
                      onClick={() =>
                        setSelectedExecution(
                          selectedExecution === exec.id
                            ? null
                            : exec.id
                        )
                      }
                      className={`w-full text-left p-3 rounded-md border text-xs transition ${
                        selectedExecution === exec.id
                          ? "bg-zinc-800 border-blue-500/50"
                          : "bg-zinc-900 border-zinc-800 hover:border-blue-500/30"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex gap-2 items-center">
                          {getStatusIcon(exec.status)}
                          <span className="capitalize">
                            {exec.status}
                          </span>
                        </div>

                        <span className="text-gray-500">
                          {exec.duration}ms
                        </span>
                      </div>

                      <div className="text-gray-500">
                        <div>{exec.timestamp}</div>
                        <div>{exec.scope}</div>
                      </div>

                      {selectedExecution === exec.id &&
                        exec.details && (
                          <div className="mt-2 pt-2 border-t border-zinc-800 text-gray-400">
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
            <div className="border-t border-zinc-800 p-3">
              <button
                onClick={() => {
                  setExecutions([]);
                  localStorage.setItem(
                    "executionHistory",
                    "[]"
                  );
                }}
                className="w-full text-xs text-gray-500 hover:text-red-400 transition"
              >
                Clear History
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}