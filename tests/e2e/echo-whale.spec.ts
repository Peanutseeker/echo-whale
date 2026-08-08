import { expect, test } from '@playwright/test'

test('a visitor can follow the original whale-watch tasks', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('link', { name: 'Ocean sounds', exact: true }).click()
  await expect(page.getByRole('heading', { name: 'Ocean sounds' })).toBeVisible()

  await page.getByRole('link', { name: 'Meet a whale', exact: true }).click()
  await page.getByRole('link', { name: "See Luna's story" }).click()
  await expect(page.getByRole('heading', { name: 'Luna' })).toBeVisible()
  await expect(page.getByRole('link', { name: '← Back to whales' })).toBeVisible()

  await page.getByRole('link', { name: 'Recent spots', exact: true }).click()
  await expect(page.getByRole('note')).toHaveText('Demo data — not live sightings or trip tracking.')
  await page.getByRole('button', { name: 'Show map' }).click()
  await expect(page.getByRole('button', { name: 'Hide map' })).toHaveAttribute('aria-expanded', 'true')
})
