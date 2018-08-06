var model = require('../../../helpers/model.js');
var controller = require('../../../helpers/controller.js');
var ObjectId = require('mongodb').ObjectId;

module.exports = {


  'login to activity feed filters': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://passive.glidr.io/')
        .resizeWindow(1366, 768).pause(model.pause + 500)
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
        .useXpath()
        .waitForElementPresent("//div[@class='org-dashboard-card-title' and text()='Ghana']", 4000).pause(model.pause + 500)
        .moveToElement("//div[@class='org-dashboard-card-title' and text()='Ghana']", 10, 10)
        .click("//div[@class='org-dashboard-card-title' and text()='Ghana']")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 6000)
        .click('div.hamburger-holder')
  },

  'Activity feed filters' : function(browser) {
      browser 
        .waitForElementPresent('.sub-section-container', 4000)
        .verify.elementPresent('div.sub-section-container', 'selecting a project').pause(model.pause + 1500)
        .click('.sub-section-container')
        .useXpath()
        .verify.elementPresent("//div[@class='nav-center-container   ']//div//a[2]/div[1]", 'enter to activity feed').pause(model.pause + 500)
        .click("//div[@class='nav-center-container   ']//div//a[2]/div[1]")
        .useCss()

        //.verify.elementPresent('div.checklist-x-icon').pause(model.pause + 500)
        //.click('div.checklist-x-icon')

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
  },

  'Tem memebrs' : function(browser){
      browser
        .useCss()
        .verify.elementPresent('div.feed-calendar-icon', 'close calendar').pause(model.pause + 500)
        .click('div.feed-calendar-icon')
        .verify.elementPresent('div.activity-people-list-container', 'select members').pause(model.pause + 500)
        .click('div.activity-people-list-container')
        .pause(model.pause + 300)
        .click('div.activity-people-list-container div:nth-of-type(1)')
        .pause(model.pause + 300)
        .click('div.activity-people-list-container div:nth-of-type(2)')
        .pause(model.pause + 300)
        .click('div.activity-people-list-container div:nth-of-type(3)')
        .pause(model.pause + 300)
        .click('div.activity-people-list-container div:nth-of-type(1)')
        .pause(model.pause + 300)
        .click('div.activity-people-list-container div:nth-of-type(2)')
        .pause(model.pause + 300)
        .click('div.activity-people-list-container div:nth-of-type(3)')
        .pause(model.pause + 300)
        

  },

  'Hastags' : function (browser) {
     browser
     .click('div.activity-filter-name-container div:nth-of-type(2)')
        .pause(model.pause + 300)
        .click('div.activity-filter-name-container div:nth-of-type(4)')
        .pause(model.pause + 300)
        .click('div.activity-filter-name-container div:nth-of-type(6)')
        .pause(model.pause + 300)
        .click('div.activity-filter-name-container div:nth-of-type(8)')
        .pause(model.pause + 300)
        .click('div.activity-filter-name-container div:nth-of-type(2)')
        .pause(model.pause + 300)
        .click('div.activity-filter-name-container div:nth-of-type(4)')
        .pause(model.pause + 300)
        .click('div.activity-filter-name-container div:nth-of-type(6)')
        .pause(model.pause + 300)
        .click('div.activity-filter-name-container div:nth-of-type(8)')
        .pause(model.pause + 300)

      
        .useXpath()
        .verify.elementPresent("(//div[@class='feed-tags-input-container'])", 'selecting tags').pause(model.pause + 1500)
        .click("(//div[@class='feed-tags-input-container'])")
        .setValue("(//input[@class='feed-filter-tag-search-input'])", 'a')
        .clearValue("(//input[@class='feed-filter-tag-search-input'])").pause(model.pause + 1500)
        .verify.elementPresent("(//div[@class='feed-tags-input-container'])", 'selecting tags').pause(model.pause + 1500)
        .click("(//div[@class='feed-tags-input-container'])")
        .setValue("(//input[@class='feed-filter-tag-search-input'])", 'b')
        .clearValue("(//input[@class='feed-filter-tag-search-input'])").pause(model.pause + 1500)
        .verify.elementPresent("(//div[@class='feed-tags-input-container'])", 'selecting tags').pause(model.pause + 1500)
        .click("(//div[@class='feed-tags-input-container'])")
        .setValue("(//input[@class='feed-filter-tag-search-input'])", 'd')
        .clearValue("(//input[@class='feed-filter-tag-search-input'])").pause(model.pause + 1500)
        .verify.elementPresent("(//div[@class='feed-tags-input-container'])", 'selecting tags').pause(model.pause + 1500)
        .click("(//div[@class='feed-tags-input-container'])")
        .setValue("(//input[@class='feed-filter-tag-search-input'])", 'h')
        .clearValue("(//input[@class='feed-filter-tag-search-input'])").pause(model.pause + 1500)
        
        //.useCss()
        //.verify.elementPresent('div.activity-filter-sort-clear', ' clear all fields').pause(model.pause + 500)
        //.click('div.activity-filter-sort-clear')
        //.pause(model.pause + 300)

        // Take another screenshot at the end of the filter activity image saved as activityfeed.png
        // .saveScreenshot('./reports/feed/activityfeed.png')
        .end();

   },
}

