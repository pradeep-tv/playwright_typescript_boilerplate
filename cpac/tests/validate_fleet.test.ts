import { test, expect } from "@playwright/test";

test.describe("Set up a fleet", { tag: "@E2E @SMOKE @FIELDVERIFICATION" }, () => {
    test("Create fleet", async ({ page}) => {
        console.log("Fleet created");
    });
});

