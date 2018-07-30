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
  },

  'Verify the organizations for profile notifications' : function(browser) {
      browser
        .waitForElementPresent('div.org-dashboard-card-container', 4000)
        .verify.elementPresent('div.org-dashboard-card-container div:nth-of-type(3)', 'beta codes').pause(model.pause + 500)
        .click('div.org-dashboard-card-container div:nth-of-type(3)')
        .pause(model.pause + 2000)
        .useXpath()
        .verify.elementPresent("//img[@class='img-class-right-nav-profile-588115cda5d83900014a4c5c profile-image-adjust']", 'profile image container is present').pause(model.pause + 500)
        .click("//img[@class='img-class-right-nav-profile-588115cda5d83900014a4c5c profile-image-adjust']")
        .verify.elementPresent("//div[text()='Profile & Account Settings']", 'Profile & Account settings').pause(model.pause + 1000)
        .click("//div[text()='Profile & Account Settings']")
        .verify.elementPresent("//div[text()='Access Logs']").pause(model.pause + 500)
        .click("//div[text()='Access Logs']")
        .pause(model.pause + 2000)
        .verify.elementPresent("//span[@class='text-aqua-green font-14']").pause(model.pause + 500)
        .end();
     },
  }      
