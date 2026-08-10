import type { SourceReference } from './types'

const aquariumAnnouncement: SourceReference = {
  label: 'New England Aquarium 2026 whale watch announcement',
  url: 'https://www.neaq.org/about-us/press-room/press-releases/new-england-aquarium-whale-watch-bhcc-2026/',
  reviewedAt: '2026-08-09',
}

const aquariumNaturalist: SourceReference = {
  label: 'New England Aquarium naturalist Q&A',
  url: 'https://www.neaq.org/ask-a-new-england-aquarium-whale-watch-naturalist/',
  reviewedAt: '2026-08-09',
}

const stellwagen: SourceReference = {
  label: 'NOAA Stellwagen Bank National Marine Sanctuary',
  url: 'https://stellwagen.noaa.gov/',
  reviewedAt: '2026-08-09',
}

export const bostonFieldGuide = {
  reviewLabel: 'Last editorial review: 9 August 2026',
  route: {
    title: 'Boston → Stellwagen',
    detail: 'New England Aquarium whale-watch trips depart from Central Wharf and travel toward Stellwagen Bank National Marine Sanctuary, a feeding-rich area east of Boston between Cape Ann and Cape Cod.',
    source: stellwagen,
  },
  season: {
    title: 'May through November',
    detail: 'The Aquarium’s Boston whale-watch program describes daily seasonal departures from Central Wharf during this period. Departure details can change, so visitors should check the operator directly before making plans.',
    source: aquariumAnnouncement,
  },
  wildlife: {
    title: 'Animals naturalists may discuss',
    detail: 'The Aquarium lists humpback and minke whales as common, with fin whales, dolphins, porpoises and occasional sei whales also possible in the area. Wildlife is never guaranteed.',
    source: aquariumNaturalist,
  },
  observation: {
    title: 'What naturalists look for',
    detail: 'On the water, naturalists scan for a whale’s blow, body parts, feeding birds and other boats. They record species, behavior and weather on each trip for research partners.',
    source: aquariumNaturalist,
  },
  sources: [aquariumAnnouncement, aquariumNaturalist, stellwagen],
}
