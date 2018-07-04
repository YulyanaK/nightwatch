var model = require('../../helpers/model');
var controller = require('../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;

module.exports = {


  'login': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://app.glidr.io')
        .resizeWindow(1366, 768).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'looks for glidr logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'searches for active container for email').pause(model.pause + 500)
        .click('div.signin-form-container')
      browser
        .setValue('input[type=text]', 'dortiz@glidr.io')
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
        .waitForElementPresent('div.org-dashboard-card-container', 4000)
        .verify.elementPresent('.org-dashboard-card-container', 'entering basic tier organization').pause(model.pause + 500)

        .useXpath()
        .click("(//div[@class='org-dashboard-card-container'])[9]")

    },

  'Navigates modal' : function (browser) {
      browser
        .pause(model.pause + 1500)
        .verify.elementPresent("(//div[@class='dot unselected'])", 'first assumption').pause(model.pause + 1500)
        .click("(//div[@class='dot unselected'])")
        .pause(model.pause + 1500)
        .verify.elementPresent("(//div[@class='dot unselected'])[2]", 'second assumption').pause(model.pause + 1500)
        .click("(//div[@class='dot unselected'])[2]")
        .pause(model.pause + 1500)

        .pause(model.pause + 1500)
        .setValue("(//textarea[@class='content-field-textarea'])", 'new value to set')

        .pause(model.pause + 1500)
        .setValue("(//textarea[@class='content-field-textarea'])[2]", 'second value to set')

        .pause(model.pause + 1500)
        .setValue("(//textarea[@class='content-field-textarea'])[3]", 'third value to set')

        .useCss()
        .verify.elementPresent('div.button-text', 'start').pause(model.pause + 1500)
        .click('div.button-text')
    },
    

  'Guide tour' : function(browser){
      browser
        .useXpath()
        .verify.elementPresent("(//div[text()='Run Research'])", 'run research').pause(model.pause + 1500)
        .click("//div[text()='Run Research']")

        .verify.elementPresent("(//div[@class='float-left nav-dropdown-styles clickable'])", 'open checklist').pause(model.pause + 1500)
        .click("(//div[@class='float-left nav-dropdown-styles clickable'])")

        .verify.elementPresent("(//div[text()='Add Evidence'])", 'add evidence').pause(model.pause + 1500)
        .click("//div[text()='Add Evidence']")

        .verify.elementPresent("(//div[@class='float-left nav-dropdown-styles clickable'])", 'open checklist').pause(model.pause + 1500)
        .click("(//div[@class='float-left nav-dropdown-styles clickable'])")  

        .verify.elementPresent("(//div[text()='Run an Experiment'])", 'run an experiment').pause(model.pause + 1500)
        .click("//div[text()='Run an Experiment']")

        .verify.elementPresent("(//div[@class='float-left nav-dropdown-styles clickable'])", 'open checklist').pause(model.pause + 2000)
        .click("(//div[@class='float-left nav-dropdown-styles clickable'])")     

        .verify.elementPresent("(//div[text()='Tour the Canvas'])", 'tour the canvas').pause(model.pause + 2000)
        .click("//div[text()='Tour the Canvas']")

        .verify.elementPresent("(//div[@class='float-left nav-dropdown-styles clickable'])", 'open checklist').pause(model.pause + 200)
        .click("(//div[@class='float-left nav-dropdown-styles clickable'])")

        .verify.elementPresent("(//div[text()='Tour the  Overview'])", 'tour the overview').pause(model.pause + 2000)
        .click("//div[text()='Tour the  Overview']")

        .verify.elementPresent("(//div[@class='float-left nav-dropdown-styles clickable'])", 'open checklist').pause(model.pause + 2000)
        .click("(//div[@class='float-left nav-dropdown-styles clickable'])") 

        .verify.elementPresent("(//div[text()='Run Research'])", 'Run Research').pause(model.pause + 2000)
        .click("//div[text()='Run Research']")

        .verify.elementPresent("(//div[@class='float-left nav-dropdown-styles clickable'])", 'open checklist').pause(model.pause + 2000)
        .click("(//div[@class='float-left nav-dropdown-styles clickable'])") 

        .verify.elementPresent("(//div[@class='checklist-not-show-text'])", 'dont open this menu automatically').pause(model.pause + 2000)
        .click("//div[@class='checklist-not-show-text']")

        .verify.elementPresent("(//div[@class='float-left nav-dropdown-styles clickable'])", 'open checklist').pause(model.pause + 2000)
        .click("(//div[@class='float-left nav-dropdown-styles clickable'])") 
},

 'Help Center' : function(browser){
     browsers
        .verify.elementPresent("(//div[text()='Help Center'])", 'open help center').pause(model.pause + 1000)
        .click("//div[@class='HELP CENTER']")

        .verify.elementPresent("(//div[text()='Help Center'])", 'help center').pause(model.pause + 1000)
        .verify.elementPresent("(//div[text()='Getting Started'])", 'getting started').pause(model.pause + 1000)
        .verify.elementPresent("(//div[text()='Discovery Tools & Methods'])", 'discovery').pause(model.pause + 1000)
        .verify.elementPresent("(//div[text()='GLIDR Blog'])", 'blog').pause(model.pause + 1000)
        .click("(//div[@class='checklist-x-icon']")
 },



 'Navigates right drawer' : function (browser) {
      browser
        .useCss()
        .pause(model.pause + 1500)
        .verify.elementPresent('div.profile-image-container.profile-image.right-nav-profile', 'opens right drawer for settings and billing').pause(model.pause + 1500)
        .click('div.profile-image-container.profile-image.right-nav-profile')

        .useXpath()
        .verify.elementPresent("(//div[@class='profile-settings-text profile-drawer-upper'])", 'opens profile settings').pause(model.pause + 1500)
        .click("(//div[@class='profile-settings-text profile-drawer-upper'])")

        .useCss()
        .verify.elementPresent('div.profile-image-container.profile-image.right-nav-profile', 'opens right drawer for settings and billing').pause(model.pause + 1500)
        .click('div.profile-image-container.profile-image.right-nav-profile')

        .useXpath()
        .verify.elementPresent("(//div[@class='profile-settings-text profile-drawer-upper'])[2]", 'opens notifications').pause(model.pause + 1500)
        .click("(//div[@class='profile-settings-text profile-drawer-upper'])[2]")

        .useCss()
        .verify.elementPresent('div.profile-image-container.profile-image.right-nav-profile', 'opens right drawer for settings and billing').pause(model.pause + 1500)
        .click('div.profile-image-container.profile-image.right-nav-profile')
    
        .verify.elementPresent('div.profile-settings-text.undefined', 'help').pause(model.pause + 1500)
        .click('div.profile-settings-text.undefined')
        .verify.elementPresent('div.wistia_placebo_close_button', 'closes help video').pause(model.pause + 500)
        .click('div.wistia_placebo_close_button')

        .useXpath()
        .verify.elementPresent("(//div[@class='profile-drawer-icon undefined'])[7]", 'team settings').pause(model.pause + 1500)
        .click("(//div[@class='profile-drawer-icon undefined'])[7]")

        .useCss()
        .verify.elementPresent('div.profile-image-container.profile-image.right-nav-profile', 'opens right drawer for settings and billing').pause(model.pause + 1500)
        .click('div.profile-image-container.profile-image.right-nav-profile')

        .useXpath()
        .verify.elementPresent("(//div[@class='profile-drawer-icon undefined'])[8]", 'team management').pause(model.pause + 1500)
        .click("(//div[@class='profile-drawer-icon undefined'])[8]")

        .useCss()
        .verify.elementPresent('div.profile-image-container.profile-image.right-nav-profile', 'opens right drawer for settings and billing').pause(model.pause + 1500)
        .click('div.profile-image-container.profile-image.right-nav-profile')

        .useXpath()
        .verify.elementPresent("(//div[@class='profile-drawer-icon undefined'])[9]", 'billing').pause(model.pause + 1500)
        .click("(//div[@class='profile-drawer-icon undefined'])[9]")

        .useCss()
        .verify.elementPresent('div.profile-image-container.profile-image.right-nav-profile', 'opens right drawer for settings and billing').pause(model.pause + 1500)
        .click('div.profile-image-container.profile-image.right-nav-profile')

        .useXpath()
        .verify.elementPresent("(//div[@class='profile-drawer-icon undefined'])[10]", 'integrations').pause(model.pause + 1500)
        .click("(//div[@class='profile-drawer-icon undefined'])[10]")

        .useCss()
        .verify.elementPresent('div.profile-drawer-icon.bottom', 'sign out').pause(model.pause + 1500)
        .click('div.profile-drawer-icon.bottom')

        .perform(function (browser) {
            console.log(window.resetOnboarding()) 
             [browser.Keys.ENTER]       
         })
        

        .end();
  },

}