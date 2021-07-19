const { expect } = require('chai');

describe('Specility and clinic  change:', function () {

    it('should  be able to change specilaity andclinic in prodile settings', async function () {

        await browser.setWindowSize(1440, 960);
        await browser.url('/sign-in');

        const emailField = await $('input[name="email"]');
        const passwordField = await $('input[name="password"]');


        const signInButton = await $('button');
        const myProfileButton = await $('a[href="/user-profile/d040a417-b5bd-4514-a9c1-2049ba554b0b"]')

        const specialityDdl = await $('div[class="selectStyles__placeholder css-1wa3eu0-placeholder"]');
        const buttons = await $$('button[type="submit"]');

       
        /*const clinicDdl = await ddls[1];
        const saveClinicBtn = await buttons[1]*/
        const dentistOption = await $('div.selectStyles__option=dentist');
        const saveSpecialityBtn = await buttons[0];

        await emailField.waitForDisplayed({ timeout: 5000 });
        await emailField.setValue(`ArtemSydorenko@gmail.com`);

        await passwordField.waitForDisplayed({ timeout: 5000 });
        await passwordField.setValue('Pa55word');

        await signInButton.waitForDisplayed({ timeout: 5000 });
        await signInButton.click();

        await browser.waitUntil(
            async function () {
                const url = await browser.getUrl();
                return url === 'http://46.101.234.121/doctors';
            },
            { timeout: 5000 },
        );

        //navigate to "My profile" button []
        await myProfileButton.waitForDisplayed({ timeout: 3000});
        await myProfileButton.click();

        await browser.waitUntil(
            async function () {
                const url = await browser.getUrl();
                return url === 'http://46.101.234.121/user-profile/d040a417-b5bd-4514-a9c1-2049ba554b0b';
            },
            { timeout: 5000 },
        );
        

        //await browser.pause(5000);

        //change speciality[]


        await specialityDdl.waitForDisplayed({ timeout: 5000 });

        await specialityDdl.click();
        //await browser.pause(2000);

        await dentistOption.waitForDisplayed({ timeout: 5000 });
        await dentistOption.click();

        //await browser.pause(1000);

        await saveSpecialityBtn.waitForDisplayed({ timeout: 5000 });
        await saveSpecialityBtn.click()

        await browser.waitUntil(
            async function () {
                const url = await browser.getUrl();
                return url === 'http://46.101.234.121/user-profile/d040a417-b5bd-4514-a9c1-2049ba554b0b';
            },
            { timeout: 5000 },
        );


        const changedSpeciality = await $('div[class="selectStyles__control css-6h7vey-control"]');
        await changedSpeciality.waitForDisplayed({ timeout: 5000 });

        const text = await changedSpeciality.getText();

        expect(text).to.be.eql('Dentist');
      
      
    await browser.reloadSession();
  });
});
