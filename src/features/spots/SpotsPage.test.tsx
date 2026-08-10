import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { SpotsPage } from './SpotsPage'

it('shows Boston whale-watch context without presenting it as live sightings', () => {
  render(<MemoryRouter><SpotsPage /></MemoryRouter>)

  expect(screen.getByRole('heading', { name: 'Boston whale-watch field guide' })).toBeVisible()
  expect(screen.getAllByText(/Central Wharf/)).toHaveLength(2)
  expect(screen.getByText(/travel toward Stellwagen Bank National Marine Sanctuary/)).toBeVisible()
  expect(screen.getByText('May through November')).toBeVisible()
  expect(screen.getByRole('link', { name: /Source: New England Aquarium 2026 whale watch announcement/i })).toBeVisible()
  expect(screen.getByRole('link', { name: /Source: NOAA Stellwagen Bank National Marine Sanctuary/i })).toBeVisible()
  expect(screen.queryByRole('button', { name: /map/i })).not.toBeInTheDocument()
  expect(screen.queryByText(/recent|latest|today|yesterday|demo|live/i)).not.toBeInTheDocument()
})
