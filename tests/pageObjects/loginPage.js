
export class LoginPage {

    constructor(page){
        this.page=page;
    }
   
    get usernameInput(){
        return this.page.locator('input[data-test="username"]');
    }

    get userPasswordInput(){
        return this.page.locator('input[data-test="password"]');
    }

    get loginButton(){
        return this.page.locator('input[data-test="login-button"]');
    }
}