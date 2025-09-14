import {Given, When, Then, Before, After} from "@cucumber/cucumber";
import { chromium, expect, Page, Browser } from "@playwright/test";

let page: Page;
let browser: Browser;

Before(async () =>{
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
})

After(async () =>{
    await browser.close();
});

Given('I am on the login page', async () => {
    await page.goto("https://practicesoftwaretesting.com/auth/login");
});

When('I enter valid username and password', async () => {
    await page.getByTestId("email").fill("test@example.com");
    await page.getByTestId("password").fill("pass123");
});

When('I click the login button', async () => {
    await page.getByTestId("login-submit").click();
});

Then('I should be redirected to the my-account page', async () => {
    await expect(page.getByTestId("data-test")).toContainText("My account");
});

Then('I should see a welcome message', async () => {
    await expect(page.getByTestId("nav-menu")).toContainText("Jane Doe");
});