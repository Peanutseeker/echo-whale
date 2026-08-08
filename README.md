# EchoWhale

An interactive web realization of Haowen Xu's Harvard Summer School CSCI E-34 UX Engineering term project. EchoWhale is a mobile-first companion for whale-watch passengers who want to identify whales, understand ocean sounds, explore nearby marine life, see local sightings, and learn simple conservation actions.

## Why this version

The original Figma prototype established five course-scoped features: whale sounds, individual whale stories, a marine-life encyclopedia, local sightings, and conservation education. This site keeps that scope and strengthens the underlying usability work:

- text-labelled navigation replaces ambiguous icon-only choices;
- the sighting list comes before the map and is explicitly marked as demo data;
- every whale and sea-animal detail page has a clear return path;
- sounds have named controls, explanatory transcripts, and an unavailable-audio state;
- search includes a clear recovery path when nothing matches.

It is a portfolio demonstration, not a live whale-watch service. Sightings and trip context are intentionally local demo fixtures; the site makes no real-time tracking claim.

## Run locally

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm test
npm run test:e2e
npm run build
```

## Credits

- Original ocean illustrations were generated specifically for this project using OpenAI image generation and are not copied from the reference website or Figma prototype.
- Whale audio uses public-domain National Park Service recordings served by Wikimedia Commons: [humpback call](https://commons.wikimedia.org/wiki/File:Humpback_whale_moo.ogg), [killer whale calls](https://commons.wikimedia.org/wiki/File:Killer_whale.ogg), and [humpback wheeze-blow](https://commons.wikimedia.org/wiki/File:Humpback_whale_wheezeblow.ogg).
- The sightings information architecture was informed by Whale Watch Kaikōura's clear trip-report and map hierarchy, without copying its branding, copy, or layout.

## Deployment

Pushing `main` deploys the static Vite build through the included GitHub Pages workflow.
