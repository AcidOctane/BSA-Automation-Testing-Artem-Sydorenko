const { expect } = require('chai');
const { App } = require('../src/pages');
const randomNumber = Math.floor(Math.random() * 100).toString();
const clinicName = `RS Hospital ${randomNumber}`;
const clinicAddress = `Lincoln Ave, ${randomNumber}`;

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
        await app.clinicsPage.addNewClinic({
            name: clinicName,
            address: clinicAddress
        });
       
        const createdClinic = await app.clinicsPage.findClinic({ name: clinicName });

        expect(createdClinic).to.exist;
        expect(createdClinic).to.contain(clinicAddress);
    });
})