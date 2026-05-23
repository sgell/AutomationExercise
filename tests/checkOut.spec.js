const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pages/LoginPage')
const {ProductsPage} = require('../pages/ProductsPage');
const {CartPage} = require('../pages/CartPage');

let loginPage
let productsPage;
let cartPage;

test.beforeEach(async ({page}) => {
    productsPage = new ProductsPage(page);
        cartPage = new CartPage(page);
        loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.acceptCookies();
        await loginPage.login('test@vest.com', '123456');

    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    loginPage = new LoginPage(page);
});
test('order product' , async ({page}) =>{
    await productsPage.navigate();
    await productsPage.viewFirstProduct();
    await productsPage.addToCartProduct();
    await cartPage.clickViewCart();
    await cartPage.clickCheckOut();
    await expect(page.locator('h2.heading', { hasText: 'Address Details' })).toBeVisible();
    await productsPage.page.mouse.wheel(0,500);
    await cartPage.clickPlaceOrder;

});