const {Button, Input} = require('../elements');

const index = Math.floor(Math.random() * 4)

class ProfilePage {
    constructor() {
        
        this.specialityDdl = new Button('div.selectStyles', 0);
        this.saveSpecialityBtn = new Button('button', 2);
        this.clinicDdl = new Button('div[class="selectStyles__single-value css-1uccc91-singleValue"]');
        this.saveClinicBtn = new Button('button', 3);
        this.ddlOption = new Button('div.selectStyles__option', index);
        this.activeSpeciality = new Button('div.selectStyles__single-value', 0);
        this.activeClinic = new Button('div[class="selectStyles__single-value css-1uccc91-singleValue"]');
        this.editSettingsButton = new Button('span[class="styles_buttonIcon__2xI4i styles_edit__ftuHl"]')
        this.uploadDocumentBtn = new Button('span.styles_uploadDocument__3LiqS');
        this.usernameField = new Input('input[name="name"]', 1);
        this.surnameField = new Input('input[name="surname"]');
        this.phoneField = new Input('input[name="phone"]');
        this.saveSettingsBtn = new Button('button', 5);
        this.currentName = new Button('span.styles_name__2vTNE', 0);
        this.currentPhone = new Button('a.styles_text__1HrCV', 0)
    }
    async setSpeciality() {
        await this.specialityDdl.click();
        browser.pause(5000);
        await this.ddlOption.click();
        await this.saveSpecialityBtn.click();
    }

    async setClinic() {

        await this.clinicDdl.click();
        await this.ddlOption.click();
        await this.saveClinicBtn.click();
    }

    async getActiveSpeciality() {

        const spec = await this.activeSpeciality.getLabel();
        return spec;
    }

    async getActiveClinic() {
        const clinic = await this.activeClinic.getLabel();
        return clinic;
    }

    async showSettings() {

        await this.editSettingsButton.click();

    }

    async changeInfo({ name, surname, phone }) {
        
        await this.usernameField.setValue(name);
        await this.surnameField.setValue(surname);
        await this.phoneField.setValue(phone);

    }

    async saveSettings() {
        await browser.keys("Enter");
        await browser.waitUntil(
            async function () {
                const url = await browser.getUrl();
                return url.includes('user-profile');
            },
            { timeout: 5000 },
        );
    }

    async getName() {
        const currentName = await this.currentName.getLabel();
        return currentName;
    };
    
    async getPhone() {
        const currentPhone = await this.currentPhone.getLabel();
        return currentPhone;
    };
}

module.exports = { ProfilePage };