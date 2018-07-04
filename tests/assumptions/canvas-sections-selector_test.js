 var model = require('../../helpers/model.js');
 var controller = require('../../helpers/controller.js');
 var ObjectId = require('mongodb').ObjectId;

 module.exports = {
  // options : {
  //   url : model.url + '/canvas'
  // },

  // before : function(browser, done){
  //   var context = this
  //   browser
  //   .url(this.options.url)
  //   controller.initializeCanvas(function(token){
  //       controller.removeAllCards(function(){
  //         browser.setCookie(token)
  //         controller.insertCard(model.card, new Date(), function(){
  //           browser.url(context.options.url)
  //           browser.windowMaximize('current').pause(model.pause + 500)
  //           done()
  //         })
  //       })
  //   })
  // },

  // after : function (browser, done) {
  //   controller.removeAllCards(function(){
  //     controller.connect().close()
  //     done()
  //   });
  // },

 'login to hypothesis': function(browser) {
      browser
        .url('https://app.stage.glidr.io')
        .resizeWindow(1124, 868).pause(model.pause + 500)
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

  'Verify the project name for hypothesis' : function(browser) {
      browser
        .waitForElementPresent('div.org-dashboard-card-container', 4000)
        .verify.elementPresent('div.org-dashboard-card-container div:nth-of-type(3)', 'beta codes').pause(model.pause + 500)
        .click('div.org-dashboard-card-container div:nth-of-type(3)')
        .waitForElementPresent('div.hamburger-holder', 2000)
        .click('div.hamburger-holder')
        .waitForElementPresent('div.side-nav-subSection-title.active-projects', 5000)
        .click('div.side-nav-subSection-title.active-projects')
    },

 'Test canvas-section-selector' : function(browser){
      browser
        .waitForElementPresent('div[data-test="canvas-nav"]', 4000)
        .verify.elementPresent('div[data-test="canvas-nav"]').pause(model.pause + 500)
        .click('div[data-test="canvas-nav"]')
        .waitForElementPresent('div[data-test="KeyPartners0"]', 1000)
        .verify.elementPresent('div[data-test="KeyPartners0"]').pause(model.pause + 500)
        .click('div[data-test="KeyPartners0"]')
        .moveTo('.full-nav-edit-mode-btn:nth-of-type(1)', 2, 2,function(){
          browser.mouseButtonClick()
      })
        .verify.elementPresent('div.full-nav-edit-mode-btn:nth-of-type(1)', 'edit button hypothesis')
        .click('div.full-nav-edit-mode-btn:nth-of-type(1) ')
        .pause()
        .verify.elementPresent('a.hypothesis-section-dropdown-value', 'dropdown on the canvas').pause(model.pause + 500)
        .click('a.hypothesis-section-dropdown-value') 
        .verify.elementPresent('a[data-test="costStructure"]', 'cost structure').pause(model.pause + 800)
        .click('a[data-test="costStructure"]')
        .click('a.hypothesis-section-dropdown-value') 
        .verify.elementPresent('a[data-test="keyResources"]', 'key partners').pause(model.pause + 800)
        .click('a[data-test="keyResources"]')

    .end();
  }
}