import { test, expect } from '@playwright/test';
import { POManager } from '../../pageObjects/POMangaer.js';

test.describe.serial('Authentication Tests', () => {


    /** @type {import('../../pageObjects/POMangaer.js').POManager} */
    let POM;


    test.beforeEach(async ({ page }) => {
        POM = new POManager(page);
        await POM.generalFunctions.openSauceLabs();
    });

    test('login to SauceLabs', async ({ }) => {

        await test.step('Login to SauceLabs with valid credentials', async () => {
            await POM.loginFunctions.loginToSauceLabs();
        });

        await test.step('Logout from SauceLabs', async () => {
            await POM.loginFunctions.logoutFromSauceLabs();
        });

    });



});
