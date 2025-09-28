import { test, expect } from "@playwright/test";

test.describe("Ensure all the services are reachable", { tag: ["@SMOKE", "@PRECONDITION"] }, () => {
    test("Request all the Ping endpoints", async ({page}) => {
        console.log("Pinging all the services...");
    });
});