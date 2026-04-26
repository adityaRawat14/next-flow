'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Loader } from 'lucide-react';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    console.log("he")
  router.replace("/app/home")
  }, [router]);

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center">
      <Loader className="w-8 h-8 animate-spin text-gray-600" />
    </div>
  );
}