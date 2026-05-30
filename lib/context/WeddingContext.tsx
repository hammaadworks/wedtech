"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { WeddingConfig, defaultWeddingConfig } from '@/config/weddingConfig';

interface WeddingContextType {
  config: WeddingConfig;
  updateConfig: (newConfig: Partial<WeddingConfig>) => void;
  resetConfig: () => void;
}

const WeddingContext = createContext<WeddingContextType | undefined>(undefined);

export const WeddingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<WeddingConfig>(defaultWeddingConfig);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('wedding-saas-config');
    if (saved) {
      try {
        setConfig(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved config", e);
      }
    }
  }, []);

  const updateConfig = (newConfig: Partial<WeddingConfig>) => {
    setConfig(prev => {
      const updated = { ...prev, ...newConfig };
      localStorage.setItem('wedding-saas-config', JSON.stringify(updated));
      return updated;
    });
  };

  const resetConfig = () => {
    setConfig(defaultWeddingConfig);
    localStorage.removeItem('wedding-saas-config');
  };

  return (
    <WeddingContext.Provider value={{ config, updateConfig, resetConfig }}>
      {children}
    </WeddingContext.Provider>
  );
};

export const useWedding = () => {
  const context = useContext(WeddingContext);
  if (context === undefined) {
    throw new Error('useWedding must be used within a WeddingProvider');
  }
  return context;
};
