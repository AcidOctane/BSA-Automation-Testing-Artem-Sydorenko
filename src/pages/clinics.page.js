const { Button, Input } = require('../elements');

const cityIndex = Math.floor(Math.random() * 17)
const statusIndex = Math.floor(Math.random() * 2)

class ClinicsPage {
    constructor() {
        this.addClinicBtn = new Button('button', 1);
        this.name = new Input('input', 1);
        this.address = new Input('input', 2);
        this.statusDdl = new Button('.selectStyles__single-value');
        this.statusOption = new Button('.selectStyles__option', statusIndex);
        this.cityDdl = new Button('.selectStyles__placeholder')
        this.cityOption = new Button('.selectStyles__option', cityIndex);
        this.saveClinicBtn = new Button('button', 3)
    }

    async addNewClinic({ name, address }) {
        await this.addClinicBtn.click();
        await this.name.setValue(name);
        await this.address.setValue(address);
        await this.statusDdl.click();
        await this.statusOption.click();
        await this.cityDdl.click();
        await this.cityOption.click();
        await this.saveClinicBtn.click();

    }

    async findClinic({ name }) {
        const newClinic = await $(`span*=${name}`)
        const parent = await newClinic.parentElement();
        const parentParent = await parent.parentElement();
        const text = await parentParent.getText();
        return text;
    }
}

module.exports = { ClinicsPage };