# EchoWhale

**Live website:** [peanutseeker.github.io/echo-whale](https://peanutseeker.github.io/echo-whale/)

EchoWhale is an interactive, mobile-first web version of Haowen Xu’s Harvard Summer School **CSCI E-34 UX Engineering** term project. It is a whale-watch companion for passengers—especially young, curious visitors—to discover whale sounds, identify individual whales, explore marine life, understand recent sightings, and learn a small conservation action.

The product scope is intentionally the same as the course project. It is a portfolio demonstration, not a live whale-watch service: sightings and trip context are clearly labelled demo data, and the site does not claim real-time tracking or live operator information.

## Explore the project

- [Open the live site](https://peanutseeker.github.io/echo-whale/)
- [Read the UX design intent and user stories](docs/ux-design-intent.md)
- [View the original design brief](docs/superpowers/specs/2026-08-08-echo-whale-web-design.md)

## Included experience

- **Ocean sounds:** playable whale recordings with visible play/pause controls and a plain-language listening guide.
- **Meet a whale:** story-led profiles with individual names and identifying markings.
- **Sea animals:** a friendly marine-life encyclopedia with search and a clear empty-state recovery path.
- **Recent spots:** a scannable, demo-labelled sightings list with an optional map and compact trip context.
- **Help whales:** one practical conservation action connected to each whale story.

## Run locally

```bash
npm install
npm run dev
```

Then open the local address shown in the terminal.

## Deploy with GitHub Pages

This repository is configured for free GitHub Pages hosting through GitHub Actions—no server, database, or paid hosting account is required.

1. Fork this repository or create a new repository from the code.
2. Push the project to that repository’s `main` branch.
3. Open the repository’s **Actions** tab and allow the “Deploy EchoWhale to GitHub Pages” workflow to finish.
4. The site will be available at `https://<github-username>.github.io/<repository-name>/`.

The workflow builds the static site automatically on every push to `main`. The Vite configuration derives the correct repository path during that build, so a fork does not need a manual base-path change.

## Verify before publishing changes

```bash
npm test
npm run test:e2e
npm run build
```

## Technology

React, TypeScript, Vite, React Router, Leaflet, Vitest, Playwright, and GitHub Pages.

## Credits

- Original ocean illustrations were generated specifically for this project with OpenAI image generation; they do not reproduce the reference website or Figma prototype’s assets.
- Whale audio uses public-domain National Park Service recordings served by Wikimedia Commons: [humpback call](https://commons.wikimedia.org/wiki/File:Humpback_whale_moo.ogg), [killer whale calls](https://commons.wikimedia.org/wiki/File:Killer_whale.ogg), and [humpback wheeze-blow](https://commons.wikimedia.org/wiki/File:Humpback_whale_wheezeblow.ogg).
- Whale Watch Kaikōura informed the high-level sightings/trip information hierarchy only; its branding, copy, layout, and imagery were not copied.
