"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 5000);
    return () => clearTimeout(timer);
  }, [isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Audio play failed:", err));
      }
      setIsPlaying(!isPlaying);
      setShowHint(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <AnimatePresence>
        {showHint && !isPlaying && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-primary/10 text-xs font-bold text-primary whitespace-nowrap"
          >
            Play Blessed Music? 🎵
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={togglePlay}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${
          isPlaying ? 'bg-primary text-white' : 'bg-white text-primary animate-bounce'
        }`}
      >
        {isPlaying ? (
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }}>
            <Volume2 className="w-6 h-6" />
          </motion.div>
        ) : (
          <VolumeX className="w-6 h-6" />
        )}
      </motion.button>

      <audio ref={audioRef} src={src} loop />
    </div>
  );
};

export default AudioPlayer;
