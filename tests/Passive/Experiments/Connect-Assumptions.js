var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;


module.exports = {

 

  'Login to orgs for experiments': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://passive.glidr.io')
        .resizeWindow(1440, 780).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'looks for glidr logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'searches for active container for email').pause(model.pause + 500)
        .click('div.signin-form-container')
      browser
        .setValue('input[type=text]', 'ykarpava+automation@glidr.io')
        .verify.elementPresent('div.signin-form-container', 'searches for active container for password').pause(model.pause + 500)
        .click('input[type=password]')
      browser
        .setValue('input[type=password]', 'Brooklyn1!')
        .click('div.signup-show-password')
        .verify.elementPresent('div.login-button', 'checks for button is active').pause(model.pause + 500)
        .click('div.login-button')
        .waitForElementPresent('div.org-container', 4000).pause(model.pause + 500)
  },

  'Verify the organizations for project dashboard' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("(//div[@class='org-dashboard-card-container'])[3]", 6000).pause(model.pause + 500)
        .click("(//div[@class='org-dashboard-card-container'])[3]")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 6000)
        .click('div.hamburger-holder')

  },
  

   'Select a project to create an experiments': function(browser) {
      browser
        .waitForElementPresent('.side-nav-subSection-title', 6000)
        .verify.elementPresent('div.side-nav-subSection-title', 'selecting a project').pause(model.pause + 1500)
        .click('.side-nav-subSection-title')

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
        .waitForElementPresent("(//*[contains(text(), 'EXPERIMENT')])", 2000)
        .click("(//*[contains(text(), 'EXPERIMENT')])")

  },

  'Create an experiment plan phase': function(browser) {
    browser
    
        // connects assumptions
        //.verify.elementPresent("(//div[@class='reusable-circle-button '])[2]") 
        .pause(model.pause + 6000) 
        .click("(//div[@class='reusable-circle-button '])[2]")

        //selects assumption to connect
        .waitForElementPresent("(//div[@class='connect-card-card-container '])", 4000 , 'selects 1st assumption')
        .click("(//div[@class='connect-card-card-container '])")
        .verify.elementPresent("(//div[@class='connect-card-card-container '])[2]", 'selects 2nd assumption').pause(model.pause + 1000) 
        .click("(//div[@class='connect-card-card-container '])[2]")
        .verify.elementPresent("(//div[@class='connect-card-card-container '])[3]", 'selects 3rd assumption').pause(model.pause + 1500) 

        //search for connectd assumptions
        .useCss()
        .verify.elementPresent('input.connect-cards-search-input', 'search field').pause(model.pause + 900) 
        .click('input.connect-cards-search-input')
        .setValue('input.connect-cards-search-input', 'an')
        .pause(model.pause + 1500) 
        .clearValue('input.connect-cards-search-input')
        .setValue('input.connect-cards-search-input', 'an')
        .pause(model.pause + 1500) 
        .clearValue('input.connect-cards-search-input')
        .setValue('input.connect-cards-search-input', 'c')
        .clearValue('input.connect-cards-search-input')
        .pause(model.pause + 1500) 
        .setValue('input.connect-cards-search-input', 'd')
        .pause(model.pause + 1500) 
        .clearValue('input.connect-cards-search-input')

        //filter canvas section
        .waitForElementPresent('div.experiments-filter-icon', 6000) 
        .click('div.experiments-filter-icon')
        .pause(model.pause + 900) 

        .useXpath()
        .waitForElementPresent("//*[contains(text(), 'CANVAS SECTION')]", 6000)
        .click("//*[contains(text(), 'CANVAS SECTION')]")
        .pause(model.pause + 900) 
        .click("//*[contains(text(), 'Key Resources')]")
        .pause(model.pause + 900) 
        .click("//*[contains(text(), 'Unassigned')]")
        .pause(model.pause + 900) 
        .click("//*[contains(text(), 'Cost Structure')]")
        .pause(model.pause + 900) 
        .click("//*[contains(text(), 'Channels')]")
        .pause(model.pause + 900) 

        .click("(//*[contains(text(), 'BACK')])[3]")
        .pause(model.pause + 900) 
        .click("//*[contains(text(), 'RESET')]")
        .pause(model.pause + 900) 
        .click("(//div[@class='experiments-filter-icon hover'])")

        //add a new assupmtion
        /*.verify.elementPresent("//div[text()='CREATE NEW']", 'creates a new assumption').pause(model.pause + 2000) 
        .click("//div[text()='CREATE NEW']")
        .pause(model.pause + 900) 
        .click("(//textarea[@class='content-field-textarea'])[4]").pause(model.pause + 1000)
        .clearValue("(//textarea[@class='content-field-textarea'])[4]").pause(model.pause + 1000)
        .keys('Canvas Section Assumption').pause(model.pause + 500)
        .click("(//*[contains(text(), 'SUMMARY')])[2]")
        .keys('Hãy cùng xây dựng Wiktionary! Bitwa o Knipawę – całość zmagań o kontrolę ')
        .click("(//div[@class='publish-btn'])")
        .pause(model.pause + 1500)*/
        .waitForElementPresent("//div[@class='connect-cards-close-icon ']", 6000)
        .click("//div[@class='connect-cards-close-icon ']")
        .waitForElementPresent("(//*[contains(text(), 'RUN EXPERIMENT')])[1]", 6000)
        .click("(//*[contains(text(), 'RUN EXPERIMENT')])[1]")
        .pause(model.pause + 1000)

        //.saveScreenshot('./reports/Experiments/experiments.png')
        .end();
      },
  }

        


