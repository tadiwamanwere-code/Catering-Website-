/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Briefcase, Sparkles, Heart } from 'lucide-react';

interface BeliefCard {
  id: string;
  category: 'corporate' | 'private' | 'wedding';
  title: string;
  photoUrl: string;
  tagline: string;
  icon: React.ReactNode;
}

const CARDS: BeliefCard[] = [
  {
    id: 'b-corp',
    category: 'corporate',
    title: 'Corporate Dining',
    photoUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600',
    tagline: 'High-focus boardroom catering and plated lunches that make deals feel seamless.',
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    id: 'b-private',
    category: 'private',
    title: 'Private Plated Tables',
    photoUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=600',
    tagline: 'Intimate, multi-course culinary masterclasses brought directly to your home.',
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    id: 'b-wedding',
    category: 'wedding',
    title: 'Weddings & Galas',
    photoUrl: 'https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&q=80&w=600',
    tagline: 'Grounded fynbos menus and elegant grazing tables styled for romantic memories.',
    icon: <Heart className="w-5 h-5" />
  }
];

interface QuickBeliefProps {
  onCategorySelect: (category: 'corporate' | 'private' | 'wedding' | 'seasonal') => void;
}

export default function QuickBelief({ onCategorySelect }: QuickBeliefProps) {
  const handleScrollToMenus = (category: 'corporate' | 'private' | 'wedding') => {
    onCategorySelect(category);
    const element = document.getElementById('menus');
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
    <section className="py-20 bg-cream-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-terracotta-700">
            Crafted for Cape Town
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 mt-2 mb-4 leading-tight">
            Catering Designed for Impact
          </h2>
          <div className="w-12 h-[1px] bg-olive-200 mx-auto my-4" />
          <p className="font-sans text-base text-ink-800/80 leading-relaxed">
            We focus on owner-led, premium culinary execution. We cook in small-batches, plate with precision, and tailor every detail to Danielle’s uncompromising personal standards.
          </p>
        </div>

        {/* Three Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CARDS.map((card) => (
            <div
              key={card.id}
              className="bg-cream-100 rounded-2xl overflow-hidden border border-olive-100/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Photo Area */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={card.photoUrl}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-cream-50">
                  <div className="p-1.5 rounded-full bg-terracotta-700/95 text-cream-50">
                    {card.icon}
                  </div>
                  <span className="font-serif text-lg font-bold drop-shadow-sm">{card.title}</span>
                </div>
              </div>

              {/* Card Body & CTA */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <p className="font-sans text-sm text-ink-800/95 leading-relaxed mb-6">
                  {card.tagline}
                </p>
                <button
                  onClick={() => handleScrollToMenus(card.category)}
                  className="inline-flex items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-wider text-terracotta-700 hover:text-terracotta-800 transition-colors cursor-pointer text-left focus:outline-none"
                >
                  <span>See Example Menus</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
