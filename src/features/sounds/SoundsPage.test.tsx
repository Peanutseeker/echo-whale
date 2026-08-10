import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { SoundsPage } from './SoundsPage'

it('gives every recording a clearly named control, correct whale image, and source', () => {
  render(<MemoryRouter><SoundsPage /></MemoryRouter>)

  expect(screen.getByRole('button', { name: 'Play Humpback call' })).toBeVisible()
  expect(screen.getAllByRole('img', { name: 'A humpback whale swimming beneath the surface in clear blue water.' })).toHaveLength(2)
  expect(screen.getByRole('link', { name: /Source: Wikimedia Commons: Humpback whale moo/i })).toBeVisible()
  expect(screen.getAllByText('What you are hearing')).toHaveLength(3)
})
