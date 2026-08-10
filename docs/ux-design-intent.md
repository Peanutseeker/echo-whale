# EchoWhale: UX Design Intent

## Purpose

This document explains the product intent behind EchoWhale, a Harvard Summer School CSCI E-34 UX Engineering term project. It is written for portfolio readers who want to understand why the website contains these specific interactions.

The original project brief asked for a whale-watch passenger companion. Individual whale information and local sightings were required; whale sounds, marine species information, and conservation education were the selected supporting features. The web version retains that exact five-part scope.

The first web version used fictional named whales and clearly-labelled fixture sightings. This portfolio refresh keeps the same tasks and stable route IDs, but presents the whale pages as **real-species teaching guides** and replaces the fictional sightings map with a source-backed **Boston whale-watch field guide**. This is a bounded accuracy improvement, not a new product feature.

## Research context

The primary persona was a young whale-watch visitor, represented in the course work by **Maya**, age 8. She is drawn to animals and imagination, but is using a phone in a noisy, moving boat environment. Dense vocabulary, small text, and ambiguous controls make learning harder when a whale appears only briefly.

The secondary persona is a time-constrained animal-science learner who values a quick, accurate way to connect a whale name, identifying markings, and a sighting context. This role keeps the experience informative without turning it into a specialist database.

Course testing surfaced four relevant problems in the earlier prototype: icon-only navigation was unclear, returning from a detail view was difficult, a phone on a boat is not a reliable place for photo-dependent tasks, and horizontal or visually dense interactions are hard to use while moving.

## User stories and design response

The stories below restate the term project’s original goals in a clear portfolio format. They are not new product features.

### 1. Hear a whale

> As a young passenger who has just seen a whale on a noisy boat, I want to play a clearly labelled whale sound and read a short explanation so that I can connect the sound to the animal I saw.

| Design intent | Website response | Validation task |
| --- | --- | --- |
| Sound is meaningful but boat noise and unclear controls create friction. | Each sound card has a text-labelled play/pause button, a short “What you are hearing” explanation, a visible source credit, and a recovery message if audio fails. | Find and play a humpback call, then explain what the recording is like. |

### 2. Recognise a whale species

> As a curious passenger who has seen a whale surface briefly, I want to open a short species guide with recognisable body cues so that I can connect what I saw to a likely whale type.

| Design intent | Website response | Validation task |
| --- | --- | --- |
| The brief required individual whale information; the earlier prototype made it hard to orient after entering a detail view. Fictional named-individual claims would be misleading without a real identification dataset. | The “Meet a whale” directory uses teaching-profile labels, real species photos, scientific names, identification cues, visible photo credits, and an explicit “Back to whales” link. | Open the Humpback guide, name one identifying cue, and return to the whale list. |

### 3. Learn about nearby sea animals

> As a child waiting between sightings, I want to browse a plainly labelled sea-animal card so that I can learn something interesting without understanding scientific terminology first.

| Design intent | Website response | Validation task |
| --- | --- | --- |
| The project included a marine-life encyclopedia; young visitors benefit from short, friendly information rather than a text-heavy reference. | Sea-animal cards use plain-language descriptions, real photo credits and compact “Quick facts.” Search has a visible way to reset when a word has no match. | Search for an unavailable animal, recover to the full list, then open the green sea turtle facts. |

### 4. Understand local whale-watch context

> As a Boston whale-watch passenger preparing for a trip, I want to understand the route, seasonal context and observation cues so that I know what naturalists may be looking for on the water.

| Design intent | Website response | Validation task |
| --- | --- | --- |
| Local sightings were required, but no stable, public, legally reusable official sightings feed was found. A map of invented points would be less honest than a clearly sourced local guide. | The route now presents Boston → Stellwagen Bank context, May–November operating context, likely wildlife and naturalist observation cues with visible official source links and an editorial review date. | Find Central Wharf, identify the seasonal context, and name one cue naturalists use to locate whales. |

### 5. Connect learning to conservation

> As a visitor who has learned about a whale’s challenges, I want to see one concrete action I can take so that conservation feels understandable rather than abstract.

| Design intent | Website response | Validation task |
| --- | --- | --- |
| Conservation education was an original selected feature, even though it was less visible in the supplied Figma home screen. | Each whale is paired with one small, specific action and a short explanation of why it matters, with a path back to the relevant whale profile. | Choose a whale, find one action that can help, and navigate back to that whale’s story. |

## Design principles carried into the web version

- **Make the next action explicit.** Navigation and audio controls use words, not icons alone.
- **Support orientation.** Detail pages have predictable back links and related paths.
- **Design for the boat context.** Information is short, vertically arranged, readable, and does not rely on photo upload or horizontal gestures.
- **Be honest about data.** The Boston route uses static, source-linked field-guide context. It does not claim to show a current sighting or a live feed.
- **Preserve the course scope.** The site adds responsiveness, accessibility, recovery states, and polish—not new product concepts such as accounts, shopping, social features, or AI chat.
