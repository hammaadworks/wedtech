"use client";

import React from 'react';
import { useWedding } from '@/lib/context/WeddingContext';
import { ScrollProgress } from "@/components/themes/cool/magicui/scroll-progress";
import { SplashCursor } from "@/components/themes/cool/ui/splash-cursor";
import { BlessedNavBar } from "@/components/themes/cool/BlessedNavBar";
import Hero from "@/components/themes/cool/sections/Hero";
import Countdown from "@/components/themes/cool/sections/Countdown";
import { VenueCard } from "@/components/themes/cool/VenueCard";
import { NikahTimeline } from "@/components/themes/cool/NikahTimeline";
import { NobleCause } from "@/components/themes/cool/NobleCause";
import { FAQ } from "@/components/themes/cool/FAQ";
import RSVP from "@/components/themes/cool/sections/RSVP";
import { Connect } from "@/components/themes/cool/Connect";
import Link from 'next/link';

export default function CoolTemplate() {
  const { config } = useWedding();

  return (
    <main className="relative min-h-screen bg-background text-foreground selection:bg-emerald-100 selection:text-emerald-900">
      {/* SaaS Preview Bar */}
      <div className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-slate-100 py-2 px-6 flex justify-between items-center">
         <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Theme Preview</span>
            <div className="h-3 w-[1px] bg-slate-200"></div>
            <span className="text-[10px] font-bold text-emerald-600 italic uppercase">Cool Aesthetic</span>
         </div>
         <Link href="/builder" className="text-[10px] font-bold bg-emerald-600 text-white px-4 py-1.5 rounded-full hover:bg-emerald-700 transition-colors">
            Back to Builder
         </Link>
      </div>

      <ScrollProgress className="top-[45px]" />
      <SplashCursor />
      <BlessedNavBar />

      <Hero />
      
      <div className="relative z-10 -mt-12 mb-12 max-w-4xl mx-auto px-4">
        <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
          <Countdown />
        </div>
      </div>

      <VenueCard />
      <NikahTimeline />
      <NobleCause />
      <FAQ />
      <RSVP />
      <Connect />

      <footer className="py-20 bg-zinc-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1),transparent_70%)]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <p className="font-serif italic text-4xl mb-6 text-emerald-400">
            {config.couple.groom} & {config.couple.bride}
          </p>
          <div className="h-[1px] w-24 bg-emerald-500/30 mx-auto mb-8"></div>
          <p className="text-xs uppercase tracking-[0.4em] opacity-50 mb-4 font-light">
            Alhamdulillah • 2025
          </p>
          <p className="text-sm font-medium tracking-widest text-emerald-500/80">
            {config.couple.hashtag}
          </p>
        </div>
      </footer>
    </main>
  );
}
