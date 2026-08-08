# EchoWhale Web Experience Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a responsive, accessible EchoWhale web experience that realizes the original Harvard UX term project without expanding its product feature set.

**Architecture:** A static React + TypeScript single-page application uses hash routing so every destination works on GitHub Pages. Typed local demo content drives the five original modules; UI components never fetch or claim live data. Leaflet renders the required supporting map, while the sightings list remains the primary usable representation.

**Tech Stack:** Vite, React, TypeScript, React Router, Leaflet/react-leaflet, CSS Modules, Vitest, React Testing Library, Playwright, GitHub Actions, GitHub Pages.

---

## Planned file structure

```text
.
├── .github/workflows/deploy-pages.yml
├── public/
│   ├── images/                       # generated art and explicitly credited images
│   └── icons/                        # exported Figma icons when retained
├── src/
│   ├── app/App.tsx
│   ├── app/routes.tsx
│   ├── components/
│   │   ├── AppShell.tsx
│   │   ├── BottomNav.tsx
│   │   ├── DemoNotice.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── PageHeader.tsx
│   │   └── StatusMessage.tsx
│   ├── content/
│   │   ├── types.ts
│   │   ├── whales.ts
│   │   ├── species.ts
│   │   ├── sightings.ts
│   │   ├── sounds.ts
│   │   └── conservation.ts
│   ├── features/
│   │   ├── home/HomePage.tsx
│   │   ├── sounds/SoundsPage.tsx
│   │   ├── whales/WhaleDirectoryPage.tsx
│   │   ├── whales/WhaleProfilePage.tsx
│   │   ├── encyclopedia/EncyclopediaPage.tsx
│   │   ├── encyclopedia/SpeciesDetailPage.tsx
│   │   ├── spots/SpotsPage.tsx
│   │   ├── spots/SightingsMap.tsx
│   │   ├── spots/TripModePanel.tsx
│   │   └── conservation/ConservationPage.tsx
│   ├── styles/{tokens.css,global.css}
│   ├── test/setup.ts
│   └── main.tsx
├── tests/e2e/echo-whale.spec.ts
├── README.md
├── package.json
├── vite.config.ts
└── playwright.config.ts
```

### Task 1: Establish the repository and test harness

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `src/main.tsx`, `src/test/setup.ts`, `playwright.config.ts`, `.gitignore`
- Create: `README.md`

- [ ] **Step 1: Initialize the local repository and Vite React TypeScript project**

Run:

```bash
git init
npm create vite@latest . -- --template react-ts
npm install react-router-dom leaflet react-leaflet
npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event playwright @playwright/test
npx playwright install --with-deps chromium
```

- [ ] **Step 2: Add the failing test command before adding application features**

Set `package.json` scripts to:

```json
{
  "test": "vitest run",
  "test:watch": "vitest",
  "test:e2e": "playwright test",
  "build": "tsc -b && vite build",
  "preview": "vite preview"
}
```

- [ ] **Step 3: Configure the test environment**

Create `src/test/setup.ts`:

```ts
import '@testing-library/jest-dom/vitest'
```

Configure Vitest in `vite.config.ts` with `environment: 'jsdom'`, `setupFiles: ['./src/test/setup.ts']`, and `globals: true`.

- [ ] **Step 4: Verify the empty harness is healthy**

Run: `npm test`

Expected: PASS with no tests collected.

- [ ] **Step 5: Commit the scaffold**

```bash
git add package.json package-lock.json vite.config.ts tsconfig.json src playwright.config.ts .gitignore README.md
git commit -m "chore: scaffold EchoWhale web app"
```

### Task 2: Define trustworthy local demo content

**Files:**
- Create: `src/content/types.ts`, `src/content/whales.ts`, `src/content/species.ts`, `src/content/sounds.ts`, `src/content/sightings.ts`, `src/content/conservation.ts`
- Test: `src/content/content.test.ts`

- [ ] **Step 1: Write the failing content-integrity tests**

```ts
import { describe, expect, it } from 'vitest'
import { sightings } from './sightings'
import { whales } from './whales'

describe('EchoWhale demo content', () => {
  it('links every sighting to an existing whale and marks it as demo data', () => {
    const whaleIds = new Set(whales.map((whale) => whale.id))
    sightings.forEach((sighting) => {
      expect(whaleIds.has(sighting.whaleId)).toBe(true)
      expect(sighting.demo).toBe(true)
    })
  })
})
```

