/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { GALLERY } from '../data';
import Reveal from './Reveal';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Plated' | 'Savory' | 'Sweet' | 'Corporate' | 'Celebration'>('All');

  const tags: ('All' | 'Plated' | 'Savory' | 'Sweet' | 'Corporate' | 'Celebration')[] = [
    'All',
    'Plated',
    'Savory',
    'Sweet',
    'Corporate',
    'Celebration'
  ];

  const filteredItems = activeFilter === 'All'
    ? GALLERY
    : GALLERY.filter((item) => item.tag.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section className="py-24 bg-cream-50" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <span className="font-sans text-xs font-semibold uppercase tracking-widest text-terracotta-700">
              Visual Senses
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 mt-2 mb-4 leading-tight">
              On Danielle’s Pass
            </h2>
            <p className="font-sans text-sm text-ink-800/80 leading-relaxed">
              No stock photography. These show genuine plated textures, wood-fired finishes, and elegant gatherings across the Cape.
            </p>
          </div>

          {/* Gallery Filters */}
          <div className="flex flex-wrap gap-1.5 bg-cream-100 p-1 rounded-full border border-olive-100/50">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-4 py-2 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all ${
                  activeFilter === tag
                    ? 'bg-terracotta-700 text-cream-50 shadow-xs'
                    : 'text-ink-800/75 hover:text-ink-900 hover:bg-cream-200/50'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Tight, clean, balanced image grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-xl border border-olive-100 group shadow-sm bg-cream-100 transition-all duration-300 ${
                // Create custom grid rhythm by spanning certain images on large screens
                idx === 1 || idx === 6 ? 'md:col-span-2 md:row-span-1' : ''
              }`}
            >
              <div className="aspect-[4/3] md:aspect-auto md:h-80 w-full overflow-hidden">
                <img
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 filter brightness-95 group-hover:brightness-90"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Hover Overlay info card */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="inline-block px-2 py-0.5 rounded bg-terracotta-700 text-cream-50 font-sans text-[9px] font-bold uppercase tracking-wider w-fit mb-2">
                  {item.tag}
                </span>
                <p className="font-serif text-base font-bold text-cream-50 leading-snug drop-shadow-sm">
                  {item.alt}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Real-time notice showing the transparency of Moemas */}
        <div className="mt-10 text-center">
          <p className="font-sans text-xs text-ink-800/50 italic">
            * Danielle works with several artisan wedding planners in Franschhoek and Stellenbosch. Full table setting credits available on query.
          </p>
        </div>

      </div>
    </section>
  );
}
