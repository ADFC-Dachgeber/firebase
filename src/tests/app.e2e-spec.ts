describe('Use can login.', function () {
    it('should show login screen', async () => {
        browser.get('/login');
        const loginMessage = element(by.id('login-message'));
        expect(loginMessage.getText()).toEqual('Anmelden mit');
    });
});

describe('User visit a non-existing page.', () => {
    it('should redirect to not found page', () => {
        browser.get('/abc');
        const currentUrl = browser.getCurrentUrl();
        expect(currentUrl).toContain('/not-found');
    });
});

describe('User accesses the map page without login', function () {
    it('should redirect to the login page', async () => {
        browser.get('/map');
        const currentUrl = browser.getCurrentUrl();
        expect(currentUrl).toContain('/login');
    });
});