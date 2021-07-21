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

    it('should  be able to login', async function () {

        await app.authPage.login({
            email: "ArtemSydorenko@gmail.com",
            password: "Pa55word"
        })

        const url = await browser.getUrl();
        expect(url).to.be.eql('http://46.101.234.121/doctors');
    });

    it('shoud not be able to login with unregistered email', async function () {
        await app.authPage.wrongLogin({
            email: "somewrongemail@gmail.com",
            password: "Pa55word"
        })

   

        const url = await browser.getUrl();
        expect(url).to.be.eql('http://46.101.234.121/sign-in');
    })

    it('shoud not be able to login with wrong password', async function () {
        await app.authPage.wrongLogin({
            email: "ArtemSydorenko@gmail.com",
            password: "!Pa55word"
        })

        const url = await browser.getUrl();
        expect(url).to.be.eql('http://46.101.234.121/sign-in');
    })
});
