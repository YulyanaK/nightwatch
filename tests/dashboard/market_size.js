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

  'login to Project dashboard details': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://app.staging.glidr.io')
        .resizeWindow(1024, 968).pause(model.pause + 500)
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

  'Verify the organizations for Project dashboard details' : function(browser) {
      browser
        .waitForElementPresent('div.org-dashboard-card-container', 4000)
        .verify.elementPresent('div.org-dashboard-card-container div:nth-of-type(3)', 'beta codes').pause(model.pause + 500)
        .click('div.org-dashboard-card-container div:nth-of-type(3)')
        .waitForElementPresent('div.hamburger-holder', 2000)
        .click('div.hamburger-holder.close')
        .waitForElementPresent('div.side-nav-subSection-title.active-projects', 4000)
        .click('div.side-nav-subSection-title.active-projects')
  },

  'Market size' : function(browser){
      browser
        .verify.elementPresent('div.project-details-edit-link', 'edit project details').pause(model.pause + 500)
        .click('div.project-details-edit-link')
        .verify.elementPresent('div.project-dashboard-takeover-nav-option:nth-of-type(2)', 'selects market size').pause(model.pause + 500)
        .click('div.project-dashboard-takeover-nav-option:nth-of-type(2)')
        .click('div.lpc-chat-icon-on')
        .verify.elementPresent('div.full-nav-edit-mode-btn', 'edit button').pause(model.pause + 500)
        .click('div.full-nav-edit-mode-btn')
        .verify.elementPresent('input.dashboard-market-size-currency-input').pause(model.pause + 500)
        .click('input.dashboard-market-size-currency-input')
        .setValue('input.dashboard-market-size-currency-input', '3')
  },

  'Market Size notes' : function(browser) {
  	   browser
        .verify.elementPresent('textarea.project-dasbhoard-edit.marketComment').pause(model.pause + 500)
        .click('textarea.project-dasbhoard-edit.marketComment')
        .setValue('textarea.project-dasbhoard-edit.marketComment', 'The United States and Mexico on Tuesday opened their first new rail link in more than a century as part of plans to update infrastructure carrying nearly $600bn a year in bilateral trade, officials said. The West Rail Bypass International Bridge connecting Brownsville, Texas with the city of Matamoros across the border will largely carry freight, the US Commerce Department said. Since the North American Free Trade Agreement was implemented over 20 years ago, trade with Mexico has increased six-fold and Mexico has become one of the biggest trading partners with the United States, US secretary of commerce Penny Pritzker said.')
   },

  'Supporting documents' : function(browser) {
  	   browser
  		.verify.elementPresent('label.dashboard-supporting-add.clickable', 'to upload images and files').pause(model.pause + 500)
  		.click('label.dashboard-supporting-add.clickable')
  		.pause(5000)
  		.verify.elementPresent('div.card-full-nav.full-nav-edit-mode-btn', 'save and update').pause(model.pause + 500)
  		.click('div.card-full-nav.full-nav-edit-mode-btn')
  		.verify.elementPresent('div.lpc-close-button-large-white', 'close section').pause(model.pause + 500)
  		.click('div.lpc-close-button-large-white')
        .end();
  },

}























