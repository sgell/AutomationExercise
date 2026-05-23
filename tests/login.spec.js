const{ test, expect} =require("@playwright/test");
const {LoginPage} = require("../pages/LoginPage");

let   loginPage;

test.beforeEach(async  ({page}) =>{
    loginPage = new LoginPage(page);
    await loginPage.navigate();
    await  loginPage.acceptCookies();
});

test("successful login", async ({page}) => {
    await loginPage.login("test@vest.com", "123456");
    await expect(page.locator('a[href="/logout"]')).toBeVisible();
});

test("unsuccessful login", async ({page}) => {
    await loginPage.login("test@vest.com", "1234567");
    await expect(page.locator('p:has-text("Your email or password is incorrect!")')).toBeVisible;
});
