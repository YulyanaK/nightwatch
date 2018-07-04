var model = require('../../helpers/model.js');
var controller = require('../../helpers/controller.js');
var ObjectId = require('mongodb').ObjectId;

module.exports = {


  'login to activity feed filters': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://app.staging.glidr.io/')
        // .resizeWindow(1024, 968).pause(model.pause + 500)
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

  'Verify the organizations' : function(browser) {
      browser
        .waitForElementPresent('div.org-dashboard-card-container', 4000)
        .verify.elementPresent('.project-image-main.project-image-59b6e26d72bde10001000002', 'entering Spain organization').pause(model.pause + 500)
        .click('.project-image-main.project-image-59b6e26d72bde10001000002')
        .waitForElementPresent('div.hamburger-holder', 4000)
        .click('div.hamburger-holder')
  },

  'Activity feed filters' : function(browser) {
      browser 
        .waitForElementPresent('.side-nav-subSection-title', 4000)
        .verify.elementPresent('div.side-nav-subSection-title', 'selecting a project').pause(model.pause + 1500)
        .click('.side-nav-subSection-title')
        .verify.elementPresent('div[data-test="activity-nav"]', 'enter to activity feed').pause(model.pause + 500)
        .click('div[data-test="activity-nav"]')


      browser
        .getText('div.filter-type-content', function(result) { 
        this.verify.equal(result.value, "Assumptions")
      })     
        .moveTo('div.filter-type-content', 2, 2,function(){
      browser
        .click('div.filter-type-content')
      })
      browser
        .getText('div.clearfix.clickable.activity-filter-type:nth-of-type(2)', function(result) { 
        this.verify.equal(result.value, "Evidence")
      })     
        .moveTo('div.clearfix.clickable.activity-filter-type:nth-of-type(2)', 2, 2,function(){
      browser
        .click('div.clearfix.clickable.activity-filter-type:nth-of-type(2)')
    })
      browser
        .getText('div.clearfix.clickable.activity-filter-type:nth-of-type(3)', function(result) { 
        this.verify.equal(result.value, "Experiments & Research")
      })     
        .moveTo('div.clearfix.clickable.activity-filter-type:nth-of-type(3)', 2, 2,function(){
      browser
        .click('div.clearfix.clickable.activity-filter-type:nth-of-type(3)')
    })        
      browser
        .getText('div.clearfix.clickable.activity-filter-type:nth-of-type(4)', function(result) { 
        this.verify.equal(result.value, "Posts")
      })     
        .moveTo('div.clearfix.clickable.activity-filter-type:nth-of-type(4)', 2, 2,function(){
      browser
        .click('div.clearfix.clickable.activity-filter-type:nth-of-type(4)')
    }) 
        .useXpath()
        .click("(//div[@class='filter-type-content'])[5]")

       .useCss()
       .verify.elementPresent('div.clearfix.clickable.activity-filter-type:nth-of-type(3)', 'close research and experiments').pause(model.pause + 1500)
       .click('div.clearfix.clickable.activity-filter-type:nth-of-type(3)')
       .verify.elementPresent('div.filter-type-content', 'assumptions').pause(model.pause + 1500)
       .click('div.filter-type-content')
       .verify.elementPresent('div.clearfix.clickable.activity-filter-type:nth-of-type(2)').pause(model.pause + 1500)
       .click('div.clearfix.clickable.activity-filter-type:nth-of-type(2)')
       .verify.elementPresent('div.clearfix.clickable.activity-filter-type:nth-of-type(4)').pause(model.pause + 1500)
       .click('div.clearfix.clickable.activity-filter-type:nth-of-type(4)')
       
       .useXpath()
       .click("(//div[@class='filter-type-content'])[5]")     

  },

  'Activity feed date range' : function (browser) {
      browser
        .useCss()
        .verify.elementPresent('div.filter-date-range-container', 'date range').pause(model.pause + 500)
        .click('div.filter-date-range-container')
        .verify.elementPresent('input.activity-feed-calendar-input', 'calendar dates').pause(model.pause + 500)
        // input field not working, unable to to click or to set any value. input fields is not fucntional
        .click('input.activity-feed-calendar-input')
        // .setValue('input.activity-feed-calendar-input', ['5/1/2018 to 5/31/2018','\uE008'])

        .verify.elementPresent('div.DayPicker-Day', 'selecting dates').pause(model.pause + 500)
        .click('div.DayPicker-Day')
        .verify.elementPresent('div.DayPicker div:nth-of-type(2)', 'days selected').pause(model.pause + 500)
        .click('div.DayPicker div:nth-of-type(2)')

        .useXpath()
        .pause(model.pause + 500)
        .click("(//div[@class='DayPicker-Day'])[4]")
        .pause(model.pause + 500)
        .click("(//div[@class='DayPicker-Day'])[5]")
        .pause(model.pause + 500)
  },

  'Tem memebrs' : function(browser){
      browser
        .useCss()
        .verify.elementPresent('div.feed-calendar-icon', 'close calendar').pause(model.pause + 500)
        .click('div.feed-calendar-icon')
        .verify.elementPresent('div.activity-people-list-container', 'select members').pause(model.pause + 500)
        .click('div.activity-people-list-container')
        .pause(model.pause + 300)
        .click('div.activity-people-list-container div:nth-of-type(2)')
        .pause(model.pause + 300)
        .click('div.activity-people-list-container div:nth-of-type(4)')
        .pause(model.pause + 300)
        .click('div.activity-people-list-container div:nth-of-type(6)')
        .pause(model.pause + 300)
        .click('div.activity-people-list-container div:nth-of-type(8)')
        .pause(model.pause + 300)

  },

  'Hastags' : function (browser) {
     browser
        .verify.elementPresent('div.feed-tags-input-container', 'selecting tags').pause(model.pause + 500)
        .click('div.feed-tags-input-container')
        .setValue('input.feed-filter-tag-search-input', ['100', browser.Keys.ENTER])
        .clearValue('input.feed-filter-tag-search-input')
        .click('div.activity-filter-name-container div:nth-of-type(2)')
        .pause(model.pause + 300)
        .click('div.activity-filter-name-container div:nth-of-type(4)')
        .pause(model.pause + 300)
        .click('div.activity-filter-name-container div:nth-of-type(6)')
        .pause(model.pause + 300)
        .click('div.activity-filter-name-container div:nth-of-type(8)')
        .pause(model.pause + 300)
        .verify.elementPresent('div.activity-filter-sort-clear', ' clear all fields').pause(model.pause + 500)
        .click('div.activity-filter-sort-clear')
        .pause(model.pause + 300)
        // Take another screenshot at the end of the filter activity image saved as activityfeed.png
        .saveScreenshot('./reports/feed/activityfeed.png')
        .end();
   },
}

