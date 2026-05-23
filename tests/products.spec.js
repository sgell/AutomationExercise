const {test, expect} = require('@playwright/test');
const {ProductsPage} = require('../pages/ProductsPage');
const {CartPage} = require('../pages/CartPage');

let productsPage;
let cartPage;

test.beforeEach(async ({page}) =>  {
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    await productsPage.navigate();
    await productsPage.acceptCookies();
});
test('view first product', async ({page}) =>{
    await productsPage.viewFirstProduct();
    await cartPage.clickViewCart();
    await expect(page).toHaveURL('https://automationexercise.com/view_cart');

});