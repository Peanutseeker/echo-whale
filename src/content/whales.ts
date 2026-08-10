import type { Whale } from './types'
import { media } from './media'

export const whales: Whale[] = [
  {
    id: 'luna',
    guideLabel: 'Humpback guide',
    species: 'Humpback whale',
    scientificName: 'Megaptera novaeangliae',
    identificationCues: ['Long, pale-edged pectoral fins', 'A small dorsal fin set on a rounded hump', 'A broad tail fluke that may lift clear of the water'],
    introduction: 'Use this teaching profile to notice the long flippers and broad flukes that make humpbacks especially recognisable from a whale-watch boat.',
    image: media.humpback,
    source: { label: 'NOAA Fisheries: Humpback whale', url: 'https://www.fisheries.noaa.gov/species/humpback-whale' },
  },
  {
    id: 'kai',
    guideLabel: 'Orca guide',
    species: 'Orca',
    scientificName: 'Orcinus orca',
    identificationCues: ['A bold white patch near the eye', 'A tall dorsal fin', 'A gray saddle patch behind the fin'],
    introduction: 'Use this teaching profile to connect an orca’s black-and-white pattern with the body parts a naturalist may point out from a boat.',
    image: media.orca,
    source: { label: 'NOAA Fisheries: Killer whale', url: 'https://www.fisheries.noaa.gov/species/killer-whale' },
  },
  {
    id: 'sol',
    guideLabel: 'Gray whale guide',
    species: 'Gray whale',
    scientificName: 'Eschrichtius robustus',
    identificationCues: ['Mottled gray skin often marked with barnacles and whale lice', 'No dorsal fin; a low ridge runs toward the tail', 'A heart-shaped blow may be visible in cool air'],
    introduction: 'Use this teaching profile to spot the gray whale’s mottled surface pattern and low back profile without treating it as a named, tracked individual.',
    image: media.grayWhale,
    source: { label: 'NOAA Fisheries: Gray whale', url: 'https://www.fisheries.noaa.gov/species/gray-whale' },
  },
]

export const whaleById = (id: string) => whales.find((whale) => whale.id === id)