- [ ] **Step 2: Verify it fails because content modules do not exist**

Run: `npm test -- src/content/content.test.ts`

Expected: FAIL with module-not-found errors.

- [ ] **Step 3: Implement the typed content contract and fixture data**

Create `src/content/types.ts`:

```ts
export type Whale = { id: string; name: string; species: string; markings: string[]; story: string; image: string }
export type Sighting = { id: string; whaleId: string; place: string; observedAt: string; latitude: number; longitude: number; status: string; demo: true }
export type Sound = { id: string; whaleId: string; title: string; description: string; audioUrl: string; transcript: string; credit: string }
export type Species = { id: string; name: string; plainDescription: string; facts: Array<{ label: string; value: string }>; image: string }
export type ConservationSpotlight = { id: string; whaleId: string; issue: string; action: string; reason: string }
```

Populate at least three whales, three sightings, three sounds, three species, and three conservation entries. Use clearly fictionalised names/locations or vetted public facts; all sightings must have `demo: true`.

- [ ] **Step 4: Re-run the content test**

Run: `npm test -- src/content/content.test.ts`

Expected: PASS.

- [ ] **Step 5: Commit the content boundary**

```bash
git add src/content
git commit -m "feat: add typed EchoWhale demo content"
```

### Task 3: Build the app shell and bounded navigation

**Files:**
- Create: `src/app/App.tsx`, `src/app/routes.tsx`, `src/components/AppShell.tsx`, `src/components/BottomNav.tsx`, `src/components/DemoNotice.tsx`, `src/components/PageHeader.tsx`, `src/styles/tokens.css`, `src/styles/global.css`
- Modify: `src/main.tsx`
- Test: `src/app/App.test.tsx`

- [ ] **Step 1: Write the failing navigation test**

```tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

it('uses text-labelled navigation to reach every original module', async () => {
  const user = userEvent.setup()
  render(<App />)
  await user.click(screen.getByRole('link', { name: 'Ocean sounds' }))
  expect(screen.getByRole('heading', { name: 'Ocean sounds' })).toBeVisible()
})
```

- [ ] **Step 2: Verify it fails**

Run: `npm test -- src/app/App.test.tsx`

Expected: FAIL because `App` and labelled navigation do not exist.

- [ ] **Step 3: Implement hash routing and shared shell**

Use `HashRouter`. Define routes for `/`, `/sounds`, `/whales`, `/whales/:whaleId`, `/animals`, `/animals/:speciesId`, `/spots`, and `/conservation`. `BottomNav` must render visible labels: `Home`, `Sounds`, `Meet a whale`, `Sea animals`, `Recent spots`, and `Help whales`; no route may exist for accounts, uploads, shopping, or games.

`DemoNotice` must render this exact message wherever sightings/trip information appears:

```tsx
export function DemoNotice() {
  return <p role="note">Demo data — not live sightings or trip tracking.</p>
}
```

- [ ] **Step 4: Re-run the navigation test and build**

Run: `npm test -- src/app/App.test.tsx && npm run build`

Expected: PASS; Vite writes `dist/`.

- [ ] **Step 5: Commit shell and routing**

```bash
git add src/app src/components src/styles src/main.tsx
git commit -m "feat: add accessible EchoWhale app shell"
```

### Task 4: Implement the original-function home page

**Files:**
- Create: `src/features/home/HomePage.tsx`, `src/components/FeatureCard.tsx`
- Test: `src/features/home/HomePage.test.tsx`

- [ ] **Step 1: Write the failing feature-inventory test**

```tsx
it('shows exactly the five original EchoWhale feature destinations', () => {
  render(<HomePage />)
  expect(screen.getAllByRole('link')).toHaveLength(5)
  expect(screen.getByRole('link', { name: /Ocean sounds/i })).toBeVisible()
  expect(screen.getByRole('link', { name: /Help whales/i })).toBeVisible()
})
```

- [ ] **Step 2: Verify it fails**

Run: `npm test -- src/features/home/HomePage.test.tsx`

