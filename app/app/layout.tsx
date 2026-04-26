import { Inter } from "next/font/google";
import AppSidebar from "@/components/app/AppSidebar";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={`${inter.className} flex flex-grow min-h-screen`}>
      <AppSidebar />
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>
    </main>
  );
}