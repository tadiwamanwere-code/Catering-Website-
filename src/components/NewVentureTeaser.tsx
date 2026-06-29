/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { NEW_VENTURE_IMAGE } from '../data';
import { buildMailtoUrl } from '../lib/contact';
import Reveal from './Reveal';

// Validates an email well enough for a client-side form (anything more
// strict than this rejects perfectly valid addresses).
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NewVentureTeaser() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');

    // Build a real waitlist email addressed straight to the business and open
    // the visitor's email client. No backend or API keys required.
    const subject = 'Moemas Pantry & Provisions — waitlist signup';
    const body = [
      'Hi Danielle,',
      '',
      'Please add me to the Moemas Pantry & Provisions launch waitlist.',
      '',
      `Email: ${email}`,
      '',
      'Sent from the Moemas Catering website.'
    ].join('\n');

    setIsSubmitted(true);
    window.location.href = buildMailtoUrl(subject, body);
  };

  return (
    <section className="py-20 bg-cream-50" id="new-venture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Reveal className="bg-olive-900 rounded-3xl overflow-hidden shadow-xl border border-olive-800 relative">
          
          {/* Subtle warm texture or glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(106,50,36,0.25),transparent_60%)] pointer-events-none" />

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
                        <Mail className="h-[18px] w-[18px] text-cream-200/50" />
                      </div>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        aria-label="Email address for the launch waitlist"
                        className="block w-full pl-10 pr-4 py-3.5 bg-olive-800/60 border border-olive-700/80 rounded-full text-cream-50 placeholder-cream-100/50 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3.5 bg-terracotta-600 text-cream-50 font-sans text-xs uppercase tracking-widest font-bold rounded-full hover:bg-terracotta-700 active:bg-terracotta-800 transition-all shrink-0 flex items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-olive-900 focus:ring-terracotta-500"
                    >
                      <span>Notify Me</span>
                      <ArrowRight className="w-4 h-4" />
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

        </Reveal>

      </div>
    </section>
  );
}
