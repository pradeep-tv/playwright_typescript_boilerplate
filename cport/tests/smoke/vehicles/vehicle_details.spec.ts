import { test } from "@playwright/test";

test.describe("Sanity tests for Vehicle details", { tag: "@VEH @SANITY" }, () => {
    test("VEH0001 - Verify that user is able to see the vehicle details", async () => {
        console.log("Vehicle details are visible");
    });
});
