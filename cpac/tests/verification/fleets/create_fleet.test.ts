import { test, expect } from "@playwright/test";

test.describe("Set up a fleet", { tag: "@CPAC @VERIFICATION" }, () => {
    test("Create fleet", async ({ page}) => {
        console.log("Fleet created");
    });
});

