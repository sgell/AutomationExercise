class LoginPage{
    constructor(page){
        this.page = page;

        this.passwordInput = page.locator('[name="password"]');
        this.loginButton = page.locator('[data-qa="login-button"]');
    }
    async navigate(){
        await this.page.goto("/login");
    }
    async fillEmail(email){
        await this.page.locator('[data-qa="login-email"]').fill(email);
    }
    async fillPassword(password){
      await this.page.locator('[name="password"]').fill(password)
    }
    async clickLoginButton() {
        await this.page.locator('[data-qa="login-button"]').click();
    }
    async login(email,password){
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickLoginButton();
    }

    async acceptCookies(){
     await this.page.locator('button:has-text("Consent")').click();
 }

}
module.exports = {LoginPage};
