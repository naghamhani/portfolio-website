# Nagham Alhoubani — Portfolio (Next.js)

A bilingual (English / العربية), responsive portfolio for a Data Science & AI
professional. Built with **Next.js 14 (App Router)**, React, and Tailwind CSS.

## Run locally

```bash
cd portfolio-app
npm install
npm run dev      # http://localhost:3000
```

Production build:

```bash
npm run build && npm start
```

## What's inside

- Bilingual EN/AR with full RTL support (toggle in the nav).
- Sections: Hero, Stats (count-up), About, Focus, Experience timeline,
  Selected Work, Gallery (filterable, with lightbox), Credentials
  (expandable certificate sets), Contact, Footer with a live clock.
- All 56 photos and 77 certificates from the source folder, organized.
- Résumé download wired to `public/Nagham_Alhoubani_Resume_2026.pdf`.

## Design language (from design.md)

- Light → dark scroll journey (warm paper → deep plum sections).
- `ن` monogram preloader with a loading counter.
- Animated neural-network constellation background.
- Numbered sections, infinite skill marquee, hatch dividers.
- One personality palette: deep plum + rose-magenta + warm gold.

## Editing

- Copy lives in `i18n.jsx` (bilingual UI strings).
- Structured content (timeline, projects, credentials, gallery) is in
  `data.js` and `data/gallery.json`.
- Photos: `public/img`. Certificates: `public/certs`. Résumé: `public/`.

## Structure

```
app/            layout, page, globals.css
components/      Nav, Hero, Stats, About, Focus, Timeline, Work, Gallery,
                 Credentials, Contact, Footer, Preloader, Constellation,
                 Providers, Reveal, CountUp, SectionHead, LangToggle
i18n.jsx         bilingual provider + strings
lightbox.jsx     image/video lightbox
data.js          timeline, projects, credentials, tech
data/gallery.json
public/img, public/certs, favicon.svg, résumé pdf
```

> Note: Next.js 14.2.5 is pinned. For production, run `npm i next@latest`
> to pick up the latest security patches.
