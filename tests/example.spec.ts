import { test, expect } from '@playwright/test';

test.slow(); // Mark all tests in this file as slow.

test('has title', async ({ page }) => {
  // await page.goto('https://playwright.dev/');
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  // await page.goto('https://playwright.dev/');
  await page.goto('/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
