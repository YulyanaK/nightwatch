var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');


module.exports = {


  'login to profile settings': function(browser) {
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

  'Verify the organizations name' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("(//div[@class='org-dashboard-card-container'])[5]", 4000).pause(model.pause + 500)
        .click("(//div[@class='org-dashboard-card-container'])[5]")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 4000)
        .click('div.hamburger-holder')
  },

  'verify dropdown visible once user icon clicked' : function (browser) {
      browser
        .verify.elementPresent('div.side-nav-subSection-title', 'selecting a project to initialize the canvas').pause(model.pause + 1500)
        .click('.side-nav-subSection-title')
        //dropdown
        .waitForElementPresent('.dropdown-menu-icon.clickable', 2000)
        .verify.elementPresent('.dropdown-menu-icon.clickable', 'opens dropdown gear icon')
        .click('.dropdown-menu-icon.clickable')
        //notifications
        .verify.elementPresent('.dropdown-menu-selection-wrapper.clickable.clearfix', 'notifications').pause(model.pause + 1500)
        .click('.dropdown-menu-selection-wrapper.clickable.clearfix')
        //team
        .pause(model.pause + 1500)

        .useXpath()
        .verify.elementPresent("(//div[text()='Team'])", 'open team').pause(model.pause + 1000)
        .click("(//div[text()='Team'])")

        .verify.elementPresent("(//div[text()='Integrations'])", 'open integrations').pause(model.pause + 1000)
        .click("(//div[text()='Integrations'])")

        .verify.elementPresent("(//div[text()='Notifications'])", 'open notifications').pause(model.pause + 1000)
        .click("(//div[text()='Notifications'])")

        .verify.elementPresent("(//div[text()='Settings'])", 'open notifications').pause(model.pause + 1000)
        .click("(//div[text()='Settings'])")
        //opens dropdown
        .useCss()
        .verify.elementPresent('.dropdown-menu-icon.clickable', 'team').pause(model.pause + 800)
        .click('.dropdown-menu-icon.clickable')

        .useXpath()
        .click("(//div[@class='dropdown-menu-selection-wrapper clickable clearfix icon'])[2]")

        .useCss()
        .verify.elementPresent('.dropdown-menu-icon.clickable', 'integrations').pause(model.pause + 800)
        .click('.dropdown-menu-icon.clickable')
        
        .useXpath()
        .click("(//div[@class='dropdown-menu-selection-wrapper clickable clearfix icon'])[3]")
        
        .useCss()
        .verify.elementPresent('.dropdown-menu-icon.clickable', 'notifications').pause(model.pause + 800)
        .click('.dropdown-menu-icon.clickable')
        .pause(model.pause + 800)

        .useXpath()
        .click("(//div[@class='dropdown-menu-selection-wrapper clickable clearfix icon'])[4]")

        .useXpath()
        .verify.elementPresent("(//div[text()='Settings'])", 'open notifications').pause(model.pause + 1000)
        .click("(//div[text()='Settings'])")

        .end();
  }
}