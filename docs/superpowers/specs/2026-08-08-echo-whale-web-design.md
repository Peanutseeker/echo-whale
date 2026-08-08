# EchoWhale Web Experience — Design Specification

## Objective

Turn Haowen Xu's Harvard Summer School CSCI E-34 EchoWhale term project into a public, responsive web experience that demonstrates the original UX work through a polished, genuinely interactive implementation. The website must deepen the original five functions without inventing new product features.

## Source authority and decisions

| Source | Decision carried forward |
| --- | --- |
| Course assignment | Mobile app for whale-watch passengers; required individual-whale information and local sightings. |
| Project Details | Primary audience: children; secondary audience: people seeking whale-science knowledge. Selected features: sounds, marine species information, conservation spotlight. |
| User research and testing | Use clear labels, a predictable back path, large readable controls, vertical/mobile-first layouts, and do not depend on photo upload or icon-only controls. |
| Figma prototype | Preserve Sounds, Whales info, Encyclopedia, and Spots as top-level destinations; retain its marine-blue, child-friendly intent. |

Two source conflicts are resolved explicitly:

1. Conservation Spotlight appears in Project Details but not the supplied Figma home. It is restored as an original selected feature, not an addition.
2. A test note questions a map, while the assignment requires local sightings. Spots will present a readable sightings list first and the map as supporting context.

## Product boundary

### Included

- Home, Sounds, Whale profile, Encyclopedia, Spots/Trip context, and Conservation Spotlight.
- A static demonstration data set for whales, species, sightings, trip status, and conservation actions.
- Playable, licensed/public-domain whale-audio samples selected and credited during implementation.
- Responsive mobile and desktop layouts, keyboard support, readable focus states, and text support for audio.
- AI-generated original bitmap art for the site atmosphere and content illustrations, with no generated factual labels or deceptive scientific imagery.

### Explicitly excluded

- Accounts, user submissions, uploads, social features, shopping, ticket purchase, games, badges, generative-AI interaction, notifications, or PWA installation.
- Claims of real-time GPS, live sighting, current trip status, or scientific tracking. All fixture content will be visibly labelled “Demo data”.
- Copying another operator's branding, layout, images, or copy.

## Reference-site research boundary

Whale Watch Kaikōura is the implementation reference for the Spots/Trips information hierarchy: it publicly separates trip status, weather/conditions, time, and sighting context. EchoWhale may borrow the clarity of that structure, but is an independent student demo with static data; it will never mimic booking or claim to represent the operator.

## Users and design implications

| Persona | Evidence-backed need | Website implication |
| --- | --- | --- |
| Maya, 8, primary-school visitor | Wants to recognise the whale she saw, hear a whale sound, and learn without dense terminology; boat noise, motion, small type, and ambiguous controls frustrate her. | Plain-language labels, big tap areas, short story-first cards, readable type, visible play/pause controls, and no icon-only navigation. |
| Evan, 20, animal-club / pre-veterinary student | Values accurate, efficient information and has limited time; dislikes decorative clutter and misleading facts. | The same friendly card contains a concise factual scan layer: species, identifiers, recent sighting context, and source/credit links. |

## Information architecture

```text
Home
├── Sounds
├── Meet a Whale (individual whale information)
├── Sea Animals (marine-life encyclopedia)
├── Recent Spots (sightings + contextual Trip Mode)
└── Help Whales (conservation spotlight)
```

“Trip Mode” is not a sixth feature. It is a compact, pre-existing prototype state inside Recent Spots showing demo trip status, a latest-sighting summary, and a route back to the sighting list/map.

## Revised user stories and acceptance criteria

1. **Sounds** — As an imaginative child who has just seen a whale on a noisy boat, I want to play a clearly labelled whale call and read a short explanation of it so that I can connect the sound with the animal I saw.
   - Success: a named audio card plays, pauses, and exposes a concise explanation; unavailable audio shows a clear recovery message.
2. **Individual whale** — As a curious child who has heard a whale's name, I want to open a short visual profile of that individual whale so that I can remember its name, markings, and story.
   - Success: the profile makes name, identifiers, story, and return path immediately visible; no matching result offers a clear route back to browsing.
3. **Encyclopedia** — As a child waiting between sightings, I want to explore a plainly labelled marine-animal card so that I can learn something interesting without needing to understand scientific terms.
   - Success: a card opens with a plain-language description, structured facts, and a stable return path.
4. **Recent Spots** — As a whale-watch passenger deciding where to look, I want to view recent sightings with location and time in a simple list and map so that I can understand where whales have been seen.
   - Success: the list remains usable before the map loads; every item discloses that its data is a demo and opens the associated whale.
5. **Conservation Spotlight** — As a child concerned after learning about whale risks, I want to see one concrete action connected to that whale so that I can understand how people can help.
   - Success: each spotlight contains one direct action, a short reason, and a path back to the related whale/profile.

## Visual direction

- Keep the prototype's ocean-blue family and soft rounded friendliness, but replace the dense rectangular cards with a calmer hierarchy, intentional spacing, and responsive composition.
- Use 2–3 AI-generated, original raster illustrations: an atmospheric ocean/whale hero, a whale-profile illustration, and an encyclopedia texture or scene. Prompt for no text, no logos, no copyrighted characters, no imitation of a living artist, and enough empty space for UI copy.
- Retain Figma-origin navigation semantics and audit every asset's source. Use generated art as atmosphere; facts, controls, maps, and labels remain native HTML/CSS.
- Desktop adds breathing room and adjacent detail panels; it does not change the app's navigation or create desktop-only features.

## Data and integrity

- All product data lives locally in typed content modules and is marked `demo: true`.
- Sightings contain whale ID, place, date/time, coordinates, and a short confidence/status label; the UI includes “Demo data — not live sightings”.
- Trip state is descriptive only and never offers booking, tracking, or push alerts.
- Audio sources, images, and factual text receive source/credit entries in the repository README and in an in-app credits panel/footer.

## Quality gates

- Unit/component tests cover routing, story completion states, audio controls, demo-data disclosure, map/list fallback, and bounded navigation.
- Playwright tests cover the five user stories at an iPhone-sized viewport and desktop viewport.
- Keyboard-only navigation, focus visibility, color contrast, semantic headings, labelled controls, and text support for audio must pass an accessibility review.
- Manual Figma comparison confirms the retained information architecture and child-friendly visual intent while documenting deliberate improvements.
- Production build completes; deployed GitHub Pages URL is manually checked for deep-link/hash navigation, image loading, map loading failure, and mobile layout.

## Deployment

Create a public GitHub repository and deploy the static Vite build to GitHub Pages via a GitHub Actions workflow. Development is local; no Mac mini server, database, or paid service is required.
