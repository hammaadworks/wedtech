"use client";

import React from 'react';
import { useWedding } from '@/lib/context/WeddingContext';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MinimalGraceTemplate() {
  const { config } = useWedding();

  return (
    <main className="bg-white text-slate-900 min-h-screen font-sans selection:bg-slate-900 selection:text-white">
      {/* SaaS Preview Bar */}
      <div className="fixed top-0 left-0 w-full z-[100] bg-white border-b border-slate-100 py-2 px-6 flex justify-between items-center">
         <span className="text-[10px] font-black uppercase tracking-[0.3em]">Minimalist Grace / Preview</span>
         <Link href="/builder" className="text-[10px] font-black uppercase border-b-2 border-slate-900 hover:text-slate-400 hover:border-slate-400 transition-colors">
            Exit
         </Link>
      </div>

      <section className="h-screen flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="border-x border-slate-200 px-12 py-24 relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-xs tracking-[0.5em] font-light text-slate-400 uppercase">
             Blessed Nikah
          </div>
          
          <h1 className="text-7xl md:text-9xl font-light tracking-tighter mb-8">
            {config.couple.groom.toUpperCase()} <br />
            <span className="text-slate-300">&</span> <br />
            {config.couple.bride.toUpperCase()}
          </h1>
          
          <p className="text-sm tracking-[0.4em] font-medium uppercase text-slate-500 mb-12">
            {config.weddingDate}
          </p>
          
          <div className="h-20 w-[1px] bg-slate-900 mx-auto animate-bounce"></div>
          
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white px-4">
             <div className="w-2 h-2 rounded-full bg-slate-900"></div>
          </div>
        </motion.div>
      </section>

      <section className="py-32 px-6 max-w-4xl mx-auto space-y-24">
        <div className="text-center space-y-6">
           <h2 className="text-xs font-black uppercase tracking-[1em] text-slate-300">The Events</h2>
           {config.events.map((event, i) => (
             <div key={i} className="py-12 border-b border-slate-100 last:border-0">
                <h3 className="text-4xl font-light mb-4">{event.title}</h3>
                <p className="text-slate-500 mb-4">{event.description}</p>
                <p className="text-sm font-bold uppercase tracking-widest">{event.time} • {event.locationName}</p>
             </div>
           ))}
        </div>

        <div className="text-center space-y-12">
           <h2 className="text-xs font-black uppercase tracking-[1em] text-slate-300">RSVP</h2>
           <div className="flex flex-col items-center gap-6">
              <p className="text-2xl font-light italic">Join us in our happiness.</p>
              <a 
                href={`https://wa.me/${config.rsvp.whatsappNumber}`}
                className="px-12 py-4 border-2 border-slate-900 text-slate-900 font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all"
              >
                Confirm Attendance
              </a>
           </div>
        </div>
      </section>

      <footer className="py-24 border-t border-slate-50 text-center">
         <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">
            {config.couple.hashtag}
         </p>
      </footer>
    </main>
  );
}
