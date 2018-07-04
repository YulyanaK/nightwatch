var model = require('../../helpers/model.js');
var controller = require('../../helpers/controller.js');
var ObjectId = require('mongodb').ObjectId;


module.exports = {
  // options : {
  //  url : model.url + '/canvas'
  // },

  // before : function(browser, done){
  //   var context = this
  //   browser
  //   .url(this.options.url)
  //   controller.initializeCanvas(function(token){
  //     browser.setCookie(token)
  //     controller.insertCard(model.card, new Date(), function(){
  //       browser.url(context.options.url)
  //       browser.windowMaximize().pause(model.pause + 500)
  //       done()
  //     })
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
        .waitForElementPresent('div[data-test="canvas-nav"]', 1000)
        .verify.elementPresent('div[data-test="canvas-nav"]').pause(model.pause + 500)
        .click('div[data-test="canvas-nav"]')
        .waitForElementPresent('div[data-test="KeyPartners0"]', 1000)
        .verify.elementPresent('div[data-test="KeyPartners0"]').pause(model.pause + 500)
        .click('div[data-test="KeyPartners0"]')
    },

  'Test summary edit': function(browser){
    browser
       
             .waitForElementVisible('.nav-new-card-btn-container', model.pause + 500)
      .click('.nav-new-card-btn-container')
      .verify.elementPresent('.nav-new-card-type-title')
      .click('.nav-new-card-type-title')
      .waitForElementVisible('.card-full-current-card', model.pause + 600)
      .click('.current-card > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1)', function(){
        browser
       .pause()
        .waitForElementVisible('.edit-summary-form', model.pause + 900)
        .setValue('.edit-summary-form', ['edit', browser.Keys.ENTER])
      })
      .pause(model.pause + 800)
      .getText('.current-card > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1)', function(text) {
        if (text.value === 'editcard'){
          this.verify.equal(text.value, 'edit')
        }else{
          this.verify.equal(text.value, 'edit')
      }
    })
  },
  'verify summary persists': function(browser){
    browser
    .pause(model.pause + 500)
    .click('.card-full-nav-x-container')
    .waitForElementVisible('.canvas', model.pause + 600)
    .click('.card')
    .waitForElementVisible('.card-full-current-card', model.pause + 600)
    .pause(model.pause + 800)
    .getText('.current-card > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1)', function(text){
       if (text.value === 'editcard'){
            this.verify.equal(text.value, 'edit')
        }else{
            this.verify.equal(text.value, 'edit')
        }
    })
    .end();
  }
}
