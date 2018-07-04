var model = require('../../helpers/model');
var controller = require('../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;


module.exports = {

 

  'login to Project dashboard': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://app.staging.glidr.io')
        //.resizeWindow(1024, 768).pause(model.pause + 500)
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
        .waitForElementPresent('div.org-container', 4000).pause(model.pause + 500)
  },

  'Verify the organizations for Project dashboard' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("(//div[@class='org-dashboard-card-container'])[5]", 4000).pause(model.pause + 500)
        .click("(//div[@class='org-dashboard-card-container'])[5]")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 4000)
        .click('div.hamburger-holder')
        .verify.elementPresent('div.side-nav-organization-name-holder', 'opens left nav').pause(model.pause + 500)
        .click('div.side-nav-organization-name-holder')
        .verify.elementPresent('div.side-nav-org-options.invite-link', 'invite link is active').pause(model.pause + 4000)
        .click('div.side-nav-org-options.invite-link')
  },
  

  'Select organization to enter to  disabled': function(browser) {
      browser
        .verify.elementPresent('div[data-test="/org-management/team-management"]', 'verifies for name holder for organizations').pause(model.pause + 500)
        .click('div[data-test="/org-management/team-management"]')
  },

  'everyone tab assests and functionality for dsiabled': function(browser) {
    browser
        .verify.elementPresent('li.teamMgmtTab.disabled', 'drop down credentials').pause(model.pause + 1500)
        .click('li.teamMgmtTab.disabled')
        .verify.elementPresent('div.reusable-dropdown-display', 'admin').pause(model.pause + 1500)
        .click('div.reusable-dropdown-display')
        .verify.elementPresent('div.reusable-dropdown-option', 'drop down').pause(model.pause + 1500)
        .click('div.reusable-dropdown-option')
        .verify.elementPresent('div.reusable-dropdown-caret', 'drop down credentials').pause(model.pause + 1500)
        .click('div.reusable-dropdown-caret')
        .verify.elementPresent('div.reusable-dropdown-option.clearfix.position-relative.disable', 'disabled').pause(model.pause + 500)
        .click('div.reusable-dropdown-option.clearfix.position-relative.disable')   
        .end();
      },

}