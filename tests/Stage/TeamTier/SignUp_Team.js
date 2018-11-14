var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');
var random = Math.random().toString(4).substring(2, 6) + Math.random().toString(4).substring(2, 6);

module.exports = {

  'login': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://app.staging.glidr.io/sign-up/email')
        .resizeWindow(1366, 768).pause(model.pause + 500)
        .useXpath()
        .waitForElementPresent("//div/label[text()='Your Email']", 6000, 'looks for email address field').pause(model.pause + 500)
        .setValue("//div/input", 'ykarpava+'+random+'@launchpadcentral.com')
        .click("//div[@class='new-account-button']")



        .pause(model.pause + 25000)
        .url('https://mail.google.com/mail/?ui=html')
        .waitForElementPresent("//input[@id='identifierId']", 6000)
        .setValue("//input[@id='identifierId']", 'ykarpava@launchpadcentral.com')
        .click("//span[text()='Next']")
        .waitForElementPresent("//input[@type='password']", 6000)
        .click("//input[@type='password']")
        .setValue("//input[@type='password']", 'P0Penker13')
        .click("//span[text()='Next']")
        .waitForElementPresent("//b[text()='Verify your email address']", 16000)
        .click("//b[text()='Verify your email address']")
        .waitForElementPresent("//a[text()='VERIFY EMAIL ADDRESS']", 6000)
        .click("//a[text()='VERIFY EMAIL ADDRESS']")






        






        
  },
}