Expected: FAIL because the home feature component does not exist.

- [ ] **Step 3: Implement five task-oriented cards**

Render only these destinations and subtitles:

```ts
const homeFeatures = [
  ['Ocean sounds', 'Hear how whales speak', '/sounds'],
  ['Meet a whale', 'Discover a whale’s story', '/whales'],
  ['Sea animals', 'Explore life below the waves', '/animals'],
  ['Recent spots', 'See where whales were seen', '/spots'],
  ['Help whales', 'Learn one way to help', '/conservation'],
] as const
```

Use the Figma home palette as a reference, but make desktop a responsive two-column composition and mobile a one-column stack. Do not add a dashboard, login, or extra card.

- [ ] **Step 4: Re-run the home test**

Run: `npm test -- src/features/home/HomePage.test.tsx`

Expected: PASS.

- [ ] **Step 5: Commit home page**

```bash
git add src/features/home src/components/FeatureCard.tsx
git commit -m "feat: add original EchoWhale home destinations"
```

### Task 5: Implement sounds with explicit controls and recovery

**Files:**
- Create: `src/features/sounds/SoundsPage.tsx`
- Test: `src/features/sounds/SoundsPage.test.tsx`

- [ ] **Step 1: Write the failing audio-control test**

```tsx
it('exposes a named play control and a text description for every sound', () => {
  render(<SoundsPage />)
  expect(screen.getByRole('button', { name: /play humpback's lullaby/i })).toBeVisible()
  expect(screen.getByText(/what you are hearing/i)).toBeVisible()
})
```

- [ ] **Step 2: Verify it fails**

Run: `npm test -- src/features/sounds/SoundsPage.test.tsx`

Expected: FAIL because `SoundsPage` is absent.

- [ ] **Step 3: Implement sound cards**

For every `Sound`, render native `<audio preload="metadata">`, a button with `aria-label={`Play ${sound.title}`}`, the plain-language description, transcript, source credit, and a visible status message on playback failure. The control must toggle to `Pause ${sound.title}` after successful play.

- [ ] **Step 4: Re-run tests**

Run: `npm test -- src/features/sounds/SoundsPage.test.tsx`

Expected: PASS.

- [ ] **Step 5: Commit sounds**

```bash
git add src/features/sounds
git commit -m "feat: add accessible whale sound experience"
```

### Task 6: Implement whale profiles and the sea-animal encyclopedia

**Files:**
- Create: `src/features/whales/WhaleDirectoryPage.tsx`, `src/features/whales/WhaleProfilePage.tsx`, `src/features/encyclopedia/EncyclopediaPage.tsx`, `src/features/encyclopedia/SpeciesDetailPage.tsx`, `src/components/StatusMessage.tsx`
- Test: `src/features/whales/WhaleProfilePage.test.tsx`, `src/features/encyclopedia/EncyclopediaPage.test.tsx`

- [ ] **Step 1: Write failing story-first and empty-state tests**

```tsx
it('puts a whale name, markings, story, and return path on the profile', () => {
  render(<WhaleProfilePage whaleId="luna" />)
  expect(screen.getByRole('heading', { name: 'Luna' })).toBeVisible()
  expect(screen.getByText(/markings/i)).toBeVisible()
  expect(screen.getByRole('link', { name: /back to whales/i })).toBeVisible()
})

it('explains an empty encyclopedia search without stranding the visitor', () => {
  render(<EncyclopediaPage />)
  // enter a nonmatching term and assert a clear-result control is visible
})
```

- [ ] **Step 2: Verify both tests fail**

Run: `npm test -- src/features/whales/WhaleProfilePage.test.tsx src/features/encyclopedia/EncyclopediaPage.test.tsx`

Expected: FAIL because the components do not exist.

- [ ] **Step 3: Implement the profile and encyclopedia flows**

Whale profile order: image, name/species, recognisable markings, short story, structured facts, related conservation link, and “Back to whales”. Encyclopedia order: labelled search, matching animal cards, plain-language lead, facts, and “Back to sea animals”. Search is an existing prototype affordance, not a new module; no photo upload or user content is included.

- [ ] **Step 4: Re-run tests and build**

