import { test as setup, expect } from "@playwright/test";

setup("Create customer 01 auth", async ({ page, context }) => {
  const email = "customer@practicesoftwaretesting.com";
  const password = "welcome01";
  const userAuthFile = ".auth/authStorageState.json";

  await page.goto("https://practicesoftwaretesting.com/auth/login");

  await page.getByTestId("email").fill(email);
  await page.getByTestId("password").fill(password);
  await page.getByTestId("login-submit").click();

  await expect(page.getByTestId("nav-menu")).toContainText("Jane Doe");
  await context.storageState({ path: userAuthFile });
});