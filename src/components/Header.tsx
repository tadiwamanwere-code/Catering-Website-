/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Utensils } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Over the dark hero (header transparent) the links need to be light so they
  // pop; once the cream header bar appears on scroll they switch back to ink.
  const navLinkClass = `font-sans text-sm font-medium transition-colors focus:outline-none ${
    isScrolled
      ? 'text-ink-800 hover:text-terracotta-700'
      : 'text-cream-50 hover:text-terracotta-200 drop-shadow-md'
  }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-50/95 backdrop-blur-md border-b border-olive-100 shadow-sm py-3'
          : 'bg-gradient-to-b from-ink-950/80 via-ink-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-olive-600 flex items-center justify-center text-cream-50 group-hover:bg-terracotta-600 transition-colors">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className={`block font-serif text-2xl font-bold tracking-tight transition-colors leading-none ${
                isScrolled ? 'text-ink-900 group-hover:text-terracotta-700' : 'text-cream-50 group-hover:text-cream-200 drop-shadow-sm'
              }`}>
                Moemas
              </span>
              <span className={`block font-sans text-[9px] tracking-[0.2em] uppercase font-semibold mt-1 ${
                isScrolled ? 'text-olive-600' : 'text-cream-200/90'
              }`}>
                Catering · Cape Town
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className={navLinkClass}
            >
              Danielle's Story
            </button>
            <button
              onClick={() => scrollToSection('menus')}
              className={navLinkClass}
            >
              Menus
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className={navLinkClass}
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('new-venture')}
              className={navLinkClass}
            >
              New Launch
            </button>
          </nav>

          {/* Header CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('enquiry')}
              className="px-5 py-2.5 rounded-full bg-terracotta-700 text-cream-50 font-sans text-sm font-medium hover:bg-terracotta-800 active:bg-terracotta-900 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta-600"
            >
              Request a Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-all focus:outline-none ${
                isScrolled
                  ? 'text-ink-800 hover:text-terracotta-700 hover:bg-cream-100'
                  : 'text-cream-50 hover:text-cream-200 hover:bg-cream-50/10'
              }`}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-cream-100 border-b border-olive-100 shadow-lg transition-all duration-300 transform origin-top ${
          isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3">
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-base font-medium text-ink-900 hover:bg-cream-200 hover:text-terracotta-700 transition-all"
          >
            Danielle's Story
          </button>
          <button
            onClick={() => scrollToSection('menus')}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-base font-medium text-ink-900 hover:bg-cream-200 hover:text-terracotta-700 transition-all"
          >
            Menus
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-base font-medium text-ink-900 hover:bg-cream-200 hover:text-terracotta-700 transition-all"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection('new-venture')}
            className="block w-full text-left px-4 py-2.5 rounded-lg text-base font-medium text-ink-900 hover:bg-cream-200 hover:text-terracotta-700 transition-all"
          >
            New Launch
          </button>
          <div className="pt-4 border-t border-olive-200/50 px-4">
            <button
              onClick={() => scrollToSection('enquiry')}
              className="w-full text-center block px-5 py-3 rounded-full bg-terracotta-700 text-cream-50 font-sans font-medium hover:bg-terracotta-800 transition-all shadow-sm"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