Run: `npm test -- src/features/whales/WhaleProfilePage.test.tsx src/features/encyclopedia/EncyclopediaPage.test.tsx && npm run build`

Expected: PASS.

- [ ] **Step 5: Commit knowledge flows**

```bash
git add src/features/whales src/features/encyclopedia src/components/StatusMessage.tsx
git commit -m "feat: add whale and marine-life knowledge flows"
```

### Task 7: Implement sightings and bounded Trip Mode

**Files:**
- Create: `src/features/spots/SpotsPage.tsx`, `src/features/spots/SightingsMap.tsx`, `src/features/spots/TripModePanel.tsx`
- Test: `src/features/spots/SpotsPage.test.tsx`

- [ ] **Step 1: Write the failing required-sightings test**

```tsx
it('keeps a readable demo sighting list available alongside the map', () => {
  render(<SpotsPage />)
  expect(screen.getByText(/demo data — not live sightings/i)).toBeVisible()
  expect(screen.getByRole('list', { name: /recent demo sightings/i })).toBeVisible()
  expect(screen.getByRole('button', { name: /show map/i })).toBeVisible()
})
```

- [ ] **Step 2: Verify it fails**

Run: `npm test -- src/features/spots/SpotsPage.test.tsx`

Expected: FAIL because the Spots module does not exist.

- [ ] **Step 3: Implement list-first Spots and static Trip Mode**

Render sightings as named links to related whale profiles. Keep the list visible if Leaflet tiles fail; use `StatusMessage` for a map failure. `TripModePanel` must state `Demo trip context` and contain only an illustrative departure/status/latest-sighting summary based on local fixture data. It must not offer booking, GPS, tracking, or notifications.

- [ ] **Step 4: Re-run the sightings test**

Run: `npm test -- src/features/spots/SpotsPage.test.tsx`

Expected: PASS.

- [ ] **Step 5: Commit spots**

```bash
git add src/features/spots
git commit -m "feat: add demo sightings and trip context"
```

### Task 8: Implement conservation and visual assets

**Files:**
- Create: `src/features/conservation/ConservationPage.tsx`, `public/images/hero-whale.png`, `public/images/profile-whale.png`, `public/images/reef-scene.png`, `public/credits.md`
- Modify: feature page styles and `README.md`
- Test: `src/features/conservation/ConservationPage.test.tsx`

- [ ] **Step 1: Write the failing conservation-story test**

```tsx
it('connects a single practical action to a whale and preserves a return path', () => {
  render(<ConservationPage />)
  expect(screen.getByRole('heading', { name: /help whales/i })).toBeVisible()
  expect(screen.getByText(/one small action/i)).toBeVisible()
  expect(screen.getByRole('link', { name: /meet this whale/i })).toBeVisible()
})
```

- [ ] **Step 2: Verify it fails**

Run: `npm test -- src/features/conservation/ConservationPage.test.tsx`

Expected: FAIL because the module is absent.

- [ ] **Step 3: Generate and inspect original artwork**

Use the built-in image generation tool for three separate assets. For each, inspect the output, select it, copy it into `public/images/`, and record the exact prompt in `public/credits.md`.

Use this prompt for the hero:

```text
Use case: illustration-story
Asset type: responsive educational website hero
Primary request: an original child-friendly illustration of a humpback whale gliding below a calm ocean surface, with a small boat far above
Style/medium: refined editorial digital illustration, soft paper texture, ocean-blue palette
Composition/framing: wide landscape, whale on the right, generous quiet water on the left for webpage text
Constraints: no text, no logo, no watermark, no copyrighted characters, no imitation of any living artist, scientifically plausible anatomy
```

Generate separate portrait-friendly whale-profile and square reef/sea-animal scene prompts with the same constraints. Do not use generated images to represent a real named whale or a data visualisation.

- [ ] **Step 4: Implement the original conservation feature**

Show one actionable conservation card at a time, why it matters, an explicit demo/educational disclaimer where needed, and a link to its related whale. Use the generated art only as decorative support.

- [ ] **Step 5: Re-run conservation tests and visual build**

Run: `npm test -- src/features/conservation/ConservationPage.test.tsx && npm run build`

Expected: PASS; `dist/images/` contains the three selected assets.

