# Moemas Catering

Marketing website for **Moemas Catering**, Cape Town — owner-led fine catering for
corporate boardroom lunches, private plated dinners, and weddings across the Cape.

Built as a fast, fully static single-page site. No backend, no API keys, no environment
variables required — enquiries are delivered straight to Danielle's inbox via a pre-filled
email and an optional WhatsApp hand-off.

## Tech stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite 6](https://vite.dev) for dev/build
- [Tailwind CSS v4](https://tailwindcss.com)
- [Motion](https://motion.dev) for scroll-reveal animations
- [lucide-react](https://lucide.dev) icons

## Run locally

**Prerequisites:** Node.js 18+

```bash
npm install     # install dependencies
npm run dev     # start dev server at http://localhost:3000
```

## Other scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run build`   | Production build to `dist/`                   |
| `npm run preview` | Preview the production build at :3000         |
| `npm run lint`    | Type-check the project (`tsc --noEmit`)       |

## Deploy

The build output in `dist/` is a static bundle that can be hosted on any static host
(Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3, etc.):

```bash
npm run build
# then deploy the contents of ./dist
```

## Contact details

Enquiry and waitlist forms hand off to:

- **Email:** moemasfood@gmail.com
- **Phone / WhatsApp:** +27 82 455 9811

Update these in `src/data.ts` (`CONTACT`) if they change.
