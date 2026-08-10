# EchoWhale

**Live website:** [peanutseeker.github.io/echo-whale](https://peanutseeker.github.io/echo-whale/)

EchoWhale is an interactive, mobile-first web version of **my Harvard Summer School CSCI E-34 UX Engineering term project**. It is a whale-watch companion for young, curious passengers who want to listen to whale sounds, recognise species cues, explore nearby sea life, understand Boston-area whale-watch context, and take one small conservation action.

The site keeps the course project’s original five-feature scope. It is a portfolio demonstration, not a booking, tracking, or live-sightings service. The Boston page is an editorial field guide built from linked public sources; it does not imply an up-to-the-minute feed.

## Explore

- [Open the live site](https://peanutseeker.github.io/echo-whale/)
- [Read the UX design intent and user stories](docs/ux-design-intent.md)
- [Read the media and factual-source credits](CREDITS.md)
- [Read the original web-design brief](docs/superpowers/specs/2026-08-08-echo-whale-web-design.md)

## Retained course features

- **Ocean sounds:** Playable public-domain recordings, a plain-language listening guide, transcript and error recovery.
- **Meet a whale:** Real-species teaching profiles with identification cues, scientific names and source-linked photographs. They are not claims about tracked individual animals.
- **Sea animals:** A searchable mini-encyclopedia with real photography, short facts and a clear no-results recovery path.
- **Boston field guide:** Static Boston → Stellwagen Bank context, seasonal information, wildlife examples and naturalist observation cues, all linked to official sources.
- **Help whales:** One specific, source-linked conservation action connected to each whale guide.

## Run locally

```bash
npm install
npm run dev
```

Open the local address printed by Vite.

## Deploy free with GitHub Pages

This is a static React site: it needs no server, database, or paid hosting.

1. Push the repository to GitHub on the `main` branch.
2. In **Settings → Pages**, choose **GitHub Actions** as the source if Pages is not already enabled.
3. Let the **Deploy EchoWhale to GitHub Pages** workflow finish in the repository’s **Actions** tab.
4. Open `https://<github-username>.github.io/<repository-name>/`.

The workflow builds on every push to `main`. The Vite configuration derives the repository base path automatically, so forks do not need a manual path edit.

## Verify before publishing

```bash
npm test
npm run test:e2e
npm run build
```

## Technology

React, TypeScript, Vite, React Router, local `@fontsource` typography, Vitest, Playwright, and GitHub Pages.

## Credits

All production wildlife photos are stored locally with creator/agency, license, Commons source page and original-file links in [CREDITS.md](CREDITS.md). Whale recordings are public-domain National Park Service recordings shared through Wikimedia Commons. The layout and copy are original to this course project; no operator branding, booking flow or visual asset was copied.
