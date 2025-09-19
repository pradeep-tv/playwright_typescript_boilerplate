import {test, expect} from '@playwright/test';

test.describe("Checkout Flow @PCT", async() =>{
    test.use({storageState: '.auth/authStorageState.json'})

    test.beforeEach(async({page}) =>{
        await page.goto("https://practicesoftwaretesting.com", {waitUntil: 'commit'});
    });

    test("Buy now Pay later", async({page, headless}) =>{
        await page.getByText("Claw Hammer with Shock Reduction Grip").click();
        await page.getByTestId("add-to-cart").click();
        await expect(page.getByTestId("cart-quantity")).toHaveText("1");
        await page.getByTestId("nav-cart").click();
        await page.getByTestId("proceed-1").click();
        await page.getByTestId("proceed-2").click();
        await expect(page.locator(".step-indicator").filter({hasText: "2"})).toHaveCSS("background-color", "rgb(51, 153, 51)");
        await page.getByTestId("street").fill("123 Testing Way");
        await page.getByTestId("city").fill("Sacramento");
        await page.getByTestId("state").fill("California");
        await page.getByTestId("country").fill("USA");
        await page.getByTestId("postal_code").fill("98765");
        await page.getByTestId("proceed-3").click();
        await expect(page.getByTestId("finish")).toBeDisabled();
        await page.getByTestId("payment-method").selectOption("Buy Now Pay Later");
        await page.getByTestId("monthly_installments").selectOption("6 Monthly Installments");
        await page.getByTestId("finish").click();
        await expect(page.locator(".help-block")).toHaveText("Payment was successful");
        headless ? await test.step("Visual Test", async() => {
            await expect(page).toHaveScreenshot("checkout.png",{ mask: [page.getByTitle("Practice Software Testing - Toolshop")] });
        }) : console.log("Running in Headed mode, no screenshot compared");
    });
});