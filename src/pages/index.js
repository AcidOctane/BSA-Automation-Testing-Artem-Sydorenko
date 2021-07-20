const { AuthPage } = require('./auth.page');
const { ProfilePage } = require('./profile.page');
const { DoctorsPage } = require('./doctors.page');

class App {
  constructor() {
      this.authPage = new AuthPage();
      this.doctorsPage = new DoctorsPage();
      this.profilePage = new ProfilePage();
  }
}

module.exports = { App };
