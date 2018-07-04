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
  //     browser.url(model.url + '/my-account/notifications')
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

  'login to notifications in profile': function(browser) {
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
  },

  'verify all checkboxes in in-app are active and onClick functionality works' : function (browser) {
      browser
        .pause(model.pause + 1000)
        .verify.elementPresent('img.profile-image.small-profile', 'profile image container is present').pause(model.pause + 500)
        .click('img.profile-image.small-profile')
        .verify.elementPresent('div.profile-settings-text.notification-preferences').pause(model.pause + 500)
        .click('div.profile-settings-text.notification-preferences')
        .verify.elementPresent('div[data-test="mention-inApp"]', 'Mentions of my name').pause(model.pause + 500)
        .click('div.notification-section-icon.selected-box')
        .verify.elementPresent('div[data-test="comment-inApp"]', 'Comments or edits to something I post or comment on').pause(model.pause + 500)
        .click('div.notification-section-icon.selected-box:nth-child(1)')  
        .verify.elementPresent('div[data-test="create-inApp"]', 'New card added to a project I have access to').pause(model.pause + 500)
        .click('div.notification-section-icon.selected-box:nth-child(2)')
        .verify.elementPresent('div[data-test="update-inApp"]', 'Edits to cards in a project I have access to').pause(model.pause + 500)
        .click('div.notification-section-icon.selected-box:nth-child(3)')
  },


  'verify all checkboxes in email are active and onClick functionality works': function(browser) {
      browser
        .verify.elementPresent('div[data-test="mention-inApp"]', 'Mentions of my name').pause(model.pause + 500)
        .click('div.notification-section-icon.unselected-box')
        .verify.elementPresent('div[data-test="mention-inApp"]', 'comments or edits to something I post or comment on')
        .click('div.notification-section-icon.unselected-box:nth-child(1)')
        .verify.elementPresent('div[data-test="create-inApp"]', 'New card added to a project I have access to' )
        .click('div.notification-section-icon.unselected-box:nth-child(2)')
        .verify.elementPresent('div[data-test="update-inApp"]', 'Edits to cards in a project I have access to')
        .click('div.notification-section-icon.unselected-box:nth-child(3)')
        .end();
  },
}

