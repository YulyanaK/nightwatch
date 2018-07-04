var model = require('../../helpers/model');
var controller = require('../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;

module.exports = {

  'login to canvas': function(browser) {
      browser
        .url('https://app.staging.glidr.io')
       .resizeWindow(1366, 768).pause(model.pause + 500)
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
    },

  'Verify the project name for canvas' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("(//div[@class='org-dashboard-card-container'])[11]", 4000).pause(model.pause + 500)
        .click("(//div[@class='org-dashboard-card-container'])[11]")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 4000)
        .click('div.hamburger-holder')
    },


  'verify dropdown visible once overflow icon is clicked and project notifications shows' : function (browser) {
      browser
        .verify.elementPresent('div.side-nav-settings-icons', 'selecting a project to initialize settings').pause(model.pause + 1500)
        
        .useXpath()
        .click("(//div[@class='side-nav-settings-icons'])[2]")
        
        .useCss()
        .pause(model.pause + 1500)
        //.verify.elementPresent('div[data-test="/project-settings/59b6ec9ab57edd000186af0b/notifications"]', 'Project Notifications').pause(model.pause + 1500)
        .verify.elementPresent('div.project-notifications-toggle-circle.on', 'project settings turn off').pause(model.pause + 1500)
        .click('div.project-notifications-toggle-circle.on')
        .verify.elementPresent('div.project-notifications-toggle-circle.off', 'turn on').pause(model.pause + 1500)
        .click('div.project-notifications-toggle-circle.off')
        .verify.elementPresent('div.custom-toggle-container.notification').pause(model.pause + 1500)
        .click('div.custom-toggle-container.notification')
        .click('div.custom-toggle-container.notification')
        .verify.elementPresent('div.custom-toggle-container.notification', 'on and off email mentions').pause(model.pause + 1500)

        .useXpath()
        .verify.elementPresent("(//div[@class='custom-toggle-container notification'])", 'mentions of my name in email' ).pause(model.pause + 800)
        .click("(//div[@class='custom-toggle-container notification'])")
        .pause(model.pause + 800)
        .click("(//div[@class='custom-toggle-container notification'])")

        .verify.elementPresent("(//div[@class='custom-toggle-container notification'])[2]", 'mentions of my name in app' ).pause(model.pause + 800)
        .click("(//div[@class='custom-toggle-container notification'])[2]")
        .pause(model.pause + 800)
        .click("(//div[@class='custom-toggle-container notification'])[2]")

        .verify.elementPresent("(//div[@class='custom-toggle-container notification'])[3]", 'comments on cards in the project in app').pause(model.pause + 800)
        .click("(//div[@class='custom-toggle-container notification'])[3]")
        .pause(model.pause + 800)
        .click("(//div[@class='custom-toggle-container notification'])[3]")

        .verify.elementPresent("(//div[@class='custom-toggle-container notification'])[4]", 'comments on cards in the project email').pause(model.pause + 800)
        .click("(//div[@class='custom-toggle-container notification'])[4]")
        .pause(model.pause + 800)
        .click("(//div[@class='custom-toggle-container notification'])[4]")
        
        .verify.elementPresent("(//div[@class='custom-toggle-container notification'])[5]", 'activity on cards I have favorited in app').pause(model.pause + 800)
        .click("(//div[@class='custom-toggle-container notification'])[5]")
        .pause(model.pause + 800)
        .click("(//div[@class='custom-toggle-container notification'])[5]")
    
        .verify.elementPresent("(//div[@class='custom-toggle-container notification'])[6]", 'activity on cards I have favorited email').pause(model.pause + 800)
        .click("(//div[@class='custom-toggle-container notification'])[6]")
        .pause(model.pause + 800)
        .click("(//div[@class='custom-toggle-container notification'])[6]")

        .verify.elementPresent("(//div[@class='custom-toggle-container notification'])[7]", 'new cards added to the project in app').pause(model.pause + 800)
        .click("(//div[@class='custom-toggle-container notification'])[7]")
        .pause(model.pause + 800)
        .click("(//div[@class='custom-toggle-container notification'])[7]")
    
        .verify.elementPresent("(//div[@class='custom-toggle-container notification'])[8]", 'new cards added to the project email').pause(model.pause + 800)
        .click("(//div[@class='custom-toggle-container notification'])[8]")
        .pause(model.pause + 800)
        .click("(//div[@class='custom-toggle-container notification'])[8]")

        .verify.elementPresent("(//div[@class='custom-toggle-container notification'])[9]", 'edits to cards in the project in app').pause(model.pause + 800)
        .click("(//div[@class='custom-toggle-container notification'])[9]")
        .pause(model.pause + 800)
        .click("(//div[@class='custom-toggle-container notification'])[9]")

        .verify.elementPresent("(//div[@class='custom-toggle-container notification'])[10]", 'edits to cards in the project in email').pause(model.pause + 800)
        .click("(//div[@class='custom-toggle-container notification'])[10]")
        .pause(model.pause + 800)
        .click("(//div[@class='custom-toggle-container notification'])[10]")

        .useCss()
        .verify.elementPresent('div.profile-image-container.profile-image.right-nav-profile', 'opens right drawer for settings and billing').pause(model.pause + 1500)
        .click('div.profile-image-container.profile-image.right-nav-profile')
        .verify.elementPresent('div.profile-drawer-icon.bottom', 'sign out').pause(model.pause + 1500)
        .click('div.profile-drawer-icon.bottom')
        .end();
  },

}