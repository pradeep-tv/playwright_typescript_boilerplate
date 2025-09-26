import { test, expect } from "@playwright/test";

test("1-FLEET0006 - Add ShipTo", { tag: "@Smoke" }, async () => {
    await test.step("Go to Fleet details page of the test fleet", async () => {
        console.log("Navigated to Fleet details page of the test fleet");
    });
});

test("2-FLEET0006 - Add ShipTo", { tag: "@CD @E2E" }, async () => {
    await test.step("Go to Fleet details page of the test fleet", async () => {
        console.log("Navigated to Fleet details page of the test fleet");
    });
});

test("3-FLEET0006 - Add ShipTo", { tag: "@E2E @VERIFICATION" }, async () => {
    await test.step("Go to Fleet details page of the test fleet", async () => {
        console.log("Navigated to Fleet details page of the test fleet");
    });
});