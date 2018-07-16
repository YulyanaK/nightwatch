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
        .url('https://app.glidr.io')
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
        .click("//div[@class='org-dashboard-card-title' and text()='Ghana']")
        .pause(model.pause + 2000)
        .click("//div[@class='profile-text text-nav ']")
        .pause(model.pause + 2000)
        .click("//div[@class='profile-settings-text profile-drawer-upper' and text()='Profile & Account Settings']")
        .pause(model.pause + 500)
        .click("//div[@id='/my-account/access-logs']")
        .pause(model.pause + 500)
        .verify.elementPresent("//span[@class='text-aqua-green font-14']")
        .pause(model.pause + 500)
        .end();
     },
  }      
