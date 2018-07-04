var model = require('../../helpers/model');
var controller = require('../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;

module.exports = {


  'login to a new collection to test gear icon': function(browser) {
      browser
        .url('https://app.staging.glidr.io')
        //.resizeWindow(1024, 768).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'checks for logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'checks for container to log in').pause(model.pause + 500)
        .click('div.signin-form-container')
        .setValue('input[type=text]', 'dortiz@launchpadcentral.com')
        .verify.elementPresent('div.signin-form-container', 'checks for container for email').pause(model.pause + 500)
        .click('input[type=password]')
        .setValue('input[type=password]', 'Testtest1!')
        .click('div.signup-show-password')
        .verify.elementPresent('div.login-button', 'checks for button').pause(model.pause + 500)
        .click('div.login-button')
  },

  'Verifies side nav container opens to test collections' : function(browser) {
      browser
        .waitForElementPresent('div.org-dashboard-card-container', 4000)
        .verify.elementPresent('.org-dashboard-card-container', 'entering basic tier organization').pause(model.pause + 500)

        .useXpath()
        .click("(//div[@class='org-dashboard-card-container'])[8]")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 4000)
        .click('div.hamburger-holder')
  },

  'Side nav opens for a new collection to test gear icon' : function(browser) {
      browser
        .useXpath()
        .verify.elementPresent("(//div[@class='side-nav-settings-icons'])[16]", 'opens a collection').pause(model.pause + 800)
        .click("(//div[@class='side-nav-settings-icons'])[16]")       
 
        .useCss()
        .verify.elementPresent('div.collection-settings-add-project-searchbox-holder.position-relative', 'opens for search').pause(model.pause + 800)
        .click('div.collection-settings-add-project-searchbox-holder.position-relative')
        
        .useXpath()
        .verify.elementPresent("(//div[@class='collection-settings-project-title'])", 'selects a collection').pause(model.pause + 800)
        .click("(//div[@class='collection-settings-project-title'])")       

        .useCss()
        .verify.elementPresent('div.collection-settings-add-project-searchbox-holder.position-relative', 'opens for search').pause(model.pause + 800)
        .click('div.collection-settings-add-project-searchbox-holder.position-relative')
        
        .useXpath()
        .click("(//div[@id='/collection-settings/59bab73e057c4a0001ff28c3/settings'])")

        .click("(//textarea[@class='content-field-textarea'])")
        .setValue("(//textarea[@class='content-field-textarea'])", ['Nightwatch testing on collections', browser.Keys.ENTER])

        .click("(//textarea[@class='content-field-textarea'])[2]")
        .setValue("(//textarea[@class='content-field-textarea'])[2]", ['Clean syntax Simple but powerful syntax which enables you to write tests very quickly, using only Javascript (Node.js) and CSS or Xpath selectors. Selenium server Controls the Selenium standalone server automatically in a separate child process; can be disabled if Selenium runs on another host. CSS & Xpath support Either CSS or Xpath selectors can be used to locate and verify elements on the page or execute commands. Easy to extend Flexible command and assertion framework which makes it easy to extend to implement your application specific commands and assertions.', browser.Keys.ENTER])

        .useCss()
        .verify.elementPresent('div.float-right.clickable', 'button for delete collection').pause(model.pause + 1500)
        .click('div.float-right.clickable')
        .verify.elementPresent('div.collections-confirm-delete-button.float-left.clickable', 'confirm delete').pause(model.pause + 1500)
        .click('div.collections-confirm-delete-button.float-left.clickable')
        .end();  
  },
}