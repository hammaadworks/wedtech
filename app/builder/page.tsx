"use client";

import React, { useState } from 'react';
import { useWedding } from '@/lib/context/WeddingContext';
import { motion } from 'framer-motion';
import { Save, RefreshCcw, Eye, Heart, Calendar, MapPin, Settings } from 'lucide-react';
import Link from 'next/link';

const BuilderPage = () => {
  const { config, updateConfig, resetConfig } = useWedding();
  const [activeTab, setActiveTab] = useState<'couple' | 'details' | 'venues' | 'settings'>('couple');

  const handleCoupleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateConfig({
      couple: { ...config.couple, [name]: value }
    });
  };

  const handleGeneralChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateConfig({ [name]: value });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-inter">
      {/* Builder Header */}
      <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-primary font-bold text-xl font-dancing">BlessedNikah</Link>
          <div className="h-6 w-[1px] bg-slate-200"></div>
          <h1 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Builder</h1>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={resetConfig}
            className="flex items-center gap-2 text-slate-500 hover:text-red-500 transition-colors text-sm font-bold px-4 py-2"
          >
            <RefreshCcw className="w-4 h-4" /> Reset
          </button>
          <Link 
            href="/templates/blessed-nikah"
            className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-xl shadow-slate-900/20 hover:scale-105 transition-transform"
          >
            <Eye className="w-4 h-4" /> Preview Live
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar Tabs */}
        <aside className="lg:col-span-3 space-y-2">
          {[
            { id: 'couple', icon: <Heart className="w-4 h-4" />, label: 'The Couple' },
            { id: 'details', icon: <Calendar className="w-4 h-4" />, label: 'Event Details' },
            { id: 'venues', icon: <MapPin className="w-4 h-4" />, label: 'Venues' },
            { id: 'settings', icon: <Settings className="w-4 h-4" />, label: 'Site Settings' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === tab.id 
                ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                : 'text-slate-500 hover:bg-white hover:text-primary'
              }`}
            >
              {tab.icon} {tab.label}
            </button>
          ))}
        </aside>

        {/* Main Form */}
        <main className="lg:col-span-9 bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {activeTab === 'couple' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">The Happy Couple</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Groom's First Name</label>
                    <input 
                      name="groom"
                      value={config.couple.groom}
                      onChange={handleCoupleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Bride's First Name</label>
                    <input 
                      name="bride"
                      value={config.couple.bride}
                      onChange={handleCoupleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Groom's Full Name</label>
                    <input 
                      name="groomFull"
                      value={config.couple.groomFull}
                      onChange={handleCoupleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Bride's Full Name</label>
                    <input 
                      name="brideFull"
                      value={config.couple.brideFull}
                      onChange={handleCoupleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'details' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">Event Essentials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Wedding Date (Display)</label>
                    <input 
                      name="weddingDate"
                      value={config.weddingDate}
                      onChange={handleGeneralChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Hijri Date (Optional)</label>
                    <input 
                      name="hijriDate"
                      value={config.hijriDate || ''}
                      onChange={handleGeneralChange}
                      placeholder="e.g. 23 Dhu al-Hijjah 1446"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'venues' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">Venues & Locations</h2>
                <p className="text-slate-500 text-sm">Update your ceremony and reception locations.</p>
                {/* Simplified for demo - in real app would map venues */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 italic text-slate-400 text-center py-12">
                   Interactive Venue List Management coming in v2.0
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">SaaS & Addons</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div>
                      <h3 className="font-bold text-slate-900">Treasure Hunt Module</h3>
                      <p className="text-xs text-slate-500">Enable interactive riddle game for guests</p>
                    </div>
                    <div className="w-12 h-6 bg-primary rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div>
                      <h3 className="font-bold text-slate-900">RSVP System</h3>
                      <p className="text-xs text-slate-500">Enable WhatsApp and Email RSVPs</p>
                    </div>
                    <div className="w-12 h-6 bg-primary rounded-full relative">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          <div className="mt-12 pt-8 border-t border-slate-100 flex justify-end">
            <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform flex items-center gap-2">
              <Save className="w-4 h-4" /> Save All Changes
            </button>
          </div>
        </main>
      </div>

      {/* Footer Hint */}
      <div className="text-center py-8 text-slate-400 text-xs tracking-widest uppercase font-bold">
         Alhamdulillah • Your data is secure and private
      </div>
    </div>
  );
};

export default BuilderPage;
