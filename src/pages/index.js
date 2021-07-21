const { AuthPage } = require('./auth.page');
const { ProfilePage } = require('./profile.page');
const { DoctorsPage } = require('./doctors.page');
const { ClinicsPage } = require('./clinics.page');

class App {
  constructor() {
      this.authPage = new AuthPage();
      this.doctorsPage = new DoctorsPage();
      this.profilePage = new ProfilePage();
      this.clinicsPage = new ClinicsPage();
  }
}

module.exports = { App };
