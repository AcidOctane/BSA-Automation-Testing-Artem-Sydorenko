const { expect } = require('chai');
const { App } = require('../src/pages');
const randomNumber = Math.floor(Math.random() * 10000).toString();

const app = new App();

describe('Registration:', function () {

    beforeEach(async function () {
        await browser.setWindowSize(1440, 960);
        await browser.url('/sign-up');
    });

    afterEach(async function () {
        await browser.reloadSession();
    });

    it('should be able to register a new doctor', async function () {

        await app.authPage.register({
            name: "AStest",
            surname: "AStest",
            email: `ArtemSydorenko${randomNumber}@gmail.com`,
            password: "Pa55word",
            phone: "+380991111111",
            birthDate: "12/12/1989",
            status: "doctor",
            gender:"male"
        })
        await browser.waitUntil(
            async function () {
                const url = await browser.getUrl();
                return url === 'http://46.101.234.121/doctors';
            },
            { timeout: 5000 },
        );

        const url = await browser.getUrl();
        expect(url).to.be.eql('http://46.101.234.121/doctors');

    });

    it('should be able to register a new patient', async function () {

        await app.authPage.register({
            name: "AStest1",
            surname: "AStest1",
            email: `ArtemSydorenko${randomNumber+1}@gmail.com`,
            password: "Pa55word",
            phone: "+380991111111",
            birthDate: "12/12/1989",
            status: "patient",
            gender: "male"
        })

        await browser.waitUntil(
            async function () {
                const url = await browser.getUrl();
                return url === 'http://46.101.234.121/doctors';
            },
            { timeout: 5000 },
        );

        const url = await browser.getUrl();
        expect(url).to.be.eql('http://46.101.234.121/doctors');
    });
});


