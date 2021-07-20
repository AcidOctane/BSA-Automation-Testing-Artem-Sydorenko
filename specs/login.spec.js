const { expect } = require('chai');
const { App } = require('../src/pages');

const app = new App();

describe('Login:', function () {

    beforeEach(async function () {
        await browser.setWindowSize(1440, 960);
        await browser.url('/sign-in');
    });

    afterEach(async function () {
        await browser.reloadSession();
    });

    xit('should  be able to login', async function () {

        await app.authPage.login({
            email: "ArtemSydorenko@gmail.com",
            password: "Pa55word"
        })

        const url = await browser.getUrl();
        expect(url).to.be.eql('http://46.101.234.121/doctors');
    });

    xit('shoud not be able to login with unregistered email', async function () {
        await app.authPage.login({
            email: "somewrongemail@gmail.com",
            password: "Pa55word"
        })

        await browser.waitUntil(
            async function () {
                const url = await browser.getUrl();
                return url === 'http://46.101.234.121/sign-in';
            },
            { timeout: 5000 },
        );

        const url = await browser.getUrl();
        expect(url).to.be.eql('http://46.101.234.121/sign-in');
    })

    xit('shoud not be able to login with wrong password', async function () {
        await app.authPage.login({
            email: "ArtemSydorenko@gmail.com",
            password: "!Pa55word"
        })

        await browser.waitUntil(
            async function () {
                const url = await browser.getUrl();
                return url === 'http://46.101.234.121/sign-in';
            },
            { timeout: 5000 },
        );

        const url = await browser.getUrl();
        expect(url).to.be.eql('http://46.101.234.121/sign-in');
    })
});
