import { render, screen } from '@testing-library/react'
import { ImageCredit } from './ImageCredit'
import { SourceLink } from './SourceLink'

it('makes a photo credit visible and links to its source record', () => {
  render(<ImageCredit media={{
    localPath: '/images/example.jpg',
    alt: 'Example whale image',
    creator: 'Example agency',
    license: 'Public domain',
    sourcePageUrl: 'https://commons.wikimedia.org/wiki/File:Example.jpg',
    originalFileUrl: 'https://upload.wikimedia.org/example.jpg',
  }} />)

  expect(screen.getByLabelText('Photo credit for Example whale image')).toHaveTextContent('Example agency')
  expect(screen.getByRole('link', { name: 'Photo source: Example agency, Public domain' })).toHaveAttribute('href', 'https://commons.wikimedia.org/wiki/File:Example.jpg')
})

it('marks authority links as external sources', () => {
  render(<SourceLink source={{ label: 'NOAA Fisheries', url: 'https://www.fisheries.noaa.gov/' }} />)

  expect(screen.getByRole('link', { name: 'Source: NOAA Fisheries (opens in a new tab)' })).toHaveAttribute('target', '_blank')
  expect(screen.getByRole('link')).toHaveAttribute('rel', 'noreferrer')
})
