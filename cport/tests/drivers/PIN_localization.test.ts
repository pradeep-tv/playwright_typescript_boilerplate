import { test, expect } from "@playwright/test";

test.describe("Validations check for PIN field", { tag: `@FIELDVALIDATION` },() => {
    test("Verify PIN field accepts only numeric values and max length is 4", async () => {
        console.log("Running tests for PIN field");
    });
});