"use client";

import { useEffect, useState } from "react";
import { useWedding } from "@/lib/context/WeddingContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Countdown() {
  const { config } = useWedding();
  const targetDate = new Date(config.weddingDate).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const items = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="py-16 px-8 text-center bg-zinc-950 text-white rounded-[3rem] shadow-2xl border border-white/5 mx-4 overflow-hidden relative group">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-emerald-500/10 blur-[120px] pointer-events-none group-hover:bg-emerald-500/20 transition-colors duration-1000"></div>
      
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-lg md:text-xl font-serif mb-12 text-emerald-400 italic tracking-wide relative z-10"
      >
        In Sha Allah, counting down to our special day...
      </motion.h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative z-10">
        {items.map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="relative">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={item.value}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-2 tabular-nums"
                    >
                        {String(item.value).padStart(2, '0')}
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-emerald-500/60 font-black">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
