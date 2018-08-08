 var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;

module.exports = {


  'login for page routing': function(browser) {
    browser
        .url('https://passive.glidr.io')
        .resizeWindow(1366, 768).pause(model.pause + 500)
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
    },

  'Verify the project name' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("(//div[@class='org-dashboard-card-container'])[5]", 4000).pause(model.pause + 500)
        .click("(//div[@class='org-dashboard-card-container'])[5]")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 6000)
        .click('div.hamburger-holder')
    },


  'intialize on the canvas': function(browser) {
      browser
      .waitForElementPresent('.side-nav-subSection-title', 4000)
      .verify.elementPresent('div.side-nav-subSection-title', 'selecting a project to initialize the canvas').pause(model.pause + 1500)
      .click('.side-nav-subSection-title')
      .element('css selector', 'div.checklist-x-icon', function(result){
            if (result.value && result.value.ELEMENT) {
                // Element is present, do the appropriate tests
                browser.click('div.checklist-x-icon');
            } else {
                // Element is not present.
            }
        });
      //.verify.elementPresent('div.checklist-x-icon', 'closes help center').pause(model.pause + 1500)
      //.click('div.checklist-x-icon')
      browser
      .verify.elementPresent('div.clickable.float-right', 'opens the canvas').pause(model.pause + 500)
      .click('div.clickable.float-right')
      .pause(model.pause + 1500)

  },

  'route to the activity feed': function(browser) {
      browser
        .useXpath()
        .verify.elementPresent("//div[@class='nav-center-container   ']//div//a[2]/div", 'verifies for activity link and icon').pause(model.pause + 500)
        .click("//div[@class='nav-center-container   ']//div//a[2]/div")
        .useCss()
        //.verify.cssClassPresent('div[data-test="activity-nav"]', "active").pause(model.pause + 500)
        .verify.urlContains('activity').pause(model.pause + 500)
        .verify.elementPresent('.activity-main-container', 'activity main container').pause(model.pause + 500)
  },

    'route to the dashboard': function(browser) {
      browser
        .useXpath()
        .click("//div[@class='nav-center-container   ']//div//a[3]/div")
        .useCss()
        //.verify.cssClassPresent('div[data-test="dashboard-nav"]', "active").pause(model.pause + 500)
        .verify.urlContains('dashboard').pause(model.pause + 1500)
  },

    'route back to canvas': function(browser) {
      browser
        .useXpath("//div[@class='nav-center-container   ']//div//a[1]/div")
        .click("//div[@class='nav-center-container   ']//div//a[1]/div").pause(model.pause + 1500)
        .useCss()
        //.verify.cssClassPresent('div[data-test="workspace-nav"]', "active").pause(model.pause + 500)
        .verify.urlContains('workspace').pause(model.pause + 500)
        .verify.elementPresent('.main-content-area', 'main content area').pause(model.pause + 500)
        .verify.elementPresent('div.clickable.float-right', 'opens the canvas').pause(model.pause + 500)
        .click('div.clickable.float-right')
    .end();
  }
}