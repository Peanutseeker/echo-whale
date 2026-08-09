# EchoWhale Authentic Content & Editorial Design Specification

## Objective

Refine the public EchoWhale portfolio site so it presents the original Harvard Summer School CSCI E-34 UX Engineering project with authentic marine imagery, more specific and source-aware content, and a deliberately editorial visual system. The site remains a course-scope whale-watch companion—not a live tracking, booking, or social product.

## Confirmed decisions

- The README speaks in first person: “my Harvard Summer School … term project,” not “Haowen Xu’s.”
- Visual direction: **Editorial field guide**—large real wildlife photography, short story-led reading, and clean factual detail.
- All production imagery must be locally stored, provenance-recorded, and either public-domain or used under an explicit compatible license. Google image search may help discover candidates but is never a license or a download source.
- The Boston reference area is the New England Aquarium × Boston Harbor City Cruises route to Stellwagen Bank National Marine Sanctuary.
- Real-time sightings are allowed only with a stable, public, legally usable official data feed. No such feed was found on the official Aquarium / City Cruises public pages during this review. The initial implementation therefore uses the non-real-time fallback below.

## Scope preservation

The five original functions remain: sounds, whale profiles, marine-life encyclopedia, local-sightings context, and conservation education. No accounts, tickets, booking, uploads, GPS tracking, crowd reports, social sharing, AI assistant, or new game mechanics are introduced.

The old fictional names (Luna, Kai, Sol) will become **teaching-profile labels for real species**, not claims about live, named animals. This keeps the term-project’s individual-profile interaction and route structure while avoiding false identification claims.

## Content and image model

### Images

Each primary profile receives a distinct, real photo:

| Profile | Real subject | Required asset treatment |
| --- | --- | --- |
| Humpback guide | Humpback whale, preferably fluke or surface behavior | Hero / sound card crop and profile crop from the same credited original where useful. |
| Orca guide | Killer whale | Distinct dorsal-fin / eye-patch photo; no relabelled humpback image. |
| Gray whale guide | Gray whale | Distinct mottled body / head / surface image. |
| Sea turtle, octopus, clownfish | Corresponding real animal | Separate photo per animal, crop-safe at card and detail sizes. |

Every image entry stores `alt`, creator/agency, license, source-page URL, original-file URL, and a local filename. A `CREDITS.md` page in the repository records the complete attribution. Photos are used at native or modestly resized resolution; no generative detail insertion or “super-resolution” is permitted. Cropping, compression, and responsive variants are acceptable.

### Specific content

- Species pages use only short, checkable claims and link to an authoritative source page.
- The sounds page explains what a listener may hear, identifies the recording source, and visually connects each recording to the correct species.
- Boston context names Boston’s Central Wharf departure route, Stellwagen Bank National Marine Sanctuary, seasonality, and likely species as time-bounded field-guide information rather than live claims.
- Conservation cards name a concrete, species-relevant action and cite an authoritative conservation source.

## Data-source strategy

### Source assessment

New England Aquarium states that naturalists log species, behaviors, and weather on every outing; it does not publish a stable public sightings feed on the reviewed public pages. City Cruises exposes booking and schedule information, but not a documented sightings API. Therefore the site must not scrape HTML, invent recency, or label anything “live.”

### Initial fallback: Boston field guide

Replace the fabricated `Recent Spots` fixture with a clearly framed **Boston field guide**:

- geographic context: Boston → Stellwagen Bank;
- operational season and departure context from the Aquarium / City Cruises;
- likely animals and observation cues from official Aquarium guidance;
- a visible source link and `Last editorial review` date;
- no fake coordinates, no current timestamps, no “recently spotted” phrasing, and no dynamic map pins.

The existing map interaction is removed if it can no longer be backed by real data; the page’s required local-sightings intent is instead fulfilled through a transparent, source-linked local whale-watch context.

### Future sync gate

Implement a scheduled GitHub Actions sync only if all four are true:

1. The operator or Aquarium publishes a stable machine-readable endpoint or an explicitly permitted report feed.
2. Terms permit automated retrieval and public display.
3. The feed includes timestamp, geographic context, species/individual information, and a clear source URL.
4. Data freshness and failure states can be exposed honestly in the UI.

If a source later qualifies, a serverless-free scheduled workflow may fetch it into a versioned static JSON snapshot. Until then, no synchronization code is shipped.

## Editorial interface system

### Typography

- Use one expressive, open-licensed serif display face for short headings (e.g., DM Serif Display) and one highly legible, open-licensed sans serif for UI and body copy (e.g., Manrope).
- Self-host only the font files and weights actually used. Maintain system-font fallbacks and avoid loading third-party font scripts at runtime.
- Use a clear scale: small metadata, 16–18px body text, 28–40px section headers, and an oversized but restrained home title. Body lines should stay narrow enough for easy reading.

### Layout and color

- A real photo occupies the majority of the first view on the home and profile pages; copy rests on a distinct, high-contrast panel rather than over busy imagery.
- Content cards are flatter and less toy-like: consistent radius, light rules, generous vertical rhythm, and fewer decorative bubbles.
- Deep ink blue, seafoam, and warm sand remain; coral becomes a sparse signal color for actions and notices.
- On desktop, use an editorial two-column composition for profile details. On mobile, retain a single vertical reading path and the current text-labelled navigation.

### Accessibility and resilience

- All photos have descriptive alt text; decorative photos use empty alt text only when surrounding text conveys the same information.
- Text, controls, source links, keyboard focus, and audio transcripts remain native HTML.
- Image failures show a plain fallback background and preserve textual page content.
- The data-source label is visually distinct and never relies on color alone.

## Validation

1. Verify each downloaded asset’s source page, license statement, creator/agency, and direct file URL before it enters `public/images`.
2. Check that no two primary whale profiles share the same image file.
3. Compare desktop and 390px mobile pages for reading order, image crop, focus visibility, navigation, and contrast.
4. Run unit tests, end-to-end user-story test, production build, and GitHub Pages deployment check.
5. Confirm the deployed site never uses “live,” “recent,” or an implied current timestamp for non-synchronized Boston information.
