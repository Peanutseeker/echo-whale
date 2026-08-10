import type { MediaAsset } from './types'

export const media = {
  humpback: {
    localPath: '/images/humpback-whale-underwater.jpg',
    alt: 'A humpback whale swimming beneath the surface in clear blue water.',
    creator: 'National Marine Sanctuaries',
    license: 'Public domain',
    sourcePageUrl: 'https://commons.wikimedia.org/wiki/File:Humpback_Whale_Underwater_(37209287981).jpg',
    originalFileUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Humpback_Whale_Underwater_%2837209287981%29.jpg',
  },
  orca: {
    localPath: '/images/killer-whale-alaska.jpg',
    alt: 'A killer whale surfaces in Alaska with its tall dorsal fin and white eye patch visible.',
    creator: 'U.S. Forest Service',
    license: 'Public domain',
    sourcePageUrl: 'https://commons.wikimedia.org/wiki/File:Killer_whale_in_Alaska.jpg',
    originalFileUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Killer_whale_in_Alaska.jpg',
  },
  grayWhale: {
    localPath: '/images/gray-whale.jpg',
    alt: 'A gray whale at the ocean surface, showing mottled gray skin.',
    creator: "NOAA's Ark / Animals Collection",
    license: 'Public domain',
    sourcePageUrl: 'https://commons.wikimedia.org/wiki/File:Gray_whale.jpg',
    originalFileUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Gray_whale.jpg',
  },
  greenTurtle: {
    localPath: '/images/green-sea-turtle.jpg',
    alt: 'A green sea turtle swimming underwater with its patterned shell and flippers visible.',
    creator: 'David Vogel, U.S. Fish and Wildlife Service',
    license: 'Public domain',
    sourcePageUrl: 'https://commons.wikimedia.org/wiki/File:Green-sea-turtle.jpg',
    originalFileUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Green-sea-turtle.jpg',
  },
  commonOctopus: {
    localPath: '/images/common-octopus.jpg',
    alt: 'A common octopus resting on the seafloor with its arms spread around its body.',
    creator: 'Jouni Kuisma / DiveCodex',
    license: 'CC BY-SA 4.0',
    sourcePageUrl: 'https://commons.wikimedia.org/wiki/File:Common_octopus_(Octopus_vulgaris),_Pedra_de_Deu,_Medes_Islands,_Spain.jpg',
    originalFileUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Common_octopus_%28Octopus_vulgaris%29%2C_Pedra_de_Deu%2C_Medes_Islands%2C_Spain.jpg',
  },
  commonClownfish: {
    localPath: '/images/common-clownfish.jpg',
    alt: 'A bright orange common clownfish with white bands swimming near an anemone.',
    creator: 'Jan Derk',
    license: 'Public domain',
    sourcePageUrl: 'https://commons.wikimedia.org/wiki/File:Common_clownfish.jpg',
    originalFileUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Common_clownfish.jpg',
  },
} satisfies Record<string, MediaAsset>

export const allMedia = Object.values(media)
