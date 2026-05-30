"use client";

import React from 'react';
import { useWedding } from '@/lib/context/WeddingContext';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeritageDemoTemplate() {
  const { config } = useWedding();

  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen font-sans">
      {/* SaaS Preview Bar */}
      <div className="fixed top-0 left-0 w-full z-[100] bg-white border-b border-slate-200 py-2 px-6 flex justify-between items-center shadow-sm">
         <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Heritage Demo / Preview</span>
         <Link href="/builder" className="text-[10px] font-bold uppercase hover:text-slate-900 transition-colors">
            Exit
         </Link>
      </div>

      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center pt-20 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-6"
        >
          {config.couple.groom} & {config.couple.bride}
        </motion.h1>
        <p className="text-xl text-slate-500 italic">Are getting married, Alhamdulillah</p>
      </section>

      {/* Venues Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto bg-white rounded-t-[3rem] shadow-2xl">
         <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Venue Details</h2>
            <p className="text-slate-500">All about the venue, directions, timings, and more.</p>
         </div>

         {config.venues.map((venue, i) => (
            <div key={i} className="mb-12 border border-slate-100 rounded-3xl p-8 bg-slate-50 hover:shadow-lg transition-shadow">
               <h3 className="text-2xl font-bold mb-2 text-primary">{venue.name}</h3>
               <p className="text-sm text-slate-600 mb-6">{venue.address}</p>
               <div className="flex gap-4">
                  <a href={venue.link} className="px-6 py-2 bg-primary text-white rounded-full text-sm font-bold">Get Directions</a>
               </div>
            </div>
         ))}
      </section>

      <footer className="py-24 text-center">
         <p className="text-sm font-bold uppercase tracking-widest">{config.couple.hashtag}</p>
      </footer>
    </main>
  );
}
