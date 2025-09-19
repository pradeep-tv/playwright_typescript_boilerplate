import { test as setup, expect } from "@playwright/test";

setup("Authenticate @Smoke", async ({ page, context }) => {
  // const email = "customer@practicesoftwaretesting.com";
  // const password = "welcome01";
  const userAuthFile = ".auth/authStorageState.json";

  // if (process.env.TEST_ENV === "prod") {
  //   await page.goto("/auth/login");
  // } else {
  //   await page.goto("/#/auth/login");
  // }

  // await page.getByTestId("email").fill(email);
  // await page.getByTestId("password").fill(password);
  // await page.getByTestId("login-submit").click();

  // await expect(page.getByTestId("nav-menu")).toContainText("Jane Doe");

  if(process.env.TEST_ENV === "prod"){
    await page.goto("/");
    await page.getByRole('link', { name: 'Account' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill(process.env.USER_NAME ?? "");
    await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD ?? "");
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page).toHaveURL("https://binaryville.com/account/?email=test%40test.com&password=test#");
  }else if(process.env.TEST_ENV === "uat"){
    await page.goto("/");
    await page.getByRole('link', { name: 'Account' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill(process.env.USER_NAME ?? "");
    await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD ?? "");
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page).toHaveURL("https://binaryville.com/account/?email=uat%40test.com&password=uattest#");
  }else if(process.env.TEST_ENV === "dev"){
    await page.goto("/");
    await page.getByTestId("username").fill(process.env.USER_NAME ?? "");
    await page.getByTestId("password").fill(process.env.PASSWORD ?? "");
    await page.getByTestId("login-button").click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  }
  
  const storageState = await page.context().storageState();
  if (storageState.cookies.length > 0) {
    console.log("Context storage state has content.");
    await context.storageState({ path: userAuthFile });
  } else {
    console.log("Context storage state is empty.");
  }
  // await context.storageState({ path: userAuthFile });
});
