var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;


module.exports = {

 

  'Login to orgs for research': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://app.glidr.io')
        //.resizeWindow(1024, 768).pause(model.pause + 500)
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
        .waitForElementPresent('div.org-container', 4000).pause(model.pause + 500)
  },

  'Verify the organizations for project dashboard' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("(//div[@class='org-dashboard-card-container'])[7]", 4000).pause(model.pause + 500)
        .click("(//div[@class='org-dashboard-card-container'])[7]")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 4000)
        .click('div.hamburger-holder')
  },
  

  'Select a project to create an research': function(browser) {
      browser
        .waitForElementPresent('.side-nav-subSection-title', 4000)
        .verify.elementPresent('div.side-nav-subSection-title', 'selecting a project').pause(model.pause + 1500)
        .click('.side-nav-subSection-title')

        .verify.elementPresent('div.workspace-takeover-btn', '+ to add a research').pause(model.pause + 1500)
        .click('div.workspace-takeover-btn')
        .verify.elementPresent('div.lpc-exploration', 'selects a research').pause(model.pause + 1500)
        .click('div.lpc-exploration')
  },

  'Create an research plan phase': function(browser) {
     browser
        //adding research
        .pause(model.pause + 1500)
        .verify.elementPresent('div.content-field-container.organization-setting-input.org-name', 'name research evidence').pause(model.pause + 1500)
        .click('div.content-field-container.organization-setting-input.org-name')
        .setValue('.content-field-textarea', ['Now we are testing filter connection of evidence', browser.Keys.ENTER]) 
        
        .useXpath()
        .click("(//textarea[@class='content-field-textarea'])[2]")
        //.click('div.content-field-container.organization-setting-input.org-name:nth-of-type(2)')
        .setValue("(//textarea[@class='content-field-textarea'])[2]", ['Evidence is the new testing for the filter-multi-select-button', browser.Keys.ENTER])
        
        .useCss()
        .verify.elementPresent('.content-field-container.organization-setting-input.org-name div:nth-of-type(3)', 'hypothesis statement').pause(model.pause + 1500)

        .useXpath()
        .click("(//textarea[@class='content-field-textarea'])[3]")
        .setValue("(//textarea[@class='content-field-textarea'])[3]", ['The goal is for the test to run on an evidence', browser.Keys.ENTER])
                  
        .useCss()         
        .verify.elementPresent('div.reusable-circle-button', 'connect an assumption').pause(model.pause + 1500) 
        .click('div.reusable-circle-button')   

        .verify.elementPresent('div.reusable-circle-hover-slideout', 'opens connections for assumptions ghost box').pause(model.pause + 1500)  
        .click('div.reusable-circle-hover-slideout')

        // connects assumptions
        .verify.elementPresent('div.connect-card-card-container', 'selects an assumptions').pause(model.pause + 1500) 
        .click('div.connect-card-card-container')
        .verify.elementPresent('div.connect-card-card-container:nth-of-type(2)', 'selects an assumption').pause(model.pause + 1500) 
        .click('div.connect-card-card-container:nth-of-type(2)')
        .verify.elementPresent('div.connect-card-card-container:nth-of-type(3)', 'selects 2nd assumption').pause(model.pause + 1500) 
        .click('div.connect-card-card-container:nth-of-type(3)')
        .verify.elementPresent('div.connect-card-card-container:nth-of-type(3)', 'selects 3rd assumption').pause(model.pause + 1500) 
        .click('div.connect-card-card-container:nth-of-type(3)')

        // clicks over icons messages
        .verify.elementPresent('div.connect-cards-close-icon', 'close connect assumption').pause(model.pause + 1500) 
        .click('div.connect-cards-close-icon')
        
        .useXpath()
        .click("//span[text()='RUN RESEARCH']")

        .useCss()
        .verify.elementPresent('div.experiments-documents-drag-container', 'adding files').pause(model.pause + 500)
        .click('div.experiments-documents-drag-container')
        .setValue('input[type="file"]', require('path').resolve(__dirname + '/ScreenShot.png'))
  },

  'Run an experiment connect an evidence': function(browser) {
     browser
        .verify.elementPresent('div.reusable-circle-button', 'connect an evidence').pause(model.pause + 2500)
        .click('div.reusable-circle-button')

        .verify.elementPresent('div.connect-card-card-container', 'connected evidence').pause(model.pause + 1500)
        .click('div.connect-card-card-container')
        
        .verify.elementPresent('div.experiments-filter-icon', 'select fitler').pause(model.pause + 500)
        .click('div.experiments-filter-icon')

        .verify.elementPresent('div.filter-multi-select-button', 'select canvas').pause(model.pause + 500)
        .click('div.filter-multi-select-button')        

        .verify.elementPresent('div.experiment-filter-selected-option', 'select interview').pause(model.pause + 500)
        .click('div.experiment-filter-selected-option') 
        .pause(model.pause + 500) 
        .click('div.experiment-filter-selected-option')

        .verify.elementPresent('div.experiment-filter-selected-option:nth-of-type(2)', 'select other').pause(model.pause + 500)
        .click('div.experiment-filter-selected-option:nth-of-type(2)')  
        .pause(model.pause + 500) 
        .click('div.experiment-filter-selected-option:nth-of-type(2)') 

        .verify.elementPresent('div.experiment-filter-toggle-title', 'select other').pause(model.pause + 500)
        .click('div.experiment-filter-toggle-title')  

        .verify.elementPresent('div.experiments-filter-icon', 'select fitler').pause(model.pause + 500)
        .click('div.experiments-filter-icon')

        .verify.elementPresent('input.connect-cards-search-input', 'search for evidence').pause(model.pause + 500)
        .click('input.connect-cards-search-input')
        .setValue('input.connect-cards-search-input', 'Evi')
        .pause(model.pause + 1500) 
        .clearValue('input.connect-cards-search-input')

        .click('input.connect-cards-search-input')
        .pause(model.pause + 1500) 
        .setValue('input.connect-cards-search-input', 'da') 
        .pause(model.pause + 1500) 
        .clearValue('input.connect-cards-search-input') 

        .click('input.connect-cards-search-input')
        .pause(model.pause + 1500) 
        .setValue('input.connect-cards-search-input', 'wo') 
        .pause(model.pause + 1500) 
        .clearValue('input.connect-cards-search-input') 
        .pause(model.pause + 4000) 

        .verify.elementPresent('div.cconnect-cards-new-hypothesis-button', 'new evidence').pause(model.pause + 1500)
        .click('div.connect-cards-new-hypothesis-button')

        .waitForElementPresent('div.choose-card-type-selection-close-icon','close new evidence').pause(model.pause + 3500)
        .click('div.choose-card-type-selection-close-icon')

        .end();
    
      },
  }