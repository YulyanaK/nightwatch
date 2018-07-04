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
        .verify.elementPresent('div.signin-form-container', 'seraches for active container for email').pause(model.pause + 500)
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
        .waitForElementPresent("(//div[@class='org-dashboard-card-container'])[10]", 4000).pause(model.pause + 500)
        .click("(//div[@class='org-dashboard-card-container'])[10]")
        
        .useCss()
        .waitForElementPresent('div.hamburger-holder', 2000)
        .click('div.hamburger-holder')
        .verify.elementPresent('div.side-nav-organization-name-holder', 'opens left nav').pause(model.pause + 500)
        .click('div.side-nav-organization-name-holder')
        .verify.elementPresent('div.side-nav-org-options.invite-link', 'invite link is active').pause(model.pause + 4000)
        .click('div.side-nav-org-options.invite-link')
  },


 'clicking Invite People button takes user to invite flow and clicking x exits invite flow': function(browser) {
      browser
        .verify.elementPresent('div[data-test="/org-management/team-management"]', 'verifies for name holder for organizations').pause(model.pause + 500)
        .click('div[data-test="/org-management/team-management"]')
        .verify.elementPresent('div.icon-holder-circle', 'verifies button works as expected').pause(model.pause + 500)
        .click('div.icon-holder-circle')
        .verify.elementPresent('div.access-row-item-member', 'verifies member present').pause(model.pause + 500)
        .click('div.access-row-item-member')
    },  

  'invite members individual exit and arrow': function(browser) {
       browser
        .verify.elementPresent('div.back-arrow-invite.show-back-arrow.lpc-back-arrow-button-black', 'verifies back buttonis present and works').pause(model.pause + 500)
        .click('div.back-arrow-invite.show-back-arrow.lpc-back-arrow-button-black')
        .verify.elementPresent('div.lpc-close-button-large-black.close-invite', 'x button to close window').pause(model.pause + 500)
        .click('.close-invite')
        .end();
    },
}