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
    },

  'Test calendar and date' : function(browser) {
     // var currentDate = moment(new Date()).format('MMM DD, YYYY')
      browser
        // .url(model.url + '') 
        .waitForElementVisible('.nav-new-card-btn-container',  500)
        .click('.nav-new-card-btn-container')
        .verify.elementPresent('div.nav-new-card-type.lpc-interview-new ', 'interview icon').pause(model.pause + 500)
        .click('div.nav-new-card-type.lpc-interview-new')
        .waitForElementVisible('div.interview-datepicker-holder', 800)
        .verify.elementPresent('div.interview-datepicker-holder', 'interview date is present').pause(model.pause + 500)
        .click('.interview-datepicker-holder')
        .verify.elementPresent('.DayPicker.DayPicker--en.daypicker', 'calendar dropdown present').pause(model.pause + 500)
        .verify.elementPresent('.interview-dropdown-container', 'verify interview dropdown').pause(model.pause + 500)
        .moveTo('.interview-type-not-selected', 2, 2,function(){
            browser.mouseButtonClick()
        })
        .pause(model.pause + 1000)
        .verify.elementPresent('.DayPicker-NavButton.DayPicker-NavButton--prev')
        .click('.DayPicker-NavButton.DayPicker-NavButton--prev')
        .pause(model.pause + 500)
        .click('.DayPicker-NavButton.DayPicker-NavButton--prev')
        .pause(model.pause + 500)
        .click('.DayPicker-NavButton.DayPicker-NavButton--prev')
        .pause(model.pause + 500)
        .click('.DayPicker-NavButton.DayPicker-NavButton--next')
        .pause(model.pause + 500)
        .click('.DayPicker-NavButton.DayPicker-NavButton--next')
        .pause(model.pause + 500)
        .click('.DayPicker-NavButton.DayPicker-NavButton--next')
        .pause(model.pause + 500)
        .click('.DayPicker-Day.DayPicker-Day--outside:nth-of-type(3)')
        .pause(model.pause + 500)
        .click('.interview-datepicker-holder')
  },

  'Test interview dropdown and selections' : function(browser) {
      browser
        .verify.elementPresent('.interview-dropdown-container', 'verify the interview dropdown').pause(model.pause + 500)
        .getText('.interview-type-not-selected', function(text) {
          this.verify.equal(text.value, 'Type')
        })
        .click('.interview-type-not-selected')
        .verify.elementPresent('ul.menu.interview-selector-dropdown.submenu.is-dropdown-submenu.first-sub.vertical.js-dropdown-active').pause(model.pause + 500)
        .verify.elementPresent('a[data-test="inPerson"]', 'interview in person').pause(model.pause + 500)
        .click('a[data-test="inPerson"]')
        .pause(model.pause + 500)
        .click('.interview-type-display.editable')
        .pause(model.pause + 500)
        .verify.elementPresent('a[data-test="phoneInterview"]', 'phone interview').pause(model.pause + 500)
        .click('a[data-test="phoneInterview"]')
        .pause(model.pause + 500)
        .click('.interview-type-display.editable')  
        .pause(model.pause + 500)
        .verify.elementPresent('a[data-test="videoConference"]', 'interview video Conference').pause(model.pause + 500)
        .click('a[data-test="videoConference"]')
        .pause(model.pause + 2500)
        .end()
    }
}