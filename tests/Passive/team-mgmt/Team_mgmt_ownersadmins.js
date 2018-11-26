var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;


module.exports = {
 

 
  'login to Project dashboard': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://passive.glidr.io')
        //.resizeWindow(1024, 768).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'looks for glidr logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'seraches for active container for email').pause(model.pause + 500)
        .click('div.signin-form-container')
      browser
        .setValue('input[type=text]', 'dortiz+automation@glidr.io')
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
        .waitForElementPresent("//div[@class='org-dashboard-card-title' and text()='Ghana_QA']", 6000).pause(model.pause + 500)
        .moveToElement("//div[@class='org-dashboard-card-title' and text()='Ghana_QA']", 10, 10)
        .click("//div[@class='org-dashboard-card-title' and text()='Ghana_QA']")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 4000)
        .click('div.hamburger-holder')
        .verify.elementPresent('div.side-nav-organization-name-holder', 'opens left nav').pause(model.pause + 500)
        .click('div.side-nav-organization-name-holder')
        .verify.elementPresent('div.side-nav-org-options.invite-link', 'invite link is active').pause(model.pause + 4000)
        .click('div.side-nav-org-options.invite-link')
  },


  'Owners and Admins tab': function(browser) {
      browser
        .verify.elementPresent('div[data-test="/org-management/team-management"]', 'verifies for name holder for organizations').pause(model.pause + 500)
        .click('div[data-test="/org-management/team-management"]')
        .verify.elementPresent('li.teamMgmtTab.owners-admin', 'verifies for member').pause(model.pause + 500)
        .click('li.teamMgmtTab.owners-admin')
        .verify.elementPresent('input.team-management-search-input', 'input text area').pause(model.pause + 1500)
        .click('input.team-management-search-input')
        .setValue('input.team-management-search-input', 'juan').pause(model.pause + 1500)
        /*.clearValue('input.team-management-search-input')
        .setValue('input.team-management-search-input', 'D').pause(model.pause + 1500)
        .clearValue('input.team-management-search-input')
        .setValue('input.team-management-search-input', 'cacomixtle').pause(model.pause + 1500)
      browser
        .clearValue('input.team-management-search-input').pause(model.pause + 500)
        .click('input.team-management-search-input')
        .setValue('input.team-management-search-input', 'a')*/
        //.clearValue('input.team-management-search-input')
        .pause(model.pause + 3000) 
  },

  'everyone tab assests and functionality': function(browser) {
    browser
        .useXpath()
        .verify.elementPresent("//div[@class='reusable-dropdown-caret']", 'team-mgmt drop down').pause(model.pause + 1500)
        .click("//div[@class='reusable-dropdown-caret']")
        .useCss()
        .verify.elementPresent('div.admin', 'admin').pause(model.pause + 1500)
        .click('div.admin')
        .verify.elementPresent('div.reusable-dropdown-container.show.mgmt-dropdown', 'container opens again').pause(model.pause + 1500)
        .click('div.reusable-dropdown-container.show.mgmt-dropdown') 
        .verify.elementPresent('div.owner', 'owner').pause(model.pause + 1500)
        .click('div.owner')
        .end();
 },
}