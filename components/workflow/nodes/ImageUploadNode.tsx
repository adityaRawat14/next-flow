"use client";

import React, { useState } from "react";
import { Handle, Position } from "@xyflow/react";
import { Upload, X, ChevronDown } from "lucide-react";

export function ImageUploadNode({ data, selected }: any) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [preview, setPreview] = useState<string | null>(data.previewUrl || null);
  const [uploading, setUploading] = useState(false);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!validTypes.includes(file.type)) {
      alert("Please upload a valid image (jpg, png, webp, gif)");
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("type", "image");

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");

      const result = await response.json();
      setPreview(result.url);
      data.imageUrl = result.url;
      data.fileName = file.name;
    } catch (error) {
      alert("Failed to upload image");
      console.error("[v0] Upload error:", error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      className={`bg-[#1a1a1a] border rounded-lg p-4 min-w-[280px] max-w-sm shadow-lg transition-all ${
        selected ? "border-blue-500 border-2" : "border-[#444]"
      } ${data.isExecuting ? "animate-pulse bg-blue-500/10" : ""}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <h3 className="text-sm font-semibold">Upload Image</h3>
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
          {preview ? (
            <div className="relative">
              <img
                src={preview}
                alt="preview"
                className="w-full h-40 object-cover rounded bg-[#0a0a0a]"
              />
              <button
                onClick={() => {
                  setPreview(null);
                  data.imageUrl = null;
                }}
                className="absolute top-1 right-1 p-1 bg-red-500 hover:bg-red-600 rounded transition"
              >
                <X size={14} />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-[#444] rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-500/5 transition">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload size={20} className="text-gray-400 mb-2" />
                <p className="text-xs text-gray-400">
                  {uploading ? "Uploading..." : "Click to upload image"}
                </p>
              </div>
              <input
                type="file"
                className="hidden"
                accept="image/jpeg,image/png,image/webp,image/gif"
                onChange={handleFileSelect}
                disabled={uploading}
              />
            </label>
          )}
          {data.fileName && (
            <p className="text-xs text-gray-500 truncate">File: {data.fileName}</p>
          )}
        </div>
      )}

      {/* Output Handle */}
      <Handle type="source" position={Position.Right} id="output" />
    </div>
  );
}
