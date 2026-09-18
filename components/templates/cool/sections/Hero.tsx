"use client";

import { useWedding } from "@/lib/context/WeddingContext";
import { SparklesText } from "@/components/templates/cool/magicui/sparkles-text";
import { HyperText } from "@/components/templates/cool/magicui/hyper-text";
import { motion } from "framer-motion";

export default function Hero() {
  const { config } = useWedding();
  const { couple, weddingDate, hijriDate } = config;

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-black py-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 text-center px-4 max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6 inline-block"
        >
          <span className="px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase tracking-[0.3em] border border-emerald-100 shadow-sm">
            In the Name of Allah
          </span>
        </motion.div>
        
        <p className="text-sm md:text-base font-medium tracking-[0.4em] uppercase mb-8 text-zinc-500 dark:text-zinc-400">
          Celebrating the Blessed Nikah of
        </p>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-12 mb-12">
          <SparklesText className="text-7xl md:text-9xl font-serif italic text-zinc-900 dark:text-white leading-tight">
            {couple.groom}
          </SparklesText>
          <motion.span 
            initial={{ opacity: 0, rotate: -180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-4xl md:text-6xl font-light text-emerald-500/40"
          >
            &
          </motion.span>
          <SparklesText className="text-7xl md:text-9xl font-serif italic text-zinc-900 dark:text-white leading-tight">
            {couple.bride}
          </SparklesText>
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-emerald-200 to-transparent mb-2"></div>
          <HyperText
            className="text-2xl md:text-4xl font-light tracking-[0.2em] uppercase text-emerald-700 dark:text-emerald-400"
          >
            {weddingDate}
          </HyperText>
          {hijriDate && (
            <p className="text-lg md:text-xl font-serif italic text-zinc-400 mt-1">
              {hijriDate}
            </p>
          )}
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-emerald-200 to-transparent mt-2"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="mt-20"
        >
          <div className="flex flex-col items-center gap-3">
             <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-300 font-bold">Scroll to Explore</span>
             <div className="h-16 w-[1px] bg-gradient-to-b from-emerald-400 to-transparent"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
