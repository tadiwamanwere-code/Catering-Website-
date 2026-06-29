/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Helpers that turn form input into real, working contact hand-offs.
 * No backend or API keys required: we build a pre-filled email (mailto) and an
 * optional WhatsApp message, both delivered straight to the business.
 */

import { CONTACT } from '../data';
import { EnquiryFormState } from '../types';

const OCCASION_LABELS: Record<string, string> = {
  corporate: 'Corporate boardroom / lunch',
  wedding: 'Wedding feast',
  private: 'Private dinner party',
  other: 'Bespoke event / other'
};

const BUDGET_LABELS: Record<string, string> = {
  'under-R5k': 'Under R5,000',
  'R5-15k': 'R5,000 – R15,000',
  'R15-40k': 'R15,000 – R40,000',
  'R40k+': 'R40,000+'
};

/** Builds the human-readable subject + body for a catering enquiry. */
export function buildEnquiryMessage(form: EnquiryFormState): {
  subject: string;
  body: string;
} {
  const occasion = OCCASION_LABELS[form.occasion] || 'Catering enquiry';
  const subject = `Catering enquiry — ${occasion} — ${form.name || 'New guest'}`;

  const lines: string[] = [
    'Hi Danielle,',
    '',
    "I'd love to request a quote for catering. Here are the details:",
    '',
    `• Name: ${form.name}`,
    `• Email: ${form.email}`,
    `• Phone: ${form.phone}`,
    `• Occasion: ${occasion}`,
    `• Event date: ${form.eventDate || '—'}`,
    `• Estimated headcount: ${form.headcount || '—'}`,
    `• Location: ${form.location || '—'}`,
    `• Budget range: ${BUDGET_LABELS[form.budgetRange] || '—'}`
  ];

  if (form.dietaryNotes.trim()) {
    lines.push('', 'Dietary requirements:', form.dietaryNotes.trim());
  }

  if (form.notes.trim()) {
    lines.push('', 'Extra details:', form.notes.trim());
  }

  lines.push('', 'Sent from the Moemas Catering website.');

  return { subject, body: lines.join('\n') };
}

/** mailto: link that opens the visitor's email client, pre-addressed to the business. */
export function buildMailtoUrl(subject: string, body: string): string {
  const params = new URLSearchParams({ subject, body });
  // URLSearchParams encodes spaces as "+", but mail clients expect %20 in the body.
  return `mailto:${CONTACT.email}?${params.toString().replace(/\+/g, '%20')}`;
}

/** wa.me link with a pre-filled WhatsApp message to the business. */
export function buildWhatsappUrl(body: string): string {
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(body)}`;
}
