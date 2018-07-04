var model = require('../../helpers/model');
var controller = require('../../helpers/controller');

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
        .url('https://app.stage.glidr.io')
        .resizeWindow(1024, 968).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'looks for glidr logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'searches for active container for email').pause(model.pause + 500)
        .click('div.signin-form-container')
      browser
        .setValue('input[type=text]', 'ortizcdavid@gmail.com')
        .verify.elementPresent('div.signin-form-container', 'searches for active container for password').pause(model.pause + 500)
        .click('input[type=password]')
      browser
        .setValue('input[type=password]', 'Sandpaper@347!')
        .click('div.signup-show-password')
        .verify.elementPresent('div.login-button', 'checks for button is active').pause(model.pause + 500)
        .click('div.login-button')
  },

  'Verify the organizations for profile notifications' : function(browser) {
      browser
        .waitForElementPresent('div.org-dashboard-card-container', 4000)
        .verify.elementPresent('div.org-dashboard-card-container div:nth-of-type(3)', 'beta codes').pause(model.pause + 500)
        .click('div.org-dashboard-card-container div:nth-of-type(3)')
        .pause(model.pause + 2000)
        .verify.elementPresent('img.profile-image.small-profile', 'profile image container is present').pause(model.pause + 500)
        .click('img.profile-image.small-profile')
        .verify.elementPresent('div.profile-settings-text.profile-account', 'Profile').pause(model.pause + 500)
        .click('div.profile-settings-text.profile-account')
        .url('https://app.stage.glidr.io/my-account/settings')
        .verify.elementPresent('div.account-email-password-title')
  },

  'verify account settings is selected and its on the correct page and email address and password change functionality' : function (browser) {
      browser
        .verify.elementPresent('div.profile-settings-text.profile-account', 'Account settings password').pause(model.pause + 500)
        .verify.elementPresent('div.change-button-holder.email', 'verify email')
        .click('div.change-button-holder.email')
        .verify.elementPresent('input.account-settings-input.email', ' current password to change email').pause(model.pause + 500)
        .setValue('input.account-settings-input.email', 'Davito@1324!')
      browser
        .verify.elementPresent('input.account-settings-input.email:nth-child(2)', 'verify new email').pause(model.pause + 500)
        .clcik('input.account-settings-input.email:nth-child(2)')
        .setValue('input.account-settings-input.email:nth-child(2)', 'karenubence@comcast.net')
        .verify.elementPresent('input.account-settings-input.email:nth-child(2)').pause(model.pause + 500)
      browser
        .clcik('input.account-settings-input.email:nth-child(3)')
        .setValue('input.account-settings-input.email:nth-child(3)', 'karenubence@comcast.net').pause(model.pause + 500)
        .click('div.cancel-title')
        .verify.elementPresent('div.change-button-holder.email', 'verify email').pause(model.pause + 500)
        .click('div.change-button-holder.email')
        .verify.elementPresent('input.account-settings-input.email', ' current password to change email').pause(model.pause + 500)
        .setValue('input.account-settings-input.email', 'Davito@1324!')
      browser
        .verify.elementPresent('input.account-settings-input.email:nth-child(2)', 'verify new email').pause(model.pause + 500)
        .clcik('input.account-settings-input.email:nth-child(2)')
        .setValue('input.account-settings-input.email:nth-child(2)', 'karenubence@comcast.net')
        .verify.elementPresent('input.account-settings-input.email:nth-child(2)').pause(model.pause + 500)
      browser
        .clcik('input.account-settings-input.email:nth-child(3)')
        .setValue('input.account-settings-input.email:nth-child(3)', 'karenubence@comcast.net').pause(model.pause + 500)
        .click('div.cancel-title')
        .verify.elementPresent('div.change-button-holder.email', 'verify email').pause(model.pause + 500)
        .click('div.change-button-holder.email')
  },

  'Sign out everywhere': function (browser){
      browser
        .verify.elementPresent('.change-button-holder-form.sign-out-everywhere', 'logged out').pause(model.pause + 500)
        .click('.change-button-holder-form.sign-out-everywhere')
        .end();
  }
}

