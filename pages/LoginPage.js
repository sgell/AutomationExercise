class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('/login');
  }

  async fillEmail(email) {
    await this.page.locator('[data-qa="login-email"]').fill(email);
  }

  async fillPassword(password) {
    await this.page.locator('[name="password"]').fill(password);
  }

  async clickLoginButton() {
    await this.page.locator('[data-qa="login-button"]').click();
  }

  async login(email, password) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickLoginButton();
  }

  async acceptCookies() {
    const consent = this.page.locator('button:has-text("Consent")');
    if (await consent.isVisible()) {
      await consent.click();
    }
  }
}

module.exports = { LoginPage };
