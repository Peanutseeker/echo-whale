import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { WhaleProfilePage } from './WhaleProfilePage'

it('supports a named whale story with an explicit return path', () => {
  render(<MemoryRouter initialEntries={['/whales/luna']}><Routes><Route path="/whales/:whaleId" element={<WhaleProfilePage />} /></Routes></MemoryRouter>)

  expect(screen.getByRole('heading', { name: 'Luna' })).toBeVisible()
  expect(screen.getByRole('link', { name: '← Back to whales' })).toBeVisible()
  expect(screen.getByRole('heading', { name: 'How to recognise Luna' })).toBeVisible()
})
