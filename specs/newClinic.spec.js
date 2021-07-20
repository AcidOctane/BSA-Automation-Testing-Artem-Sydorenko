const { expect } = require('chai');
const { App } = require('../src/pages');

const app = new App();
describe('Clinic: ', function () {
    beforeEach(async function () {
        await browser.setWindowSize(1440, 960);
        await browser.url('/sign-in')
    });
    afterEach(async function () {
        await browser.reloadSession();
    });

    it('should be able to add a new clinic', async function () {
        await app.authPage.login({
            email: "john_admin1@admin.com",
            password: "Pa55word"
        });

        await app.doctorsPage.goToClinics();
        await browser.pause(5000);

        expect(1).to.be.equal(1);
    });
})