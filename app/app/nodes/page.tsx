"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight , CirclePlus  } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter", 
});
import NodeBg from "@/public/node-bg.webp";
import NodesIcon from "@/public/nodes-icon.webp";
import Projects from "@/components/app/Projects";
import Examples from "@/components/app/Examples";

export default function NodeEditorPage() {
  const searchParams = useSearchParams();
  
  const activeTab = searchParams.get("tab") || "projects";

  return (
    <div className={`${inter.variable} flex flex-col w-full min-h-screen bg-[#101010]`} >
      {/* Hero Section */}
      <section className="relative pt-17 pl-16 h-[55vh] overflow-hidden">
        <Image
          alt="background"
          src={NodeBg}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 " />

        <div className="relative flex flex-col gap-3 h-full text-white z-10">
          <h1 className="text-2xl flex gap-3 items-center font-medium">
            <Image
              src={NodesIcon}
              alt="icon"
              width={27}
              height={27}
              className="aspect-square object-contain"
            />
            Node Editor
          </h1>
          <p className="text-[13px] w-[30vw] text-white leading-relaxed">
            Nodes is the most powerful way to operate Krea. Connect every tool
            and model into complex automated pipelines.
          </p>
          <div className="flex w-full justify-start mt-13 ml-4">
            <button className="bg-white hover:bg-zinc-200 transition-colors cursor-pointer py-1.5 px-5 rounded-full flex justify-center gap-2 items-center text-black font-medium">
              <span className="text-[12px]">New Workflow</span> 
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* Tabs & Search Section */}
      <section className="w-full pt-8 px-16">
        <div className="flex w-full items-center justify-between border-b border-zinc-800">
          <div className="flex gap-2 py-3">
            {/* Project Tab Link */}
            <Link
              href="/app/nodes?tab=projects"
              scroll={false}
              className={`px-5 py-2 rounded-sm  text-white text-[11px] transition-all duration-200 ${
                activeTab === "projects"
                  ? "bg-zinc-800 "
                  : ""
              }`}
            >
              Projects
            </Link>

            {/* Examples Tab Link */}
            <Link
              href="/app/nodes?tab=examples"
              scroll={false}
              className={`px-5 py-2 rounded-sm  text-white text-[11px] transition-all duration-200 ${
                activeTab === "examples"
                  ? "bg-zinc-800 "
                  : ""
              }`}
            >
              Examples
            </Link>
          </div>

          {/* Search Input with Focus Fixes */}
          <div className="flex items-center mr-4">
            <input
              type="text"
              placeholder="Search Projects.."
              className="h-8 w-64 bg-transparent border border-zinc-700 text-white text-[11px] rounded-md px-3 
                         transition-all duration-200
                         focus:outline-none focus:ring-0 focus:border-zinc-500
                         placeholder:text-zinc-600"
            />
          </div>
        </div>
          {activeTab === "projects" && <Projects/>}
          {activeTab === "examples" && <Examples />}
        
      </section>
    </div>
  );
}