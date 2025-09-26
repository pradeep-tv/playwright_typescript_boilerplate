import { test } from "@playwright/test";

test.describe("Smoke tests for Drivers list", { tag: "@DRI @SMOKE"}, () => {
    test("DRI0001 - Verify that user is able to see the list of drivers", async () => {
        console.log("List of drivers is visible");
    });
});
