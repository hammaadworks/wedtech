"use client";

import { useWedding } from "@/lib/context/WeddingContext";
import { SparklesText } from "@/components/themes/cool/magicui/sparkles-text";
import { HyperText } from "@/components/themes/cool/magicui/hyper-text";
import { motion } from "framer-motion";

export default function Hero() {
  const { config } = useWedding();
  const { couple, weddingDate, hijriDate } = config;

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-black py-20">
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center px-4"
      >
        <p className="text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-4 text-emerald-600 dark:text-emerald-400">
          We invite you to celebrate the wedding of
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mb-8">
          <SparklesText className="text-6xl md:text-8xl font-serif italic">{couple.groom}</SparklesText>
          <span className="text-3xl md:text-5xl font-light text-zinc-400">&</span>
          <SparklesText className="text-6xl md:text-8xl font-serif italic">{couple.bride}</SparklesText>
        </div>

        <div className="flex flex-col items-center gap-2">
          <HyperText
            className="text-xl md:text-2xl font-light tracking-widest uppercase text-zinc-600 dark:text-zinc-400"
          >
            {weddingDate}
          </HyperText>
          {hijriDate && (
            <p className="text-sm md:text-base font-serif italic text-zinc-500">
              {hijriDate}
            </p>
          )}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12"
        >
          <div className="h-12 w-[1px] bg-gradient-to-b from-emerald-500 to-transparent mx-auto"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
