/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Quote, Sparkles, Award } from 'lucide-react';
import { DANIELLE_IMAGE, DANIELLE_STORY } from '../data';

export default function AboutDanielle() {
  return (
    <section className="py-24 bg-cream-100" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Chef Image Area */}
          <div className="lg:col-span-5 relative">
            {/* Elegant framing shadows */}
            <div className="absolute -inset-2 bg-olive-100/40 rounded-2xl transform rotate-1 -z-10" />
            <div className="absolute -inset-4 bg-terracotta-100/30 rounded-2xl transform -rotate-1 -z-10" />
            
            <div className="overflow-hidden rounded-2xl border border-olive-200/50 shadow-md aspect-[3/4]">
              <img
                src={DANIELLE_IMAGE}
                alt="Danielle, chef and owner of Moemas Catering Cape Town"
                className="w-full h-full object-cover filter brightness-98 hover:scale-101 transition-transform duration-500"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            
            {/* Tiny Floating Badge */}
            <div className="absolute bottom-6 -right-4 bg-terracotta-700 text-cream-50 px-4 py-2.5 rounded-lg shadow-md font-sans text-xs font-semibold uppercase tracking-wider flex items-center gap-2 border border-terracotta-600">
              <Award className="w-4 h-4 text-terracotta-200" />
              <span>Owner & Head Chef</span>
            </div>
          </div>

          {/* Chef Story Copy Area */}
          <div className="lg:col-span-7">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-terracotta-700">
              Behind the Pass
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 mt-2 mb-6">
              Meet Danielle
            </h2>
            
            <div className="relative">
              {/* Elegant Blockquote Icon Accent */}
              <Quote className="absolute -top-6 -left-6 w-12 h-12 text-olive-100 opacity-60 pointer-events-none" />

              <div className="space-y-5 relative z-10">
                {DANIELLE_STORY.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="font-sans text-base sm:text-lg text-ink-800/90 leading-relaxed font-light"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Signature Block */}
            <div className="mt-8 pt-6 border-t border-olive-200/40 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-olive-600 text-cream-50 font-serif text-xl font-bold flex items-center justify-center shadow-xs">
                D
              </div>
              <div>
                <span className="block font-serif text-xl font-bold text-ink-900 leading-none">
                  Danielle Moema
                </span>
                <span className="block font-sans text-xs text-olive-600 font-medium tracking-wide mt-1">
                  Owner, Moemas Catering
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
