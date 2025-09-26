import { test } from "@playwright/test";

test.describe("Database Cleanups", {tag: ["@PRECONDITION"]}, () => {
    test("Cleanup all test data from database", async () => {
        console.log("Starting database cleanup...");
    });
});