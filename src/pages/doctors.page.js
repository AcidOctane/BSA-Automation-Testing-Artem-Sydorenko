const { Button } = require('../elements');

class DoctorsPage {
    constructor() {
        this.clinicsBtn = new Button('a.link_link__3zEN3', 2)
        this.profileBtn = new Button('a.link_link__3zEN3',3)
    }

    async goToUserProfile() {
        await this.profileBtn.click();
        await browser.waitUntil(
            async function () {
                const url = await browser.getUrl();
                return url.includes('user-profile');
            },
            { timeout: 5000 },
        );
    }
    async goToClinics() {
        await this.clinicsBtn.click();
    }
}

module.exports = { DoctorsPage };