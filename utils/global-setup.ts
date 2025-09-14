import dotenv from "dotenv";
import path from "path";

async function globalSetup() {
  try {
    console.log(process.env.ENV);
    if (process.env.ENV) {
      dotenv.config({
        path: path.resolve(__dirname, "/config/environments/.env.${process.env.ENV}"),
        override: true,
      });
    }
  } catch (error) {
    console.error("Error in loading environment variables", error);
  }
}
export default globalSetup;

// import {chromium, Fullconfig} from '@playwright/test';

// async function globalSetup(config: Fullconfig) {
//     // Create auth file for user
//     const userAuthFile = ".auth/authStorageState.json";
//     const browser = await chromium.launch();
//     const context = await browser.newContext();
//     const page = await context.newPage();

//     await page.goto("https://practicesoftwaretesting.com/auth/login");
//     await page.getByTestId("email").fill("asdad");
//     await page.getByTestId("password").fill("asdasd");
//     await page.getByTestId("login-submit").click();

//     await page.context().storageState({path: userAuthFile});

//     await browser.close();
// }
// export default globalSetup;