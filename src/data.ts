/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, Testimonial, GalleryItem } from './types';

// Import the generated assets so Vite fingerprints, optimizes and bundles them.
// (String paths like "/src/assets/..." only resolve in dev and 404 in a production build.)
import heroImage from './assets/images/moemas_hero_dish_1782726396701.jpg';
import danielleImage from './assets/images/moemas_danielle_1782726412891.jpg';
import newVentureImage from './assets/images/moemas_new_venture_1782726431822.jpg';

export const HERO_IMAGE = heroImage;
export const DANIELLE_IMAGE = danielleImage;
export const NEW_VENTURE_IMAGE = newVentureImage;

/**
 * Single source of truth for the business's real contact channels.
 * Used by the enquiry + waitlist forms (mailto / WhatsApp) and the footer.
 */
export const CONTACT = {
  email: 'moemasfood@gmail.com',
  // Display format for humans:
  phoneDisplay: '+27 (0) 82 455 9811',
  // E.164 (no spaces / symbols) for tel: and wa.me links:
  phoneE164: '+27824559811',
  whatsapp: '27824559811',
  serviceAreas:
    'Constantia, CBD, Atlantic Seaboard, Stellenbosch, Franschhoek & surrounding Cape regions.'
} as const;

export const MENUS: MenuItem[] = [
  {
    id: 'corporate-boardroom',
    category: 'corporate',
    categoryLabel: 'Corporate',
    title: 'The Boardroom Table',
    description: 'Sleek, executive lunch plates designed to keep focus high and boardroom conversations flowing smoothly.',
    priceHint: 'From R280 per guest',
    courses: [
      {
        title: 'Mains & Grain Bowls',
        dishes: [
          {
            name: 'Slow-Roasted Lemon-Herb Chicken',
            description: 'Free-range Cape chicken slow-roasted with wild herbs, finished with preserved lemon reduction.'
          },
          {
            name: 'Constantia Valley Harvest Grain Bowl',
            description: 'Wild brown rice, local avocado, roasted butternut squash, goats cheese, and toasted pumpkin seeds with a fynbos honey-mustard vinaigrette.'
          }
        ]
      },
      {
        title: 'Sides & Bakery',
        dishes: [
          {
            name: 'Artisanal Rosemary Focaccia',
            description: ' Danies signature warm sourdough focaccia, baked fresh and served with cold-pressed olive oil.'
          },
          {
            name: 'Heirloom Tomato & Crisp Greens',
            description: 'Hand-picked local heirloom tomatoes, wild rocket, basil oil, and local white balsamic dressing.'
          }
        ]
      },
      {
        title: 'Sweet Finish',
        dishes: [
          {
            name: 'Salted Caramel Tartlets',
            description: 'Mini dark chocolate pastry cases filled with salted house-made caramel and flakes of West Coast sea salt.'
          }
        ]
      }
    ]
  },
  {
    id: 'private-dining',
    category: 'private',
    categoryLabel: 'Private Dining',
    title: 'The Chef’s Plated Table',
    description: 'A multi-course plated fine-dining experience brought directly to your Constantia or Atlantic Seaboard dining room.',
    priceHint: 'From R750 per guest',
    courses: [
      {
        title: 'Amuse Bouche',
        dishes: [
          {
            name: 'Seared West Coast Scallops',
            description: 'Pan-seared Cape scallops, vanilla-cauliflower purée, micro-herb basil, and citrus beurre blanc.'
          }
        ]
      },
      {
        title: 'Main Course',
        dishes: [
          {
            name: 'Braised Karoo Lamb Shank',
            description: 'Slow-braised Karoo lamb in a rich red-wine and rosemary reduction, served on silky parsnip purée with buttered baby leeks.'
          }
        ]
      },
      {
        title: 'Dessert',
        dishes: [
          {
            name: 'Rooibos-Infused Crème Panna Cotta',
            description: 'Creamy local rooibos panna cotta, served with fynbos honey drizzle and fresh Cape seasonal berries.'
          }
        ]
      }
    ]
  },
  {
    id: 'wedding-feast',
    category: 'wedding',
    categoryLabel: 'Weddings & Celebrations',
    title: 'The Cape Wedding Feast',
    description: 'A romantic, food-forward celebration designed to reflect your story, plated with elegant Cape Town charm.',
    priceHint: 'From R550 per guest',
    courses: [
      {
        title: 'The Harvest Table Arrival',
        dishes: [
          {
            name: 'Cape Graze Board',
            description: 'Cured meats, artisanal Cape cheeses, fresh figs, grapes, home-made stone fruit preserves, and warm rustic sourdough.'
          }
        ]
      },
      {
        title: 'Plated Mains',
        dishes: [
          {
            name: 'Grilled Atlantic Linefish',
            description: 'Freshly caught local linefish, vibrant caper and herb salsa verde, charred spears of asparagus, and crispy duck fat roasted potatoes.'
          }
        ]
      },
      {
        title: 'Dessert Buffet',
        dishes: [
          {
            name: 'Cape Berry Pavlova',
            description: 'Crisp French meringue nests topped with Chantilly cream, dark chocolate mousse domes, and fresh lavender shortbread biscuits.'
          }
        ]
      }
    ]
  },
  {
    id: 'seasonal-fynbos',
    category: 'seasonal',
    categoryLabel: 'Seasonal Showcase',
    title: 'The Fynbos Autumn Harvest',
    description: 'Our tribute to the changing Cape season, celebrating rich, comforting, and grounded soil-to-plate flavours.',
    priceHint: 'From R420 per guest',
    courses: [
      {
        title: 'Starter',
        dishes: [
          {
            name: 'Velvet Autumn Pumpkin Soup',
            description: 'Creamy roasted organic pumpkin and ginger soup, finished with a swirl of pumpkin seed oil and toasted pumpkin seeds.'
          }
        ]
      },
      {
        title: 'Main Course',
        dishes: [
          {
            name: 'Pan-Roasted Duck Breast',
            description: 'Crisp-skinned duck breast, roasted sweet potato mash, wild sautéed pine mushrooms, and a tangy Cape pomegranate reduction.'
          }
        ]
      },
      {
        title: 'Warm Sweet',
        dishes: [
          {
            name: 'Danielle’s Cape Brandy Pudding',
            description: 'Traditional moist dates pudding soaked in warm brandy butter sauce, accompanied by homemade vanilla bean custard.'
          }
        ]
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: "Danielle catered our private dinner party in Bantry Bay. Her food didn't just taste extraordinary; her warm, hands-on presence made our guests feel completely cherished. Highly recommended!",
    author: "Charlotte & Pierre Weyers",
    role: "Private Home Dinner",
    location: "Bantry Bay"
  },
  {
    id: 'test-2',
    quote: "We use Moemas for all our corporate VIP boardroom lunches in the CBD. They are flawless—delivering hot, beautiful, gourmet dishes right on time. Our clients are always highly impressed.",
    author: "Naledi Dlamini",
    role: "Executive Assistant, Allen & Overy",
    location: "Cape Town CBD"
  },
  {
    id: 'test-3',
    quote: "Danielle created a magical grazing table and custom three-course menu for our wedding in Franschhoek. Our guests are still talking about the slow-roasted lamb shank. It was absolute perfection.",
    author: "Kieron & Sarah",
    role: "Wedding Ceremony",
    location: "Franschhoek"
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    url: HERO_IMAGE,
    alt: 'Slow-roasted Karoo lamb shank on stoneware pottery with wine reduction',
    tag: 'Plated'
  },
  {
    id: 'gal-2',
    url: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600',
    alt: 'Executive boardroom gourmet finger platters and rustic roasted chicken',
    tag: 'Corporate'
  },
  {
    id: 'gal-3',
    url: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=600',
    alt: 'Gourmet puff pastry canapés beautifully arranged on a slate platter',
    tag: 'Savory'
  },
  {
    id: 'gal-4',
    url: 'https://images.unsplash.com/photo-1519225495810-7512c696505a?auto=format&fit=crop&q=80&w=600',
    alt: 'Wedding banqueting table beautifully styled under warm fairy lights',
    tag: 'Celebration'
  },
  {
    id: 'gal-5',
    url: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=600',
    alt: 'Grilled salmon steak beautifully plated with crisp asparagus',
    tag: 'Plated'
  },
  {
    id: 'gal-6',
    url: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=600',
    alt: 'Rustic crostini appetizers with fresh fynbos figs, honey and goats cheese',
    tag: 'Savory'
  },
  {
    id: 'gal-7',
    url: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600',
    alt: 'Plated sweet dessert berry pavlova cake under soft light',
    tag: 'Sweet'
  },
  {
    id: 'gal-8',
    url: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&q=80&w=600',
    alt: 'Freshly caught West Coast oyster platter with sliced lemons on ice',
    tag: 'Plated'
  }
];

export const DANIELLE_STORY = [
  "I started Moemas with a simple, uncompromising belief: catering shouldn't feel like a factory production line. It should feel like gathering around a warm, generous dining table in the heart of Cape Town.",
  "Every menu we cook is crafted entirely by hand, sourcing our ingredients directly from local olive groves, boutique fynbos farms, and West Coast harbors that we know by name.",
  "Whether we are styling a modern boardroom lunch in the CBD, plating an intimate multi-course anniversary dinner in Constantia, or designing a romantic grazing feast in Franschhoek, my team and I bring a hands-on, owner-led commitment to your table.",
  "We understand that cash flow is king for our clients, which is why our pricing stays completely transparent, fair, and built around delivers-on-the-day quality. No hidden corporate markups—just magnificent food served by people who genuinely care."
];
