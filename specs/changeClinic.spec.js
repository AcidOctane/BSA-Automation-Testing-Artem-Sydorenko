const { expect } = require('chai');
const { App } = require('../src/pages');

const app = new App();

describe('Profile: ', function () {
    beforeEach(async function () {
        await browser.setWindowSize(1440, 960);
        await browser.url('/sign-in')
    });
    afterEach(async function () {
        await browser.reloadSession();
    });

    it('should be able to change clinic', async function () {
        await app.authPage.login({
            email: "ArtemSydorenko@gmail.com",
            password: "Pa55word"
        });

        await app.doctorsPage.goToUserProfile();

        const oldClinic = await app.profilePage.getActiveClinic();

        await app.profilePage.setClinic();

        const newClinic = await app.profilePage.getActiveClinic();

        expect(newClinic).to.not.be.equal(oldClinic);
    });
})