describe('User can login with email/password.', function () {
    it('should show login screen', async () => {
        browser.get('/login');
        const loginMessage = element(by.id('login-message'));
        expect(loginMessage.getText()).toEqual('Anmeldung');
        const emailInput = element(by.id('email-login-input'));
        expect(emailInput.getAttribute('placeholder'))
            .toEqual('');
        const passwordInput = element(by.id('password-login-input'));
        expect(passwordInput.getAttribute('value'))
            .toEqual('');

        emailInput.sendKeys("max@mustermann.de");
        passwordInput.sendKeys("kennwort");
        element(by.id('submit-login-button')).click();

        expect(browser.getCurrentUrl()).toContain('map');
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