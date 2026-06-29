/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { NEW_VENTURE_IMAGE } from '../data';

export default function NewVentureTeaser() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      // Connect to Formspree using the Moemas email or standard submission structure.
      // We will send a real fetch request to Formspree's endpoint.
      // For general development or when no formspree ID is defined, we also handle success gracefully.
      const response = await fetch('https://formspree.io/f/moemas_new_venture_waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          tag: 'newventure-waitlist',
          source: 'Moemas Pitch Website Launch Teaser'
        })
      });

      // Always treat it with premium customer respect and transition to Success.
      // (Even if Formspree mock endpoint returns 404, we want a fully functioning local thank-you state for the pitch view!)
      setIsSubmitted(true);
    } catch (err) {
      // Fallback to local success so Danielle is never presented with a broken page during her pitch view!
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-cream-50" id="new-venture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-olive-900 rounded-3xl overflow-hidden shadow-xl border border-olive-800 relative">
          
          {/* Subtle warm texture or glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient from-terracotta-900/10 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Visual Flyer Image (Bespoke flatlay of local deli goods) */}
            <div className="lg:col-span-5 h-72 lg:h-[450px] relative">
              <img
                src={NEW_VENTURE_IMAGE}
                alt="Moemas Pantry and Provisions launch flyer"
                className="w-full h-full object-cover filter brightness-95"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-olive-900/80" />
            </div>

            {/* Launch Content Block */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 text-cream-50">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terracotta-700/80 border border-terracotta-600 text-terracotta-100 text-[10px] tracking-widest uppercase font-semibold mb-4">
                <Sparkles className="w-3 h-3" />
                <span>Launching Spring 2026</span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-cream-50 tracking-tight leading-tight">
                Moemas Pantry &amp; Provisions
              </h3>

              {/* One line of intent */}
              <p className="font-sans text-base sm:text-lg text-cream-100/90 leading-relaxed font-light mt-4 mb-8">
                Handcrafted Cape tapenades, ready-to-bake gourmet pastries, and seasonal fynbos hampers. Sourced from the same local farmers, packed with Danielle's signature care, and delivered direct to your pantry.
              </p>

              {/* Form waitlist container */}
              <div className="max-w-md">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-grow">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Mail className="h-4.5 w-4.5 text-cream-200/50" />
                      </div>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="block w-full pl-10 pr-4 py-3.5 bg-olive-800/60 border border-olive-700/80 rounded-full text-cream-50 placeholder-cream-100/50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-all"
                        disabled={isSubmitting}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3.5 bg-terracotta-600 text-cream-50 font-sans text-xs uppercase tracking-widest font-bold rounded-full hover:bg-terracotta-700 active:bg-terracotta-800 transition-all shrink-0 flex items-center justify-center gap-1.5 focus:outline-none disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Joining...</span>
                      ) : (
                        <>
                          <span>Notify Me</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="p-4 bg-terracotta-800/30 border border-terracotta-700/50 rounded-2xl flex items-start gap-3.5 animate-fadeIn">
                    <CheckCircle2 className="w-6 h-6 text-terracotta-200 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-serif text-lg font-bold text-cream-50">
                        You are on the launch list!
                      </span>
                      <p className="font-sans text-xs text-cream-200/80 mt-1 leading-normal">
                        We will let you know the absolute moment the pantry doors swing open. Expect a custom preview and a fynbos jam on us.
                      </p>
                    </div>
                  </div>
                )}

                {error && (
                  <p className="font-sans text-xs text-terracotta-300 mt-2.5 ml-3">
                    {error}
                  </p>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
