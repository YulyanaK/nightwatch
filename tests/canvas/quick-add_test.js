var model = require('../../helpers/model');
var controller = require('../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;

module.exports = {
  // options : {
  //   url : model.url + '/canvas',
  // },

  // before : function(browser, done){
  //   var context = this
  //   var pastProjectDate = new Date(new Date().getTime() - (86400000*9));
  //   var pastCardDate = new Date(new Date().getTime() - (86400000*8))
  //   var startTest = function () {
  //     browser
  //     .pause(model.pause + 500)
  //     .url(context.options.url)
  //     browser.windowMaximize().pause(model.pause + 500)
  //     done()
  //   }

  //   controller.initializeCanvas(function(token){
  //     controller.removeAllCards(function(){ 
  //       browser
  //       .url(context.options.url)
  //       .setCookie(token)
  //       controller.setProjectDate(pastProjectDate, function(){
  //         var newCards = controller.deepCopy(model.connectedCards)
  //         newCards.forEach(function(card, i){
  //           if (card.hypothesis) {
  //             card.hypothesis.title = "Past " + card.hypothesis.title
  //           }
  //           controller.insertCard(card, pastCardDate, function(){
  //             if (i === newCards.length - 1){
  //               startTest()
  //             }
  //           })
  //         })
  //       })      
  //     })
  //   })
  // },
  // after : function (browser, done) {
  //   controller.removeAllCards(function(){
  //     controller.connect().close()
  //     done()
  //   });
  // },

  'login to canvas to add card': function(browser) {
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
        .setValue('input[type=password]', 'Testtest1!')
        .click('div.signup-show-password')
        .verify.elementPresent('div.login-button', 'checks for button is active').pause(model.pause + 500)
        .click('div.login-button')
    },

  'Verify the project name for canvas to add card' : function(browser) {
      browser
        .waitForElementPresent('div.org-dashboard-card-container', 4000)
        .verify.elementPresent('div.org-dashboard-card-container div:nth-of-type(3)', 'beta codes').pause(model.pause + 500)
        .click('div.org-dashboard-card-container div:nth-of-type(3)')
        .waitForElementPresent('div.hamburger-holder', 2000)
        .click('div.hamburger-holder')
        .waitForElementPresent('div.side-nav-subSection-title.active-projects', 5000)
        .click('div.side-nav-subSection-title.active-projects')
    },
    
  'canvas connect nav shows on click for quick add' : function (browser) {
      browser
        .waitForElementPresent('div[data-test="canvas-nav"]', 1000)
        .verify.elementPresent('div[data-test="canvas-nav"]', 'enter to canvas').pause(model.pause + 500)
        .click('div[data-test="canvas-nav"]')
  },

  'canvas quick card enter' : function (browser) {
      browser
        .verify.elementPresent('div[id=app]').pause(model.pause + 1000)
        .verify.elementPresent('div[data-test=keyPartners-section] div.open-add-card', 'checks for first section').pause( model.pause + 1000)
        .verify.elementPresent('div[data-test=KeyPartners0]', 'keyPartners').pause(model.pause + 1000)
        .click('div[data-test=keyPartners-add-card] div.open-add-card')
        .setValue('#keyPartners', ["Current Key Partner", '\uE006'])
  },

  'quick add does not create card without text' : function (browser) {
    browser
      .moveToElement('div[data-test=channels-section] div.open-add-card',5,5, function(){
        browser
        .mouseButtonClick()
      })
      .waitForElementVisible('#keyPartners', model.pause + 1000)
      .setValue('#keyPartners', "", function(){        
        browser 
        .keys(browser.Keys.RETURN)
        .pause(model.pause + 300)
        .verify.elementPresent('#keyPartners', 'empty title should not create a card')
      })
  },

  'quick add saves text if exited' : function (browser) {
    browser
      .refresh()
      .pause(model.pause + 500)
      .verify.elementPresent('div[data-test=channels-add-card] div.open-add-card', 'opens card channels')
      .click('div[data-test=channels-add-card] div.open-add-card')
      .setValue('div[data-test=channels-add-card] div.open-add-card', ["Aia i ʻĀlika Ka ihu o ka moku  Ua hao a paʻihi Nā peʻa i ka makani", '\uE006'])
     
      .pause(model.pause + 500)
      .pause(model.pause + 300)
      .moveToElement('.small-1',10,10, function(){
        browser
        .mouseButtonClick()
      })
      .pause(model.pause + 500)
      .moveToElement('div[data-test=channels-section] div.open-add-card',5,5, function(){
        browser
        .mouseButtonClick()
      })
      .end();
  },

}