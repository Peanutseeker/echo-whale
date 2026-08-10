import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { allMedia } from './media'
import { sounds } from './sounds'
import { species } from './species'
import { whales } from './whales'

describe('EchoWhale field-guide content', () => {
  it('keeps a different, documented local image for every whale guide', () => {
    expect(new Set(whales.map((whale) => whale.image.localPath)).size).toBe(whales.length)
    whales.forEach((whale) => expect(whale.guideLabel).toMatch(/guide/i))
  })

  it('attaches a source to the factual species and sound guides', () => {
    ;[...species, ...sounds].forEach((entry) => {
      expect(entry.source.label).not.toHaveLength(0)
      expect(entry.source.url).toMatch(/^https:\/\//)
    })
  })

  it('documents every local image with accessible attribution metadata', () => {
    allMedia.forEach((media) => {
      expect(media.localPath).toMatch(/^\/images\/.+\.(jpg|jpeg|png)$/)
      expect(media.alt).not.toHaveLength(0)
      expect(media.creator).not.toHaveLength(0)
      expect(media.license).not.toHaveLength(0)
      expect(media.sourcePageUrl).toMatch(/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/)
      expect(media.originalFileUrl).toMatch(/^https:\/\/upload\.wikimedia\.org\//)
      expect(existsSync(resolve(process.cwd(), `public${media.localPath}`))).toBe(true)
    })
  })

  it('does not present fictional whale names or fake live-sighting language', () => {
    const visibleText = whales.map((whale) => [
      whale.guideLabel,
      whale.species,
      whale.scientificName,
      whale.introduction,
      ...whale.identificationCues,
    ].join(' ')).join(' ')
    expect(visibleText).not.toMatch(/Luna|Kai|Sol|recent spot|demo sighting|real-time/i)
  })
})
