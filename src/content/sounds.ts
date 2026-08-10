import type { Sound } from './types'

export const sounds: Sound[] = [
  {
    id: 'humpback-call', whaleId: 'luna', title: 'Humpback call',
    description: 'Listen for a low moan that rises and falls. This is a public-domain recording; it is not presented as a Boston recording.',
    audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Humpback_whale_moo.ogg',
    transcript: 'A low call rises, pauses, then falls away in a soft, repeating phrase.',
    credit: 'National Park Service recording · Public domain · Wikimedia Commons.',
    source: { label: 'Wikimedia Commons: Humpback whale moo', url: 'https://commons.wikimedia.org/wiki/File:Humpback_whale_moo.ogg' },
  },
  {
    id: 'killer-whale-calls', whaleId: 'kai', title: 'Killer whale calls',
    description: 'Short, bright calls and clicks illustrate the kinds of sounds toothed whales can make underwater. This is not presented as a Boston recording.',
    audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Killer_whale.ogg',
    transcript: 'Quick, bright calls and clicks arrive in short groups, with quiet gaps between them.',
    credit: 'National Park Service recording · Public domain · Wikimedia Commons.',
    source: { label: 'Wikimedia Commons: Killer whale calls', url: 'https://commons.wikimedia.org/wiki/File:Killer_whale.ogg' },
  },
  {
    id: 'humpback-wheeze-blow', whaleId: 'luna', title: 'Humpback wheeze-blow',
    description: 'This recording includes a humpback’s rough, airy breath at the surface. It helps distinguish a blow from underwater calls.',
    audioUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Humpback_whale_wheezeblow.ogg',
    transcript: 'A short underwater sequence is followed by the rough, airy sound of a whale breathing at the surface.',
    credit: 'National Park Service recording · Public domain · Wikimedia Commons.',
    source: { label: 'Wikimedia Commons: Humpback whale wheeze-blow', url: 'https://commons.wikimedia.org/wiki/File:Humpback_whale_wheezeblow.ogg' },
  },
]
