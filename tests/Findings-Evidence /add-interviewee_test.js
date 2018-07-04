var model = require('../../helpers/model.js');
var controller = require('../../helpers/controller.js');
var ObjectId = require('mongodb').ObjectId;
var moment = require('moment');


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
        .waitForElementVisible('.nav-new-card-btn-container',  500)
        .click('.nav-new-card-btn-container')
        .verify.elementPresent('div.nav-new-card-type.lpc-interview-new ', 'Evidence icon').pause(model.pause + 500)
        .click('div.nav-new-card-type.lpc-interview-new')
    },

  'Test adding interviewee' : function(browser) {
      browser
        // .url(model.url + '') 
        .verify.elementPresent('.choose-card-type-selection-bottom-container > .choose-card-type-card-container', 'Evidence:Interview').pause(model.pause + 500)
        .click('.choose-card-type-card-container')
        .waitForElementPresent('span.interviewee-add-text.clickable', 1800)
        .click('span.interviewee-add-text.clickable')
        .verify.elementPresent('div.nav-new-card-type.lpc-interview-new ', 'interview icon').pause(model.pause + 500)
        .click('div.nav-new-card-type.lpc-interview-new')
        .waitForElementPresent('div.card-full-add-interviewee-title.clickable', 1800)
        .verify.elementPresent('div.card-full-add-interviewee-title.clickable ', 'people interviewed').pause(model.pause + 500)
        .click('div.card-full-add-interviewee-title.clickable ')
        .verify.elementPresent('.interviewee-body', 'interviewee body container is present').pause(model.pause + 500)
        .verify.elementPresent('input[name="name"]', 'name input field').pause(model.pause + 500)
        .click('input[name="name"]')
        .setValue('input[name="name"]', ['Jessica Lombera'])
        .verify.elementPresent('input[name="email"]', 'email input field').pause(model.pause + 500)
        .click('input[name="email"]')
        .setValue('input[name="email"]', ['jessica@lomberas.com'])
        .verify.elementPresent('input[name="phone"]', 'phone input field').pause(model.pause + 500)
        .click('input[name="phone"]')
        .setValue('input[name="phone"]', ['6505554154'])
        .verify.elementPresent('input[name="title"]', 'title input field').pause(model.pause + 500)
        .click('input[name="title"]')
        .setValue('input[name="title"]', ['CEO'])
        .verify.elementPresent('input[name="company"]', 'company input field').pause(model.pause + 500)
        .click('input[name="company"]')
        .setValue('input[name="company"]', ['Lomberas, Co'])
        .verify.elementPresent('input[name="linkedin"]', 'linkedin input field').pause(model.pause + 500)
        .click('input[name="linkedin"]')
        .setValue('input[name="linkedin"]', ['www.linkedin.com'])
        .verify.elementPresent('button.new-interviewee-submit', 'submit button is present').pause(model.pause + 500)
        .click('button.new-interviewee-submit')
  },

  'Verify Interviwee contact was added' : function(browser) {
      browser
        .verify.elementPresent('.interviewee-card-name', 'interviewee name title').pause(model.pause + 500)
        .getText('.interviewee-card-name', function(text) {
            this.verify.equal(text.value, 'Jessica Lombera')
           })
        .verify.elementPresent('.interviewee-card-contact.email', 'email title').pause(model.pause + 500)
        .getText('.interviewee-card-contact.email', function(text) {
            this.verify.equal(text.value, 'jessica@lomberas.com')
           })
        .verify.elementPresent('.interviewee-card-contact.phone', 'phone title').pause(model.pause + 500)
        .getText('.interviewee-card-contact.phone', function(text) {
            this.verify.equal(text.value, '6505554154')
           })
        .verify.elementPresent('.interviewee-card-title-company.title', 'title of interviewee').pause(model.pause + 500)
        .getText('.interviewee-card-title-company.title', function(text) {
            this.verify.equal(text.value, 'CEO')
           })
        .verify.elementPresent('.interviewee-card-title-company.company', 'title of company').pause(model.pause + 500)
        .getText('.interviewee-card-title-company.company', function(text) {
            this.verify.equal(text.value, 'Lomberas, Co')
           })
        .verify.elementPresent('.interviewee-card-linkedin', 'linkedin title').pause(model.pause + 500)
        .getText('.interviewee-card-linkedin', function(text) {
            this.verify.equal(text.value, 'www.linkedin.com')
           })
        .verify.elementPresent('.interviewee-close-text', 'close button').pause(model.pause + 500)
        .click('.interviewee-close-text')
        .verify.elementPresent('div.card-full-interview-title.name', 'interviewee title name').pause(model.pause + 500)

  },

  'Interview Date, Evidence': function (browser) {
      browser
        .verify.elementPresent('div.interview-datepicker-container', 'date picker').pause(model.pause + 500)
        .click('div.interview-datepicker-container')
        .verify.elementPresent('div.interview-dropdown-container', 'drop down').pause(model.pause + 500)
        .click('a.interview-type-not-selected')  
        .verify.elementPresent('a[data-test="inPerson"]', 'in person').pause(model.pause + 500)
        .click('a[data-test="inPerson"]')
        .verify.elementPresent('div.interview-dropdown-container', 'drop down').pause(model.pause + 500)
        .click('div.interview-dropdown-container') 
        .verify.elementPresent('a[data-test="phoneInterview"]', 'phone interview') 
        .click('a[data-test="phoneInterview"]')
        .verify.elementPresent('div.interview-dropdown-container', 'drop down').pause(model.pause + 500)
        .click('div.interview-dropdown-container')
        .verify.elementPresent('a[data-test="videoConference"]', 'video conference').pause(model.pause + 500)
        .click('a[data-test="videoConference"]') 
     },

  'Key Evidence': function (browser) {
      browser
        .verify.elementPresent('div.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr', 'key insights').pause(model.pause + 500)
        .click('div.DraftEditor-editorContainer')
        .pause()
        .setValue('div.DraftEditor-editorContainer', 'public-DraftStyleDefault-block public-DraftStyleDefault-ltr')



        


      .end();
  }
}