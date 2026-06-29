/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuDish {
  name: string;
  description: string;
}

export interface MenuCourse {
  title?: string;
  dishes: MenuDish[];
}

export interface MenuItem {
  id: string;
  category: 'corporate' | 'private' | 'wedding' | 'seasonal';
  categoryLabel: string;
  title: string;
  description: string;
  priceHint: string;
  courses: MenuCourse[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  alt: string;
  tag: string;
}

export interface EnquiryFormState {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  headcount: string;
  location: string;
  occasion: 'corporate' | 'wedding' | 'private' | 'other' | '';
  dietaryNotes: string;
  budgetRange: 'under-R5k' | 'R5-15k' | 'R15-40k' | 'R40k+' | '';
  notes: string;
}
