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

    xit('should be able to change speciality', async function () {
        await app.authPage.login({
            email: "ArtemSydorenko@gmail.com",
            password: "Pa55word"
        });

        await app.doctorsPage.goToUserProfile()

        const oldSpeciality = await app.profilePage.getActiveSpeciality();

        await app.profilePage.setSpeciality();

        const newSpeciality = await app.profilePage.getActiveSpeciality();

        expect(newSpeciality).to.not.be.equal(oldSpeciality);
    });
})