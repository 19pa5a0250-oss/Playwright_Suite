import { LoginFunctions } from '../bussinessFunctions/login.js';
import { GeneralFunctions } from '../bussinessFunctions/general.js';

export class POManager {
    constructor(page) {
        this.page = page;
        this.loginFunctions = new LoginFunctions(page);
        this.generalFunctions = new GeneralFunctions(page);
    }

  
}
