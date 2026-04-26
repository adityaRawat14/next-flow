"use client";

import { useState } from "react";
import Link from "next/link";
import { PanelLeft } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useUser ,useClerk ,UserButton} from "@clerk/nextjs";

import HomeIcon from "@/public/home-icon.webp";
import NodeIcon from "@/public/nodes-icon.webp";

export default function AppSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const pathname = usePathname();
  const { user, isSignedIn } = useUser();
const { redirectToSignIn ,} = useClerk();
  return (
    <div
      className={`bg-[#000000] text-white transition-all pb-14 duration-300 ease-in-out ${
        isCollapsed ? "w-10" : "w-52"
      } flex flex-col border-r border-zinc-800`}
    >
      {/* Toggle button */}
      <div className="pt-3 pl-2 mt-1 ml-1 flex justify-start text-gray-400">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 hover:bg-zinc-900 cursor-pointer rounded-md transition-colors"
        >
          <PanelLeft size={13} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto text-white no-scrollbar px-1">
        <ul className={`pt-5 flex flex-col gap-1 space-y-1 ${!isCollapsed && "px-2"}`}>
          
          {/* Home */}
          <li>
            <Link
              href="/app/home"
              className={`flex items-center gap-2 py-2 ${
                !isCollapsed && "px-2"
              } rounded-md transition-all duration-300 ${
                pathname === "/app/home"
                  ? "bg-zinc-800"
                  : "hover:bg-zinc-900"
              } ${isCollapsed ? "justify-center" : ""}`}
            >
              <Image src={HomeIcon} height={15} width={15} alt="homeicon" />

              {!isCollapsed && (
                <span className="text-xs font-light">Home</span>
              )}
            </Link>
          </li>

          {/* Node Editor */}
          <li>
            <Link
              href="/app/nodes"
              className={`flex items-center gap-2 py-2 ${
                !isCollapsed && "px-2"
              } rounded-md transition-all duration-300 ${
                pathname.startsWith("/app/nodes")
                  ? "bg-zinc-800 text-white"
                  : " hover:bg-zinc-900 hover:text-white"
              } ${isCollapsed ? "justify-center" : ""}`}
            >
              <Image src={NodeIcon} height={15} width={15} alt="nodeIcon" />

              {!isCollapsed && (
                <span className="text-xs font-light">Node Editor</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>

      {/* Bottom Section */}
     <div className="p-2">
  {isSignedIn ? (
    <div
      className={`w-full flex  items-center ${
        isCollapsed ? "justify-center" : "justify-start px-5"
      }`}
    >
      <UserButton
        afterSwitchSessionUrl="/app/home"
        appearance={{
          elements: {
            avatarBox: "w-7 h-7",
          },
        }}
      />

      {!isCollapsed && (
        <span className="ml-2 text-xs font-light truncate">
          {user?.fullName || user?.username || "User"}
        </span>
      )}
    </div>
  ) : (
    <button
      onClick={() => {
        redirectToSignIn({
          redirectUrl: "/app/home",
        });
      }}
      className="w-full text-xs font-medium text-blue-500 hover:text-blue-400 transition cursor-pointer"
    >
      Sign in
    </button>
  )}
</div>
    </div>
  );
}