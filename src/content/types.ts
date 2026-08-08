export type Whale = {
  id: string
  name: string
  species: string
  markings: string[]
  story: string
  image: string
}

export type Sighting = {
  id: string
  whaleId: string
  place: string
  observedAt: string
  latitude: number
  longitude: number
  status: string
  demo: true
}

export type Sound = {
  id: string
  whaleId: string
  title: string
  description: string
  audioUrl: string
  transcript: string
  credit: string
}

export type Species = {
  id: string
  name: string
  plainDescription: string
  facts: Array<{ label: string; value: string }>
  image: string
}

export type ConservationSpotlight = {
  id: string
  whaleId: string
  issue: string
  action: string
  reason: string
}
