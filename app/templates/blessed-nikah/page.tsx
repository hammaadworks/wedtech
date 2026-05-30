"use client";

import React from 'react';
import { useWedding } from '@/lib/context/WeddingContext';
import FloatingPetals from '@/components/ui/FloatingPetals';
import Hero from '@/components/sections/Hero';
import Countdown from '@/components/sections/Countdown';
import Timeline from '@/components/sections/Timeline';
import Venues from '@/components/sections/Venues';
import RSVP from '@/components/sections/RSVP';
import AudioPlayer from '@/components/ui/AudioPlayer';
import Link from 'next/link';

export default function BlessedNikahTemplate() {
  const { config } = useWedding();

  return (
    <main className="relative min-h-screen">
      {/* SaaS Preview Bar */}
      <div className="fixed top-0 left-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-slate-100 py-2 px-6 flex justify-between items-center">
         <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Preview Mode</span>
            <div className="h-4 w-[1px] bg-slate-200"></div>
            <span className="text-xs font-bold text-primary italic">Blessed Nikah</span>
         </div>
         <Link href="/builder" className="text-xs font-bold bg-primary text-white px-4 py-1.5 rounded-full">
            Back to Builder
         </Link>
      </div>

      <FloatingPetals />
      
      <Hero config={config} />
      
      <div className="bg-white/30 backdrop-blur-[2px]">
        <Countdown targetDate={config.weddingDate} />
      </div>

      <Timeline events={config.events} />
      
      <Venues venues={config.venues} />
      
      <RSVP config={config} />

      <footer className="py-12 bg-primary text-white text-center">
        <p className="font-dancing text-3xl mb-4 italic">
          {config.couple.groom} & {config.couple.bride}
        </p>
        <p className="text-xs uppercase tracking-widest opacity-60">
          Made with Love & Prayers • 2025
        </p>
        <p className="text-[10px] mt-4 opacity-40">
          {config.couple.hashtag}
        </p>
      </footer>

      <AudioPlayer src={config.mainAudio} />
    </main>
  );
}
