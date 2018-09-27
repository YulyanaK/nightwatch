  var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');

module.exports = {
 

 'login to hypothesis': function(browser) {
      browser
        .url('https://app.staging.glidr.io')
        .resizeWindow(1124, 868).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'looks for glidr logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'searches for active container for email').pause(model.pause + 500)
        .click('div.signin-form-container')
      browser
        .setValue('input[type=text]', 'ykarpava+automation@glidr.io')
        .verify.elementPresent('div.signin-form-container', 'searches for active container for password').pause(model.pause + 500)
        .click('input[type=password]')
      browser
        .setValue('input[type=password]', 'StatenIsland1!%')
        .click('div.signup-show-password')
        .verify.elementPresent('div.login-button', 'checks for button is active').pause(model.pause + 500)
        .click('div.login-button')
        .pause(model.pause + 5000)
    },

  'Verify user is able to create Assumption' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("//div[text()='DataIntegrity_QA']", 4000)
        
        .click("//div[text()='DataIntegrity_QA']")
        .pause(model.pause + 4000)
        .click("//div[@class='hamburger-holder close ']").pause(model.pause + 2000)
        .click("//div[@class='side-nav-subSection-title' and text()='Sample Project']").pause(model.pause + 2000)
        .useCss()
        .element('css selector', 'div.checklist-x-icon', function(result){
            if (result.value && result.value.ELEMENT) {
                // Element is present, do the appropriate tests
                browser.click('div.checklist-x-icon');
            } else {
                // Element is not present.
            }
        });
        browser
        .useXpath()
        .click("//div[@class='nav-new-card-btn-plus lpc-material-plus ']")
        .pause(model.pause + 2000)
        .click("//div[@class='nav-new-card-type-title hypothesis opened' and text()='assumption']")
        .waitForElementPresent("//div[@class='hypothesis-nav-title hypothesis']", 6000)
        .pause(model.pause + 2000)
        .waitForElementPresent("//textarea[@class='content-field-textarea']", 5000)
        .moveToElement("//textarea[@class='content-field-textarea']", 10, 10)
        .click("//textarea[@class='content-field-textarea']")
        .setValue("//textarea[@class='content-field-textarea']", 'Data Integrity Tests Assumption').pause(model.pause + 2000)
        .click("//div[@class='details-title no-content' and text()='SUMMARY']")
        .keys('Summary for data integrity Assumption').pause(model.pause + 2000)
        //.click("//div[@class='card-full-nav full-nav-edit-mode-btn' and text()='PUBLISH']")

        .click("(//div[@class='card-full-nav-x'])[3]")
        .pause(model.pause + 2000)
        .waitForElementPresent("//div[@class='confirmation-button yes-delete undefined' and text()='Publish']", 6000)
        .click("//div[@class='confirmation-button yes-delete undefined' and text()='Publish']")
        .pause(model.pause + 6000)
        //.moveToElement("(//div[@class='card-full-nav-x'])[3]", 10, 10)
        //.click("(//div[@class='card-full-nav-x'])[3]")
        .waitForElementPresent("//div[@class='nav-center-container   ']//div//a/div", 6000)
        .click("//div[@class='nav-center-container   ']//div//a/div")
        //returns to Worspace
        .waitForElementPresent("(//div[@class='priority-card-summary '])[1]", 6000)
        .getText("(//div[@class='priority-card-summary '])[1]", function(result) { 
        this.verify.equal(result.value, "Data Integrity Tests Assumption")
      })
        .waitForElementPresent("//div[@class='nav-new-card-btn-plus lpc-material-plus roll-out']", 6000)

    },

    'Verify user is able to create Evidence Interview and Other' : function(browser) {
      browser
        .moveToElement("//div[@class='nav-new-card-btn-plus lpc-material-plus roll-out']", 10, 10).pause(model.pause + 2000)
        .click("//div[@class='nav-new-card-btn-plus lpc-material-plus roll-out']").pause(model.pause + 500)
        .click("//div[@class='nav-new-card-type-title hypothesis opened' and text()='evidence']")
        .waitForElementPresent("//div[@class='choose-card-type-selection-card-title' and text()='INTERVIEW']", 6000)
        .click("//div[@class='choose-card-type-selection-card-title' and text()='INTERVIEW']")
        .click("(//div[@class='choose-card-type-selection-card-subtititle'])[1]")
        .waitForElementPresent("//div[@class='interviewee-add-text clickable interview-edit-mode-text']", 5000)
        .click("//div[@class='interviewee-add-text clickable interview-edit-mode-text']")
        .pause(model.pause + 2000)
        .moveToElement("(//input[@class='new-interviewee-input'])[1]", 10, 10)
        .setValue("(//input[@class='new-interviewee-input'])[1]", 'Any name')//Adding Interviewee
        .pause(model.pause + 500)
        .moveToElement("(//input[@class='new-interviewee-input'])[2]", 10, 10)
        .setValue("(//input[@class='new-interviewee-input'])[2]", 'Anyemail@gmail.com')
        .pause(model.pause + 500)
        .moveToElement("(//input[@class='new-interviewee-input'])[3]", 10, 10)
        .setValue("(//input[@class='new-interviewee-input'])[3]", '3472104444')
        .pause(model.pause + 500)
        .moveToElement("(//input[@class='new-interviewee-input'])[4]", 10, 10)
        .setValue("(//input[@class='new-interviewee-input'])[4]", 'Any Title')
        .pause(model.pause + 500)
        .moveToElement("(//input[@class='new-interviewee-input'])[5]", 10, 10)
        .setValue("(//input[@class='new-interviewee-input'])[5]", 'Any Company Inc')
        .pause(model.pause + 500)
        .moveToElement("//button[@class='new-interviewee-submit']", 10, 10)
        .click("//button[@class='new-interviewee-submit']")
        .pause(model.pause + 1000)
        .click("//div[@class='interviewee-close-text']")
        .waitForElementPresent("//div[@class='details-title no-content' and text()='KEY INSIGHTS']", 6000)
        .click("//div[@class='details-title no-content' and text()='KEY INSIGHTS']")
        .keys('key insights data integrity')
        .pause(model.pause + 1000)
        .waitForElementPresent("//div[@class='details-title no-content' and text()='NOTES']", 4000)
        .click("//div[@class='details-title no-content' and text()='NOTES']")
        .keys('Notes: Some notes to test Data Being Stored and displayed back correctly')
        .pause(model.pause + 1000)
        .waitForElementPresent("//div[@class='card-full-nav full-nav-edit-mode-btn' and text()='PUBLISH']", 4000)
        .moveToElement("//div[@class='card-full-nav full-nav-edit-mode-btn' and text()='PUBLISH']", 10, 10)
        .click("//div[@class='card-full-nav full-nav-edit-mode-btn' and text()='PUBLISH']")//publishing Evidence
        .pause(model.pause + 4000)
        .click("(//div[@class='card-full-nav-x'])[3]")
        .waitForElementPresent("//div[@class='nav-center-container   ']//div//a/div", 6000)
        .click("//div[@class='nav-center-container   ']//div//a/div")
        //returns to Worspace
        .waitForElementPresent("//div[@class='nav-new-card-btn-plus lpc-material-plus roll-out']", 6000)
        .moveToElement("//div[@class='nav-new-card-btn-plus lpc-material-plus roll-out']", 10, 10).pause(model.pause + 2000)
        .click("//div[@class='nav-new-card-btn-plus lpc-material-plus roll-out']").pause(model.pause + 500)
        .click("//div[@class='nav-new-card-type-title hypothesis opened' and text()='evidence']")
        .waitForElementPresent("//div[@class='choose-card-type-selection-card-title' and text()='OTHER']", 8000)
        .moveToElement("//div[@class='choose-card-type-selection-card-title' and text()='OTHER']", 10, 10)
        .click("//div[@class='choose-card-type-selection-card-title' and text()='OTHER']")
        
        .waitForElementPresent("//textarea[@class='content-field-textarea']", 6000)
        .setValue("//textarea[@class='content-field-textarea']", 'Evidence Other Title For Data Integrity QA')
        .pause(model.pause + 2000)
        .click("//div[@class='details-title no-content' and text()='SUMMARY']")
        .keys('New Summary Enter To check how it is stored and displayed')
        .pause(model.pause + 2000)

        .click("//div[@class='card-full-nav full-nav-edit-mode-btn' and text()='PUBLISH']")//publishing Evidence
        .pause(model.pause + 4000)
        .click("(//div[@class='card-full-nav-x'])[3]")
        .waitForElementPresent("(//div[@class='nav-center-container   ']//div//a/div)[2]", 6000)
    },


    'Verify all Assumption & Evidence fields displayed if opened from Activity Feed' : function(browser) {
      browser
        .click("(//div[@class='nav-center-container   ']//div//a/div)[2]")//entering Activity Feed
        .waitForElementPresent("//div[@class='filter-type-content']", 5000)
        .pause(model.pause + 2000)
        .click("//div[@class='filter-type-content' and text()='Assumptions']")
        .pause(model.pause + 7000)
        .getText("//div[@class='activity-card-body-title']", function(result) {
        this.verify.equal(result.value, "Data Integrity Tests Assumption")
      })
        .getText("(//div[@class='text-container ']/div)[1]", function(result) {
        this.verify.equal(result.value, "Summary for data integrity Assumption")
      })
        .click("//div[@class='activity-card-body-title']")
        .waitForElementPresent("//textarea[@class='content-field-textarea']", 4000)
        .getText("//span[@data-text='true']", function(result) {
        this.verify.equal(result.value, "Summary for data integrity Assumption")
      })
        .click("(//div[@class='card-full-nav-x'])[3]")
        .waitForElementPresent("//div[@class='activity-filter-sort-clear']", 6000)
        .click("//div[@class='activity-filter-sort-clear']")
        .pause(model.pause + 2000)
        .click("//div[@class='filter-type-content' and text()='Evidence']")
        .pause(model.pause + 5000)
        .getText("//div[@class='activity-card-body-title']", function(result) {
        this.verify.equal(result.value, "Evidence Other Title For Data Integrity QA")
      })
        .getText("(//div[@class='text-container ']/div)[1]", function(result) {
        this.verify.equal(result.value, "New Summary Enter To check how it is stored and displayed")
      })
        .click("//div[@class='activity-card-body-title']")
        .waitForElementPresent("//textarea[@class='content-field-textarea']", 6000)
        .getText("//textarea[@class='content-field-textarea']", function(result) {
        this.verify.equal(result.value, "Evidence Other Title For Data Integrity QA")
      })
        .getText("//span[@data-text='true']", function(result) {
        this.verify.equal(result.value, "New Summary Enter To check how it is stored and displayed")
      })
        .click("(//div[@class='card-full-nav-x'])[3]")
        .pause(model.pause + 2000)
        .waitForElementPresent("(//div[@class='nav-center-container   ']//div//a/div)[2]", 6000)
        .click("(//div[@class='nav-center-container   ']//div//a/div)[2]")//entering Activity Feed
        .pause(model.pause + 2000)
        .click("//div[@class='activity-card-body-title interview']")
        .pause(model.pause + 2000)
        .waitForElementPresent("//span[@data-text='true']", 6000)
        .pause(model.pause + 2000)
        .getText("(//span[@data-text='true'])[1]", function(result) {
        this.verify.equal(result.value, "key insights data integrity")
      })
        .pause(model.pause + 2000)
        .getText("(//span[@data-text='true'])[2]", function(result) {
        this.verify.equal(result.value, "Notes: Some notes to test Data Being Stored and displayed back correctly")
      })
        .click("(//div[@class='card-full-nav-x'])[3]")
        .waitForElementPresent("(//div[@class='nav-center-container   ']//div//a/div)[1]", 6000)
        .moveToElement("(//div[@class='nav-center-container   ']//div//a/div)[1]", 10, 10)
        .click("(//div[@class='nav-center-container   ']//div//a/div)[1]")
        .click("(//div[@class='nav-center-container   ']//div//a/div)[1]")


    
        .useCss()
        .waitForElementPresent('div.workspace-takeover-btn', 6000)
        .moveToElement('div.workspace-takeover-btn', 10, 10)
        .click('div.workspace-takeover-btn')
        .verify.elementPresent('div.lpc-exploration', 'selects a research').pause(model.pause + 1500)
        .click('div.lpc-exploration')

    },

  'Verify Assumption Fields content displayed if opened from Research': function(browser) {
      browser
        //.url(model.url + '')
        .waitForElementPresent('div.interview-datepicker-holder', 6000)
        .click('div.interview-datepicker-holder')
        .verify.elementPresent('div.DayPicker-Week:nth-of-type(4) > div.DayPicker-Day:nth-of-type(5)', 'date selectd').pause(model.pause + 2500)
        .click('div.DayPicker-Week:nth-of-type(4) > div.DayPicker-Day:nth-of-type(5)')
        .verify.elementPresent('div.experiment-add-member-plus', 'drop down').pause(model.pause + 2500)
        .click('div.experiment-add-member-plus')
        .verify.elementPresent('div.experiment-add-member-container', 'selects a users').pause(model.pause + 1500)
        .click('div.experiment-add-member-container')
        .verify.elementPresent('.experiments-navigation-member-container', 'closes dropdown users').pause(model.pause + 500)
        .click('.experiments-navigation-member-container')

        

        //adding research
        .verify.elementPresent('div.content-field-container.organization-setting-input.org-name', 'research name').pause(model.pause + 1500)
        .click('div.content-field-container.organization-setting-input.org-name')
        .setValue('.content-field-textarea', ['Once upon a time there was  a little black girl from the project of Detroit, you better work girl Rupaul.', browser.Keys.ENTER]) 

        .verify.elementPresent('div.text-editor-container', 'assumption statement').pause(model.pause + 1500) 
        .click('div.text-editor-container')

        .useXpath()
        .click("//*[contains(text(), 'OBJECTIVE')]")
        .keys('Key is the super model of the world')
        
        .useCss()
        .verify.elementPresent('.content-field-container.organization-setting-input.org-name div:nth-of-type(3)', 'Plan details').pause(model.pause + 1500)

        .useXpath()
        .click("//*[contains(text(), 'PLAN DETAILS')]")
        .keys('Claudi, Cindy, Nahomi, Gigi, Gia, Catwalk queens')
    
        // connects assumptions
        .waitForElementPresent("(//div[@class='hover position-relative float-right success-circle-button'])", 2000) 
        .click("(//div[@class='hover position-relative float-right success-circle-button'])")
        
        .useCss()
        .verify.elementPresent('div.reusable-circle-button', 'selects 1st assumption').pause(model.pause + 1500) 
        .click('div.reusable-circle-button ')
        .pause(model.pause + 1500) 

        .verify.elementPresent('div.connect-card-card-container:nth-of-type(1)', 'selects 2nd assumption').pause(model.pause + 1500) 
        .click('div.connect-card-card-container:nth-of-type(1)')
        
        .verify.elementPresent('div.connect-cards-close-icon', 'close selected assumptions').pause(model.pause + 1500) 
        .click('div.connect-cards-close-icon')
        .useXpath()
        .waitForElementPresent("//div[@class='experiments-linked-hypothesis-card-body']", 5000)
        .click("//div[@class='experiments-linked-hypothesis-card-body']")
        .pause(model.pause + 5000)
        .getText("(//textarea[@class='content-field-textarea'])[3]", function(result) {
        this.verify.equal(result.value, "Data Integrity Tests Assumption")
      })
        
        .waitForElementPresent("//textarea[@class='content-field-textarea']", 4000)
        .getText("(//span[@data-text='true'])[4]", function(result) {
        this.verify.equal(result.value, "Summary for data integrity Assumption")
      })
        .click("(//div[@class='card-full-last-card-btn lpc-back-arrow-button-white'])[3]")
        
               
        .pause(model.pause + 6000)
        .moveToElement("(//span[@class='takeover-navigation-button-title float-left' and text()='RUN RESEARCH'])[2]", 10, 10)
        .click("(//span[@class='takeover-navigation-button-title float-left' and text()='RUN RESEARCH'])[2]")
        .pause(model.pause + 6000)
        .moveToElement("(//div[@class='card-full-nav-x'])[3]", 10, 10)
        .click("(//div[@class='card-full-nav-x'])[3]")
        .end()

  },
}