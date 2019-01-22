var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;


module.exports = {

  'login to workspace': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://passive.glidr.io')
        .resizeWindow(1440, 780).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'looks for glidr logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'searches for active container for email').pause(model.pause + 500)
        .click('div.signin-form-container')
      browser
        .setValue('input[type=text]', 'dortiz+automation@glidr.io')
        .verify.elementPresent('div.signin-form-container', 'searches for active container for password').pause(model.pause + 500)
        .click('input[type=password]')
      browser
        .setValue('input[type=password]', 'Testtest1!')
        .click('div.signup-show-password')
        .verify.elementPresent('div.login-button', 'checks for button is active').pause(model.pause + 500)
        .click('div.login-button')
        .waitForElementPresent('div.org-container', 7000).pause(model.pause + 500)
  },

  'Verify a project and org' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("//div[@class='org-dashboard-card-title' and text()='Senegal_QA']", 6000).pause(model.pause + 500)
        .moveToElement("//div[@class='org-dashboard-card-title' and text()='Senegal_QA']", 10, 10)
        .click("//div[@class='org-dashboard-card-title' and text()='Senegal_QA']")
        .pause(model.pause + 2000)

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 6000)
        .click('div.hamburger-holder')
  },

  'Project market size': function(browser) {
      browser
        .waitForElementPresent('div.side-nav-subSection-title', 6000, 'selects a project').pause(model.pause + 2000)
        .click('div.side-nav-subSection-title')
         .pause(model.pause + 900)

        .element('css selector', 'div.checklist-x-icon', function(result){
            if (result.value && result.value.ELEMENT) {
                // Element is present, do the appropriate tests
                browser.click('div.checklist-x-icon');
            } else {
                // Element is not present.
            }
        });

      
      browser
        .waitForElementPresent('div.basic-dropdown-selected-text.center-nav-page-routes', 6000, 'selects a dashboard')
        .click('div.basic-dropdown-selected-text.center-nav-page-routes')
        
        .useXpath()
        .waitForElementPresent("//*[contains(text(), 'Overview')]", 6000, 'open overview')
        .click("//*[contains(text(), 'Overview')]").pause(model.pause + 900)

        .pause(model.pause + 1000)
        .click("(//*[contains(text(), 'MARKET SIZE')])")
        .pause(model.pause + 2500)
   
        //Target market
      browser  
        .useCss()
        .waitForElementPresent('div.market-size-legend-icon.target.float-right', 1500,'target market')
        .click('div.market-size-legend-icon.target.float-right')
        .clearValue('input.market-size-currency-input').pause(model.pause + 1000)
        .click('div.float-right.market-size-edit-icon')
        .setValue('input.market-size-currency-input', '430')
        .pause(model.pause + 1000)


        //served available market
      browser  
        .useXpath()
        .verify.elementPresent("(//div[@class='market-size-currency-input'])[2]", 'available market').pause(model.pause + 1500)
        .click("(//input[@class='market-size-currency-input'])[2]")
        .pause(model.pause + 500)
        .click("(//div[@class='float-right market-size-edit-icon'])")
        .clearValue("(//input[@class='market-size-currency-input'])[2]")
        .pause(model.pause + 500)
        .click("(//div[@class='float-right market-size-edit-icon'])")
        .setValue("(//input[@class='market-size-currency-input'])[2]", '311')

        //total addressable market
        .verify.elementPresent("(//div[@class='market-size-currency-input'])[3]", 'available market').pause(model.pause + 1500)
        .click("(//input[@class='market-size-currency-input'])[3]")
        .pause(model.pause + 500)
        .click("(//div[@class='float-right market-size-edit-icon'])")
        .clearValue("(//input[@class='market-size-currency-input'])[3]")
        .pause(model.pause + 500)
        .click("(//div[@class='float-right market-size-edit-icon'])")
        .setValue("(//input[@class='market-size-currency-input'])[3]", '911')

        //market size notes
      browser
        .useCss()
        .verify.elementPresent('textarea.content-field-text').pause(model.pause + 1500)
        .click('textarea.content-field-text')
        .pause(model.pause + 1000)
        .clearValue('textarea.content-field-text')
        .pause(model.pause + 1000)
        .setValue('textarea.content-field-text', 'The T-note is issued by the U.S. government when it wants to raise money to fund its debts or undertake new projects for the benefit of the economy. The notes are sold in $100 increments, pay interest in six-month intervals, and pay investors the full face value of the note upon maturity.')
        
      browser  
        .useXpath()
        .verify.elementPresent("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])", 'notes for invesments').pause(model.pause + 1500)
        .click("(//div[@class='public-DraftEditor-content'])")
        .pause(model.pause + 1000)
        .setValue("(//div[@class='public-DraftEditor-content'])", ['Clarification', browser.Keys.ENTER])
        .pause(model.pause + 1000)

     browser
        .useCss()
        .verify.elementPresent('div.float-right.supporting-documents-add-button.clickable').pause(model.pause + 1000)
        .click('div.float-right.supporting-documents-add-button.clickable')
        //.setValue('input[type="file"]', require('path').resolve(__dirname + '/log.png'))
        //.refresh()
        //.pause(model.pause + 1800)
        .end();
    },
}
