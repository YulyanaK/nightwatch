var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');

module.exports = {

  'login to side nav to invite people': function(browser) {
      browser
        .url('https://app.glidr.io')
        .resizeWindow(1366, 768).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'checks for logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'checks for container to log in').pause(model.pause + 500)
        .click('div.signin-form-container')
      browser
        .setValue('input[type=text]', 'ykarpava+automation@glidr.io')
        .verify.elementPresent('div.signin-form-container', 'checks for container to log in').pause(model.pause + 500)
        .click('input[type=password]')
      browser
        .setValue('input[type=password]', 'Brooklyn1!')
        .click('div.signup-show-password')
        .verify.elementPresent('div.login-button', 'checks for button').pause(model.pause + 500)
        .click('div.login-button')
  },

  'Verify the project invite to name' : function(browser) {
      browser
        .useXpath()
        .pause(model.pause + 5000)
        .frame("intercom-borderless-frame")
        .element('xpath', "//div[@class='intercom-block intercom-block-paragraph']", function(result){
            if (result.value && result.value.ELEMENT) {
                // Element is present, do the appropriate tests
                browser.click("//div[@class='intercom-block intercom-block-paragraph']")
                .waitForElementPresent("//div[@class='intercom-borderless-dismiss-button']", 10000)
                .moveToElement("//div[@class='intercom-borderless-dismiss-button']", 10, 10)
                .click("//div[@class='intercom-borderless-dismiss-button']");
            } else {
                // Element is not present.
            }
        });
    browser
        .frame(null)
        .pause(model.pause + 2000)
        .frame("intercom-notifications-frame")
        .element('xpath', "//div[@class='intercom-snippet-body intercom-chat-snippet-body']", function(result){
            if (result.value && result.value.ELEMENT) {
                // Element is present, do the appropriate tests
                browser.moveToElement("//div[@class='intercom-snippet-body intercom-chat-snippet-body']", 10, 10)
                .click("//div[@class='intercom-borderless-dismiss-button']");
            } else {
                // Element is not present.
            }
        });
    browser  
        .frame(null)
        .waitForElementPresent("//*[contains(text(), 'Ghana_QA')]", 9000).pause(model.pause + 500)
        .moveToElement("//*[contains(text(), 'Ghana_QA')]", 10, 10)
        .click("//*[contains(text(), 'Ghana_QA')]")
        .pause(model.pause + 2000)

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 18000)
        .click('div.hamburger-holder')
        .verify.elementPresent('div.side-nav-organization-name-holder', 'opens left nav').pause(model.pause + 500)
        .click('div.side-nav-organization-name-holder')
        .verify.elementPresent('div.invite', 'checks for invite link').pause(model.pause + 500)
        .click('div.invite')
        .verify.elementPresent('div.invite-selection', 'selects a member invitation').pause(model.pause + 500)
        .click('div.invite-selection')
        .verify.elementPresent('div.back-arrow-invite.show-back-arrow.lpc-back-arrow-button-black', 'return arrow').pause(model.pause + 500)
        .click('div.back-arrow-invite.show-back-arrow.lpc-back-arrow-button-black')
        .verify.elementPresent('div.invite-selection', 'selects a member to invite').pause(model.pause + 500)
        .click('div.invite-selection')
        .verify.elementPresent('div.lpc-close-button-large-black.close-invite', 'closes invitation page ').pause(model.pause + 4000)
        .click('div.lpc-close-button-large-black.close-invite')
        .end();
  }
}