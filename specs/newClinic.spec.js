const { expect } = require('chai');

const randomNumber = () => Math.floor(Math.random() * 1000)

describe('Add new clinic:', function () {

  it('should  be able to add a new clinic', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    

    const signInButton = await $('button');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`john_admin1@admin.com`);

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

      await browser.url('/clinics');

      await browser.waitUntil(
          async function () {
              const url = await browser.getUrl();
              return url === 'http://46.101.234.121/clinics';
          },
          { timeout: 5000 },
      );

      const clinicName = `New clinic AS${randomNumber}`;
      const addButton = await $('button[class="styles_btn___s1BB styles_without-border__3Vbp3 styles_primary-dark__1WnyR"]');
      await addButton.waitForDisplayed({ timeout: 5000 });
      await addButton.click();

      const form = await $('.styles_createForm__1HWb7');
      await form.waitForDisplayed({ timeout: 5000 });

      const name = await $('input[name="name"]');
      const address =  await $('input[name="address"]');
      const statusDdl = await $('div[class="selectStyles__control css-6h7vey-control"]');
      const cityDdl = await $('div[class="selectStyles__value-container css-1hwfws3"]');
      const privateOption = await $('div[class="selectStyles__option css-yt9ioa-option"]')
      const baltimoreOption = await $('div[class="selectStyles__option css-yt9ioa-option"]')
      const addClinicButton = await $('button[type="submit"]');

      await name.waitForDisplayed({ timeout: 5000 });
      await name.setValue("new clinic AS");
      await address.waitForDisplayed({ timeout: 5000 });
      await address.setValue("3A Somestreet");
      await statusDdl.waitForDisplayed({ timeout: 5000 });
      await statusDdl.click();
      await privateOption.waitForDisplayed({ timeout: 5000 });
      await privateOption.click();

      await cityDdl.waitForDisplayed({ timeout: 5000 });
      await cityDdl.click();
      await baltimoreOption.waitForDisplayed({ timeout: 5000 });
      await baltimoreOption.click();
      await addClinicButton.waitForDisplayed({ timeout: 5000 });
      await addClinicButton.click();

      await browser.waitUntil(
          async function () {
              const url = await browser.getUrl();
              return url === 'http://46.101.234.121/clinics';
          },
          { timeout: 5000 },
      );


      expect($(`=${clinicName}`)).to.exist;
    
    await browser.reloadSession();
  });
});
