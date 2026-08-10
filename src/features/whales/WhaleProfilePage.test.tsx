import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { WhaleProfilePage } from './WhaleProfilePage'

it('supports a real-species teaching guide with an explicit return path', () => {
  render(<MemoryRouter initialEntries={['/whales/luna']}><Routes><Route path="/whales/:whaleId" element={<WhaleProfilePage />} /></Routes></MemoryRouter>)

  expect(screen.getByRole('heading', { name: 'Humpback guide' })).toBeVisible()
  expect(screen.getByText('Megaptera novaeangliae')).toBeVisible()
  expect(screen.getByRole('link', { name: '← Back to whales' })).toBeVisible()
  expect(screen.getByRole('heading', { name: 'How to recognise a humpback whale' })).toBeVisible()
  expect(screen.getByRole('link', { name: /Photo source: National Marine Sanctuaries, Public domain/i })).toBeVisible()
  expect(screen.getByRole('link', { name: /Source: NOAA Fisheries: Humpback whale/i })).toBeVisible()
})
