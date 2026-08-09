# EchoWhale Authentic Content Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn EchoWhale into a credible, Boston-contextualised course portfolio that uses verified real wildlife photography, source-linked factual content, and an editorial field-guide visual system while preserving the original five-feature UX scope.

**Architecture:** Keep the current React/Vite static site and route structure. Replace fictional, untyped visual strings and fake sightings with a small, typed local content layer: every visible media item and factual section carries an accessible description and a human-readable source. The `/spots` route remains the original project’s local-context feature, but becomes a transparent, non-live Boston field guide rather than an unsupported map of fake sightings.

**Tech Stack:** React 19, TypeScript, React Router, Vite, Vitest, Testing Library, Playwright, `@fontsource/dm-serif-display`, `@fontsource/manrope`, static local files in `public/images`, GitHub Pages.

---

## Source decisions locked before implementation

Use these exact Wikimedia Commons assets after downloading their original files into `public/images/`. Their Commons record gives a direct file, creator/agency, and license; do not use a Google result URL or an image without an equivalent record.

| Local filename | Visible use | Commons source page | Credit / license |
| --- | --- | --- | --- |
| `humpback-whale-underwater.jpg` | home hero, humpback profile, humpback sound | [Humpback Whale Underwater](https://commons.wikimedia.org/wiki/File:Humpback_Whale_Underwater_(37209287981).jpg) | National Marine Sanctuaries · Public domain |
| `killer-whale-alaska.jpg` | orca profile and orca sound | [Killer whale in Alaska](https://commons.wikimedia.org/wiki/File:Killer_whale_in_Alaska.jpg) | U.S. Forest Service · Public domain |
| `gray-whale.jpg` | gray-whale profile | [Gray whale](https://commons.wikimedia.org/wiki/File:Gray_whale.jpg) | NOAA’s Ark / Animals Collection · Public domain |
| `green-sea-turtle.jpg` | green sea turtle entry | [Green sea turtle](https://commons.wikimedia.org/wiki/File:Green-sea-turtle.jpg) | David Vogel, U.S. Fish and Wildlife Service · Public domain |
| `common-octopus.jpg` | common octopus entry | [Common octopus, Medes Islands](https://commons.wikimedia.org/wiki/File:Common_octopus_(Octopus_vulgaris),_Pedra_de_Deu,_Medes_Islands,_Spain.jpg) | Jouni Kuisma / DiveCodex · CC BY-SA 4.0 |
| `common-clownfish.jpg` | common clownfish entry | [Common clownfish](https://commons.wikimedia.org/wiki/File:Common_clownfish.jpg) | Jan Derk · Public domain |

Keep audio on the existing verified public-domain Wikimedia URLs. Do not use image upscaling or generative detail creation: choose the original/high-resolution source, crop it with CSS, and let Vite serve it locally.

Boston contextual sources are similarly fixed:

- [New England Aquarium 2026 whale watch announcement](https://www.neaq.org/about-us/press-room/press-releases/new-england-aquarium-whale-watch-bhcc-2026/) for Central Wharf, May–November operating context, Stellwagen Bank destination, and examples of animals visitors may encounter.
- [New England Aquarium naturalist Q&A](https://www.neaq.org/ask-a-new-england-aquarium-whale-watch-naturalist/) for how naturalists locate whales and the fact that observations are logged on each trip.
- [NOAA Stellwagen Bank National Marine Sanctuary](https://stellwagen.noaa.gov/) for the geographic context east of Boston.

## File map

| Path | Responsibility |
| --- | --- |
| `package.json`, `src/main.tsx` | Install and locally bundle the two selected open-source font families. |
| `public/images/*` | Six licensed local wildlife images, replacing generic illustrated assets in the production experience. |
| `CREDITS.md` | Full attribution, licensing, source-page and source-file records for image/audio assets. |
| `src/content/types.ts`, `src/content/media.ts` | Typed `MediaAsset` and `SourceReference` records shared by all content modules. |
| `src/content/whales.ts`, `sounds.ts`, `species.ts`, `conservation.ts`, `bostonFieldGuide.ts` | Specific, source-backed content; no fictional individual or fake real-time record. |
| `src/components/SourceLink.tsx`, `src/components/ImageCredit.tsx` | Consistent visible source/credit treatment. |
| `src/features/home/HomePage.tsx` | Real-photography hero and corrected fifth-feature wording. |
| `src/features/sounds/SoundsPage.tsx` | Correct species photo beside each playable recording and source disclosure. |
| `src/features/whales/*`, `src/features/encyclopedia/*` | Distinct real-photo field-guide cards and desktop/touch-friendly detail layouts. |
| `src/features/spots/SpotsPage.tsx`, `src/features/spots/BostonFieldGuidePanel.tsx` | Source-linked Boston guide replacing fake sightings and map interaction. |
| `src/features/spots/SightingsMap.tsx`, `src/features/spots/TripModePanel.tsx`, `src/content/sightings.ts`, `src/components/DemoNotice.tsx` | Remove, because their display depends on invented live/demo data. |
| `src/styles/tokens.css`, `src/styles/global.css` | Complete editorial typography, spacing, layout, focus, crop and responsive treatment. |
| `README.md`, `docs/ux-design-intent.md` | First-person portfolio framing plus accurate scope, deployment and source documentation. |
| Existing `*.test.tsx`, `src/content/content.test.ts`, `tests/e2e/echo-whale.spec.ts` | Update behaviour assertions; add data-integrity and no-false-live-language checks. |

## Task 1: Establish source-aware content types and guardrails

**Files:**
- Modify: `src/content/types.ts`
- Create: `src/content/media.ts`
- Modify: `src/content/content.test.ts`

- [ ] **Step 1: Write failing content integrity tests.**
  - Assert that every whale/species image has a non-empty local path, alt text, creator, license, Commons source-page URL and original-file URL.
  - Assert that `new Set(whales.map(({ image }) => image.localPath)).size === whales.length` so the three whale guides cannot silently share a photo.
  - Assert that no content label contains `Luna`, `Kai`, `Sol`, `demo sighting`, `recent spot`, or `real-time`.
  - Run: `npm test -- src/content/content.test.ts`
  - Expected: fail before the new data model is introduced.

- [ ] **Step 2: Define reusable media and source contracts.**
  - Add `SourceReference { label; url; reviewedAt? }` and `MediaAsset { localPath; alt; creator; license; sourcePageUrl; originalFileUrl }` to `types.ts`.
  - Add `media.ts` with the six exact records from the source-decisions table; use `projectAsset()` to create each local image URL only at render time.
  - Extend whale/species/sound/conservation types only with fields their UI needs: guide label, scientific name, source references, image, and/or related `whaleId`.
  - Remove the `Sighting` type entirely.

- [ ] **Step 3: Populate concrete, non-fictional content.**
  - Keep route IDs (`luna`, `kai`, `sol`) so internal links remain stable, but expose these records as `Humpback guide`, `Orca guide`, and `Gray whale guide` with the real species name, scientific name, identification cues, and a clearly stated “teaching profile” label.
  - Replace generic animal facts with short, source-linked descriptions and facts for green sea turtle, common octopus, and common clownfish.
  - Reword each sound title/description/transcript to identify its actual species, recording context, and recording source, without claiming it was recorded in Boston.
  - Replace generic conservation copy with a specific action and authority source for each species context.

- [ ] **Step 4: Confirm data tests pass.**
  - Run: `npm test -- src/content/content.test.ts`
  - Expected: all data assertions pass.

## Task 2: Acquire and document licensed local media

**Files:**
- Create: `public/images/humpback-whale-underwater.jpg`
- Create: `public/images/killer-whale-alaska.jpg`
- Create: `public/images/gray-whale.jpg`
- Create: `public/images/green-sea-turtle.jpg`
- Create: `public/images/common-octopus.jpg`
- Create: `public/images/common-clownfish.jpg`
- Create: `CREDITS.md`

- [ ] **Step 1: Download the original files from the direct Wikimedia upload URLs verified in the corresponding Commons source pages.**
  - Preserve the filenames in the source-decision table.
  - Check each downloaded file opens and is an image before adding it to the bundle.
  - Do not retain `hero-whale.png`, `profile-whale.png`, or `reef-scene.png` as production image references once all components use the real images.

- [ ] **Step 2: Build a durable credit ledger.**
  - In `CREDITS.md`, create one section for images and one for recordings.
  - For every record state: local filename/URL, described subject, creator or agency, license, Commons source page, direct original file, and any attribution wording required by the license.
  - Include all three existing recording credits and source pages, not only the images.

- [ ] **Step 3: Add a build-level asset check.**
  - Extend `content.test.ts` to use `fs.existsSync` (or a focused equivalent) for each media `localPath` under `public/`.
  - Run: `npm test -- src/content/content.test.ts`
  - Expected: a missing image or missing attribution metadata fails fast.

## Task 3: Build the common credit/source components

**Files:**
- Create: `src/components/ImageCredit.tsx`
- Create: `src/components/SourceLink.tsx`
- Create: `src/components/ImageCredit.test.tsx`
- Modify: `src/styles/global.css`

- [ ] **Step 1: Write component tests.**
  - Verify `ImageCredit` links to the source page, contains creator and license text, and has an accessible label.
  - Verify `SourceLink` opens a source in a new tab with `target="_blank"` and `rel="noreferrer"`.
  - Run: `npm test -- src/components/ImageCredit.test.tsx`
  - Expected: fail until the components are created.

- [ ] **Step 2: Implement the semantic components.**
  - Render image credits as visible, compact text below an image; do not put them only in a tooltip.
  - Render authority links with an unambiguous “Source:” prefix and visually distinguish external links without using color alone.
  - Add shared styles for readable credits, keyboard focus, and mobile wrapping.

- [ ] **Step 3: Re-run component tests.**
  - Run: `npm test -- src/components/ImageCredit.test.tsx`
  - Expected: pass.

## Task 4: Replace fake sightings with a Boston field guide

**Files:**
- Create: `src/content/bostonFieldGuide.ts`
- Create: `src/features/spots/BostonFieldGuidePanel.tsx`
- Modify: `src/features/spots/SpotsPage.tsx`
- Modify: `src/features/spots/SpotsPage.test.tsx`
- Delete: `src/content/sightings.ts`
- Delete: `src/features/spots/SightingsMap.tsx`
- Delete: `src/features/spots/TripModePanel.tsx`
- Delete: `src/components/DemoNotice.tsx`
- Modify: `package.json`, `package-lock.json`

- [ ] **Step 1: Replace map-specific tests with an honest-content specification.**
  - Assert the route presents “Boston whale-watch field guide,” Central Wharf, Stellwagen Bank, “May through November,” and source links to New England Aquarium and NOAA.
  - Assert that it does not render a map control, `recent`, `latest`, `today`, `yesterday`, `demo`, `live`, fake latitude/longitude, or a dynamic timestamp.
  - Run: `npm test -- src/features/spots/SpotsPage.test.tsx`
  - Expected: fail while the demo-sightings page remains in place.

- [ ] **Step 2: Create the static source-backed guide.**
  - In `bostonFieldGuide.ts`, model the route as editorially reviewed facts: Boston → Stellwagen geographic context; Central Wharf departure context; mid-May–November season; animals visitors may encounter; and naturalist observation cues (blows, birds, body parts, other boats).
  - Store all three authority URLs and an explicit `reviewedAt: '2026-08-09'` label. This is an editorial review date, not data freshness.
  - In `BostonFieldGuidePanel`, show a short “What this is / is not” note: it is planning and learning context, not a sightings tracker.

- [ ] **Step 3: Rebuild the `/spots` page around the guide.**
  - Preserve the original fifth feature’s route and navigation access, but rename the in-page and home-card language to `Boston waters` / `Boston field guide`.
  - Use source-linked cards for route, season, possible wildlife, and “what naturalists look for.” Link existing species guides when relevant; do not add booking or scheduling flows.
  - Delete the map/demo-data imports and uninstall `leaflet`, `react-leaflet`, and `@types/leaflet`.

- [ ] **Step 4: Validate the revised route.**
  - Run: `npm test -- src/features/spots/SpotsPage.test.tsx && npm run build`
  - Expected: unit test and type/build step pass without Leaflet assets or dependencies.

## Task 5: Integrate real photography throughout the original five features

**Files:**
- Modify: `src/features/home/HomePage.tsx`
- Modify: `src/features/sounds/SoundsPage.tsx`
- Modify: `src/features/sounds/SoundsPage.test.tsx`
- Modify: `src/features/whales/WhaleDirectoryPage.tsx`
- Modify: `src/features/whales/WhaleProfilePage.tsx`
- Modify: `src/features/whales/WhaleProfilePage.test.tsx`
- Modify: `src/features/encyclopedia/EncyclopediaPage.tsx`
- Modify: `src/features/encyclopedia/SpeciesDetailPage.tsx`
- Modify: `src/features/encyclopedia/EncyclopediaPage.test.tsx`
- Modify: `src/features/conservation/ConservationPage.tsx`
- Modify: `src/app/App.test.tsx`

- [ ] **Step 1: Update visible language and the home hero.**
  - Replace the illustration with the licensed humpback photograph and a descriptive alternative text.
  - Retain the original five-feature navigation, but use the corrected `Boston field guide` label instead of `Recent spots`.
  - Keep the original call-to-action route to sounds; do not add an extra product feature.

- [ ] **Step 2: Turn whale profiles into transparent teaching guides.**
  - Directory cards use the three distinct photos and label each as a teaching guide, followed by the factual species/scientific name.
  - Detail pages use the same species-specific photo, image credit, ID cues, short “why this is a guide” disclosure, and authority link.
  - Preserve valid old route IDs so links already in the project continue to work.

- [ ] **Step 3: Connect sounds to the right animal.**
  - Add the whale’s photo, species label, photo credit and recording source beside each existing audio player.
  - Preserve one-at-a-time audio playback, native controls, transcript and error recovery.
  - Change headings from personified individual calls to factually labelled recordings such as `Humpback call` and `Killer whale calls`.

- [ ] **Step 4: Give each encyclopaedia entry its own real-photo identity.**
  - Show distinct image/credit cards for green sea turtle, common octopus and common clownfish.
  - Detail pages include concise facts with source links, retaining the current search and no-results recovery flow.

- [ ] **Step 5: Make conservation specific but within scope.**
  - Show the related species photo/guide label where it helps recognition.
  - Add a source link for the conservation action without adding donations, sign-ups, share widgets or campaign workflows.

- [ ] **Step 6: Update tests before and after rendering changes.**
  - Replace `Luna`, `Kai`, `Sol`, illustration, and demo-sighting assertions with literal factual guide text, meaningful image `alt` text, source links and preserved user actions.
  - Run: `npm test`
  - Expected: all unit/component suites pass.

## Task 6: Apply the editorial field-guide visual system

**Files:**
- Modify: `package.json`, `package-lock.json`
- Modify: `src/main.tsx`
- Modify: `src/styles/tokens.css`
- Modify: `src/styles/global.css`
- Modify as needed: `src/components/FeatureCard.tsx`, `src/components/PageHeader.tsx`, `src/components/AppShell.tsx`, `src/components/BottomNav.tsx`

- [ ] **Step 1: Add local font assets.**
  - Install `@fontsource/dm-serif-display` and `@fontsource/manrope`.
  - Import only DM Serif Display 400 and Manrope 400/600/700 in `main.tsx`; use font-family tokens with system fallbacks. Do not add a third-party stylesheet or remote runtime font request.

- [ ] **Step 2: Rewrite the tokens and global styling as a readable editorial system.**
  - Define semantic color tokens for ink, deep ocean, seafoam, paper, sand, coral accent, borders and visible focus.
  - Use DM Serif Display for display headings and Manrope for body/UI. Apply a readable 16–18px body size, a generous line height, limited prose measure, and clearly stepped headings.
  - Replace the toy-like bubbles with restrained photo cards: consistent 16–20px radii, thin borders, modest shadows and more vertical whitespace.
  - Implement `object-fit: cover` with feature-specific `object-position` rules; display meaningful fallback background/color if a photo fails.

- [ ] **Step 3: Build responsive reading layouts.**
  - At desktop widths, use a two-column detail hero: large image/credit column plus independent high-contrast fact/reading panel.
  - At 390px, collapse to one column, preserve full-width controls, keep image credits readable, and retain text-labelled bottom navigation.
  - Add `:focus-visible`, reduced-motion-safe transitions, and no-color-only state signaling.

- [ ] **Step 4: Conduct two visual review passes.**
  - Start the local server and inspect `/`, `/sounds`, `/whales/luna`, `/animals/octopus`, and `/spots` at desktop plus 390px widths.
  - First pass: correct overlap, crop, contrast, reading order, focus and source-label defects found in screenshots.
  - Second pass: compare hierarchy across the five features; tighten spacing, type scale and card alignment without adding visual decoration or new capability.

## Task 7: Update portfolio documentation and end-to-end coverage

**Files:**
- Modify: `README.md`
- Modify: `docs/ux-design-intent.md`
- Modify: `tests/e2e/echo-whale.spec.ts`

- [ ] **Step 1: Correct README framing and deployment instructions.**
  - Change “Haowen Xu’s” to first-person “my Harvard Summer School CSCI E-34 UX Engineering term project.”
  - Link the live site, explain GitHub Pages deployment and local development, list the five retained features, and state that Boston context is editorial, not live tracking.
  - Remove Leaflet from the technology list and link `CREDITS.md` plus the UX-design-intent document.

- [ ] **Step 2: Refresh UX-design-intent documentation.**
  - Preserve the original user stories and course rationale, but add a concise implementation note that teaching-profile labels replace fictional individual claims and that `/spots` intentionally degrades to a source-backed guide because no public official feed was found.

- [ ] **Step 3: Rewrite the core user-journey E2E test.**
  - Cover: open home → play/pause a sound → open a real whale guide → find an encyclopaedia animal → use the Boston field guide → reach conservation.
  - Assert visible source attribution and absence of live/dynamic sightings claims along the journey.
  - Run: `npm run test:e2e`
  - Expected: browser journey passes at the production build base path.

## Task 8: Complete verification, publish, and verify the public build

**Files:**
- Modify only any files required by defects found during verification.

- [ ] **Step 1: Run the complete local quality gate.**
  - Run: `npm test`
  - Run: `npm run test:e2e`
  - Run: `npm run build`
  - Expected: all commands exit successfully.

- [ ] **Step 2: Manual accessibility and content audit.**
  - Verify all six local images load, three whale image paths are unique, every real photo has a visible credit, each source opens correctly, all five user journeys remain reachable, and no text calls the Boston page live/recent/current.
  - Verify desktop and 390px screenshots for clipped controls, low contrast, missing alt text, hidden focus, horizontal scroll and broken image crops.

- [ ] **Step 3: Commit the refresh with source ledger.**
  - Review `git diff --check` and `git status` first.
  - Commit with a focused message such as `feat: refresh EchoWhale with verified field-guide content`.

- [ ] **Step 4: Merge/push only after the user selects the integration option.**
  - After branch verification, present the standard merge/PR/keep/discard options; do not silently publish a worktree branch.
  - Once the user chooses merge-and-push, integrate to `main`, push the remote, wait for the existing GitHub Pages workflow, and open the live URL to confirm the deployed site.

## Verification checklist

- [ ] All existing route IDs and the five original feature intentions are preserved.
- [ ] The three whale guides and three marine-animal entries show six different locally stored real photos.
- [ ] Each asset has a verified source page, direct original URL, creator/agency, license and visible credit in `CREDITS.md`/the UI.
- [ ] The home, whale, sounds, encyclopaedia, Boston and conservation pages have source-aware English copy with no unsubstantiated live-data statement.
- [ ] Desktop and 390px mobile visual passes are complete.
- [ ] Unit tests, E2E tests, build, GitHub Pages workflow and public live-site smoke check all succeed.
