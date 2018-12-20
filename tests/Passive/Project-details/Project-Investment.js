var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;


module.exports = {

  'login to workspace': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://passive.glidr.io')
        //.resizeWindow(1020, 768).pause(model.pause + 500)
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

  'Project invesments': function(browser) {
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
        .waitForElementPresent("(//div[text()='INVESTMENT'])", 8000)
        .click("(//div[text()='INVESTMENT'])")
        .waitForElementPresent("//div[@class='investment-currency-input current']", 8000)
        .moveToElement("//div[@class='investment-currency-input current']", 10, 10)
        .click("//div[@class='investment-currency-input current']")
        .waitForElementPresent("//*[@class='float-right market-size-edit-icon']", 6000)
        .moveToElement("//*[@class='float-right market-size-edit-icon']", 10, 10)
        .click("//*[@class='float-right market-size-edit-icon']")
    
        .clearValue("//input[@class='investment-currency-input current']")
        .pause(model.pause + 5500)

        .moveToElement("//textarea[@class='content-field-text']", 10, 10)
        .click("//textarea[@class='content-field-text']")
       
        .clearValue("//textarea[@class='content-field-text']")
        .setValue("//textarea[@class='content-field-text']", 'The T-note is issued by the U.S. government when it wants to raise money')
        .moveToElement("//div[text()='INVESTMENT TO DATE']", 10, 10)
        .click("//div[text()='INVESTMENT TO DATE']")
        .setValue("//input[@class='investment-currency-input current']", '100000')
        //.moveToElement("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[1]", 10, 10)
        //.click("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[1]")


       
        .moveToElement("//input[@class='investment-currency-input total']", 10, 10)
        .click("//input[@class='investment-currency-input total']")
        .moveToElement("//*[@class='float-right market-size-edit-icon']", 10, 10)
        .click("//*[@class='float-right market-size-edit-icon']")
        .clearValue("//input[@class='investment-currency-input total']")
        .pause(model.pause + 5500)
        .moveToElement("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[1]", 10, 10)
        .click("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[1]")
        .moveToElement("//div[text()='ESTIMATED TOTAL']", 10, 10)
        .click("//div[text()='ESTIMATED TOTAL']")
        .setValue("//input[@class='investment-currency-input total']", '150000')
        //.verify.elementPresent('div.investment-currency-input.total', 'total investment').pause(model.pause + 1500)
        //.click('input.investment-currency-input.total')
        //.clearValue('input.investment-currency-input.total')

        //.keys([browser.Keys.CONTROL, "a"])
        //.keys([browser.Keys.delete])
        //.setValue('input.investment-currency-input.total', '976')

        //.useXpath()
        .verify.elementPresent("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])", 'notes for invesments').pause(model.pause + 1500)
        .click("(//div[@class='public-DraftEditor-content'])")
        .setValue("(//div[@class='public-DraftEditor-content'])", ['Clarification', browser.Keys.ENTER])

        .useCss()
        .verify.elementPresent('div.float-right.supporting-documents-add-button.clickable')
        .click('div.float-right.supporting-documents-add-button.clickable')

        //.setValue('input[type="file"]', require('path').resolve(__dirname + '/log.png'))
        //.refresh()
        //.pause(model.pause + 1800)
        .end();
    },
}
