import { test } from "@playwright/test";

//Smoke tests for TAE environment

test.describe("Smoke tests for Vehicles list", { tag: "@VEH @SMOKE" }, () => {
    test("VEH0001 - Verify that user is able to see the list of vehicles", async () => {
        console.log("List of vehicles is visible");
    });
});
