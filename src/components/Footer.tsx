/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Phone, MapPin, Instagram, Facebook, Utensils } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    <footer className="bg-olive-900 text-cream-50 pt-20 pb-12 border-t border-olive-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-olive-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-left group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-full bg-terracotta-700 flex items-center justify-center text-cream-50 group-hover:bg-terracotta-600 transition-colors">
                <Utensils className="w-4.5 h-4.5" />
              </div>
              <div>
                <span className="block font-serif text-xl font-bold tracking-tight text-cream-50 group-hover:text-terracotta-200 transition-colors">
                  Moemas
                </span>
                <span className="block font-sans text-[8px] tracking-[0.2em] uppercase font-semibold text-olive-300 mt-0.5">
                  Catering · Cape Town
                </span>
              </div>
            </button>
            <p className="font-sans text-xs text-cream-100/70 max-w-sm leading-relaxed pt-2">
              Danielle crafts every menu by hand. We deliver corporate boardroom lunches, private plated dinners, and weddings across the Cape. Quality-first, local, and transparent.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-cream-200">
              Explore
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="font-sans text-xs text-cream-100/75 hover:text-terracotta-200 transition-colors focus:outline-none"
                >
                  Danielle’s Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menus')}
                  className="font-sans text-xs text-cream-100/75 hover:text-terracotta-200 transition-colors focus:outline-none"
                >
                  Sample Menus
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('gallery')}
                  className="font-sans text-xs text-cream-100/75 hover:text-terracotta-200 transition-colors focus:outline-none"
                >
                  On the Pass (Gallery)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('new-venture')}
                  className="font-sans text-xs text-cream-100/75 hover:text-terracotta-200 transition-colors focus:outline-none"
                >
                  Pantry New Launch
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-base font-bold text-cream-200">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-terracotta-400 shrink-0" />
                <a
                  href="mailto:moemasfood@gmail.com"
                  className="font-sans text-xs text-cream-100/80 hover:text-terracotta-200 transition-colors underline decoration-olive-600 underline-offset-4"
                >
                  moemasfood@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-terracotta-400 shrink-0" />
                <a
                  href="tel:+27824559811"
                  className="font-sans text-xs text-cream-100/80 hover:text-terracotta-200 transition-colors"
                >
                  +27 (0) 82 455 9811
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-terracotta-400 shrink-0 mt-0.5" />
                <span className="font-sans text-xs text-cream-100/70 leading-relaxed">
                  Constantia, CBD, Atlantic Seaboard, Stellenbosch, Franschhoek &amp; surrounding Cape regions.
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Base */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-olive-800 hover:bg-terracotta-700 hover:text-cream-50 transition-colors flex items-center justify-center text-cream-200"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-olive-800 hover:bg-terracotta-700 hover:text-cream-50 transition-colors flex items-center justify-center text-cream-200"
              aria-label="Facebook Page"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>

          {/* Copyrights (copyright Moemas Catering 2026) */}
          <div className="text-center sm:text-right">
            <p className="font-sans text-[11px] text-cream-100/50">
              &copy; {new Date().getFullYear()} Moemas Catering. All rights reserved.
            </p>
            <p className="font-sans text-[10px] text-cream-100/35 mt-1 leading-normal italic">
              Designed to showcase Cape Town owner-led catering excellence.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}
