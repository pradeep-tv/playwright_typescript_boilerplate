import { test as setup, expect } from "@playwright/test";

setup.use({ actionTimeout: 20 * 1000 });
setup("Login in CPAC", { tag: ["@E2E", "@CPAC","@precondition"] }, async ({ browser }) => {
    console.log(`Running setup for CPAC tests...`);
});
