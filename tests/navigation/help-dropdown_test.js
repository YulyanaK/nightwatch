var model = require('../../helpers/model');
var controller = require('../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;

module.exports = {


  'login': function(browser) {
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

  'Verify the project name' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("(//div[@class='org-dashboard-card-container'])[5]", 4000).pause(model.pause + 500)
        .click("(//div[@class='org-dashboard-card-container'])[5]")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 4000)
        .click('div.hamburger-holder')

        .waitForElementPresent('.side-nav-subSection-title', 4000)
        .verify.elementPresent('div.side-nav-subSection-title', 'selecting a project').pause(model.pause + 1500)
        .click('.side-nav-subSection-title')
    },

  'verify dropdown visible once help menu icon is clicked' : function (browser) {
      browser
        .verify.elementPresent('.right-nav-profile', 'opens right drawer').pause(model.pause + 500)
        .click('.right-nav-profile')
        //opens help link
        .verify.elementPresent('div.profile-settings-text.undefined:nth-of-type(2)', 'opens help center').pause(model.pause + 500)
        .click('div.profile-settings-text.undefined:nth-of-type(2)')
        //closes video
        .verify.elementPresent('div.wistia_placebo_close_button', 'closes helpCenter').pause(model.pause + 500)
        .click('div.wistia_placebo_close_button')
        //sign out
        .verify.elementPresent('div.profile-drawer-icon.bottom', 'sign out').pause(model.pause + 500)
        .click('div.profile-drawer-icon.bottom')
        .end();
  }
}
