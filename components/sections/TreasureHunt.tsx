"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Search, AlertTriangle, ArrowRight, Home } from 'lucide-react';
import confetti from 'canvas-confetti';

interface TreasureHuntProps {
  config: {
    startTime: string;
    endTime: string;
    totalLevels: number;
    levels: { level: number; hint: string }[];
  };
}

const TreasureHunt: React.FC<TreasureHuntProps> = ({ config }) => {
  const [currentLevel, setCurrentLevel] = useState<number>(0);
  const [gameState, setGameState] = useState<'too-early' | 'playing' | 'too-late' | 'finished'>('playing');
  const [inputLevel, setInputLevel] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('treasure-hunt-level');
    if (stored) {
      setCurrentLevel(parseInt(stored));
    }

    const checkTime = () => {
      const now = new Date();
      const start = new Date(config.startTime);
      const end = new Date(config.endTime);

      if (now < start) setGameState('too-early');
      else if (now > end) setGameState('too-late');
      else if (parseInt(stored || '0') >= config.totalLevels) setGameState('finished');
      else setGameState('playing');
    };

    checkTime();
    const interval = setInterval(checkTime, 1000);
    return () => clearInterval(interval);
  }, [config.startTime, config.endTime, config.totalLevels]);

  const startHunt = () => {
    localStorage.setItem('treasure-hunt-level', '1');
    setCurrentLevel(1);
    setGameState('playing');
  };

  const handleNextLevel = (e: React.FormEvent) => {
    e.preventDefault();
    const targetLevel = parseInt(inputLevel);
    
    if (targetLevel === currentLevel + 1) {
      localStorage.setItem('treasure-hunt-level', targetLevel.toString());
      setCurrentLevel(targetLevel);
      setInputLevel('');
      setError(null);
      
      if (targetLevel === config.totalLevels) {
        setGameState('finished');
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        confetti({
          particleCount: 50,
          spread: 30,
          origin: { y: 0.8 }
        });
      }
    } else {
      setError("Oops! That's not the right level code. Keep searching! 🔍");
      setTimeout(() => setError(null), 3000);
    }
  };

  const renderContent = () => {
    switch (gameState) {
      case 'too-early':
        return (
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-dancing text-white">The Hunt Awaits</h1>
            <p className="text-white/80">The treasure hunt begins on June 19th at 10:19 PM, In Sha Allah.</p>
            <div className="text-5xl font-mono text-white/40">--:--:--</div>
          </div>
        );
      case 'too-late':
        return (
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-dancing text-white">Game Over</h1>
            <p className="text-white/80">The treasure hunt window has closed. Alhamdulillah for the fun times!</p>
            <a href="/" className="inline-flex items-center gap-2 text-white bg-white/20 px-6 py-2 rounded-full backdrop-blur-md">
              <Home className="w-4 h-4" /> Home
            </a>
          </div>
        );
      case 'finished':
        return (
          <div className="text-center space-y-6">
            <Trophy className="w-24 h-24 text-yellow-300 mx-auto animate-bounce" />
            <h1 className="text-5xl font-dancing text-white">Mubarak!</h1>
            <p className="text-white/90 text-xl">You've found all the treasures!</p>
            <p className="text-white/60">Collect your prize from the family elders.</p>
            <button 
              onClick={() => { localStorage.clear(); window.location.reload(); }}
              className="text-white/40 text-sm underline"
            >
              Reset Progress
            </button>
          </div>
        );
      case 'playing':
        if (currentLevel === 0) {
          return (
            <div className="text-center space-y-8">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-md">
                <Search className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-4xl font-dancing text-white">Treasure Hunt</h1>
              <p className="text-white/80 text-lg leading-relaxed">
                Ready to find some secrets? Scan QR clues or enter codes to advance. 
                There are {config.totalLevels} levels in total.
              </p>
              <button 
                onClick={startHunt}
                className="w-full py-4 bg-white text-primary rounded-2xl font-bold text-xl shadow-xl hover:scale-105 transition-transform"
              >
                Start the Hunt!
              </button>
            </div>
          );
        }

        const hint = config.levels.find(l => l.level === currentLevel)?.hint;

        return (
          <div className="w-full space-y-8">
            <div className="flex justify-between items-center text-white/60 text-xs font-bold uppercase tracking-widest">
              <span>Level {currentLevel} of {config.totalLevels}</span>
              <div className="h-1 flex-1 mx-4 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white transition-all duration-500" 
                  style={{ width: `${(currentLevel / config.totalLevels) * 100}%` }}
                ></div>
              </div>
            </div>

            <motion.div 
              key={currentLevel}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl space-y-6"
            >
              <h2 className="text-3xl font-dancing text-white">Your Clue:</h2>
              <p className="text-xl text-white font-medium italic leading-relaxed">
                "{hint}"
              </p>
            </motion.div>

            <form onSubmit={handleNextLevel} className="space-y-4">
              <div className="relative">
                <input
                  type="number"
                  placeholder="Enter next level code..."
                  value={inputLevel}
                  onChange={(e) => setInputLevel(e.target.value)}
                  className="w-full py-5 px-6 rounded-2xl bg-white/90 text-primary text-xl font-bold placeholder:text-slate-400 focus:ring-4 focus:ring-white/20 outline-none transition-all shadow-lg"
                />
                <button 
                  type="submit"
                  disabled={!inputLevel}
                  className="absolute right-2 top-2 bottom-2 px-6 bg-primary text-white rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  Verify <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <AnimatePresence>
                {error && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-200 text-sm font-medium flex items-center gap-2 justify-center"
                  >
                    <AlertTriangle className="w-4 h-4" /> {error}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>

            <p className="text-white/40 text-center text-xs">
              Found a QR code? Scan it or enter the number above.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex flex-col items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md">
        {renderContent()}
      </div>
    </div>
  );
};

export default TreasureHunt;
