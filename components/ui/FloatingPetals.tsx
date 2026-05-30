"use client";

import React, { useEffect, useState } from 'react';

const FloatingPetals = () => {
  const [petals, setPetals] = useState<{ id: number; left: string; size: string; duration: string; delay: string }[]>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 15 + 10}px`,
      duration: `${Math.random() * 5 + 7}s`,
      delay: `${Math.random() * 5}s`,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="petals-container">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size,
            animationDuration: petal.duration,
            animationDelay: petal.delay,
            backgroundColor: Math.random() > 0.5 ? '#fff5f5' : '#fff0f3', // Very light pink/white
            boxShadow: '0 0 10px rgba(255, 192, 203, 0.2)',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingPetals;
