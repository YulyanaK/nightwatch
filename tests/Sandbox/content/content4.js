var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');

module.exports = {
 

 'login to hypothesis': function(browser) {
      browser
        .url('https://sandbox.staging.glidr.io')
        .resizeWindow(1124, 868).pause(model.pause + 500)
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
        .waitForElementPresent("(//div[@class='nav-center-container   ']//div//a/div)[3]", 6000)
        .moveToElement("(//div[@class='nav-center-container   ']//div//a/div)[3]", 10, 10)
        .click("(//div[@class='nav-center-container   ']//div//a/div)[3]")
        .pause(model.pause + 4000)
        .waitForElementPresent("//div[@class='riskiest-hypotheses-title float-left']", 6000)
        .moveToElement("(//div[@class='hypothesis-card-title closed '])[1]", 10, 10)
        .click("(//div[@class='hypothesis-card-title closed '])[1]")
        .waitForElementPresent("//div[@class='text-container ']/span", 6000)

        .getText("//div[@class='text-container ']/span", function(result) {
        this.verify.equal(result.value, "Summary for data integrity Assumption")
      })
        .click("//div[@class='text-container ']/span")
        .waitForElementPresent("//textarea[@class='content-field-textarea']", 6000)
        .getText("//textarea[@class='content-field-textarea']", function(result) {
        this.verify.equal(result.value, "Data Integrity Tests Assumption")
      })
        .waitForElementPresent("//span[@data-text='true']", 6000)
        .getText("//span[@data-text='true']", function(result) {
        this.verify.equal(result.value, "Summary for data integrity Assumption")
      })

        




    },

}    




