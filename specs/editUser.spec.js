const { expect } = require('chai');
const { App } = require('../src/pages');
const randomNumber = Math.floor(Math.random() * 100).toString();


const app = new App();

const newName = "John" + randomNumber;
const newSurname = "Johnson" + randomNumber;
const newPhone = `+480945555` + + randomNumber;

describe('Edit user: ', function () {
    beforeEach(async function () {
        await browser.setWindowSize(1440, 960);
        await browser.url('/sign-in')
    });
    afterEach(async function () {
        await browser.reloadSession();
    });

    xit('should be able to change name', async function () {
        await app.authPage.login({
            email: "ArtemSydorenko@gmail.com",
            password: "Pa55word"
        });
  
        await app.doctorsPage.goToUserProfile()

        await app.profilePage.showSettings();

        await app.profilePage.changeInfo({
            name: newName,
            surname: newSurname,
            phone: newPhone,
        });

        await app.profilePage.saveSettings();
        
        //changed fields will update in a while after form is submitted
        await browser.pause(500);

        const changedName = await app.profilePage.getName();
        const changedPhone = await app.profilePage.getPhone();

        expect(changedName).to.contain(newName);
        expect(changedName).to.contain(newSurname);
        expect(changedPhone).to.be.eql(newPhone);

    });
})