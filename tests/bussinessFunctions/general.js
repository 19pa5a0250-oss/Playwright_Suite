import {testData} from "../testData/testData.js"


export class GeneralFunctions {

    constructor(page) {
        this.page = page;
    }

    async waitForPageLoad() {
        await this.page.waitForLoadState('networkidle');
    }
   
    async openSauceLabs() {
        await this.page.goto('/');
        await this.waitForPageLoad();
    }
    

}