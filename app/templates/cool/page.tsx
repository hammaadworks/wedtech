"use client";

import React from 'react';
import { useWedding } from '@/lib/context/WeddingContext';
import { ScrollProgress } from "@/components/templates/cool/magicui/scroll-progress";
import { SplashCursor } from "@/components/templates/cool/ui/splash-cursor";
import { BlessedNavBar } from "@/components/templates/cool/BlessedNavBar";
import Hero from "@/components/templates/cool/sections/Hero";
import Countdown from "@/components/templates/cool/sections/Countdown";
import { VenueCard } from "@/components/templates/cool/VenueCard";
import { NikahTimeline } from "@/components/templates/cool/NikahTimeline";
import { NobleCause } from "@/components/templates/cool/NobleCause";
import { FAQ } from "@/components/templates/cool/FAQ";
import RSVP from "@/components/templates/cool/sections/RSVP";
import { Connect } from "@/components/templates/cool/Connect";
import Link from 'next/link';

export default function CoolTemplate() {
  const { config } = useWedding();

  return (
    <main className="relative min-h-screen bg-[#fafafa] text-[#1a1a1a] selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      {/* SaaS Preview Bar */}
      <div className="fixed top-0 left-0 w-full z-[100] bg-white/70 backdrop-blur-xl border-b border-zinc-100 py-2.5 px-6 flex justify-between items-center transition-all duration-300">
         <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[11px] font-black text-zinc-400 uppercase tracking-[0.2em]">Preview</span>
            <div className="h-4 w-[1px] bg-zinc-200"></div>
            <span className="text-[11px] font-bold text-emerald-700 italic uppercase tracking-wider">Cool Aesthetic</span>
         </div>
         <Link href="/builder" className="text-[10px] font-bold bg-zinc-950 text-white px-5 py-2 rounded-full hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200">
            Customize This Theme
         </Link>
      </div>

      <ScrollProgress className="top-[52px] bg-emerald-500" />
      <SplashCursor />
      <BlessedNavBar />

      <Hero />
      
      <div className="relative z-10 -mt-24 md:-mt-32 mb-20 max-w-5xl mx-auto px-4">
        <Countdown />
      </div>

      <div className="space-y-32 pb-32">
        <VenueCard />
        <NikahTimeline />
        <NobleCause />
        <FAQ />
        <RSVP />
        <Connect />
      </div>

      <footer className="py-24 bg-zinc-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08),transparent_70%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <p className="font-serif italic text-5xl mb-8 text-emerald-400">
            {config.couple.groom} & {config.couple.bride}
          </p>
          <div className="h-[1px] w-32 bg-emerald-500/20 mx-auto mb-10"></div>
          <p className="text-[10px] uppercase tracking-[0.6em] opacity-40 mb-6 font-bold">
            Alhamdulillah • {new Date(config.weddingDate).getFullYear()}
          </p>
          <div className="inline-block px-6 py-2 border border-emerald-500/20 rounded-full">
            <p className="text-xs font-bold tracking-[0.3em] text-emerald-500/80">
                {config.couple.hashtag}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
