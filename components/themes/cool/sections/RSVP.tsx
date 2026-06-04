"use client";

import { useWedding } from "@/lib/context/WeddingContext";
import { RainbowButton } from "@/components/themes/cool/magicui/rainbow-button";
import { motion } from "framer-motion";

export default function RSVP() {
  const { config } = useWedding();
  const { rsvp } = config;

  if (!rsvp.enabled) return null;

  const handleRSVP = () => {
    const message = encodeURIComponent(`Assalamu Alaikum! I would like to confirm my attendance for the wedding of ${config.couple.groom} and ${config.couple.bride}.`);
    window.open(`https://wa.me/${rsvp.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="rsvp" className="py-24 bg-white dark:bg-black text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-100/30 dark:bg-emerald-900/10 blur-3xl rounded-full -z-10"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto px-4"
      >
        <h2 className="text-3xl md:text-5xl font-serif mb-6 text-zinc-900 dark:text-zinc-100">Will you join us?</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-10 text-lg">
          Your presence would mean the world to us. Please let us know if you'll be attending by clicking the button below.
        </p>
        
        <RainbowButton onClick={handleRSVP} className="px-10 py-6 text-lg rounded-full">
          Confirm My Attendance
        </RainbowButton>
        
        <div className="mt-8 text-sm text-zinc-500 italic">
          Kindly RSVP at your earliest convenience.
        </div>
      </motion.div>
    </section>
  );
}
