import { test, expect } from "@playwright/test"

test("capture full page screenshot", async ({ page }) => {
  
  await page.goto("https://practicesoftwaretesting.com")
  await expect(page).toHaveScreenshot("homepage-chromium-win32.png", {"fullPage": true})
})