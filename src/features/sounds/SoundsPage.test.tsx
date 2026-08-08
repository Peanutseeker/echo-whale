import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { SoundsPage } from './SoundsPage'

it('gives every whale sound a clearly named playback control and listening guide', () => {
  render(<MemoryRouter><SoundsPage /></MemoryRouter>)

  expect(screen.getByRole('button', { name: "Play Luna's humpback call" })).toBeVisible()
  expect(screen.getAllByText('What you are hearing')).toHaveLength(3)
})
