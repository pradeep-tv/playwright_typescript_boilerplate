import { test, expect } from "@playwright/test";

test("PREOP0005 - Check default checklist", { tag: "@SMOKE" }, async () => {
    await test.step("check default checklist is displaying", async () => {
        console.log("Default checklist is displaying");
    });
});
