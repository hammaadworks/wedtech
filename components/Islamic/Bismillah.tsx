import React from 'react';

const Bismillah = () => {
  return (
    <div className="flex flex-col items-center justify-center my-8 select-none">
      <div className="text-4xl md:text-5xl font-arabic text-primary mb-2 opacity-80" aria-label="Bismillah">
        ﷽
      </div>
      <p className="text-xs uppercase tracking-widest text-secondary font-medium italic">
        In the name of Allah, the Most Gracious, the Most Merciful
      </p>
    </div>
  );
};

export default Bismillah;
