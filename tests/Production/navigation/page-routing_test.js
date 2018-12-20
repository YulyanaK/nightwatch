 var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;

module.exports = {


  'login for page routing': function(browser) {
    browser
        .url('https://app.glidr.io')
        .resizeWindow(1366, 768).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'looks for glidr logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'seraches for active container for email').pause(model.pause + 500)
        .click('div.signin-form-container')
      browser
        .setValue('input[type=text]', 'ykarpava+automation@glidr.io')
        .verify.elementPresent('div.signin-form-container', 'searches for active container for password').pause(model.pause + 500)
        .click('input[type=password]')
      browser
        .setValue('input[type=password]', 'Brooklyn1!')
        .click('div.signup-show-password')
        .verify.elementPresent('div.login-button', 'checks for button is active').pause(model.pause + 500)
        .click('div.login-button')
    },

  'Verify the project name' : function(browser) {
      browser
        .useXpath()
        .frame("intercom-borderless-frame")
        .element('xpath', "//div[text()='Which one most closely matches your role?']", function(result){
            if (result.value && result.value.ELEMENT) {
                // Element is present, do the appropriate tests
                browser.click("//div[text()='Which one most closely matches your role?']")
                .waitForElementPresent("//div[@class='intercom-borderless-dismiss-button']", 6000)
                .click("//div[@class='intercom-borderless-dismiss-button']");
            } else {
                // Element is not present.
            }
        });

    browser
        .frame(null)
        .useXpath()
        .waitForElementPresent("//div[@class='org-dashboard-card-title' and text()='Senegal_QA']", 6000).pause(model.pause + 500)
        .moveToElement("//div[@class='org-dashboard-card-title' and text()='Senegal_QA']", 10, 10)
        .click("//div[@class='org-dashboard-card-title' and text()='Senegal_QA']")
        .pause(model.pause + 2000)

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 10000)
        .click('div.hamburger-holder')
    },


  'intialize on the canvas': function(browser) {
      browser
      .waitForElementPresent('.side-nav-subSection-title', 6000)
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
  },

  'route to the activity feed': function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("(//div[@class='dropdown-menu-icon clickable '])[2]", 6000, 'verifies for activity link and icon')
        .click("(//div[@class='dropdown-menu-icon clickable '])[2]")
        .waitForElementPresent("//*[text()='Activity Feed']", 6000)
        .click("//*[text()='Activity Feed']")

        .useCss()
        //.verify.cssClassPresent('div[data-test="activity-nav"]', "active").pause(model.pause + 500)
        .verify.urlContains('activity').pause(model.pause + 500)
        .verify.elementPresent('.activity-main-container', 'activity main container').pause(model.pause + 500)
  },

    'route to the dashboard': function(browser) {
      browser
        .useXpath()
        .click("(//div[@class='dropdown-menu-icon clickable '])[2]")
        .waitForElementPresent("//*[text()='Dashboard']", 6000)
        .click("//*[text()='Dashboard']")
        .useCss()
        //.verify.cssClassPresent('div[data-test="dashboard-nav"]', "active").pause(model.pause + 500)
        .verify.urlContains('dashboard').pause(model.pause + 1500)
  },

    'route back to canvas': function(browser) {
      browser
        .useXpath()
        .click("//div[@class='nav-route position-relative ' and text()='Discovery']")
        .useCss()
        //.verify.cssClassPresent('div[data-test="workspace-nav"]', "active").pause(model.pause + 500)
        .verify.urlContains('active').pause(model.pause + 500)
        .useXpath()
        .click("//div[@class='nav-route position-relative ' and text()='Ideas']")
        .useCss()
        .verify.urlContains('canvas').pause(model.pause + 500)
        .useXpath()
        .click("//div[@class='nav-route position-relative  nav-route-last' and text()='Evidence']")
        .useCss()
        .verify.urlContains('evidence').pause(model.pause + 500)
    .end();
  }
}