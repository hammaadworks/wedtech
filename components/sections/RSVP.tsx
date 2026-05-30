"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WeddingConfig } from '../../config/weddingConfig';
import { MessageCircle, Mail, Send, CheckCircle2 } from 'lucide-react';

interface RSVPProps {
  config: WeddingConfig;
}

const RSVP: React.FC<RSVPProps> = ({ config }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [guestName, setGuestName] = useState('');
  const [numGuests, setNumGuests] = useState('1');

  const handleWhatsAppRSVP = () => {
    const message = encodeURIComponent(
      `Assalamu Alaikum! I would like to RSVP for the wedding of ${config.couple.groom} & ${config.couple.bride}.\n\nName: ${guestName}\nNumber of Guests: ${numGuests}\n\nJazakAllah!`
    );
    window.open(`https://wa.me/${config.rsvp.whatsappNumber}?text=${message}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setGuestName('');
      setNumGuests('1');
    }, 1500);
  };

  return (
    <section id="rsvp" className="py-24 px-4 bg-accent/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl text-primary mb-4 italic">RSVP</h2>
          <p className="text-sm uppercase tracking-[0.2em] text-secondary font-medium italic">
            Kindly let us know if you can join our celebration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* WhatsApp RSVP */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-secondary/10 flex flex-col items-center text-center space-y-6"
          >
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl text-primary font-dancing italic mb-2">WhatsApp RSVP</h3>
              <p className="text-slate-500 text-sm">Quickest way to let us know. Just click and send a message!</p>
            </div>
            
            <div className="w-full space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
              />
              <select
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                value={numGuests}
                onChange={(e) => setNumGuests(e.target.value)}
              >
                {[1, 2, 3, 4, 5, 6].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
              <button
                onClick={handleWhatsAppRSVP}
                disabled={!guestName}
                className="w-full py-4 bg-green-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
              >
                Send via WhatsApp
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Email/Form RSVP */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-secondary/10"
          >
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <CheckCircle2 className="w-16 h-16 text-primary animate-bounce" />
                <h3 className="text-2xl text-primary font-dancing italic">JazakAllah!</h3>
                <p className="text-slate-500">Your RSVP has been received successfully.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="text-primary font-bold underline"
                >
                  Send another?
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-2">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-primary font-dancing italic mb-2">Online RSVP</h3>
                    <p className="text-slate-500 text-sm">Fill in the details and we'll be notified.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <input
                    required
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                  <textarea
                    placeholder="Message / Dietary Requirements (Optional)"
                    rows={3}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                  ></textarea>
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70 shadow-md hover:shadow-lg"
                  >
                    {formStatus === 'submitting' ? 'Submitting...' : 'Submit RSVP'}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
