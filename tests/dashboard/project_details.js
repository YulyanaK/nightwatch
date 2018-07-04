

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
        .setValue('input[type=text]', 'dortiz@launchpadcentral.com')
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

  'Team Project Details' : function(browser){
      browser
        .verify.elementPresent('div.project-details-edit-link', 'edit project details').pause(model.pause + 500)
        .click('div.project-details-edit-link')
        .verify.elementPresent('div.full-nav-edit-mode-btn', 'button').pause(model.pause + 500)
        .click('div.full-nav-edit-mode-btn')
  },

  'Project details': function(browser) {
      browser
        .verify.elementPresent('div.card-full-nav.full-nav-chat.lpc-chat-icon-on', 'close comments').pause(model.pause + 500)
        .click('div.card-full-nav.full-nav-chat.lpc-chat-icon-on')
        .verify.elementPresent('div.takeover-details-content', 'in testing').pause(model.pause + 500)
        .click('textarea.project-dasbhoard-edit')
        .clearValue('textarea.project-dasbhoard-edit')
        .setValue('textarea.project-dasbhoard-edit', 'ジャパン (Japan) とは、英語で日本のこと。詳細についてはジャパンを参照のこと 転じて、スポーツ競技における日本代表チームの意味としても、以下のように使う。侍ジャパンマーメイドジャパン なでしこジャパン ＊＊ジャパン」（主にサッカー日本代表で、監督の姓や愛称を入れて）英語で漆・漆器のこと。その場合は全て小文字でjapanと書く')
  },

  'Add a section' : function (browser) {
    browser
      .waitForElementPresent('body' , 2000)
      .verify.elementPresent('div.dashboard-add-section-container', 'add a section').pause(model.pause + 500)
      .click('div.dashboard-add-section-container')
      .verify.elementPresent('div.dashboard-new-section-container', 'section title').pause(model.pause + 500)
      .setValue('input.new-section-dashboard-title', 'Pinpon is the doll from your child hood')
      .verify.elementPresent('div.dashboard-save-new-section').pause(model.pause + 500)
      .click('div.dashboard-save-new-section')
      .waitForElementPresent('div.lpc-trash-icon-gray.clickable.takeover-section-delete-trash', 2000)
      .verify.elementPresent('div.lpc-trash-icon-gray.clickable.takeover-section-delete-trash', 'try to delete new section').pause(model.pause + 500)
      .click('div.lpc-trash-icon-gray.clickable.takeover-section-delete-trash')
      .verify.elementPresent('span.trash-text-delete', 'delete section').pause(model.pause + 500)
      .click('span.trash-text-delete')
  },
  
  'Add a label' : function (browser) {
    browser
      .resizeWindow(1024, 1168).pause(model.pause + 500)
      .verify.elementPresent('div.dashboard-horizon-dropdown-container', 'add a project label')
      .click('div.label-input-container')
      .setValue('div.label-input-container', ['labels for peace', '\uE006'])
  },

  'Project information, type of project': function (browser) {
    browser
      .resizeWindow(1024, 1468).pause(model.pause + 500)
      .verify.elementPresent('div.project-dashboard-dropdown-container', 'type of project').pause(model.pause + 500)
      .click('div.project-dashboard-dropdown-container')
      .verify.elementPresent('div.dashboard-dropdown-option-holder.position-absolute div:nth-child(2)', 'service').pause(model.pause + 500)
      .click('div.dashboard-dropdown-option-holder.position-absolute div:nth-child(2)')
      .verify.elementPresent('div.project-dashboard-dropdown-container', 'type of project').pause(model.pause + 500)
      .click('div.project-dashboard-dropdown-container')
      .verify.elementPresent('div.dashboard-dropdown-option-holder.position-absolute div:nth-child(3)', 'product').pause(model.pause + 500)
      .click('div.dashboard-dropdown-option-holder.position-absolute div:nth-child(3)')
      .verify.elementPresent('div.project-dashboard-dropdown-container', 'process improvements').pause(model.pause + 500)
      .click('div.project-dashboard-dropdown-container')
      .verify.elementPresent('div.dashboard-dropdown-option-holder.position-absolute div:nth-child(1)', 'type of project').pause(model.pause + 500)
      .click('div.dashboard-dropdown-option-holder.position-absolute div:nth-child(1)')
      .verify.elementPresent('div.project-dashboard-dropdown-container', 'other').pause(model.pause + 500)
      .click('div.project-dashboard-dropdown-container')
      .verify.elementPresent('div.dashboard-dropdown-option-holder.position-absolute div:nth-child(4)', 'other').pause(model.pause + 500)
      .click('div.dashboard-dropdown-option-holder.position-absolute div:nth-child(4)')
  },

  'Project information, time frame' : function(browser) {
    browser
      .verify.elementPresent('div.project-dashboard-dropdown-container:nth-child(2)', 'time frame').pause(model.pause + 500)
      .click('div.project-dashboard-dropdown-container:nth-child(2)')
      .verify.elementPresent('div.dashboard-dropdown-option-holder.position-absolute', '12-18').pause(model.pause + 500)
      .click('div.dashboard-dropdown-option-holder.position-absolute')
      .verify.elementPresent('div.project-dashboard-dropdown-container:nth-child(2)', 'time frame').pause(model.pause + 500)
      .click('div.project-dashboard-dropdown-container:nth-child(2)')
      .verify.elementPresent('div.dashboard-dropdown-option-holder.position-absolute div:nth-child(3)', '6-12').pause(model.pause + 500)
      .click('div.dashboard-dropdown-option-holder.position-absolute div:nth-child(3)')
      .verify.elementPresent('div.project-dashboard-dropdown-container:nth-child(2)', 'time frame').pause(model.pause + 500)
      .click('div.project-dashboard-dropdown-container:nth-child(2)')
      .verify.elementPresent('div.dashboard-dropdown-option-holder.position-absolute div:nth-child(2)', '3-6').pause(model.pause + 500)
      .click('div.dashboard-dropdown-option-holder.position-absolute div:nth-child(2)')
      .verify.elementPresent('div.project-dashboard-dropdown-container:nth-child(2)', 'time frame').pause(model.pause + 500)
      .click('div.project-dashboard-dropdown-container:nth-child(2)')
      .verify.elementPresent('div.dashboard-dropdown-option-holder.position-absolute div:nth-child(1)', '1-3').pause(model.pause + 500)
      .click('div.dashboard-dropdown-option-holder.position-absolute div:nth-child(1)')
      .verify.elementPresent('div.project-dashboard-dropdown-container:nth-child(2)', 'time frame').pause(model.pause + 500)
      .click('div.project-dashboard-dropdown-container:nth-child(2)')
      .verify.elementPresent('div.dashboard-dropdown-option-holder.position-absolute div:nth-child(5)', '18-24').pause(model.pause + 500)
      .click('div.dashboard-dropdown-option-holder.position-absolute div:nth-child(5)')

  },

  'Project information stage' : function (browser) {
    browser
      .verify.elementPresent('div.project-dashboard-dropdown-container:nth-child(3)', 'stage validation').pause(model.pause + 500)
      .click('div.project-dashboard-dropdown-container:nth-child(3)')
      .verify.elementPresent('div.dashboard-dropdown-option-holder.position-absolute div:nth-child(3) ', 'business validation').pause(model.pause + 500)
      .click('div.dashboard-dropdown-option-holder.position-absolute div:nth-child(3) ')
      .verify.elementPresent('div.project-dashboard-dropdown-container:nth-child(3)', 'stage validation').pause(model.pause + 500)
      .click('div.project-dashboard-dropdown-container:nth-child(3)')
      .verify.elementPresent('div.dashboard-dropdown-option-holder.position-absolute div:nth-child(2) ', 'solutions validation').pause(model.pause + 500)
      .click('div.dashboard-dropdown-option-holder.position-absolute div:nth-child(2) ')
      .verify.elementPresent('div.project-dashboard-dropdown-container:nth-child(3)', 'stage validation').pause(model.pause + 500)
      .click('div.project-dashboard-dropdown-container:nth-child(3)')
      .verify.elementPresent('div.dashboard-dropdown-option-holder.position-absolute div:nth-child(1) ', 'problem validation').pause(model.pause + 500)
      .click('div.dashboard-dropdown-option-holder.position-absolute div:nth-child(1) ')
      .verify.elementPresent('div.full-nav-edit-mode-btn', 'button').pause(model.pause + 500)
      .click('div.full-nav-edit-mode-btn')
    .end();
  },

}



















