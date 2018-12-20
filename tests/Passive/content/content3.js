var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');

module.exports = {
 

 'login to hypothesis': function(browser) {
      browser
        .url('https://passive.glidr.io')
        .resizeWindow(1124, 868).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'looks for glidr logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'searches for active container for email').pause(model.pause + 500)
        .click('div.signin-form-container')
      browser
        .setValue('input[type=text]', 'ykarpava@launchpadcentral.com')
        .verify.elementPresent('div.signin-form-container', 'searches for active container for password').pause(model.pause + 500)
        .click('input[type=password]')
      browser
        .setValue('input[type=password]', 'Brooklyn1!')
        .click('div.signup-show-password')
        .verify.elementPresent('div.login-button', 'checks for button is active').pause(model.pause + 500)
        .click('div.login-button')
        .pause(model.pause + 5000)
    },

  'Verify user is able to create and delete Assumption' : function(browser) {
      browser
       
        .useXpath()
        .frame("intercom-borderless-frame")
        .element('xpath', "//div[text()='Which one most closely matches your role?']", function(result){
            if (result.value && result.value.ELEMENT) {
                // Element is present, do the appropriate tests
                browser.click("//div[text()='Which one most closely matches your role?']")
                .waitForElementPresent("//div[@class='intercom-borderless-dismiss-button']", 6000)
                .click("//div[@class='intercom-borderless-dismiss-button']");
            } else {
                // Element is not present.
            }
        });
    browser
        .frame(null)
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
        .useCss()
        .verify.elementPresent('div.workspace-takeover-btn', '+ to add a research').pause(model.pause + 1500)
        .click('div.workspace-takeover-btn')
        .verify.elementPresent('div.lpc-evaluation', 'selects an experiment').pause(model.pause + 1500)
        .click('div.lpc-evaluation')
  },

  'Create an experiment plan phase': function(browser) {
    browser
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
        .setValue('.content-field-textarea', ['What is the name of the variable being tested in an experiment?', browser.Keys.ENTER]) 

        .verify.elementPresent('div.text-editor-container', 'hypothesis statement').pause(model.pause + 1500) 
        .click('div.text-editor-container')

        .useXpath()
        .click("//*[contains(text(), 'HYPOTHESIS STATEMENT')]")
        .keys('key insights and the new comments for the hypothesis statement is wokring as xpected ')

        .useCss()
        .verify.elementPresent('.content-field-container.organization-setting-input.org-name div:nth-of-type(3)', 'Plan details').pause(model.pause + 1500)

        .useXpath()
        .click("//*[contains(text(), 'PLAN DETAILS')]")
        .keys('key insights and the new comments for the hypothesis statement is working as xpected ')
    
        .useCss()         
        .verify.elementPresent('div.reusable-circle-button', 'connect an assumption').pause(model.pause + 1500) 
        .click('div.reusable-circle-button')   
        .verify.elementPresent('div.content-field-container.success-metrics-input', 'what metrics will you measure?').pause(model.pause + 1500) 

        .useXpath()
        .pause(model.pause + 800) 
        .click("//*[contains(text(), 'WHAT METRIC WILL YOU MEASURE?')]")
        .keys('What are the metrics for the assumption that will be entered for testing')

        .useXpath()
        .pause(model.pause + 800) 
        .click("//*[contains(text(), 'HOW WOULD YOU DEFINE SUCCESS FOR THIS METRIC?')]")
        .keys('The metrics result should be in most casese a positive one since it is for testing purpuses')
        .pause(model.pause + 800) 
        .click("//*[contains(text(), 'ADD')]")

        // connects assumptions
        .waitForElementPresent("(//div[@class='hover position-relative float-right success-circle-button'])[2]", 4000) 
        .click("(//div[@class='hover position-relative float-right success-circle-button'])[2]")
        
        .useCss()
        .waitForElementPresent('div.connect-card-card-container', 6000, 'selects 1st assumption').pause(model.pause + 1500) 
        .click('div.connect-card-card-container')
        //.waitForElementPresent('div.connect-card-card-container:nth-of-type(3)', 6000, 'selects 2nd assumption').pause(model.pause + 1500) 
        //.click('div.connect-card-card-container:nth-of-type(3)')
        
        .waitForElementPresent('div.connect-cards-close-icon', 6000, 'close selected assumptions').pause(model.pause + 1500) 
        .click('div.connect-cards-close-icon')
        
       
        .useXpath()
        .click("//span[text()='RUN EXPERIMENT']")

        
  },

  'Run an experiment connect an evidence': function(browser) {
     browser
        .useXpath()
        .pause(model.pause + 5000)
        .element('xpath', "//div[text()='Connect Evidence']", function(result){
            if (result.value && result.value.ELEMENT) {
                // Element is present, do the appropriate tests
                browser.useCss()
                .click('div.reusable-circle-button');
                
            } else {
                browser.useXpath()
                .moveToElement("//span[@class='takeover-navigation-button-title float-left' and text()='Run']", 10, 10)
                .click("//span[@class='takeover-navigation-button-title float-left' and text()='Run']")
                .waitForElementPresent('div.reusable-circle-button', 6000)
                .click('div.reusable-circle-button'); // Element is not present.
            }
        });

    browser
        
        //.waitForElementPresent('div.reusable-circle-button', 6000)
        //.click('div.reusable-circle-button')
        //.pause(model.pause + 900)
        //.click('div.connect-more-info')
        //.pause(model.pause + 900)
        //.click('div.connect-more-info')
        .useXpath()
        .waitForElementPresent("(//div[@class='name' and text()='Any name'])[1]", 6000)
        .moveToElement("(//div[@class='name' and text()='Any name'])[1]", 10, 10)
        .click("(//div[@class='name' and text()='Any name'])[1]")
        .useCss()
        .verify.elementPresent('div.connect-cards-close-icon', 'close-icon').pause(model.pause + 1500)
        .click('div.connect-cards-close-icon')
        .pause(model.pause + 5000)
        .useXpath()
        .click("//div[@class='text-container ']/div")
        .waitForElementPresent("(//span[@data-text='true'])[3]", 6000)
        .getText("(//span[@data-text='true'])[3]", function(result) {
        this.verify.equal(result.value, "key insights data integrity")
      })
        .waitForElementPresent("(//span[@data-text='true'])[4]", 6000)
        .getText("(//span[@data-text='true'])[4]", function(result) {
        this.verify.equal(result.value, "Notes: Some notes to test Data Being Stored and displayed back correctly")
      })
        .click("(//div[@class='card-full-last-card-btn lpc-back-arrow-button-white'])[3]")
        .waitForElementPresent("//span[text()='START ANALYSIS']", 6000)
        .moveToElement("//span[text()='START ANALYSIS']", 10, 10)
        .click("//span[text()='START ANALYSIS']")
        .waitForElementPresent("(//div[@class='dropdown-menu-icon clickable '])[4]", 6000)
        .moveToElement("//div[@class='card-full-nav full-nav-edit-mode-btn']", 10, 10)
        .click("//div[@class='card-full-nav full-nav-edit-mode-btn']")
        .moveToElement("(//div[@class='dropdown-menu-icon clickable '])[4]", 10, 10)
        .click("(//div[@class='dropdown-menu-icon clickable '])[4]")
        //.click("(//div[@class='dropdown-menu-icon clickable '])[4]")
        .waitForElementPresent("//div[text()='Delete Experiment']", 6000)
        .moveToElement("//div[text()='Delete Experiment']", 10, 10)
        .click("//div[text()='Delete Experiment']")
        .waitForElementPresent("//div[@class='confirmation-button no-cancel red undefined']", 5000)
        .moveToElement("//div[@class='confirmation-button no-cancel red undefined']", 10, 10)
        .click("//div[@class='confirmation-button no-cancel red undefined']")
        .pause(model.pause + 1900)
        .end()


        // connecting evidence
        
        
    },
}