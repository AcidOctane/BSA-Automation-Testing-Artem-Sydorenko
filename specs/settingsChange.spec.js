const { expect } = require('chai');

describe('Settings change:', function () {

  it('should  be able to make changes in profile settings', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-in');

    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    

    const signInButton = await $('button');

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
      const myProfileButton = await $('a[href="/user-profile/d040a417-b5bd-4514-a9c1-2049ba554b0b"]')
      await myProfileButton.click();
    //navigate to Edit settings button []
      const editSettingsButton = await $('span[class="styles_buttonIcon__2xI4i styles_edit__ftuHl"]')
      await editSettingsButton.click()

      //change profile data[]
      const phone = await $('input[name="phone"]');
      const usernameField = await $('input[placeholder="Name"]');
      await phone.setValue("+38011111165")
      //await usernameField.setValue('Marcus');
       
      const editButton = await $('button=Edit');
      
      //await editButton.click();
      await browser.keys('Enter');

      const checkPhone = await $('a[class="styles_text__1HrCV"]').name;
      console.log(checkPhone);

      expect(checkPhone).to.be.equal("+38011111165");
      
    await browser.reloadSession();
  });
});
