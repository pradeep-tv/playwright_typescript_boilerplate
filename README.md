# playwright_typescript_boilerplate

Playwright, Typescript boilerplate project structure

## If starting new by cloning this repository

`npm install`

## How to install playwright

```shell
npm init playwright@latest
npm install -D @playwright/test@latest
```

### To install Playwright MCP server

`npm install @playwright/mcp`

### To install the playwright browsers

`npx playwright install --with-deps`

### Check version

`npx playwright --version`

### Inside that directory, you can run several commands

```shell
npx playwright test
    # Runs the end-to-end tests.

npx playwright test --ui
    # Starts the interactive UI mode.

npx playwright test --project=chromium
    # Runs the tests only on Desktop Chrome.

npx playwright test example
    # Runs the tests in a specific file.

npx playwright test --debug
    # Runs the tests in debug mode.

PWDEBUG=1 node index.js
    # Debug scripts

npx playwright codegen www.google.com
    # Auto generate tests with Codegen

npx playwright show-report
    # To open last HTML report run

$env:TEST_ENV="uat"; npx playwright test
    # set environment variable in powershell
set TEST_ENV=uat
    # set environment variable in cmd
TEST_ENV=uat npx playwright test
    # set environment variable in bash


```

## Packages installed

`npm install dotenv@latest --save-dev`
`npm install --save-dev @cucumber/cucumber ts-node`

## Solutions for Flaky Tests

- Use api mocking to eliminate data flow issues
- When searching for title don't use regex. It will take lot of time. Instead give exact text for search.

```TypeScript
await expect(page).toHaveTitle(/Playwright/); // Avoid
await expect(page).toHaveTitle("Playwright"); // Use
```

### Run tests mulitple times repeatedly to check if any failures occur

`npx playwright test --grep "has title" --repeat-each=50`

## Refernce Materials

`https://medium.com/@kbalaji.kks/how-to-use-playwright-for-advanced-network-interception-6e83fdcb5360`

`https://github.com/balajiregt/playwright_pom_fixtures_modular_framework_template`

`https://www.youtube.com/watch?v=aLoI027j1XE&list=PLqrYEOtrhk78vuKdBQCHICIc0DUDL22yp&index=2`

`https://www.youtube.com/@ChecklyHQ/videos
https://www.youtube.com/@CommitQuality/videos`

LinkedIn - Qambar Raza - Advanced Playwright Techniques: Optimizing Speed, Stability, and Cloud Testing

`https://www.linkedin.com/learning/certificates/f0de95066a460d8b5bc0f7b5558c9dd80793053ec1132c11270a5aa6b28bc9d4?trk=share_certificate`
