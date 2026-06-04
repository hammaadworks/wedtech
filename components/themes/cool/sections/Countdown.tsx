"use client";

import { useEffect, useState } from "react";
import { useWedding } from "@/lib/context/WeddingContext";
import { motion } from "framer-motion";

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
    <div className="p-8 md:p-12 text-center">
      <h2 className="text-xl md:text-2xl font-serif mb-8 text-zinc-800 dark:text-zinc-200 italic">Counting down to our blessed day...</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {items.map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-emerald-600 dark:text-emerald-400 mb-1 font-mono">
              {String(item.value).padStart(2, '0')}
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold">
              {item.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
