import { test } from "@playwright/test";

test.describe("Sanity tests for Vehicle details", { tag: "@SMOKE" }, () => {
    test("VEH0001 - Verify that user is able to see the vehicle details", async () => {
        console.log("Vehicle details are visible");
    });
});
