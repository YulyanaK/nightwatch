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

  'login to interview': function(browser) {
      browser
        .url('https://app.staging.glidr.io')
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

  'Verify the project name for interview' : function(browser) {
      browser
        .waitForElementPresent('div.org-dashboard-card-container', 4000)
        .verify.elementPresent('div.org-dashboard-card-container div:nth-of-type(3)', 'beta codes').pause(model.pause + 500)
        .click('div.org-dashboard-card-container div:nth-of-type(3)')
        .waitForElementPresent('div.hamburger-holder', 2000)
        .click('div.hamburger-holder')
        .waitForElementPresent('div.side-nav-subSection-title.active-projects', 5000)
        .click('div.side-nav-subSection-title.active-projects')

    },

  'Test key insights title edit' : function(browser){
    browser
        // .url(model.url + '')
        .waitForElementVisible('.nav-new-card-btn-container',  500)
        .click('.nav-new-card-btn-container')
        .verify.elementPresent('div.nav-new-card-type.lpc-interview-new ', 'interview icon').pause(model.pause + 500)
        .click('div.nav-new-card-type.lpc-interview-new')
        .pause(model.pause + 800)
        .verify.elementPresent('.choose-card-type-selection-bottom-container > .choose-card-type-card-container', 'Evidence:Interview').pause(model.pause + 500)
        .click('.choose-card-type-card-container')

        .verify.elementPresent('div.card-full-nav.full-nav-edit-mode-btn:nth-of-type(2)', 'publish').pause(model.pause + 500)
        .pause()
        .click('div.card-full-nav.full-nav-edit-mode-btn:nth-of-type(2)')
        .verify.elementPresent('div.public-DraftEditorPlaceholder-hasFocus', 1000)
        .click('div.public-DraftEditorPlaceholder-hasFocus')

        .click('.card-full-title', function(){
   browser
        .waitForElementVisible('.card-key-insight-edit-form', model.pause + 900)
        .setValue('.card-key-insight-edit-form', ['edit', browser.Keys.ENTER])

     })
        .pause(model.pause + 800)
        .getText('.card-full-title', function(text){
            this.verify.equal(text.value, 'edit')
    })
  },

  'test key insights edit length' : function(browser){
    browser
        .keys('\uE007')
        .waitForElementVisible('.card-full-title', model.pause + 1000)
        .click('.card-full-title')
        .verify.elementPresent('.card-key-insight-edit-form')
        .setValue('.card-key-insight-edit-form', ['editediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditediteditedit'])
        .verify.elementPresent('div.countdown.key-insight-countdown')
        .verify.containsText('.key-insight-countdown', '20')
        .setValue('.card-key-insight-edit-form', ['1'])
        .verify.containsText('.key-insight-countdown', '19')
        .setValue('.card-key-insight-edit-form', ['2'])
        .verify.containsText('.key-insight-countdown', '18')
        .setValue('.card-key-insight-edit-form', ['3'])
        .verify.containsText('.key-insight-countdown', '17')
        .setValue('.card-key-insight-edit-form', ['4'])
        .verify.containsText('.key-insight-countdown', '16')
        .setValue('.card-key-insight-edit-form', ['5'])
        .verify.containsText('.key-insight-countdown', '15')
        .setValue('.card-key-insight-edit-form', ['6'])
        .verify.containsText('.key-insight-countdown', '14')
        .setValue('.card-key-insight-edit-form', ['7'])
        .verify.containsText('.key-insight-countdown', '13')
        .setValue('.card-key-insight-edit-form', ['8'])
        .verify.containsText('.key-insight-countdown', '12')
        .setValue('.card-key-insight-edit-form', ['9'])
        .verify.containsText('.key-insight-countdown', '11')
        .setValue('.card-key-insight-edit-form', ['0'])
        .verify.containsText('.key-insight-countdown', '10')
        .setValue('.card-key-insight-edit-form', ['9'])
        .verify.containsText('.key-insight-countdown', '9')
        .setValue('.card-key-insight-edit-form', ['8'])
        .verify.containsText('.key-insight-countdown', '8')
        .setValue('.card-key-insight-edit-form', ['7'])
        .verify.containsText('.key-insight-countdown', '7')
        .setValue('.card-key-insight-edit-form', ['6'])
        .verify.containsText('.key-insight-countdown', '6')
        .setValue('.card-key-insight-edit-form', ['5'])
        .verify.containsText('.key-insight-countdown', '5')
        .setValue('.card-key-insight-edit-form', ['4'])
        .verify.containsText('.key-insight-countdown', '4')
        .setValue('.card-key-insight-edit-form', ['3'])
        .verify.containsText('.key-insight-countdown', '3')
        .setValue('.card-key-insight-edit-form', ['2'])
        .verify.containsText('.key-insight-countdown', '2')
        .setValue('.card-key-insight-edit-form', ['1'])
        .verify.containsText('.key-insight-countdown', '1')
        .setValue('.card-key-insight-edit-form', ['0'])
        .verify.containsText('.key-insight-countdown', '0')
        .getValue('.card-key-insight-edit-form', function(val){
    browser.verify.equal(val.value.length, 400);
    })
        .setValue('.card-key-insight-edit-form', ['1'])
        .verify.containsText('.key-insight-countdown', '-1')
        .setValue('.card-key-insight-edit-form', ['2'])
        .verify.containsText('.key-insight-countdown', '-2')
        .getValue('.card-key-insight-edit-form', function(val){
    browser.verify.equal(val.value.length, 402);
    browser.end()
    })

  }

}