import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config({
  path: process.env.TEST_ENV
    ? `./config/environments/.env.${process.env.TEST_ENV}`
    : "./config/environments/.env.dev",
});
console.log(process.env.TEST_ENV);
console.log(process.env.BASE_URL);

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  // globalSetup: require.resolve("./utils/global-setup.ts"),
  // globalTeardown: require.resolve("./utils/global-teardown.ts"),
  // Each test is given 30 seconds.
  timeout: 30_000, // 30 seconds
  globalTimeout: 10 * 60 * 1000, // 10 minutes
  // Directory for test files
  testDir: "./tests",
  // Folder for test artifacts such as screenshots, videos, traces, etc.
  outputDir: "test-results",
  // path to the global setup files.
  // globalSetup: require.resolve('./global-setup'),
  // path to the global teardown files.
  // globalTeardown: require.resolve('./global-teardown'),
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',
  reporter: [["html", { open: "never" }], ["list"], ["github"]],
  // Glob patterns or regular expressions to ignore test files.
  // testIgnore: '*module_one',
  // Glob patterns or regular expressions that match test files.
  // testMatch: '*two/*.spec.ts',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',
    baseURL: process.env.BASE_URL || "https://practicesoftwaretesting.com",

    // The default testId for playwright is data-testid, if not we can change it here.
    testIdAttribute: "data-test",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "retain-on-failure",
    actionTimeout: 0,
    ignoreHTTPSErrors: true,
    video: "retain-on-failure",
    screenshot: "only-on-failure",
    headless: true,
    locale: "en-US", //en-US or de-DE
    viewport: null,
    // storageState: 'state.json', // Populates context with given storage state. state.json should be present in the root folder.

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    launchOptions: {
      // headless: false,
      slowMo: 50,
      args: [
        "--start-maximized",
        "--window-size=1280,1080",
        // '--window-position=3200,0',
      ],
    },
  },
  expect: {
    // Maximum time expect() should wait for the condition to be met.
    timeout: 5000,

    toHaveScreenshot: {
      // An acceptable amount of pixels that could be different, unset by default.
      maxDiffPixels: 10,
    },

    toMatchSnapshot: {
      // An acceptable ratio of pixels that are different to the
      // total amount of pixels, between 0 and 1.
      maxDiffPixelRatio: 0.1,
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "setup",
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: "chromium",
      dependencies: ["setup"],
      use: { ...devices["Desktop Chrome"], permissions: ["clipboard-read"] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
