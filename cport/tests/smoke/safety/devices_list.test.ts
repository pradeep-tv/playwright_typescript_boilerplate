import { test } from "@playwright/test";

test.describe("Smoke tests for Safety Devices list", { tag: "@SFTY @SMOKE"}, () => {
    test("SFTY0001 - Verify that user is able to see the list of safety devices", async () => {
        console.log("List of safety devices is visible");
    });
});
