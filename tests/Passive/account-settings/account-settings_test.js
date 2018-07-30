var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');

module.exports = {
  // options : {
  //   url : model.url + '/canvas'
  // },

  // before : function(browser, done){
  //   var context = this;
  //   var pastProjectDate = new Date(new Date().getTime() - (86400000*10));
  //   var pastCardDate = new Date(new Date().getTime() - (86400000*9));
  //   var startTest = function () {
  //     browser.url(model.url + '/my-account/settings')
  //     browser.windowMaximize().pause(model.pause + 500)
  //     done()
  //   };
  
  //   controller.initializeCanvas(function(token){
  //     controller.removeAllCards(function(){
  //       browser.url(context.options.url)
  //       browser.setCookie(token);
  //       controller.setProjectDate(pastProjectDate, function(){
  //         startTest()
  //       });
  //     });
  //   })      
  // },
  // after : function (browser, done) {
  //   controller.removeAllCards(function(){
  //     controller.connect().close()
  //     done()
  //   });
  // },

  'login to notifications for profile navigation': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://passive.glidr.io')
        .resizeWindow(1024, 968).pause(model.pause + 500)
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
        .pause(model.pause + 5000)
  },

  'Verify the organizations for profile notifications' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("//div[text()='Nunavut']", 4000)
        //.verify.elementPresent('div.org-dashboard-card-container div:nth-of-type(3)', 'beta codes').pause(model.pause + 500)
        .click("//div[text()='Senegal']")
        .pause(model.pause + 4000)
        
        .verify.elementPresent("//div[@class='profile-image-container profile-image right-nav-profile']//img", 'profile image container is present').pause(model.pause + 500)
        .click("//div[@class='profile-image-container profile-image right-nav-profile']//img")
        .verify.elementPresent("//div[text()='Profile & Account Settings']", 'Profile').pause(model.pause + 500)
        .click("//div[text()='Profile & Account Settings']")
        .pause(model.pause + 3000)
        .click("//div[@class='page-navigation-title ' and text()='Account Settings']").pause(model.pause + 500)


  },

  'verify account settings is selected and its on the correct page and email address and password change functionality' : function (browser) {
      browser
        .verify.elementPresent("//div[@class='user-email-password-title email']", 'verify email').pause(model.pause + 1000)
        .verify.elementPresent("//div[@class='user-email-password-title password']", 'verify password')
        .click("(//div[text()='CHANGE'])[1]")
        .verify.elementPresent("(//input[@class='account-settings-input email'])[1]", ' current password to change email').pause(model.pause + 500)
        .setValue("(//input[@class='account-settings-input email'])[1]", 'Testtest1!')
      browser
        .verify.elementPresent("//input[@placeholder='Enter Email']", 'verify new email').pause(model.pause + 500)
        .click("//input[@placeholder='Enter Email']")
        .setValue("//input[@placeholder='Enter Email']", 'dortiz@launchpadcentral.com')
        .verify.elementPresent("//input[@placeholder='Re-enter email']").pause(model.pause + 500)
      browser
        .click("//input[@placeholder='Re-enter email']")
        .setValue("//input[@placeholder='Re-enter email']", 'dortiz@launchpadcentral.com').pause(model.pause + 500)
        .click("//div[@class='cancel-title']")
        .pause(model.pause + 2000)
        .verify.elementPresent("//div[@class='user-email-password-title email']", 'verify email').pause(model.pause + 1000)
        .verify.elementPresent("//div[@class='user-email-password-title password']", 'verify password')
        .click("(//div[text()='CHANGE'])[2]")
        .verify.elementPresent("(//input[@class='account-settings-input email'])[1]", ' current password to change email').pause(model.pause + 500)
        .setValue("(//input[@class='account-settings-input email'])[1]", 'Testtest1!')
      browser
        .verify.elementPresent("//input[@placeholder='Enter password']", 'verify new password').pause(model.pause + 500)
        .click("//input[@placeholder='Enter password']")
        .setValue("//input[@placeholder='Enter password']", 'Testtest1!')
        .verify.elementPresent("//input[@placeholder='Re-enter password']")
        .pause(model.pause + 500)
      browser
        .click("//input[@placeholder='Re-enter password']")
        .setValue("//input[@placeholder='Re-enter password']", 'Testtest1!').pause(model.pause + 500)
        .click("//div[@class='cancel-title']")
        
        
  },

  'Sign out everywhere': function (browser){
      browser
        .verify.elementPresent("//div[@class='save-update-button sign-out-everywhere']", 'logged out').pause(model.pause + 500)
        .click("//div[@class='save-update-button sign-out-everywhere']")
        .end();
  }
}

