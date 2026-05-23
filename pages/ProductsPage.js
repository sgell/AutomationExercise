class ProductsPage{
    constructor(page) {
        this.page = page;
    }

    async navigate(){
        await this.page.goto("/products")
    }

    async scrollDown(){
        await this.page.mouse.wheel(0,500);
    }
        //add first product
    async viewFirstProduct(){
        await this.page.locator('a:has-text("View Product")').first().click();
    }
      //click on Consent cookies
    async acceptCookies(){
        const consent = this.page.locator('button:has-text("Consent")');
        if(await consent.isVisible()){
            await consent.click();
        }
    }
    async addToCartProduct(){
        await this.page.locator('button.btn-default.cart').click();
    }
}

module.exports = {ProductsPage};