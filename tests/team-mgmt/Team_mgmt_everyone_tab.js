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
        .waitForElementPresent('div.hamburger-holder', 2000)
        .click('div.hamburger-holder')
        .verify.elementPresent('div.side-nav-organization-name-holder', 'opens left nav').pause(model.pause + 500)
        .click('div.side-nav-organization-name-holder')
        .verify.elementPresent('div.side-nav-org-options.invite-link', 'invite link is active').pause(model.pause + 4000)
        .click('div.side-nav-org-options.invite-link')
  },
  

  'Select organization to enter to team mgmt': function(browser) {
      browser
        .verify.elementPresent('div[data-test="/org-management/team-management"]', 'verifies for name holder for organizations').pause(model.pause + 500)
        .click('div[data-test="/org-management/team-management"]')
        .verify.elementPresent('input.team-management-search-input', 'input text area').pause(model.pause + 1500)
        .click('input.team-management-search-input')
        .setValue('input.team-management-search-input', 'cacomixtle').pause(model.pause + 1500)
        .clearValue('input.team-management-search-input')
        .setValue('input.team-management-search-input', 'D').pause(model.pause + 1500)
        .clearValue('input.team-management-search-input')
        .setValue('input.team-management-search-input', 'cacomixtle').pause(model.pause + 1500)
        .clearValue('input.team-management-search-input').pause(model.pause + 500)
        .click('input.team-management-search-input')
        .setValue('input.team-management-search-input', 'a')
        .clearValue('input.team-management-search-input')
        .pause(model.pause + 1000) 
        .verify.elementPresent('div.reusable-dropdown-container.show.mgmt-dropdown', 'team-mgmt drop down').pause(model.pause + 1500)
        .click('div.reusable-dropdown-container.show.mgmt-dropdown') 
        .verify.elementPresent('div.admin', 'admin').pause(model.pause + 1500)
        .click('div.admin')
        .verify.elementPresent('div.reusable-dropdown-container.show.mgmt-dropdown', 'container opens again').pause(model.pause + 1500)
        .click('div.reusable-dropdown-container.show.mgmt-dropdown') 
        .verify.elementPresent('div.owner', 'owner').pause(model.pause + 1500)
        .click('div.owner')
        .verify.elementPresent('div.reusable-dropdown-container.show.mgmt-dropdown', 'drop down opens again').pause(model.pause + 1500)
        .click('div.reusable-dropdown-container.show.mgmt-dropdown') 
        .verify.elementPresent('div.member', 'member').pause(model.pause + 1500)
        .click('div.member')
        .end();
      },

}