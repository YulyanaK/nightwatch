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
  //     browser.url(model.url + '/my-account')
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
  },

  'verify account settings navigation and re route navigation' : function (browser) {
      browser
        .verify.elementPresent('div.profile-settings-text.profile-account', 'Profile').pause(model.pause + 500)
        .click('div.profile-settings-text.profile-account')
        .verify.elementPresent('div[data-test="/my-account/notifications"]', 'account settings')
        .click('div[data-test="/my-account/notifications"]')
        .verify.elementPresent('div[data-test="/my-account/notifications"]', 'notifications')
        .click('a[data-test="/my-account/notifications"]')
        .verify.elementPresent('div[data-test="/my-account/access-logs"]', 'access logs')
        .click('a[data-test="/my-account/access-logs"]')
  },

  'my account settings navigation mobile should become a dropdown': function(browser) {
      browser
        .resizeWindow(400, 600).pause(model.pause + 500)
        .verify.elementPresent('a[data-test="/my-account/access-logs"]', 'access logs is selected in dropdown').pause(model.pause + 500)
        .verify.elementPresent('ul.dropdown.menu.page-navigation-routes')
        .click('ul.dropdown.menu.page-navigation-routes')
        .verify.elementPresent('a[data-test="/my-account/settings"]', 'notifications is present').pause(model.pause + 800)
        .click('a[data-test="/my-account/notifications"]')
        .verify.elementPresent('a[data-test="/my-account/notifications"]', 'notificationsis selected in dropdown').pause(model.pause + 800)
        .click('ul.dropdown.menu.page-navigation-routes')
        .verify.elementPresent('a[data-test="/my-account/settings"]', 'account settings is present').pause(model.pause + 800)
        .click('a[data-test="/my-account/access-logs"]')
        .verify.elementPresent('a[data-test="/my-account/settings"]', 'profile is present').pause(model.pause + 800)
        .click('ul.dropdown.menu.page-navigation-routes')
        .verify.elementPresent('a[data-test="/my-account/profile"]', 'profile is selected in the dropdown dropdown').pause(model.pause + 800)
        .click('a[data-test="/my-account/settings"]')
    .end();
  },
}

