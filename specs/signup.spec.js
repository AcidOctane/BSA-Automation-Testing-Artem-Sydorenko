const { expect } = require('chai');

const randomNumber = () => Date.now();

describe('Registration:', function () {

  it('should be able to register', async function () {

    await browser.setWindowSize(1440, 960);
    await browser.url('/sign-up');

    const usernameField = await $('input[name="name"]');
    const surnameField = await $('input[name="surname"]');
    const birthDateField = await $('input[name="birthdate"]');
    const emailField = await $('input[name="email"]');
    const passwordField = await $('input[name="password"]');
    const retryPasswordField = await $('input[name="retypePassword"]');
    const phoneField = await $('input[name="phone"]');

    const ddls = await $$('div.selectStyles__control');

    const genderDdl = ddls[0];
    const statusDdl = ddls[1];

    const femaleOption = await $('div.selectStyles__option=female');
    const doctorOption = await $('div.selectStyles__option=doctor');

    const signUpButton = await $('button');

    await usernameField.waitForDisplayed({ timeout: 5000 });
    await usernameField.setValue('Artem');

    await surnameField.waitForDisplayed({ timeout: 5000 });
    await surnameField.setValue('Sydorenko');

    await birthDateField.waitForDisplayed({ timeout: 5000 });
    await birthDateField.setValue('11/11/1999');

    await emailField.waitForDisplayed({ timeout: 5000 });
    await emailField.setValue(`ArtemSydorenko${randomNumber()}@gmail.com`);

    await passwordField.waitForDisplayed({ timeout: 5000 });
    await passwordField.setValue('Pa55word');

    await retryPasswordField.waitForDisplayed({ timeout: 5000 });
    await retryPasswordField.setValue('Pa55word');

    await phoneField.waitForDisplayed({ timeout: 5000 });
    await phoneField.setValue('380000000000');

    await genderDdl.waitForDisplayed({ timeout: 5000 });
    await genderDdl.click();

    await femaleOption.waitForDisplayed({ timeout: 5000 });
    await femaleOption.click();

    await statusDdl.waitForDisplayed({ timeout: 5000 });
    await statusDdl.click();

    await doctorOption.waitForDisplayed({ timeout: 5000 });
    await doctorOption.click();

    await signUpButton.waitForDisplayed({ timeout: 5000 });
    await signUpButton.click();

    await browser.waitUntil(
      async function () {
        const url = await browser.getUrl();
        return url === 'http://46.101.234.121/doctors';
      },
      { timeout: 5000 },
    );

    const url = await browser.getUrl();
    expect(url).to.be.eql('http://46.101.234.121/doctors');
    
    await browser.reloadSession();
  });
});
