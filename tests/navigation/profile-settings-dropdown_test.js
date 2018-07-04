var model = require('../../helpers/model');
var controller = require('../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;

module.exports = {


  'login to profile settings': function(browser) {
      browser
        .url('https://app.staging.glidr.io')
        .resizeWindow(1366, 768).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'looks for glidr logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'searches for active container for email').pause(model.pause + 500)
        .click('div.signin-form-container')
      browser
        .setValue('input[type=text]', 'dortiz@launchpadcentral.com')
        .verify.elementPresent('div.signin-form-container', 'searches for active container for password').pause(model.pause + 500)
        .click('input[type=password]')
      browser
        .setValue('input[type=password]', 'Testtest1!')
        .click('div.signup-show-password')
        .verify.elementPresent('div.login-button', 'checks for button is active').pause(model.pause + 500)
        .click('div.login-button')
  },

  'Verify the organizations name' : function(browser) {
      browser
        .waitForElementPresent('div.org-dashboard-card-container', 4000)
        .verify.elementPresent('.org-dashboard-card-container', 'entering basic tier organization').pause(model.pause + 500)

        .useXpath()
        .click("(//div[@class='org-dashboard-card-container'])[8]")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 4000)
        .click('div.hamburger-holder')
  },

  'Initialize left drawer' : function (browser) {
      browser
        .waitForElementPresent('.side-nav-subSection-title', 4000)
        .verify.elementPresent('div.side-nav-subSection-title', 'selecting a project to initialize left drawer').pause(model.pause + 1500)
        .click('.side-nav-subSection-title')
        .verify.elementPresent('div.profile-image-container.profile-image.right-nav-profile', 'opens right drawer').pause(model.pause + 500)
        .click('div.profile-image-container.profile-image.right-nav-profile')
        //opens profile settings
        .verify.elementPresent('div.profile-settings-text.profile-drawer-upper', 'opens  profile settings')
        .click('div.profile-settings-text.profile-drawer-upper')
        //settigns
        .verify.elementPresent('div[data-test="/my-account/settings"]', 'account settings').pause(model.pause + 1500)
        .click('div[data-test="/my-account/settings"]')
        //notifications
        .verify.elementPresent('div[data-test="/my-account/notifications"]', 'notifications').pause(model.pause + 1500)
        .click('div[data-test="/my-account/notifications"]')
        //access logs
        .verify.elementPresent('div[data-test="/my-account/access-logs"]', 'access-logs').pause(model.pause + 1500)
        .click('div[data-test="/my-account/access-logs"]')
        //profile
        .verify.elementPresent('div[data-test="/my-account/profile"]', 'profile').pause(model.pause + 1500)
        .click('div[data-test="/my-account/profile"]')
        //opens rightdrawer
        .verify.elementPresent('div.profile-image-container.profile-image.right-nav-profile', 'opens right drawer').pause(model.pause + 500)
        .click('div.profile-image-container.profile-image.right-nav-profile')

        .verify.elementPresent('div.profile-drawer-icon.bottom', 'logout').pause(model.pause + 500)
        .click('div.profile-drawer-icon.bottom')
        .end();
  }
}