"use client";

import React from 'react';
import { useWedding } from '@/lib/context/WeddingContext';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function RoyalGardenTemplate() {
  const { config } = useWedding();

  return (
    <main className="bg-rose-50/30 text-rose-900 min-h-screen font-serif selection:bg-rose-200 selection:text-rose-900">
      {/* SaaS Preview Bar */}
      <div className="fixed top-0 left-0 w-full z-[100] bg-white/60 backdrop-blur-md border-b border-rose-100 py-2 px-6 flex justify-between items-center">
         <span className="text-[10px] font-bold uppercase tracking-widest text-rose-300">Royal Garden</span>
         <Link href="/builder" className="text-[10px] font-bold uppercase text-rose-500 hover:text-rose-700">
            Exit Preview
         </Link>
      </div>

      <section className="h-screen flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-pulse delay-700"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="z-10 space-y-8"
        >
          <div className="flex justify-center gap-4 mb-4">
             <div className="w-12 h-[1px] bg-rose-200 mt-3"></div>
             <span className="text-xs uppercase tracking-[0.3em] font-bold text-rose-300">Nikah</span>
             <div className="h-4 w-4 rounded-full border border-rose-200 rotate-45 flex items-center justify-center">
                <div className="w-1 h-1 bg-rose-400 rounded-full"></div>
             </div>
             <span className="text-xs uppercase tracking-[0.3em] font-bold text-rose-300">Mubarak</span>
             <div className="w-12 h-[1px] bg-rose-200 mt-3"></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-dancing italic text-rose-800">
            {config.couple.groom} <br />
            <span className="text-3xl font-serif not-italic text-rose-200">&</span> <br />
            {config.couple.bride}
          </h1>
          
          <p className="text-xl md:text-2xl italic tracking-widest font-light text-rose-400">
            {config.weddingDate}
          </p>
          
          <div className="pt-12">
             <motion.div 
               animate={{ scale: [1, 1.1, 1] }} 
               transition={{ repeat: Infinity, duration: 4 }}
               className="w-16 h-16 border border-rose-100 rounded-full mx-auto flex items-center justify-center"
             >
                <div className="w-10 h-10 border border-rose-200 rounded-full flex items-center justify-center">
                   <div className="w-4 h-4 bg-rose-100 rounded-full"></div>
                </div>
             </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-32 px-6 max-w-2xl mx-auto space-y-32">
        <div className="space-y-16">
           {config.events.map((event, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="text-center space-y-4"
             >
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-rose-200">{event.time}</span>
                <h3 className="text-4xl font-dancing italic text-rose-700">{event.title}</h3>
                <p className="text-rose-400 leading-relaxed font-light">{event.description}</p>
                <div className="h-px w-8 bg-rose-100 mx-auto mt-8"></div>
             </motion.div>
           ))}
        </div>

        <div className="bg-rose-100/30 p-12 rounded-[3rem] text-center space-y-8 border border-rose-100">
           <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-rose-300">Confirm Your Presence</h2>
           <p className="text-rose-600 font-light italic text-lg">We look forward to having you with us in this garden of love.</p>
           <a 
             href={`https://wa.me/${config.rsvp.whatsappNumber}`}
             className="inline-block px-10 py-4 bg-rose-400 text-white rounded-full font-bold uppercase text-xs tracking-[0.2em] shadow-xl shadow-rose-200 hover:scale-105 transition-transform"
           >
             RSVP via WhatsApp
           </a>
        </div>
      </section>

      <footer className="py-24 text-center">
         <div className="flex justify-center gap-2 mb-4 opacity-20">
            {[1,2,3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>)}
         </div>
         <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-rose-200">
            {config.couple.hashtag}
         </p>
      </footer>
    </main>
  );
}
