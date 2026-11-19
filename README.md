# AVENIX Website

Official website for **AVENIX** — *Engineering Tomorrow, Today.* — a software engineering, AI, automation and SaaS company.
Live domain: https://www.avenixltd.cloud

## Tech stack

- React 19 + TypeScript (strict) + Vite
- Tailwind CSS v4 (brand tokens in `src/index.css`)
- React Router (lazy-loaded routes), Motion for subtle animation, Lucide icons
- Fonts: Space Grotesk (headings), Inter (body), self-hosted via Fontsource

## Pages

Home, About, Services, Products (ProManager), Industries, Portfolio, Insights (+ `/insights/:slug`), Contact, 404.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck  # TypeScript check
npm run build      # type check + production build into dist/
npm run preview    # serve the production build locally
```

Requires Node 20+.

## Project structure

```
src/
  components/
    layout/    Navbar, Footer, Layout, Seo (per-route metadata)
    ui/        Button, Logo, Section, Reveal
    sections/  Reusable page sections, ContactForm, ProManager mockup
  data/        Content: services, industries, products, articles, misc
  pages/       One file per route
  lib/site.ts  Site constants, navigation, env access
public/        favicon, og-image, robots.txt, sitemap.xml
scripts/       postbuild.mjs (SPA 404 fallback)
```

## Environment variables

Copy `.env.example` to `.env` (never commit `.env`). All variables are public, build-time values — never put secrets here.

| Variable | Purpose |
|---|---|
| `VITE_SITE_URL` | Canonical site URL |
| `VITE_CONTACT_ENDPOINT` | HTTPS endpoint receiving the contact form as a JSON `POST` |
| `VITE_CONTACT_EMAIL` | Optional public email shown on the site |

### Contact form

The form validates input, includes a honeypot field and a minimum-time check against bots, and posts JSON to `VITE_CONTACT_ENDPOINT`.
**Until an endpoint is configured, the form tells the visitor their message was NOT sent** — it never fakes delivery.
To go live, set the endpoint to a form service (e.g. Formspree, Web3Forms) or your own API, which should also apply server-side validation and rate limiting.

## Adding content

- **Articles:** add objects to `src/data/articles.ts`; the Insights pages render them automatically.
- **Projects:** edit `src/data/projects.ts`. Add `description`, `tags`, `image` (file in `public/`) and `url` only once verified; the "View Project" link appears only when `url` is set.
- **Customer reviews:** add real, approved reviews to `src/data/reviews.ts`. With none, production shows an honest empty state; sample placeholders appear in `npm run dev` only. Star ratings render only when `rating` is provided.
- **Animations:** `src/components/ui/Reveal.tsx` (`direction`: up, left, right, scale, fade). Respects `prefers-reduced-motion`.
- **Portfolio:** only add verified projects. Nothing is invented on this site.
- **Product screenshots:** the ProManager visual is an illustrative CSS concept. Replace it with real screenshots when available.

## Deployment preparation

`npm run build` produces a static site in `dist/`. Serve it with any static host or Nginx. Because routing is client-side, unknown paths must fall back to `index.html` (for Nginx: `try_files $uri /index.html;`). `postbuild.mjs` also writes `dist/404.html` for hosts that need it.
Set `VITE_*` variables at build time. Server deployment is a separate phase.

## SEO notes

Per-route title, description, canonical and Open Graph tags are set client-side; `sitemap.xml` and `robots.txt` are in `public/`. For maximum social-preview fidelity, consider static prerendering in a later phase, and replace `og-image.svg` with a 1200×630 PNG (some platforms do not render SVG previews).
