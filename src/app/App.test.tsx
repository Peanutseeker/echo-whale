import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

it('uses text-labelled navigation to reach original modules', async () => {
  const user = userEvent.setup()
  render(<App />)

  await user.click(screen.getByRole('link', { name: 'Ocean sounds' }))

  expect(screen.getByRole('heading', { name: 'Ocean sounds' })).toBeVisible()
})
