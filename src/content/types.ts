export type SourceReference = {
  label: string
  url: string
  reviewedAt?: string
}

export type MediaAsset = {
  localPath: string
  alt: string
  creator: string
  license: string
  sourcePageUrl: string
  originalFileUrl: string
}

export type Whale = {
  id: string
  guideLabel: string
  species: string
  scientificName: string
  identificationCues: string[]
  introduction: string
  image: MediaAsset
  source: SourceReference
}

export type Sound = {
  id: string
  whaleId: string
  title: string
  description: string
  audioUrl: string
  transcript: string
  credit: string
  source: SourceReference
}

export type Species = {
  id: string
  name: string
  scientificName: string
  plainDescription: string
  facts: Array<{ label: string; value: string }>
  image: MediaAsset
  source: SourceReference
}

export type ConservationSpotlight = {
  id: string
  whaleId: string
  issue: string
  action: string
  reason: string
  source: SourceReference
}
