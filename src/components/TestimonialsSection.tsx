/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import Reveal from './Reveal';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-cream-50 border-t border-olive-100/30" id="testimonials">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal className="text-center mb-12">
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-terracotta-700">
            Kind Words
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900 mt-2">
            Shared Around the Table
          </h2>
          <div className="w-12 h-[1px] bg-olive-200 mx-auto mt-4" />
        </Reveal>

        {/* Dynamic Testimonial Display */}
        <div className="relative bg-cream-100 rounded-2xl border border-olive-100/50 p-8 sm:p-12 md:p-16 shadow-xs overflow-hidden">
          
          <Quote className="absolute -top-3 -left-3 w-24 h-24 text-olive-50 opacity-50 pointer-events-none" />

          <div className="relative z-10 text-center">
            
            {/* Quote Block */}
            <p className="font-serif text-xl sm:text-2xl md:text-3xl italic text-ink-900 font-medium leading-relaxed mb-8">
              "{TESTIMONIALS[currentIndex].quote}"
            </p>

            {/* Author Info */}
            <div className="mt-6">
              <span className="block font-sans text-sm font-semibold text-ink-950 uppercase tracking-wider">
                {TESTIMONIALS[currentIndex].author}
              </span>
              <span className="block font-sans text-xs text-olive-600 font-medium mt-1">
                {TESTIMONIALS[currentIndex].role} — {TESTIMONIALS[currentIndex].location}, Cape Town
              </span>
            </div>

          </div>

          {/* Controls */}
          <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between pointer-events-none">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-cream-50 hover:bg-cream-200 text-ink-800 hover:text-ink-950 border border-olive-100 shadow-sm pointer-events-auto transition-all focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-cream-50 hover:bg-cream-200 text-ink-800 hover:text-ink-950 border border-olive-100 shadow-sm pointer-events-auto transition-all focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentIndex === idx ? 'bg-terracotta-700 w-6' : 'bg-olive-200 hover:bg-olive-300'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
