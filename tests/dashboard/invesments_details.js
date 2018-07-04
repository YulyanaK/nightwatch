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

   'Metrics for invesments' : function(browser) {
   	  browser
   	  	.verify.elementPresent('div.dashboard-metrics-title', 'invesments metrics').pause(model.pause + 500)
   	  	.click('div.dashboard-metrics-title')
   	  	.verify.elementPresent('span.project-metrics-title-edit', 'enter to invesments').pause(model.pause + 500)
   	  	.click('span.project-metrics-title-edit')
   	  	.verify.elementPresent('div.card-full-nav.full-nav-chat.lpc-chat-icon-on', 'closed chat').pause(model.pause + 500)
   	  	.click('div.card-full-nav.full-nav-chat.lpc-chat-icon-on')
   	  browser
   	  	.verify.elementPresent('div.card-full-nav.full-nav-edit-mode-btn', 'edit button to enter content').pause(model.pause + 500)
   	  	.click('div.card-full-nav.full-nav-edit-mode-btn')
   	  	.verify.elementPresent('input.dashboard-investment-current-number-input', 'input fields').pause(model.pause + 500)
   	  	.click('input.dashboard-investment-current-number-input')
   	  	.setValue('input.dashboard-investment-current-number-input', '176536')
   	  	.verify.elementPresent('input.dashboard-investment-total-number-input', 'verifies next input fields')
   	  	.click('input.dashboard-investment-total-number-input')
   	  	.setValue('input.dashboard-investment-total-number-input', '65478')
   	  	.verify.elementPresent('textarea.project-dasbhoard-edit.investmentComment', 'invesments notes').pause(model.pause + 500)
        .click('textarea.project-dasbhoard-edit.investmentComment')
        .setValue('textarea.project-dasbhoard-edit.investmentComment', 'The United States and Mexico on Tuesday opened their first new rail link in more than a century as part of plans to update infrastructure carrying nearly $600bn a year in bilateral trade, officials said. The West Rail Bypass International Bridge connecting Brownsville, Texas with the city of Matamoros across the border will largely carry freight, the US Commerce Department said. Since the North American Free Trade Agreement was implemented over 20 years ago, trade with Mexico has increased six-fold and Mexico has become one of the biggest trading partners with the United States, US secretary of commerce Penny Pritzker said.')
      browser
      	.verify.elementPresent('label.dashboard-supporting-add.clickable', 'adding files').pause(model.pause + 500)
      	.click('label.dashboard-supporting-add.clickable')
      	.pause(5000)
      	.verify.elementPresent('div.card-full-nav.full-nav-edit-mode-btn', 'no more edit').pause(model.pause + 500)
      	.click('div.card-full-nav.full-nav-edit-mode-btn')
      	.verify.elementPresent('div.card-full-nav-x.lpc-close-button-large-white', 'close page').pause(model.pause + 500)
      	.click('div.card-full-nav-x.lpc-close-button-large-white')
        .end();
  },
}