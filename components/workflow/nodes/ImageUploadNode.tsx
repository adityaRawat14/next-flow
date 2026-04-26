"use client";

import React, { useState, useMemo } from "react";
import { Handle, Position } from "@xyflow/react";
import { Upload, X, ChevronDown, Loader2 } from "lucide-react";
import Uppy from "@uppy/core";
import Transloadit from "@uppy/transloadit";
import Image from "next/image";
import Er from "@/public/error-img.png"
export function ImageUploadNode({ data, selected }: any) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [preview, setPreview] = useState<string | null>(data.imageUrl || null);
  const [uploading, setUploading] = useState(false);
  const [showError,setShowError]=useState(false)

  const uppy = useMemo(() => {
    const uppyInstance = new Uppy({
      id: 'image-uploader',
      restrictions: { maxNumberOfFiles: 1, allowedFileTypes: ["image/*"] },
      autoProceed: true,
    });

    uppyInstance.use(Transloadit, {
      waitForEncoding: true,
      // We fetch the secure signature from our API route
      async assemblyOptions() {
        const response = await fetch('/api/upload/signature');
        if (!response.ok) throw new Error("Failed to fetch signature");
        
        const { params, signature } = await response.json();
        return { params, signature };
      },
    });

    uppyInstance.on("transloadit:complete", (assembly) => {
      const url = assembly.results?.optimize?.[0]?.ssl_url;
      if (url) {
        setPreview(url);
        data.imageUrl = url; // Update node data
        setUploading(false);
      }
    });

    uppyInstance.on("error", (error) => {
      console.error("Uppy Upload Error:", error);
      setUploading(false);
    });

    return uppyInstance;
  }, [data]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setShowError(true)
    alert(`Hi, I wanted to share a quick update about the workflow pipeline progress. I’ve been trying to get the Transloadit file upload working correctly, but I’m currently stuck due to an “invalid signature” error during upload.

I spent most of the day (and even late into the night) debugging this issue from multiple angles, but I still haven’t been able to resolve it. Because of this blocker, my entire upload pipeline — and the downstream workflow execution that depends on it — is currently stuck.😢`)
    setUploading(true);
    data.fileName = file.name;
    
    uppy.addFile({
      name: file.name,
      type: file.type,
      data: file,
    });
  };

  return (
    <div className={`bg-[#1a1a1a] border rounded-lg p-4 min-w-[280px] max-w-sm shadow-lg transition-all ${
        selected ? "border-blue-500 border-2" : "border-[#444]"
      }`}>
          
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-500" />
          <h3 className="text-sm font-semibold text-white">Upload Image</h3>
        </div>
        <button onClick={() => setIsExpanded(!isExpanded)} className="p-1 hover:bg-[#333] rounded transition">
          <ChevronDown size={14} className={`transition-transform text-gray-400 ${isExpanded ? "" : "-rotate-90"}`} />

        </button>
     
      </div>

      {isExpanded && (
        <div className="space-y-3">
          {preview ? (
            <div className="relative group">
              <img src={preview} alt="preview" className="w-full h-40 object-cover rounded bg-[#0a0a0a]" />
              <button
                onClick={() => { setPreview(null); data.imageUrl = null; }}
                className="absolute top-1 right-1 p-1 bg-red-500 hover:bg-red-600 rounded opacity-0 group-hover:opacity-100 transition text-white"
              >
                <X size={14} />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-[#444] rounded-lg cursor-pointer hover:border-blue-500 hover:bg-blue-500/5 transition">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                {uploading ? <Loader2 size={20} className="text-blue-500 animate-spin mb-2" /> : <Upload size={20} className="text-gray-400 mb-2" />}
                <p className="text-xs text-gray-400">{uploading ? "Uploading..." : "Click to upload image"}</p>
              </div>

              <input type="file" className="hidden" accept="image/*" onChange={handleFileSelect} disabled={uploading} />
            </label>
          )}
        </div>
      )}
      <Handle type="source" position={Position.Right} id="output" className="!bg-blue-500" />
    </div>
  );
}