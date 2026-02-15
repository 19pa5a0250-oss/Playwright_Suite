import {LoginPage}  from '../pageObjects/loginPage';

export class LoginFunctions {

    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
    }

async loginSauceLabs(){

    await this.loginPage.usernameInput.fill('standard_user');
    await this.loginPage.userPasswordInput.fill('secret_sauce');
    await this.loginPage.loginButton.click();

}

}