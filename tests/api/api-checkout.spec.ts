import {test, expect} from '@playwright/test';

test.describe("Checkout API flow", async() =>{
    test("GET /products/{id}", async({request})=>{
        const apiUrl = "https://api.practicesoftwaretesting.com";
        const getProductResponse = await request.get(`${apiUrl}/products/search?q=thor%20hammer`);
        expect(getProductResponse.status()).toBe(200);
        const productBody = await getProductResponse.json();
        console.log(productBody);
        const productId = productBody.data[0].id;
        
        const reponse = await request.get(`${apiUrl}/products/${productId}`);
        expect(reponse.status()).toBe(200);
        const body = await reponse.json();
        console.log(body);
        expect(body.in_stock).toBe(true);
        expect(body.is_location_offer).toBe(false);
        expect(body.is_rental).toBe(false);
        expect(body.name).toBe("Thor Hammer");
        expect(body.price).toBe(11.14);
    });
});