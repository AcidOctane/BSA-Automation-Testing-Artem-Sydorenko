const { Button } = require('../elements');

const cityIndex = Math.floor(Math.random() * 17)
const statusIndex = Math.floor(Math.random() * 2)

class ClinicsPage {
    constructor() {
        this.addClinic = new Button('button', 1);
        this.name = new Input('input', 1);
        this.address = new Input('input', 2);
        this.statusDdl = new Button('input', 3);
        this.statusOption = new Button('.selectStyles__option', statusIndex);
        this.cityDdl = new Button('input', 5)
        this.cityOption = new Button('.selectStyles__option', cityIndex);
        this.addClinicBtn = new Button('button', 3)
    }

    async addNewClinic({name, address, status, city}) {
        await this.addClinic.click();
    }
}