

export class HomePage {

    constructor(page) {
        this.page = page;
    }   

    get homePageTitle() {
        return this.page.locator('.title');
    }


}