

export class MenuBar {

    constructor(page) {
        this.page = page;
    }

    get allItemsButton() {
        return this.page.getByRole('link', { name: 'All Items' });
    }
    get aboutButton() {
        return this.page.getByRole('link', { name: 'About' });
    }
    get logoutButton() {
        return this.page.getByRole('link', { name: 'Logout' });
    }
    get resetAppStateButton() {
        return this.page.getByRole('link', { name: 'Reset App State' });
    }
    get closeMenuButton() {
        return this.page.getByRole('button', { name: 'Close Menu' });
    }
}