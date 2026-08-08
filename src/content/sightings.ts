import type { Sighting } from './types'

export const sightings: Sighting[] = [
  { id: 'sighting-luna', whaleId: 'luna', place: 'Bluewater Point', observedAt: 'Today · 10:20 AM', latitude: 42.36, longitude: -70.97, status: 'Swimming slowly north', demo: true },
  { id: 'sighting-kai', whaleId: 'kai', place: 'Harbor Light', observedAt: 'Today · 9:45 AM', latitude: 42.31, longitude: -70.91, status: 'Travelling with a small pod', demo: true },
  { id: 'sighting-sol', whaleId: 'sol', place: 'Seagrass Bay', observedAt: 'Yesterday · 4:10 PM', latitude: 42.28, longitude: -70.88, status: 'Resting near the coast', demo: true },
]
