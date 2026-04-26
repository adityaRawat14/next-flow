"use client";

import Image from "next/image";
import HomeBg from '@/public/home-bg.webp'

export default function Page() {
  return (
    <main  className="bg-[#101010] min-h-screen text-white px-9 pt-14">

      <section className="relative h-[55vh] rounded-xl overflow-hidden flex items-center justify-center">

        <Image
          src={HomeBg}
          alt="banner"
          fill
          className="object-cover"
        />

        {/* dark overlay */}
        <div className="absolute inset-0" />

        {/* text */}
        <h1 className="relative text-5xl font-semibold">
          Start by generating a free image
        </h1>

      </section>


    
      {/* TOOL CARDS SECTION */}
      <section className="mt-10 relative">


      </section>

    </main>
  );
}


