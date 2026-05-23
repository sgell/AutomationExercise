class CartPage{
    constructor(page){
        this.page = page;
    }

    async navigate(){
        await  this.page.goto('/view_cart');
    }
    async clickViewCart() {
        await this.page.goto('/view_cart');
    }

    async clickCheckOut(){
        await this.page.locator('a.check_out').click();
    }

    async clickPlaceOrder(){
        await this.page.locator('a[href="/payment"]').click();
    }
}
module.exports = {CartPage};