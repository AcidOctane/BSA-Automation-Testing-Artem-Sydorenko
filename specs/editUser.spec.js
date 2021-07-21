const { expect } = require('chai');
const { App } = require('../src/pages');
const randomNumber = Math.floor(Math.random() * 100).toString();

const app = new App();

const newName = "Rick" + randomNumber;
const newSurname = "Sanchez" + randomNumber;
const newPhone = `+480948885` + randomNumber;
const newBirthday = `11/11/19${randomNumber}`;

describe('Edit user: ', function () {
    beforeEach(async function () {
        await browser.setWindowSize(1440, 960);
        await browser.url('/sign-in')
    });
    afterEach(async function () {
        await browser.reloadSession();
    });

    it('should be able to change name', async function () {
        await app.authPage.login({
            email: "ArtemSydorenko@gmail.com",
            password: "Pa55word"
        });
  
        await app.doctorsPage.goToUserProfile()

        await app.profilePage.showSettings();

        await app.profilePage.changeInfo({
            name: newName,
        });

        await app.profilePage.saveSettings();
        
        //changed fields will update in a while after form is submitted
        await browser.pause(500);

        const changedName = await app.profilePage.getName();

        expect(changedName).to.contain(newName);
    });

    it('should be able to change surname', async function () {
        await app.authPage.login({
            email: "ArtemSydorenko@gmail.com",
            password: "Pa55word"
        });

        await app.doctorsPage.goToUserProfile()

        await app.profilePage.showSettings();

        await app.profilePage.changeInfo({ surname: newSurname });

        await app.profilePage.saveSettings();

        //changed fields will update in a while after form is submitted
        await browser.pause(500);

        const changedName = await app.profilePage.getName();

        expect(changedName).to.contain(newSurname);

    });

    it('should be able to change phone', async function () {
        await app.authPage.login({
            email: "ArtemSydorenko@gmail.com",
            password: "Pa55word"
        });

        await app.doctorsPage.goToUserProfile()
        const oldPhone = await app.profilePage.getPhone();
        await app.profilePage.showSettings();

        await app.profilePage.changeInfo({ phone: newPhone });

        await app.profilePage.saveSettings();

        //changed fields will update in a while after form is submitted
        await browser.pause(500);

        expect(oldPhone).to.not.be.eql(newPhone);
    });

    it('should be able to change birthdate', async function () {
        await app.authPage.login({
            email: "ArtemSydorenko@gmail.com",
            password: "Pa55word"
        });

        await app.doctorsPage.goToUserProfile()

        const oldDate = await app.profilePage.getBirthdate();

        await console.log(oldDate);

        await app.profilePage.showSettings();

        await app.profilePage.changeInfo({ birthday: newBirthday });

        await app.profilePage.saveSettings();

        //changed fields will update in a while after form is submitted

        await browser.pause(1000);

        const newDate = await app.profilePage.getBirthdate();

        await console.log(newDate);

        expect(oldDate).to.not.be.eql(newDate);
    });
})