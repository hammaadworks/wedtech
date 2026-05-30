"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <motion.div 
      whileHover={{ y: -5 }}
      className="flex flex-col items-center justify-center bg-white/40 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-6 w-20 md:w-28 shadow-lg"
    >
      <span className="text-3xl md:text-5xl font-bold text-primary">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-[10px] md:text-xs uppercase tracking-widest font-semibold text-secondary mt-1">
        {label}
      </span>
    </motion.div>
  );

  return (
    <div className="flex justify-center gap-3 md:gap-6 py-12 px-4">
      <TimeBlock value={timeLeft.days} label="Days" />
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <TimeBlock value={timeLeft.minutes} label="Minutes" />
      <TimeBlock value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default Countdown;
