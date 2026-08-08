import { describe, expect, it } from 'vitest'
import { sightings } from './sightings'
import { whales } from './whales'

describe('EchoWhale demo content', () => {
  it('links every sighting to an existing whale and marks it as demo data', () => {
    const whaleIds = new Set(whales.map((whale) => whale.id))

    sightings.forEach((sighting) => {
      expect(whaleIds.has(sighting.whaleId)).toBe(true)
      expect(sighting.demo).toBe(true)
    })
  })
})
