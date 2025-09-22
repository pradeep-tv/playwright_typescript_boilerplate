import { test, expect } from "@playwright/test";
import loginData from "./../..//test-data/loginData.json";
import { log } from "console";

test.describe("Login Tests",{tag: ['@Smoke', '@CPAC']}, async () => {
  loginData.forEach(({ email, password }) => {
    test(`Login Test with email: ${email} and password: ${password} @data`, async ({
      page,
    }) => {
      await page.goto("/account/");
      await page.getByRole("textbox", { name: "Email" }).fill(email);
      await page.getByRole("textbox", { name: "Password" }).fill(password);
      await page.getByRole("button", { name: "Sign In" }).click();
      await expect(page).toHaveURL(new RegExp(password));
    });
  });

  // test('Invalid Login @data', async ({ page }) => {
  //     await page.goto('https://example.com/login');
  //     await page.fill('input[name="username"]', 'invaliduser');
  //     await page.fill('input[name="password"]', 'wrongpassword');
  //     await page.click('button[type="submit"]');
  //     await expect(page.locator('.error-message')).toHaveText('Invalid username or password.');
  // });

  // test('Empty Credentials @data', async ({ page }) => {
  //     await page.goto('https://example.com/login');
  //     await page.click('button[type="submit"]');
  //     await expect(page.locator('.error-message')).toHaveText('Username and password are required.');
  // });
});
