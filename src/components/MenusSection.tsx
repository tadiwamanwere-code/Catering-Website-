/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BookOpen, HelpCircle } from 'lucide-react';
import { MENUS } from '../data';
import Reveal from './Reveal';

interface MenusSectionProps {
  selectedCategory: 'corporate' | 'private' | 'wedding' | 'seasonal';
  onCategoryChange: (category: 'corporate' | 'private' | 'wedding' | 'seasonal') => void;
  onPreFillEnquiry: (occasion: 'corporate' | 'wedding' | 'private' | 'other', notesText: string) => void;
}

export default function MenusSection({
  selectedCategory,
  onCategoryChange,
  onPreFillEnquiry
}: MenusSectionProps) {
  const currentMenu = MENUS.find((m) => m.category === selectedCategory) || MENUS[0];

  const handleBookMenu = () => {
    // Map categories to occasion field values
    const occasionMap: Record<string, 'corporate' | 'wedding' | 'private' | 'other'> = {
      corporate: 'corporate',
      private: 'private',
      wedding: 'wedding',
      seasonal: 'other'
    };

    const occasion = occasionMap[selectedCategory] || 'other';
    const notesText = `Interested in Menu: "${currentMenu.title}" (${currentMenu.categoryLabel})`;

    onPreFillEnquiry(occasion, notesText);

    // Scroll to form
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
    <section className="py-24 bg-cream-100 border-y border-olive-100/40" id="menus">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs font-semibold uppercase tracking-widest text-terracotta-700">
            Danielle's Kitchen
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-ink-900 mt-2 mb-4">
            Curated Sample Menus
          </h2>
          <div className="w-12 h-[1px] bg-olive-200 mx-auto my-4" />
          <p className="font-sans text-sm text-ink-800/80">
            These are sample culinary blueprints. Every menu we serve is customized to your tastes, headcount, and budget.
          </p>
        </Reveal>

        {/* Tab Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-olive-200/45 pb-4">
          {MENUS.map((menu) => (
            <button
              key={menu.id}
              onClick={() => onCategoryChange(menu.category)}
              className={`px-5 py-2.5 rounded-full font-sans text-sm font-medium transition-all ${
                selectedCategory === menu.category
                  ? 'bg-olive-600 text-cream-50 shadow-sm font-semibold'
                  : 'text-ink-800/85 hover:bg-cream-200/70 hover:text-ink-900'
              }`}
            >
              {menu.categoryLabel}
            </button>
          ))}
        </div>

        {/* Main Menu Typography Block (No heavy borders or gradients - pure text-focused design) */}
        <div className="bg-cream-50 rounded-2xl border border-olive-200/40 shadow-sm p-8 sm:p-12 relative overflow-hidden">
          
          {/* Subtle floral/organic corner detail or background brand touch */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-olive-50/20 rounded-full blur-2xl pointer-events-none" />

          {/* Menu Info Block */}
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-olive-200/50 pb-6 mb-8">
            <div>
              <span className="font-sans text-[10px] tracking-widest uppercase font-semibold text-terracotta-700 block mb-1">
                {currentMenu.categoryLabel} Offering
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink-900">
                {currentMenu.title}
              </h3>
              <p className="font-sans text-sm text-ink-800/85 mt-2 max-w-2xl">
                {currentMenu.description}
              </p>
            </div>
            <div className="md:text-right shrink-0">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-olive-50 text-olive-800 font-sans text-xs font-semibold uppercase tracking-wider">
                {currentMenu.priceHint}
              </span>
            </div>
          </div>

          {/* Courses Block */}
          <div className="space-y-10">
            {currentMenu.courses.map((course, idx) => (
              <div key={idx} className="relative">
                {course.title && (
                  <h4 className="font-sans text-xs uppercase tracking-widest font-bold text-olive-700/90 mb-5 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-terracotta-600" />
                    <span>{course.title}</span>
                  </h4>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {course.dishes.map((dish, dishIdx) => (
                    <div key={dishIdx} className="group">
                      <h5 className="font-serif text-lg font-bold text-ink-900 group-hover:text-terracotta-700 transition-colors">
                        {dish.name}
                      </h5>
                      <p className="font-sans text-sm text-ink-800/75 leading-relaxed mt-1.5 font-light">
                        {dish.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Action Footer for Menu */}
          <div className="mt-12 pt-8 border-t border-olive-200/50 flex flex-col sm:flex-row items-center justify-between gap-6 bg-olive-50/30 -mx-8 -mb-12 p-8 rounded-b-2xl">
            <div className="flex items-center gap-3 text-left">
              <div className="w-8 h-8 rounded-full bg-cream-100 flex items-center justify-center text-olive-600">
                <BookOpen className="w-4 h-4" />
              </div>
              <p className="font-sans text-xs text-ink-800/80 max-w-md">
                Want to mix-and-match or suggest edits? Danielle crafts custom menu profiles for every booking.
              </p>
            </div>
            <button
              onClick={handleBookMenu}
              className="w-full sm:w-auto shrink-0 px-6 py-3 rounded-full bg-terracotta-700 text-cream-50 font-sans text-xs uppercase tracking-widest font-bold hover:bg-terracotta-800 transition-colors shadow-sm focus:outline-none"
            >
              I want this kind of menu
            </button>
          </div>

        </div>

        {/* Informative Sidenote about Danielle's kitchen rules */}
        <div className="mt-8 flex items-start gap-2.5 justify-center max-w-xl mx-auto px-4 text-center">
          <HelpCircle className="w-4 h-4 text-olive-600 shrink-0 mt-0.5" />
          <p className="font-sans text-xs text-ink-800/60 leading-relaxed italic">
            Dietary requirements (vegan, gluten-free, halal, kosher-friendly catering partners) are seamlessly integrated at your request. Mention details on the form below!
          </p>
        </div>

      </div>
    </section>
  );
}
