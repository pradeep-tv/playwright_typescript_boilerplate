import {test, expect} from '@playwright/test';

test.describe("Checkout Flow", async() =>{
    test.use({storageState: '.auth/authStorageState.json'})

    test.beforeEach(async({page}) =>{
        await page.goto("/", {waitUntil: 'commit'});
    });

    test("Buy now Pay later", {tag: ['@Smoke','@SRC']}, async({page, headless}) =>{
        await page.locator('#vue-header').getByRole('link', { name: 'Shop', exact: true }).click();
        await page.getByRole('link', { name: 'Photo of It’s All 0’s and 1’s to Me! Apron, black It’s All 0’s and 1’s to Me!' }).click();
        await page.getByRole('button', { name: 'Add to cart' }).click();
        await page.getByRole('link', { name: 'Shopping Cart' }).click();
        await page.getByRole('button', { name: 'Checkout' }).click();
        await expect(page.getByRole('button', { name: 'Place Order' })).toBeVisible();

        // await page.getByText("Claw Hammer with Shock Reduction Grip").click();
        // await page.getByTestId("add-to-cart").click();
        // await expect(page.getByTestId("cart-quantity")).toHaveText("1");
        // await page.getByTestId("nav-cart").click();
        // await page.getByTestId("proceed-1").click();
        // await page.getByTestId("proceed-2").click();
        // await expect(page.locator(".step-indicator").filter({hasText: "2"})).toHaveCSS("background-color", "rgb(51, 153, 51)");
        // await page.getByTestId("street").fill("123 Testing Way");
        // await page.getByTestId("city").fill("Sacramento");
        // await page.getByTestId("state").fill("California");
        // await page.getByTestId("country").fill("USA");
        // await page.getByTestId("postal_code").fill("98765");
        // await page.getByTestId("proceed-3").click();
        // await expect(page.getByTestId("finish")).toBeDisabled();
        // await page.getByTestId("payment-method").selectOption("Buy Now Pay Later");
        // await page.getByTestId("monthly_installments").selectOption("6 Monthly Installments");
        // await page.getByTestId("finish").click();
        // await expect(page.locator(".help-block")).toHaveText("Payment was successful");
        // headless ? await test.step("Visual Test", async() => {
        //     await expect(page).toHaveScreenshot("checkout.png",{ mask: [page.getByTitle("Practice Software Testing - Toolshop")] });
        // }) : console.log("Running in Headed mode, no screenshot compared");
    });
});