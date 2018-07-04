
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
  // }

  'login to Project dashboard': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://app.staging.glidr.io')
        .resizeWindow(1024, 768).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'looks for glidr logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'seraches for active container for email').pause(model.pause + 500)
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
        .waitForElementPresent('div.org-container', 4000).pause(model.pause + 500)
  },

  'Verify the organizations for Project dashboard' : function(browser) {
      browser
        .waitForElementPresent('div.org-dashboard-card-container', 4000)
        .verify.elementPresent('div.org-dashboard-card-container div:nth-of-type(3)', 'entering beta codes organizations').pause(model.pause + 500)
        .click('div.org-dashboard-card-container div:nth-of-type(3)')
        .waitForElementPresent('div.hamburger-holder', 2000)
        .click('div.hamburger-holder')
        .waitForElementPresent('div.side-nav-subSection-title.active-projects', 4000)
        .click('div.side-nav-subSection-title.active-projects')
  },

  'Performance Overview for Team Project Details' : function(browser){
      browser
      .verify.elementPresent('div.project-details-edit-link').pause(model.pause + 500)
      .click('div.project-details-edit-link')
      //+edit link css text can not select so I used the url for now will meet with matis to see why it wont work.
      .url('https://app.staging.glidr.io/project-dashboard-edit/582e3cf36d32e000014a6d3a/details')
      .verify.elementPresent('div.full-nav-edit-mode-btn', 'button').pause(model.pause + 500)
      .click('div.full-nav-edit-mode-btn')
      .verify.elementPresent('div.back-to-dashboard-link').pause(model.pause + 500)
      .click('div.back-to-dashboard-link')
  },

  'Enter to Dashboard metrics for market size and investments' : function (browser) {
      browser
        .verify.elementPresent('div.dashboard-metrics-title', 'verifies get started button').pause(model.pause + 500)
        .click('div.dashboard-metrics-title')
        .verify.elementPresent('span.project-metrics-title-edit', 'view investments').pause(model.pause + 500)
        .click('span.project-metrics-title-edit')
        .verify.elementPresent('div.back-to-dashboard-link.project-dashboard-takeover-nav-option', 'view project dashboard').pause(model.pause + 500)
        .click('div.back-to-dashboard-link.project-dashboard-takeover-nav-option')
        .verify.elementPresent('div.dashboard-metrics-title', 'verifies get started button').pause(model.pause + 500)
        .click('div.dashboard-metrics-title')
        .verify.elementPresent('span.project-metrics-title-edit:nth-of-type(2)', 'Market size').pause(model.pause + 500)
        .click('span.project-metrics-title-edit:nth-of-type(2)')
        .verify.elementPresent('div.back-to-dashboard-link.project-dashboard-takeover-nav-option', 'view project dashboard').pause(model.pause + 500)
        .click('div.back-to-dashboard-link.project-dashboard-takeover-nav-option')
  },


  'Edit project and team management': function(browser) {
      browser
        .verify.elementPresent('div.project-dashboard-edit-name-text', '+Edit project').pause(model.pause + 900)
        .click('div.project-dashboard-edit-name-text')
        .verify.elementPresent('div.back-to-dashboard-link.project-dashboard-takeover-nav-option', 'view project details').pause(model.pause + 900)
        .click('div.back-to-dashboard-link.project-dashboard-takeover-nav-option')
        .verify.elementPresent('.dashboard-settings-cog', 'edit project via gear icon').pause(model.pause + 900)
        .click('.dashboard-settings-cog')
        .verify.elementPresent('div[data-test="dashboard-nav"]', 'back to Dashboard').pause(model.pause + 900)
        .click('div[data-test="dashboard-nav"]')
        .verify.elementPresent('div.project-members-edit', 'manage team').pause(model.pause + 900)
        .click('div.project-members-edit')
        .verify.elementPresent('div[data-test="dashboard-nav"]').pause(model.pause + 900)
        .click('div[data-test="dashboard-nav"]')
        .verify.elementPresent('div.project-dashboard-member', 'opens team management').pause(model.pause + 900)
        .click('div.project-dashboard-member')
        .verify.elementPresent('div.member-card-close', 'closes team memebre section').pause(model.pause + 900)
        .click('div.member-card-close')
  },

  'create card with text' : function (browser) {
    browser
      .verify.elementPresent('.hypothesis-card-container', 'riskies hypothesis').pause(model.pause + 500)
      .click('div.hypothesis-card-container')
      .verify.elementPresent('div.hypothesis-card-close-icon', 'view hypothesis').pause(model.pause + 500)
      .click('.hypothesis-card-close-icon')
      .verify.elementPresent('div.riskiest-hypotheses-view-more')
      .click('div.riskiest-hypotheses-view-more')
      .verify.elementPresent('div[data-test="dashboard-nav"]').pause(model.pause + 900)
      .click('div[data-test="dashboard-nav"]')
      .end();
  },

}



