- [ ] **Step 6: Commit art and conservation**

```bash
git add src/features/conservation public/images public/credits.md README.md
git commit -m "feat: add conservation feature and original artwork"
```

### Task 9: Add end-to-end and accessibility checks

**Files:**
- Create: `tests/e2e/echo-whale.spec.ts`
- Modify: `playwright.config.ts`, feature markup/styles as required

- [ ] **Step 1: Write the failing mobile user-story journey**

```ts
import { expect, test } from '@playwright/test'

test('a child can complete the whale sound journey on a phone', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  await page.getByRole('link', { name: 'Ocean sounds' }).click()
  await expect(page.getByRole('heading', { name: 'Ocean sounds' })).toBeVisible()
  await expect(page.getByRole('button', { name: /play/i }).first()).toBeVisible()
})
```

- [ ] **Step 2: Verify it fails before the dev-server configuration exists**

Run: `npm run test:e2e -- --grep "child can complete"`

Expected: FAIL until Playwright `webServer` runs `npm run dev -- --host 127.0.0.1`.

- [ ] **Step 3: Add five journeys and keyboard checks**

Add one test each for Whale profile, Encyclopedia search/recovery, Spots list/map and demo notice, and Conservation action. Add a keyboard test that tabs from the skip link through visible labelled navigation and asserts the focused element has a visible focus outline.

- [ ] **Step 4: Run automated checks at both breakpoints**

Run:

```bash
npm test
npm run test:e2e
npm run build
```

Expected: all PASS.

- [ ] **Step 5: Perform visual QA and fix findings**

At 390×844 and 1440×1000, inspect all six destinations: no clipped copy, no horizontal scroll, no icon-only action, no missing image alt text, readable cards, working back links, and a usable sighting list if map tiles fail. Re-run Step 4 after every fix.

- [ ] **Step 6: Commit quality checks**

```bash
git add tests playwright.config.ts src
git commit -m "test: cover EchoWhale user journeys"
```

### Task 10: Deploy and document the project

**Files:**
- Create: `.github/workflows/deploy-pages.yml`
- Modify: `README.md`, `vite.config.ts`

- [ ] **Step 1: Add the GitHub Pages deployment workflow**

Create `.github/workflows/deploy-pages.yml` with checkout, Node 22 setup, `npm ci`, `npm run build`, `actions/upload-pages-artifact@v3` for `./dist`, and `actions/deploy-pages@v4`. Set `permissions` to `contents: read`, `pages: write`, and `id-token: write`; set `concurrency.group: pages` and `cancel-in-progress: false`.

- [ ] **Step 2: Configure static assets for a project repository**

Set Vite's `base` to `process.env.GITHUB_ACTIONS ? '/echo-whale/' : '/'`. Before publishing, replace `echo-whale` only if the actual repository name differs.

- [ ] **Step 3: Write a truthful README**

Include: original course/project attribution, five preserved functions, demo-data disclosure, Figma/prototype source links, content/art/audio credits, local commands, accessibility/testing commands, and the future GitHub Pages URL. Do not claim live sightings or external partnership.

- [ ] **Step 4: Run the production verification sequence**

Run:

```bash
npm ci
npm test
npm run test:e2e
npm run build
git status --short
```

Expected: all checks PASS; only intentional deployment/docs changes remain.

- [ ] **Step 5: Commit deployment materials and publish**

```bash
git add .github/workflows/deploy-pages.yml README.md vite.config.ts
git commit -m "ci: deploy EchoWhale to GitHub Pages"
```

Create a public GitHub repository, push `main`, enable GitHub Pages with the GitHub Actions source, wait for the workflow, then manually open the published URL on mobile and desktop.

## Plan self-review

- **Spec coverage:** Tasks 2–8 implement all five original modules; Task 9 validates each revised user story; Task 10 deploys the static app.
- **Scope protection:** no task creates accounts, live data, purchase, uploads, AI interaction, PWA installation, or gamification.
- **Integrity:** Task 2 requires `demo: true`; Task 3 renders disclosure; Task 7 prevents the map/Trip Mode from representing live tracking.
- **Quality:** every feature task starts with a failing test, requires a passing rerun, and ends with a focused commit.
