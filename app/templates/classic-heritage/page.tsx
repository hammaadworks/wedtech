"use client";

import React from 'react';
import { useWedding } from '@/lib/context/WeddingContext';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ClassicHeritageTemplate() {
  const { config } = useWedding();

  return (
    <main className="bg-amber-50 text-amber-900 min-h-screen font-serif selection:bg-amber-900 selection:text-amber-50">
      {/* SaaS Preview Bar */}
      <div className="fixed top-0 left-0 w-full z-[100] bg-amber-900 text-amber-50 py-2 px-6 flex justify-between items-center shadow-lg">
         <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Classic Heritage • Preview Mode</span>
         <Link href="/builder" className="text-[10px] font-bold uppercase underline underline-offset-4 hover:text-amber-200">
            Exit
         </Link>
      </div>

      <section className="min-h-screen flex flex-col items-center justify-center p-6 text-center border-[20px] border-amber-900/10 m-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="space-y-12 max-w-2xl"
        >
          <div className="text-sm uppercase tracking-[0.6em] text-amber-700/60 font-medium">
             Bismillahir Rahmanir Rahim
          </div>
          
          <div className="h-px w-24 bg-amber-900/20 mx-auto"></div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-amber-950 uppercase leading-tight">
            The Wedding of <br />
            <span className="font-dancing italic normal-case block mt-6 text-amber-700">{config.couple.groomFull}</span>
            <span className="text-2xl lowercase block my-2">&</span>
            <span className="font-dancing italic normal-case block text-amber-700">{config.couple.brideFull}</span>
          </h1>
          
          <div className="h-px w-24 bg-amber-900/20 mx-auto"></div>

          <div className="space-y-2">
            <p className="text-2xl tracking-[0.2em] font-medium text-amber-900">
              {config.weddingDate.toUpperCase()}
            </p>
            <p className="text-xs tracking-[0.3em] font-bold text-amber-600">
              {config.hijriDate?.toUpperCase()}
            </p>
          </div>
        </motion.div>
      </section>

      <section className="py-32 px-6 max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {config.events.map((event, i) => (
            <div key={i} className="space-y-4 border border-amber-900/10 p-8 rounded-none bg-white shadow-inner">
               <h3 className="text-2xl font-bold uppercase tracking-widest text-amber-900 border-b border-amber-100 pb-4">{event.title}</h3>
               <p className="text-sm leading-loose text-amber-800/80 italic">{event.description}</p>
               <div className="pt-4 space-y-1">
                  <p className="text-xs font-black uppercase tracking-widest text-amber-950">{event.time}</p>
                  <p className="text-xs font-bold text-amber-600">{event.locationName}</p>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center bg-amber-900 text-amber-50 p-16 space-y-8">
           <h2 className="text-2xl font-bold uppercase tracking-[0.4em]">Will You Attend?</h2>
           <p className="text-amber-100/60 font-light max-w-md mx-auto italic">Your presence would mean the world to us as we begin this new chapter, In Sha Allah.</p>
           <div className="flex flex-col md:flex-row justify-center gap-6 pt-4">
              <a 
                href={`https://wa.me/${config.rsvp.whatsappNumber}`}
                className="px-8 py-3 bg-white text-amber-900 font-bold uppercase text-xs tracking-widest hover:bg-amber-100 transition-colors"
              >
                RSVP via WhatsApp
              </a>
              <a 
                href={`mailto:${config.rsvp.email}`}
                className="px-8 py-3 border border-amber-100 text-amber-50 font-bold uppercase text-xs tracking-widest hover:bg-amber-800 transition-colors"
              >
                RSVP via Email
              </a>
           </div>
        </div>
      </section>

      <footer className="py-24 text-center space-y-4">
         <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-amber-300">
            {config.couple.hashtag}
         </p>
         <div className="text-[8px] font-bold uppercase tracking-widest text-amber-900/20">
            Tradition meets Elegance
         </div>
      </footer>
    </main>
  );
}
