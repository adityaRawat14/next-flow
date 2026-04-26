'use client';

import React from 'react';
import { useWorkflowStore } from '@/lib/store';
import { Play, Square, Trash2, Download } from 'lucide-react';
import axios from 'axios';

export const ExecutionPanel: React.FC = () => {
  const isExecuting = useWorkflowStore((state) => state.isExecuting);
  const executionLogs = useWorkflowStore((state) => state.executionLogs);
  const executionResults = useWorkflowStore((state) => state.executionResults);
  const setIsExecuting = useWorkflowStore((state) => state.setIsExecuting);
  const clearExecutionLogs = useWorkflowStore((state) => state.clearExecutionLogs);
  const nodes = useWorkflowStore((state) => state.nodes);

  const handleExecute = async () => {
    if (nodes.length === 0) {
      alert('Please add nodes to the workflow');
      return;
    }
    setIsExecuting(true);
    clearExecutionLogs();
    
    try {
      console.log('[v0] Starting workflow execution with nodes:', nodes);
      
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges: [] }),
      });

      const result = await response.json();

      if (result.data?.logs) {
        result.data.logs.forEach((log: any) => {
          useWorkflowStore.setState((state) => ({
            executionLogs: [...state.executionLogs, log],
          }));
        });
      }

      if (result.data?.results) {
        useWorkflowStore.setState({
          executionResults: result.data.results,
        });
      }

      console.log('[v0] Execution completed:', result);
    } catch (error) {
      console.error('[v0] Execution error:', error);
      useWorkflowStore.setState((state) => ({
        executionLogs: [
          ...state.executionLogs,
          {
            timestamp: new Date().toISOString(),
            nodeId: 'system',
            message: `Execution error: ${error instanceof Error ? error.message : 'Unknown error'}`,
            level: 'error',
          },
        ],
      }));
    } finally {
      setIsExecuting(false);
    }
  };

  const handleStop = () => {
    setIsExecuting(false);
    console.log('[v0] Workflow execution stopped');
  };

  const handleClear = () => {
    clearExecutionLogs();
  };

  const downloadLogs = () => {
    const logsText = executionLogs
      .map((log) => `[${log.timestamp}] ${log.level.toUpperCase()}: ${log.message}`)
      .join('\n');
    
    const blob = new Blob([logsText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `execution-logs-${Date.now()}.txt`;
    a.click();
  };

  return (
    <div className="execution-panel w-96 bg-[rgb(20,20,20)] border-l border-[rgb(51,51,51)] flex flex-col overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-[rgb(51,51,51)] bg-[rgb(25,25,25)]">
        <h2 className="text-lg font-semibold text-[rgb(245,245,245)] mb-3">
          Execution
        </h2>
        <div className="flex gap-2">
          <button
            onClick={handleExecute}
            disabled={isExecuting}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[rgb(59,130,246)] hover:bg-[rgb(37,99,235)] disabled:bg-[rgb(100,100,100)] text-white rounded-md font-medium transition-colors"
          >
            <Play className="w-4 h-4" />
            Execute
          </button>
          {isExecuting && (
            <button
              onClick={handleStop}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-[rgb(239,68,68)] hover:bg-[rgb(220,38,38)] text-white rounded-md font-medium transition-colors"
            >
              <Square className="w-4 h-4" />
              Stop
            </button>
          )}
          <button
            onClick={handleClear}
            className="px-3 py-2 bg-[rgb(51,51,51)] hover:bg-[rgb(70,70,70)] text-[rgb(245,245,245)] rounded-md transition-colors"
            title="Clear logs"
          >
            <Trash2 className="w-4 h-4" />
          </button>
          <button
            onClick={downloadLogs}
            className="px-3 py-2 bg-[rgb(51,51,51)] hover:bg-[rgb(70,70,70)] text-[rgb(245,245,245)] rounded-md transition-colors"
            title="Download logs"
          >
            <Download className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Status */}
      {isExecuting && (
        <div className="px-4 py-2 bg-[rgb(37,99,235)] text-white text-sm font-medium animate-pulse">
          Executing workflow...
        </div>
      )}

      {/* Logs */}
      <div className="flex-1 overflow-y-auto font-mono text-xs space-y-1 p-4">
        {executionLogs.length === 0 ? (
          <div className="text-[rgb(100,100,100)] text-center py-8">
            No execution logs yet. Run the workflow to see logs here.
          </div>
        ) : (
          executionLogs.map((log, idx) => (
            <div
              key={idx}
              className={`px-2 py-1 rounded text-[rgb(245,245,245)] log-${log.level}`}
            >
              <span className="text-[rgb(100,100,100)}">[{log.timestamp}]</span>
              {' '}
              <span className="text-[rgb(163,163,163)]">{log.nodeId}</span>
              {' '}
              <span className={`log-${log.level}`}>
                {log.message}
              </span>
            </div>
          ))
        )}
      </div>

      {/* Results Summary */}
      {Object.keys(executionResults).length > 0 && (
        <div className="border-t border-[rgb(51,51,51)] p-4 bg-[rgb(25,25,25)]">
          <h3 className="text-sm font-medium text-[rgb(245,245,245)] mb-2">
            Results
          </h3>
          <div className="bg-[rgb(38,38,38)] rounded p-2 text-xs text-[rgb(163,163,163)] max-h-32 overflow-y-auto">
            <pre>{JSON.stringify(executionResults, null, 2)}</pre>
          </div>
        </div>
      )}
    </div>
  );
};
