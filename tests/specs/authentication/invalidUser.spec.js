import { test, expect } from '@playwright/test';
import { POManager } from '../../pageObjects/POMangaer.js';
import { LoginTypes } from '../../enums/login.js';

test.describe.serial('Authentication Tests', () => {

    
    /** @type {import('../../pageObjects/POMangaer.js').POManager} */
    let POM;


    test.beforeEach(async ({ page }) => {
        POM = new POManager(page);
        await POM.generalFunctions.openSauceLabs();
    });

    test('InValid User', async ({ }) => {

        await test.step('Login to SauceLabs with Invalid credentials', async () => {
            await POM.loginFunctions.loginToSauceLabs(LoginTypes.invalidCred);
        });

        await test.step('Verify error message', async () => {
            await POM.loginFunctions.verifyInvalidCredentialErrorMessage();
        });

    });



});
