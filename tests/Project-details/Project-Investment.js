var model = require('../../helpers/model');
var controller = require('../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;


module.exports = {

  'login to workspace': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://app.staging.glidr.io')
        // .resizeWindow(1024, 768).pause(model.pause + 500)
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

  'Verify a project and org' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("(//div[@class='org-dashboard-card-container'])[11]", 4000).pause(model.pause + 500)
        .click("(//div[@class='org-dashboard-card-container'])[11]")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 4000)
        .click('div.hamburger-holder')
  },

  'Project invesments': function(browser) {
      browser
        .verify.elementPresent('div.side-nav-subSection-title', 'selects a project').pause(model.pause + 1500)
        .click('div.side-nav-subSection-title')
        .verify.elementPresent('div.workspace-overview-btn', 'opens overview').pause(model.pause + 1500)
        .click('div.workspace-overview-btn')

        .useXpath()
        .pause(model.pause + 1500)
        .click("(//div[text()='INVESTMENT'])")

        .useCss()
        .verify.elementPresent('div.investment-currency-input.current', 'set currency').pause(model.pause + 1500)
        .click('input.investment-currency-input.current')
        .clearValue('input.investment-currency-input.current')
        .setValue('input.investment-currency-input.current', '14520')

        .verify.elementPresent('div.investment-currency-input.total', 'total investment').pause(model.pause + 1500)
        .click('input.investment-currency-input.total')
        .clearValue('input.investment-currency-input.total')
        .setValue('input.investment-currency-input.total', '32567')

        .verify.elementPresent('textarea.content-field-text').pause(model.pause + 1500)
        .click('textarea.content-field-text')
        .clearValue('textarea.content-field-text')
        .setValue('textarea.content-field-text', 'The T-note is issued by the U.S. government when it wants to raise money to fund its debts or undertake new projects for the benefit of the economy. The notes are sold in $100 increments, pay interest in six-month intervals, and pay investors the full face value of the note upon maturity.')
        
        .useXpath()
        .verify.elementPresent("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])", 'notes for invesments').pause(model.pause + 1500)
        .click("(//div[@class='public-DraftEditor-content'])")
        .setValue("(//div[@class='public-DraftEditor-content'])", ['Clarification', browser.Keys.ENTER])

        .useCss()
        .verify.elementPresent('div.float-right.supporting-documents-add-button.clickable')
        .click('div.float-right.supporting-documents-add-button.clickable')

        .setValue('input[type="file"]', require('path').resolve(__dirname + '/log.png'))
        .refresh()
        .pause(model.pause + 1800)
        .end();
    },
}
