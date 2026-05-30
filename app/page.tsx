"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Wand2, Smartphone, Share2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const LandingPage = () => {
  const features = [
    { icon: <Wand2 className="w-6 h-6" />, title: "Instant Builder", desc: "Fill your details once, see them across all premium templates instantly." },
    { icon: <Sparkles className="w-6 h-6" />, title: "Elite Designs", desc: "Crafted by experts for the most memorable day of your life." },
    { icon: <Smartphone className="w-6 h-6" />, title: "Mobile Ready", desc: "Looks stunning on iPhones, Androids, and everything in between." },
    { icon: <Share2 className="w-6 h-6" />, title: "One-Click Share", desc: "Send your blessed invitation via WhatsApp or social media with ease." },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900 overflow-hidden font-inter">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Heart className="text-primary w-6 h-6 fill-primary" />
          <span className="font-bold text-xl tracking-tight font-dancing">BlessedNikah</span>
        </div>
        <Link href="/builder" className="bg-primary text-white px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-primary/20">
          Build Yours
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl space-y-8"
        >
          <div className="inline-flex items-center gap-2 bg-accent/30 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-primary/10">
            <Sparkles className="w-3 h-3" /> The Premium Wedding Site Builder
          </div>
          <h1 className="text-6xl md:text-8xl font-dancing text-primary leading-tight">
            Create a Beautiful Home for your <br />
            <span className="text-secondary italic">Blessed Nikah</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Beautifully crafted, high-end wedding templates designed specifically for the Muslim community. 
            Fill your data, pick a design, and share your happiness with the world.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/builder" className="w-full md:w-auto bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2">
              Start Building Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#templates" className="w-full md:w-auto bg-white border border-slate-200 text-slate-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-colors">
              View Templates
            </Link>
          </div>
        </motion.div>
        
        {/* Mockup Preview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-20 w-full max-w-6xl relative"
        >
          <div className="aspect-[16/9] bg-slate-100 rounded-[2.5rem] border-8 border-slate-900 overflow-hidden shadow-2xl">
             <div className="w-full h-full bg-[url('/assets/img/masjid.webp')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/80 backdrop-blur-md p-12 rounded-3xl shadow-2xl border border-white">
                   <h2 className="text-5xl font-dancing text-primary mb-4 italic">Inam ❤️ Maryam</h2>
                   <p className="tracking-widest uppercase text-xs font-bold text-secondary">Save the Date • 19.06.2025</p>
                </div>
             </div>
          </div>
          {/* Mobile Mockup */}
          <div className="absolute -bottom-10 -right-6 w-48 md:w-64 aspect-[9/19.5] bg-slate-900 rounded-[3rem] border-4 border-slate-800 shadow-2xl hidden md:block overflow-hidden">
             <div className="w-full h-full bg-primary/20 flex flex-col items-center justify-center p-4">
                <div className="w-full h-1/2 bg-white rounded-2xl p-4 flex flex-col items-center text-center">
                   <div className="w-10 h-10 rounded-full bg-accent/30 mb-4 animate-pulse"></div>
                   <div className="h-4 w-20 bg-slate-100 rounded mb-2"></div>
                   <div className="h-4 w-16 bg-slate-50 rounded"></div>
                </div>
             </div>
          </div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-slate-100">
              <div className="text-primary mb-6 bg-accent/20 w-12 h-12 flex items-center justify-center rounded-2xl">{f.icon}</div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Template Section */}
      <section id="templates" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl font-dancing text-primary italic">Our Premium Collection</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Choose from our hand-picked styles, each designed with love and respect for tradition.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[
            { id: 'blessed-nikah', name: 'Blessed Nikah', color: 'bg-[#064e3b]', desc: 'Emerald & Gold, Traditional, Elegant.' },
            { id: 'minimal-grace', name: 'Minimalist Grace', color: 'bg-slate-900', desc: 'Modern, High Contrast, Chic.' },
            { id: 'royal-garden', name: 'Royal Garden', color: 'bg-rose-100', desc: 'Pastel Florals, Romantic, Soft.' },
            { id: 'classic-heritage', name: 'Classic Heritage', color: 'bg-amber-50', desc: 'Rich Patterns, Serif Typography, Vintage.' },
            { id: 'heritage-demo', name: 'Heritage Demo', color: 'bg-slate-500', desc: 'Inspired by our original demo.' },
          ].map((t, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className={`${t.color} aspect-video rounded-[2rem] mb-6 flex items-center justify-center text-white relative overflow-hidden shadow-lg group-hover:shadow-2xl transition-all`}>
                <span className="text-3xl font-dancing italic group-hover:scale-110 transition-transform">{t.name}</span>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Link href={`/templates/${t.id}`} className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold">Preview Live</Link>
                </div>
              </div>
              <h3 className="text-2xl font-dancing italic text-primary">{t.name}</h3>
              <p className="text-slate-500 text-sm">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 space-y-8">
            <h2 className="text-5xl md:text-7xl font-dancing italic leading-tight">Ready to announce your <br /> special day?</h2>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">Join hundreds of happy couples who trusted BlessedNikah for their wedding invitations.</p>
            <Link href="/builder" className="inline-flex bg-white text-primary px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-xl">
              Get Started for Free
            </Link>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -ml-20 -mb-20 blur-3xl"></div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-sm">
        <div className="flex justify-center items-center gap-4 mb-6">
          <Heart className="w-4 h-4 fill-primary text-primary opacity-30" />
        </div>
        <p>&copy; 2025 BlessedNikah. Designed for Muslims, by Muslims. Alhamdulillah.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
