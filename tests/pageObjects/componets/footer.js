import { expect } from "@playwright/test";

export class Footer {

    constructor(page) {
        this.page = page;
    }

    get twitterLink() {
        return this.page.locator('.social_twitter');
    }
    get facebookLink() {
        return this.page.locator('.social_facebook');
    }
    get linkedinLink() {
        return this.page.locator('.social_linkedin');
    }

    get copyrightText() {
        return this.page.locator('.footer_copy');
    }
}