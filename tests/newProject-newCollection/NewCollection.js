// this file needs to be updated. might not need it since we only can create a project not add a project
var model = require('../../helpers/model.js');
var controller = require('../../helpers/controller.js');
var ObjectId = require('mongodb')

 module.exports = {


  'login to create new collection': function(browser) {
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
        .waitForElementPresent('div.hamburger-holder', 6000)
        .click('div.hamburger-holder')
        .verify.elementPresent('div.side-nav-organization-name-holder', 'opens left nav').pause(model.pause + 500)
        .click('div.side-nav-organization-name-holder')
  },

  'create a collection' : function(browser) {
      browser
        .verify.elementPresent('div.side-nav-options-holder.bottom > div.side-nav-org-options:nth-of-type(2)', 'opens left nav create a project').pause(model.pause + 500)
        .click('div.side-nav-options-holder.bottom > div.side-nav-org-options:nth-of-type(2)')
        .verify.elementPresent('div.reusable-text-area.name', 'opens to create a new collection').pause(model.pause + 500)
        .click('textarea.reusable-input')
        .setValue('textarea.reusable-input', 'Las Canciones mas famosas del mundo')
        .verify.elementPresent('div.reusable-text-area.description').pause(model.pause + 500)
        .click('div.reusable-text-area.description')
        .setValue('div.reusable-text-area.description > textarea.reusable-input', 'el divo de Mexico Juan Gabriel')
        .verify.elementPresent('div.create-collection-nav-button').pause(model.pause + 500)
        .click('div.create-collection-nav-button')
        .verify.elementPresent('div.create-collection-project-option.clearfix', 'selecting a collection 1').pause(model.pause + 1500)
        .click('div.create-collection-project-option.clearfix')
        .verify.elementPresent('div.create-collection-project-option.clearfix', 'selecting a collection 2').pause(model.pause + 1500)
        .click('div.create-collection-project-option.clearfix')
        .verify.elementPresent('div.create-collection-project-option.clearfix', 'selecting a collection 3').pause(model.pause + 1500)
        .click('div.create-collection-project-option.clearfix')
        .verify.elementPresent('div.create-collection-project-option.clearfix', 'selecting a collection 4').pause(model.pause + 1500)
        .click('div.create-collection-project-option.clearfix')

      browser
        .useXpath()
        .click("(//div[@class='cancel-icon lpc-close-cancel-mini-icon-blue'])[1]")

        .useCss()
        .verify.elementPresent('div.create-collection-nav-button', 'click button').pause(model.pause + 500)
        .click('div.create-collection-nav-button')

  },

  'Adding a project to a collection' : function(browser){
      browser
        .waitForElementPresent('div > input.collection-settings-add-project-input', 4000)
        .click('input.collection-settings-add-project-input')
        .verify.elementPresent('div.collection-settings-option-data-test', 'checking a collection').pause(model.pause + 500)
        .click('div.collection-settings-option-data-test')

        .useXpath()
        .click("(//div[@class='collection-remove-project clickable'])[1]")
        .pause(model.pause + 500)
        .click("//div[@class='collection-add-project-close clickable']")
        .pause(model.pause + 500)
        .click("//div[@class='page-navigation-title ']")
        .pause(model.pause + 1000)

  },


  'collection settings are working and make sure collection gets deleted' : function(browser) {
      browser
        .pause(model.pause + 800)
        .clearValue("(//textarea[@class='content-field-textarea'])[1]")
        .setValue("(//textarea[@class='content-field-textarea'])[1]", 'Nightwatch testing')
        .pause(model.pause + 1000)
        .clearValue("(//textarea[@class='content-field-textarea'])[2]")
        .setValue("(//textarea[@class='content-field-textarea'])[2]", 'collection despcription')
        .pause(model.pause + 1000)
        .click("//div[@class='float-right clickable']")
        .click("//div[@class='collections-confirm-delete-button float-left clickable']")
        .pause(model.pause + 500)
        .click("//div[@class='float-right clickable']")
        .click("//div[@class='collections-confirm-delete-button delete float-left clickable']")
        .pause(model.pause + 500)
        .end();  
  },
}