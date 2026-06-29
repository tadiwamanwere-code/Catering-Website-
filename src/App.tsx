/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickBelief from './components/QuickBelief';
import MenusSection from './components/MenusSection';
import GallerySection from './components/GallerySection';
import AboutDanielle from './components/AboutDanielle';
import NewVentureTeaser from './components/NewVentureTeaser';
import TestimonialsSection from './components/TestimonialsSection';
import EnquiryFormSection from './components/EnquiryFormSection';
import Footer from './components/Footer';
import { EnquiryFormState } from './types';

export default function App() {
  // Connect QuickBelief cards to the active Menu tab dynamically!
  const [selectedCategory, setSelectedCategory] = useState<'corporate' | 'private' | 'wedding' | 'seasonal'>('corporate');

  // Unified Form state to allow smooth real-time pre-filling from any CTA
  const [formState, setFormState] = useState<EnquiryFormState>({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    headcount: '',
    location: '',
    occasion: '',
    dietaryNotes: '',
    budgetRange: '',
    notes: ''
  });

  // Brief visual highlight flash state when form is pre-filled from a menu CTA
  const [flashActive, setFlashActive] = useState(false);

  // Triggered when a visitor clicks "I want this kind of menu"
  const handlePreFillEnquiry = (
    occasion: 'corporate' | 'wedding' | 'private' | 'other',
    notesText: string
  ) => {
    setFormState((prev) => ({
      ...prev,
      occasion: occasion,
      notes: prev.notes
        ? `${prev.notes}\n\n[Auto-Prefill]: ${notesText}`
        : `${notesText}\n\nHi Danielle, I would love to talk about a custom version of this menu for my event!`
    }));

    // Trigger visual indicator flash
    setFlashActive(true);
    setTimeout(() => {
      setFlashActive(false);
    }, 4500);
  };

  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen flex flex-col font-sans bg-cream-50 text-ink-900 overflow-x-hidden selection:bg-terracotta-100 selection:text-terracotta-900">

      {/* Header */}
      <Header />

      {/* Main Content Layout */}
      <main className="flex-grow">
        
        {/* Hero Banner Section */}
        <Hero />

        {/* Quick Belief Section (Corporate, Private, Weddings) */}
        <QuickBelief
          onCategorySelect={(cat) => {
            // Map card categories to exact Menu category values
            if (cat === 'corporate') setSelectedCategory('corporate');
            if (cat === 'private') setSelectedCategory('private');
            if (cat === 'wedding') setSelectedCategory('wedding');
          }}
        />

        {/* Interactive Sample Menus */}
        <MenusSection
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onPreFillEnquiry={handlePreFillEnquiry}
        />

        {/* Food & Table Gallery Section */}
        <GallerySection />

        {/* Danielle's Personal Culinary Story */}
        <AboutDanielle />

        {/* Atmosphere Testimonials Quote Carousel */}
        <TestimonialsSection />

        {/* New Venture Launch Waitlist Teaser */}
        <NewVentureTeaser />

        {/* High-fidelity Quote Request Form */}
        <EnquiryFormSection
          formState={formState}
          onFormStateChange={setFormState}
          flashActive={flashActive}
        />

      </main>

      {/* Footer */}
      <Footer />

    </div>
    </MotionConfig>
  );
}
