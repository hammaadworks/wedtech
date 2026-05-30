"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Bismillah from '../Islamic/Bismillah';
import { WeddingConfig } from '../../config/weddingConfig';

interface HeroProps {
  config: WeddingConfig;
}

const Hero: React.FC<HeroProps> = ({ config }) => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-12 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <Bismillah />

        <div className="mt-8 space-y-4">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl text-primary drop-shadow-sm font-dancing"
          >
            {config.couple.groom}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-3xl md:text-4xl text-secondary flex items-center justify-center gap-4 py-2"
          >
            <span className="w-12 h-[1px] bg-secondary/30 hidden md:block"></span>
            <span className="text-4xl">❤️</span>
            <span className="w-12 h-[1px] bg-secondary/30 hidden md:block"></span>
          </motion.div>

          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-6xl md:text-8xl lg:text-9xl text-primary drop-shadow-sm font-dancing"
          >
            {config.couple.bride}
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-12 space-y-4"
        >
          <p className="text-lg md:text-xl uppercase tracking-[0.2em] font-medium text-slate-500">
            Are getting married, Alhamdulillah
          </p>
          <div className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-bold text-secondary bg-accent/50 px-6 py-2 rounded-full backdrop-blur-sm border border-secondary/20">
              {config.weddingDate}
            </span>
            {config.hijriDate && (
              <span className="text-sm mt-2 text-primary font-medium opacity-70">
                {config.hijriDate}
              </span>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative images from assets */}
      <img
        src="/assets/img/left.png"
        alt="decoration-left"
        className="absolute top-0 left-0 w-32 md:w-64 opacity-60 pointer-events-none"
      />
      <img
        src="/assets/img/right.png"
        alt="decoration-right"
        className="absolute top-0 right-0 w-32 md:w-64 opacity-60 pointer-events-none"
      />
    </section>
  );
};

export default Hero;
