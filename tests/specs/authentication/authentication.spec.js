import { test, expect } from '@playwright/test';
import { POManager } from '../../pageObjects/POMangaer.js';

test.describe.serial('Authentication Tests', () => {

  
    /** @type {import('../../pageObjects/POMangaer.js').POManager} */
    let POM;


    test.beforeEach(async ({ page }) => {
        POM = new POManager(page);
        await POM.generalFunctions.openSauceLabs();
    });

    test('Login Into Sacuce Labs', async ({ }) => {
        // Pom = new POManager(page);
    
        await POM.loginFunctions.loginSauceLabs();
        // await page.locator('.shopping_cart_link').click();

        // await page.locator('button[data-test="continue-shopping"]').click();

        // await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    });

    // test('sign in successfully', async ({ page }) => {
    //     await page.goto('https://www.saucedemo.com/');
    //     await POM.loginFunctions.loginSauceLabs();
    //     await POM.generalFunctions.openSauceLabs();
    //     await page.fill('[data-test="username"]', 'standard_user');
    //     await page.fill('[data-test="password"]', 'secret_sauce');
    //     await page.click('[data-test="login-button"]');

    //     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html', { message: 'Login Not Successful' });
    // });

    // test('logout successfully', async ({page}) => {
    //     await page.goto('https://www.saucedemo.com/');
    //     await page.fill('[data-test="username"]', 'standard_user');
    //     await page.fill('[data-test="password"]', 'secret_sauce');
    //     await page.click('[data-test="login-button"]');

    //     await page.click('#react-burger-menu-btn');
    //     await page.click('#logout_sidebar_link');

    //     await expect(page).toHaveURL('https://www.saucedemo.com/', {message: 'Logout Not Successful'});
    // });


});
