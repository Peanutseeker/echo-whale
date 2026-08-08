import type { Whale } from './types'
import { projectAsset } from './assets'

export const whales: Whale[] = [
  {
    id: 'luna',
    name: 'Luna',
    species: 'Humpback whale',
    markings: ['A white crescent on the right tail fluke', 'A small dark notch near the fin'],
    story: 'Luna is a curious humpback who travels through our demo ocean with a calf each summer. Her tail pattern helps watchers tell her apart.',
    image: projectAsset('/images/profile-whale.png'),
  },
  {
    id: 'kai',
    name: 'Kai',
    species: 'Orca',
    markings: ['A tall dorsal fin', 'A pale saddle patch behind the fin'],
    story: 'Kai is the thoughtful explorer in this demo pod. Watch for the bright saddle patch when he surfaces beside the boat.',
    image: projectAsset('/images/profile-whale.png'),
  },
  {
    id: 'sol',
    name: 'Sol',
    species: 'Gray whale',
    markings: ['Mottled gray skin', 'A heart-shaped blow in cool air'],
    story: 'Sol follows the coast on a long migration. Her gentle, mottled appearance makes her a useful whale to learn first.',
    image: projectAsset('/images/profile-whale.png'),
  },
]

export const whaleById = (id: string) => whales.find((whale) => whale.id === id)
