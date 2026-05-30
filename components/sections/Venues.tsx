"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Venue } from '../../config/weddingConfig';
import { MapPin, ExternalLink, Info, Sparkles } from 'lucide-react';

interface VenuesProps {
  venues: Venue[];
}

const Venues: React.FC<VenuesProps> = ({ venues }) => {
  return (
    <section id="venues" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-primary mb-4 italic">Venue Details</h2>
          <p className="text-sm uppercase tracking-[0.2em] text-secondary font-medium italic">
            Everything you need for the blessed gathering
          </p>
        </div>

        <div className="space-y-8">
          {venues.map((venue, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-inner bg-slate-100">
                    <img src={venue.image} alt={venue.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 space-y-6">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-secondary bg-secondary/10 px-3 py-1 rounded-full">
                           {venue.type}
                        </span>
                        <h3 className="text-3xl text-primary mt-3 font-dancing italic">{venue.name}</h3>
                        <p className="text-slate-600 flex items-center gap-2 mt-2">
                           <MapPin className="w-4 h-4 text-secondary" /> {venue.address}
                        </p>
                    </div>

                    {venue.announcement && (
                        <div className="flex items-center gap-3 bg-rose-50 text-rose-800 p-4 rounded-xl text-sm font-medium">
                           <Sparkles className="w-4 h-4 shrink-0" />
                           {venue.announcement}
                        </div>
                    )}

                    <div className="flex gap-4 pt-2">
                        <a
                           href={venue.link}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-bold text-sm hover:bg-secondary transition-colors"
                        >
                           Map <ExternalLink className="w-4 h-4" />
                        </a>
                        {venue.moreInfoLink && (
                           <a
                              href={venue.moreInfoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-2 border border-slate-200 text-slate-600 py-3 rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors"
                           >
                              Info <Info className="w-4 h-4" />
                           </a>
                        )}
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Venues;
