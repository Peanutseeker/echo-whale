import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { EncyclopediaPage } from './EncyclopediaPage'

it('offers a recovery path when an animal search has no matches', async () => {
  const user = userEvent.setup()
  render(<MemoryRouter><EncyclopediaPage /></MemoryRouter>)

  await user.type(screen.getByLabelText('Search sea animals'), 'penguin')

  expect(screen.getByRole('heading', { name: 'No sea animal found' })).toBeVisible()
  await user.click(screen.getByRole('button', { name: 'Show all sea animals' }))
  expect(screen.getByRole('heading', { name: 'Green sea turtle' })).toBeVisible()
})
