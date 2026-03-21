import { expect } from "@playwright/test";

export class Header {

    constructor(page) {
        this.page = page;
    }

    get SwagLabsLogo() {
        return this.page.locator('.header_label .app_logo');
    }

    get menuButton() {
        return this.page.getByRole('button', { name: 'Open Menu' });
    }

    get shoppingCart() {
        return this.page.locator('.shopping_cart_link');
    }

    get shoppingCartBadge() {
        return this.page.locator('.shopping_cart_badge');
    }



    async verifyHeaderElements() {
        await expect(this.SwagLabsLogo).toBeVisible();
        await expect(this.menuButton).toBeVisible();
        await expect(this.shoppingCart).toBeVisible();
    }
}