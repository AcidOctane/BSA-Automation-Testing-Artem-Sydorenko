const { expect } = require('chai');

describe('Clinic change:', function () {

    it('should be able to change clinic in profile settings', async function () {

        await browser.setWindowSize(1440, 960);
        await browser.url('/sign-in');

        const emailField = await $('input[name="email"]');
        const passwordField = await $('input[name="password"]');

        const signInButton = await $('button');
        const myProfileButton = await $('a[href="/user-profile/d040a417-b5bd-4514-a9c1-2049ba554b0b"]')

        const clinicDdl = await $('div[class="selectStyles__single-value css-1uccc91-singleValue"]');
        const buttons = await $$('button[type="submit"]');

        const clinicOption = await $('div[id="react-select-3-option-2"]');
        const saveClinicBtn = await $('div[class="styles_selectSubmitWrapper__1VXHA"]');

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
        
        //change speciality[x]

        await clinicDdl.waitForDisplayed({ timeout: 5000 });
        await clinicDdl.click();
        await clinicOption.waitForDisplayed({ timeout: 5000 });
        await clinicOption.click();
        await saveClinicBtn.waitForDisplayed({ timeout: 10000 });
        await saveClinicBtn.click()

        await browser.waitUntil(
            async function () {
                const url = await browser.getUrl();
                return url === 'http://46.101.234.121/user-profile/d040a417-b5bd-4514-a9c1-2049ba554b0b';
            },
            { timeout: 5000 },
        );


        const changedClinic = await $('div[class="selectStyles__single-value css-1uccc91-singleValue"]');
        await changedClinic.waitForDisplayed({ timeout: 5000 });

        const text = await changedClinic.getText();

        expect(text).to.be.eql('The Johns Hopkins Hospital');
      
      
    await browser.reloadSession();
  });
});
