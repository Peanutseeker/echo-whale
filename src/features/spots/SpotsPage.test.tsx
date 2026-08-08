import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { SpotsPage } from './SpotsPage'

it('labels local sightings as demo data and keeps the list ahead of the map', () => {
  render(<MemoryRouter><SpotsPage /></MemoryRouter>)

  expect(screen.getByRole('note')).toHaveTextContent('Demo data — not live sightings or trip tracking.')
  expect(screen.getByRole('list', { name: 'Recent demo sightings' })).toBeVisible()
  expect(screen.getByRole('button', { name: 'Show map' })).toHaveAttribute('aria-expanded', 'false')
})
