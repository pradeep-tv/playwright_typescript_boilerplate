import { test as setup, expect } from "@playwright/test";
import dotenv from "dotenv";
// Load environment variables
dotenv.config();

setup.use({ actionTimeout: 20 * 1000, locale: "en-US" });
setup("Login in CPORT", { tag: "@precondition" }, async ({ page }) => {
    console.log(`Running setup for CPORT tests...`);
});
