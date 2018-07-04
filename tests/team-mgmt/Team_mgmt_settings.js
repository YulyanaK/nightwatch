var model = require('../../helpers/model');
var controller = require('../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;


module.exports = {
  

  'login to Project dashboard': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://app.staging.glidr.io')
       // .resizeWindow(1024, 768).pause(model.pause + 500)
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
        .waitForElementPresent('div.hamburger-holder', 4000)
        .click('div.hamburger-holder')
        .verify.elementPresent('div.side-nav-organization-name-holder', 'opens left nav').pause(model.pause + 1500)
        .click('div.side-nav-organization-name-holder')
        .verify.elementPresent('div.side-nav-org-options.invite-link', 'invite link is active').pause(model.pause + 4000)
        .click('div.side-nav-org-options.invite-link')
  },

  'Change org settings': function(browser) {
      browser
        .verify.elementPresent('div.content-field-container.organization-setting-input.org-name').pause(model.pause + 1500)
        .click('div.content-field-container.organization-setting-input.org-name')
        .setValue('textarea.content-field-textarea', 'España')
        .clearValue('textarea.content-field-textarea')
        .pause(model.pause + 1000) 
        .setValue('textarea.content-field-textarea', 'Espain')
        .pause(model.pause + 1000) 
        .clearValue('textarea.content-field-textarea')
        .pause(model.pause + 1000) 
        .setValue('textarea.content-field-textarea', 'Spain')
        .pause(model.pause + 1000) 
        .verify.elementPresent('div.management-org-settings-profile-holder', 'hover click').pause(model.pause + 500)
        .click('div.management-org-settings-profile-holder')
        .verify.elementPresent('.file-upload-lable', 'upload profile image').pause(model.pause + 500)
        .click('.file-upload-lable')
        .setValue('input[type="file"]', require('path').resolve(__dirname + '/spain.png'))
        .refresh()
        .pause(model.pause + 1800)
        .end()
    },
}