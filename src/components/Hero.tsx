/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, ChefHat, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../data';

export default function Hero() {
  const scrollToEnquiry = () => {
    const element = document.getElementById('enquiry');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-cream-100 overflow-hidden pt-16">
      {/* Background Image with optimized layout for mobile/desktop */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="Moemas delicious catering plate slow cooked lamb"
          className="w-full h-full object-cover object-center scale-102 filter brightness-[0.85] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Deep, rich, color-coordinated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-terracotta-900/35 to-transparent mix-blend-multiply" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-20">
        {/* Subtle, bespoke badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cream-100/10 backdrop-blur-md border border-cream-100/20 text-cream-200 text-xs tracking-wider uppercase font-medium mb-6">
          <ChefHat className="w-3.5 h-3.5 text-terracotta-200" />
          <span>Cape Town's Owner-Led Fine Catering</span>
        </div>

        {/* Elegant Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream-50 tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
          Catering you would serve at your <span className="text-terracotta-100 italic">own</span> table.
        </h1>

        {/* One-line Value Proposition */}
        <p className="font-sans text-lg sm:text-xl md:text-2xl text-cream-100/90 font-light max-w-2xl mx-auto leading-relaxed mb-10">
          Plated and delivered with meticulous care across Cape Town. Handcrafted menus, transparent pricing, and zero corporate fuss.
        </p>

        {/* Conversion CTA Action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToEnquiry}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-terracotta-600 text-cream-50 font-sans text-base font-semibold hover:bg-terracotta-700 active:bg-terracotta-800 transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta-500"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="#menus"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-cream-100/10 backdrop-blur-md border border-cream-100/30 text-cream-100 font-sans text-base font-medium hover:bg-cream-100/20 active:bg-cream-100/30 transition-all flex items-center justify-center gap-2"
          >
            Explore Menus
          </a>
        </div>

        {/* Floating Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto border-t border-cream-100/10 pt-8 text-cream-200/80 text-xs sm:text-sm">
          <div className="flex flex-col items-center">
            <span className="font-serif text-xl sm:text-2xl font-bold text-cream-50 mb-1">100%</span>
            <span className="font-sans tracking-wide text-xs">Owner-Led & Cooked</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-xl sm:text-2xl font-bold text-cream-50 mb-1">Zero</span>
            <span className="font-sans tracking-wide text-xs">Hidden Corporate Surcharges</span>
          </div>
          <div className="flex flex-col items-center col-span-2 md:col-span-1">
            <span className="font-serif text-xl sm:text-2xl font-bold text-cream-50 mb-1">24h</span>
            <span className="font-sans tracking-wide text-xs">Guaranteed Direct Quote</span>
          </div>
        </div>
      </div>

      {/* Bottom organic curve accent */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream-50 to-transparent pointer-events-none" />
    </section>
  );
}
