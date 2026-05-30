"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { WeddingEvent } from '../../config/weddingConfig';

interface TimelineProps {
  events: WeddingEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <section id="timeline" className="py-24 px-4 bg-accent/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-primary mb-4 italic">Event Timeline</h2>
          <p className="text-sm uppercase tracking-[0.2em] text-secondary font-medium italic">
            Alhamdulillah, a guided schedule for the blessed evening
          </p>
        </div>

        <div className="relative border-l-2 border-secondary/20 ml-4 md:ml-auto md:mr-auto">
          {events.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-12 ml-8 relative"
            >
              {/* Dot */}
              <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-secondary border-4 border-white shadow-sm"></div>
              
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-secondary/10 shadow-sm hover:shadow-md transition-shadow">
                <span className="text-sm font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full">
                  {event.time}
                </span>
                <h3 className="text-2xl md:text-3xl text-primary mt-3 mb-2 font-dancing italic">
                  {event.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {event.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-primary font-medium text-xs md:text-sm">
                  <span className="opacity-60">📍</span>
                  <a 
                    href={event.locationLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors underline underline-offset-4 decoration-secondary/30"
                  >
                    {event.locationName}, {event.locationAddress}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
