var model = require('../../helpers/model.js');
var controller = require('../../helpers/controller.js');
var ObjectId = require('mongodb').ObjectId;
var moment = require('moment');


module.exports = {

  'login to interview': function(browser) {
      browser
        .url('https://app.staging.glidr.io')
        .resizeWindow(1224, 968).pause(model.pause + 500)
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

  'Verify the project name for evidence' : function(browser) {
      browser
        .waitForElementPresent('div.org-dashboard-card-container', 4000)
        .verify.elementPresent('div.org-dashboard-card-container div:nth-of-type(3)', 'beta codes').pause(model.pause + 500)
        .click('div.org-dashboard-card-container div:nth-of-type(3)')
        .waitForElementPresent('div.hamburger-holder', 2000)
        .click('div.hamburger-holder')
        .waitForElementPresent('div.side-nav-subSection-title.active-projects', 5000)
        .click('div.side-nav-subSection-title.active-projects')
        .waitForElementVisible('.nav-new-card-btn-container',  500)
        .click('.nav-new-card-btn-container')
        .verify.elementPresent('div.nav-new-card-type.lpc-interview-new ', 'Evidence icon').pause(model.pause + 500)
        .click('div.nav-new-card-type.lpc-interview-new')
    },

  'Test linking Evidence:Interveiw and rating' : function(browser) {
      browser
        // .url(model.url + '') 
        .verify.elementPresent('.choose-card-type-selection-bottom-container > .choose-card-type-card-container', 'Evidence:Interview').pause(model.pause + 500)
        .click('.choose-card-type-card-container')
        .waitForElementPresent('.no-linked-button', 1000)
        .verify.elementPresent('.no-linked-button', 'link and rate hypothesis').pause(model.pause + 500)
        .click('.no-linked-button')
        .waitForElementVisible('.nav-new-card-btn-container', 800)
        .click('.nav-new-card-btn-container')
        .verify.elementPresent('div.link-hypothesis-filter-container', 'link and rate hypothesis').pause(model.pause + 500)
        .verify.elementPresent('input.link-hypothesis-filter-input', 'checking for input field')
        .click('input.link-hypothesis-filter-input')
        .setValue('input.link-hypothesis-filter-input', 'valu')
        .pause(model.pause + 500)
        .clearValue('input.link-hypothesis-filter-input')
        .setValue('input.link-hypothesis-filter-input', 'हिन्दी')
        .pause(model.pause + 500)
        .clearValue('input.link-hypothesis-filter-input')
        .setValue('input.link-hypothesis-filter-input', ' ')
        .verify.elementPresent('div.filter-option', 'not on canvas').pause(model.pause + 500)
        .click('div.filter-option:nth-of-type(11)')
        .pause(model.pause + 500)
        .verify.elementPresent('div.filter-option', 'value proposition').pause(model.pause + 500)
        .click('div.filter-option:nth-of-type(10)')
        .pause(model.pause + 500)
        .verify.elementPresent('div.filter-option', 'revenue streams').pause(model.pause + 500)
        .click('div.filter-option:nth-of-type(9)')
         .pause(model.pause + 500)
        .verify.elementPresent('div.filter-option', 'key resources').pause(model.pause + 500)
        .click('div.filter-option:nth-of-type(8)')
        .pause(model.pause + 500)
        .verify.elementPresent('div.filter-option', 'key partners').pause(model.pause + 500)
        .click('div.filter-option:nth-of-type(7)')
        .pause(model.pause + 500)
        .verify.elementPresent('div.filter-option', 'key activities').pause(model.pause + 500)
        .click('div.filter-option:nth-of-type(6)')
        .pause(model.pause + 500)
        .verify.elementPresent('div.filter-option', 'customer segments').pause(model.pause + 500)
        .click('div.filter-option:nth-of-type(5)')
        .pause(model.pause + 500)
        .verify.elementPresent('div.filter-option', 'customer relationships').pause(model.pause + 500)
        .click('div.filter-option:nth-of-type(4)')
        .pause(model.pause + 500)
        .verify.elementPresent('div.filter-option', 'cost structure').pause(model.pause + 500)
        .click('div.filter-option:nth-of-type(3)')
        .pause(model.pause + 500)
        .verify.elementPresent('div.filter-option', 'channels').pause(model.pause + 500)
        .click('div.filter-option:nth-of-type(2)')
        .pause(model.pause + 500)
        .verify.elementPresent('div.filter-option', 'all').pause(model.pause + 500)
        .click('div.filter-option:nth-of-type(1)')
        .verify.elementPresent('.link-hypothesis-connected-btn', 'link hypothesis rate is present').pause(model.pause + 500)
        .click('.link-hypothesis-connected-btn')
  },

  'Rate hypothesis': function (browser) {
      browser
        .verify.elementPresent('.link-hypothesis-container')
        .verify.elementPresent('.link-hypothesis-rating', 'rate button present').pause(model.pause + 1000)
        .click('.rating-face.lpc-unrated-emoji-white')
        .verify.elementPresent('div.link-hypothesis-container > .link-hypothesis-rating ', 'rate button present check').pause(model.pause + 1000)
        .click('div.link-hypothesis-container > .link-hypothesis-rating ')
        .verify.elementPresent('div.link-hypothesis-rate.none', 'rating face present').pause(model.pause + 1000)
        .click('div.link-hypothesis-rate.none')
   
      //   .useXpath().click("//*[contains(text(), 'RATE')]")
      //   .verify.elementPresent('div.link-hypothesis-rating:nth-of-type(1)', 'select rating face').pause(model.pause + 1000)
      //   .click('div.link-hypothesis-rating:nth-of-type(1)')
      //   .moveToElement('div.link-hypothesis-rating:nth-child(1)', 5,5, function() {
      // browser
      //   .mouseButtonClick()
      // })
      // .verify.elementPresent('.link-hypothesis-rate.n0', 'not rated face is present').pause(model.pause + 1000)
      // .verify.elementPresent('.interviewee-close-text', 'done button is present').pause(model.pause + 1000)
      // .click('.interviewee-close-text')
  },

  'Change rate on full interview card' : function(browser) {
    browser
    //   .verify.elementPresent('.link-hypothesis-rate.n0', 'not rated face is present').pause(model.pause + 1000)
    //   .click('.link-hypothesis-rate.n0')
    //   .pause(model.pause + 1000)
    //   .moveToElement('div.link-hypothesis-rating-option:nth-child(5)', 5,5, function() {
    // browser
    //   .mouseButtonClick()
    // })
    //   .verify.elementPresent('.link-hypothesis-rate.p2', 'p2 face is present').pause(model.pause + 1000)
      .verify.elementPresent('div.interviewee-close-text').pause(model.pause + 1000)
      .click('div.interviewee-close-text') 
      .end()
  }
}