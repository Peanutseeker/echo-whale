import { expect, test } from '@playwright/test'

test('a visitor can follow the original whale-watch tasks', async ({ page }) => {
  await page.goto('/')

  await page.getByRole('link', { name: 'Ocean sounds', exact: true }).click()
  await expect(page.getByRole('heading', { name: 'Ocean sounds' })).toBeVisible()
  await expect(page.getByRole('button', { name: 'Play Humpback call' })).toBeVisible()

  await page.getByRole('link', { name: 'Meet a whale', exact: true }).click()
  await page.getByRole('link', { name: 'See Humpback guide' }).click()
  await expect(page.getByRole('heading', { name: 'Humpback guide' })).toBeVisible()
  await expect(page.getByRole('link', { name: '← Back to whales' })).toBeVisible()

  await page.getByRole('link', { name: 'Boston field guide', exact: true }).click()
  await expect(page.getByRole('heading', { name: 'Boston whale-watch field guide' })).toBeVisible()
  await expect(page.getByRole('link', { name: /Source: NOAA Stellwagen Bank National Marine Sanctuary/i })).toBeVisible()

  await page.getByRole('link', { name: 'Help whales', exact: true }).click()
  await expect(page.getByRole('heading', { name: 'Help whales' })).toBeVisible()
})
