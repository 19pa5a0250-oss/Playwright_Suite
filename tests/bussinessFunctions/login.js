import { expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/loginPage';
import { Header } from '../pageObjects/componets/header';
import { MenuBar } from '../pageObjects/componets/menuBar';


export class LoginFunctions {

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.header = new Header(page);
        this.menuBar = new MenuBar(page);
    }

    async loginToSauceLabs(credentials) {

        await this.loginPage.usernameInput.fill(credentials.username);
        await this.loginPage.userPasswordInput.fill(credentials.password);
        await this.loginPage.loginButton.click();

    }

     async loginToSauceLabsVerifyHeaderElements(credentials) {

        await this.loginPage.usernameInput.fill(credentials.username);
        await this.loginPage.userPasswordInput.fill(credentials.password);
        await this.loginPage.loginButton.click();
        await this.header.verifyHeaderElements();

    }

    async logoutFromSauceLabs() {
        
        await expect(this.header.menuButton).toBeVisible({ timeout: 3000 });
        await this.header.menuButton.click();
        await this.menuBar.logoutButton.click();
        await expect(this.loginPage.loginButton).toBeVisible({ timeout: 5000 });
    }

    async verifyInvalidCredentialErrorMessage() {
        await expect(this.loginPage.errorMessage).toBeVisible({ timeout: 3000 });
        await expect(this.loginPage.errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
    }
}