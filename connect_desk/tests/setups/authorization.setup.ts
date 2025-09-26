import { test as setup } from "@playwright/test";

setup("Authorization Setup", { tag: ["@Precondition", "@CD"] }, async () => {
    console.log("Authorization setup completed.");
});