"use client";

import React from 'react';
import { useWedding } from '@/lib/context/WeddingContext';
import TreasureHunt from '@/components/sections/TreasureHunt';
import Link from 'next/link';

export default function TreasureHuntPage() {
  const { config } = useWedding();

  return (
    <main className="bg-slate-900 min-h-screen relative">
      <div className="fixed top-0 left-0 w-full z-[100] bg-white/10 backdrop-blur-md border-b border-white/5 py-2 px-6 flex justify-between items-center">
         <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">Addon Preview</span>
            <div className="h-4 w-[1px] bg-white/10"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white italic">Treasure Hunt Game</span>
         </div>
         <Link href="/builder" className="text-[10px] font-black uppercase text-white hover:text-white/60 transition-colors">
            Exit Preview
         </Link>
      </div>

      <TreasureHunt config={config.treasureHunt} />
    </main>
  );
}
