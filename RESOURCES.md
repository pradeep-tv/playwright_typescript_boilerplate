# Resource for Project

## Practice Sites & Credentials

```text

prod
https://practicesoftwaretesting.com
username: customer@practicesoftwaretesting.com
password: welcome01

uat
BASE_URL='https://v4.practicesoftwaretesting.com/'
USERNAME=customer@practicesoftwaretesting.com
PASSWORD=welcome01

dev
BASE_URL=https://with-bugs.practicesoftwaretesting.com/
USERNAME=customer@practicesoftwaretesting.com
PASSWORD=welcome01

https://binaryville.com
username: test@example.com
password: pass123

https://opensource-demo.orangehrmlive.com/
Username : Admin
Password : admin123

```

Hydrating for the Nuxt App page load.
Even though the UI is loaded in the page, they are not yet ready for action in Nuxt App:

```TypeScript
await page.waitForFunction(
    () => window.useNuxtApp?.().isHydrating === false
);
```

## Microsoft Playwright Testing (MPT)

In Azure, subscribe to "Playwright Workspace" service.
Create resource and workspace.
Create a playwright Azure config file in your vscode.
`npm init @azure/playwright` check for correntness

refer the documentation and work on it
