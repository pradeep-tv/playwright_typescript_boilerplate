import { test, expect } from "@playwright/test";

test.describe("Database Setups", { tag: ["@PRECONDITION"] }, () => {
    test("Setup all required data in database", async () => {
        console.log("Starting database setup...");
    });
});
