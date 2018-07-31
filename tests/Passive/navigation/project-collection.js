var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;

module.exports = {


  'login to a new collection to test gear icon': function(browser) {
      browser
        .url('https://passive.glidr.io')
        .resizeWindow(1366, 768).pause(model.pause + 500)
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
        .click("(//div[@class='org-dashboard-card-container'])[10]")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 4000)
        .click('div.hamburger-holder')
  },

  'Side nav opens for a new collection to test gear icon' : function(browser) {
      browser
        .useXpath()
       .verify.elementPresent("(//div[@class='side-nav-settings-icons'])[12]", 'opens a collection').pause(model.pause + 1800)
        .click("(//div[@class='side-nav-settings-icons'])[12]") 
        .pause(model.pause + 2500)

        .click("(//textarea[@class='content-field-textarea'])") 
        .pause(model.pause + 500)   
        .setValue("(//textarea[@class='content-field-textarea'])", ['Nightwatch testing on collections', browser.Keys.ENTER]).pause(model.pause + 500)

        .click("(//textarea[@class='content-field-textarea'])[2]")
        .pause(model.pause + 500)
        .setValue("(//textarea[@class='content-field-textarea'])[2]", ['Clean syntax Simple but powerful syntax which enables you to write tests very quickly, using only Javascript (Node.js) and CSS or Xpath selectors. Selenium server Controls the Selenium standalone server automatically in a separate child process; can be disabled if Selenium runs on another host. CSS & Xpath support Either CSS or Xpath selectors can be used to locate and verify elements on the page or execute commands. Easy to extend Flexible command and assertion framework which makes it easy to extend to implement your application specific commands and assertions.', browser.Keys.ENTER])

        .clearValue("(//textarea[@class='content-field-textarea'])")
        .pause(model.pause + 500)
        .clearValue("(//textarea[@class='content-field-textarea'])")
        .setValue("(//textarea[@class='content-field-textarea'])", 'Nightwatch testing')
        .pause(model.pause + 1000)
        .clearValue("(//textarea[@class='content-field-textarea'])[2]")
        .pause(model.pause + 500)
        .setValue("(//textarea[@class='content-field-textarea'])[2]", 'collection despcription, Clean syntax Simple but powerful syntax which enables you to write tests very quickly, using only Javascript (Node.js) and CSS ')
        .pause(model.pause + 1000)
        .click("//div[@class='float-right clickable']")
        .pause(model.pause + 1500)
        .click("//div[@class='collections-confirm-delete-button float-left clickable']")
        .pause(model.pause + 1500)
        .click("//div[@class='float-right clickable']")
        .pause(model.pause + 1500)
        .click("//div[@class='collections-confirm-delete-button delete float-left clickable']")
        .pause(model.pause + 1500)
        .end();  
  },
}