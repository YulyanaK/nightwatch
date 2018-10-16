var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;


module.exports = {

 

  'Login to orgs for experiments': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://passive.glidr.io')
        .resizeWindow(1440, 768).pause(model.pause + 500)
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
        .waitForElementPresent("(//div[@class='org-dashboard-card-container'])[2]", 6000).pause(model.pause + 500)
        .click("(//div[@class='org-dashboard-card-container'])[2]")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 6000)
        .click('div.hamburger-holder')
  },
  

  'Select a project to create an experiments': function(browser) {
      browser
        .waitForElementPresent('.side-nav-subSection-title', 6000)
        .verify.elementPresent('div.side-nav-subSection-title', 'selecting a project').pause(model.pause + 1500)
        .click('.side-nav-subSection-title')

        .verify.elementPresent('div.workspace-takeover-btn', '+ to add a research').pause(model.pause + 1500)
        .click('div.workspace-takeover-btn')
        .verify.elementPresent('div.lpc-evaluation', 'selects an experiment').pause(model.pause + 1500)
        .click('div.lpc-evaluation')
  },

  'Create an experiment plan phase': function(browser) {
    browser
        .waitForElementPresent('div.experiment-add-member-plus', 3000, 'drop down')
        .click('div.experiment-add-member-plus')
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
        .pause(model.pause + 800) 
        .click("//*[contains(text(), 'PUBLISH')]")
        .end();
    
      },
  }



