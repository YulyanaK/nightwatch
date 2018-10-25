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
        .useXpath()
        .waitForElementPresent("(//span[text()=' Key is the super model of the world'])[1]", 6000)
        .moveToElement("(//span[text()=' Key is the super model of the world'])[1]", 10, 10)
        .click("(//span[text()=' Key is the super model of the world'])[1]")
        .pause(model.pause + 2000)
        .useCss()
        .verify.elementPresent('div.reusable-circle-button', 'clicks on circle btn').pause(model.pause + 2000)
        .click('div.reusable-circle-button')
        //.pause(model.pause + 900)
        //.click('div.connect-more-info')
        //.pause(model.pause + 900)
        //.click('div.connect-more-info')

        // connecting evidences
        .useXpath()
        .waitForElementPresent("(//div[@class='post-title' and text()='Evidence Other Title For Data Integrity QA'])[1]", 6000)
        .moveToElement("(//div[@class='post-title' and text()='Evidence Other Title For Data Integrity QA'])[1]", 10, 10)
        .click("(//div[@class='post-title' and text()='Evidence Other Title For Data Integrity QA'])[1]")
        .useCss()
        .verify.elementPresent('div.connect-cards-close-icon', 'close-icon').pause(model.pause + 1500)
        .click('div.connect-cards-close-icon')
        .pause(model.pause + 5000)
        .useXpath()
        .moveToElement("//div[@class='text-container ']/div", 10, 10)
        .click("//div[@class='text-container ']/div")
        .waitForElementPresent("(//textarea[@class='content-field-textarea'])[2]", 6000)
        .getText("(//textarea[@class='content-field-textarea'])[2]", function(result) {
        this.verify.equal(result.value, "Evidence Other Title For Data Integrity QA")
      })
        .waitForElementPresent("(//span[@data-text='true'])[2]", 6000)
        .getText("(//span[@data-text='true'])[2]", function(result) {
        this.verify.equal(result.value, "New Summary Enter To check how it is stored and displayed")
      })
        .click("(//div[@class='card-full-last-card-btn lpc-back-arrow-button-white'])[3]")
        //.waitForElementPresent("//div[@class='text-container ']/div", 6000)
        //.moveToElement("//div[@class='text-container ']/div", 10, 10)
        //.waitForElementPresent("//div[text()='REMOVE']", 4000)
        //.click("//div[text()='REMOVE']")
        .waitForElementPresent("//span[text()='START ANALYSIS']", 6000)
        .moveToElement("//span[text()='START ANALYSIS']", 10, 10)
        .click("//span[text()='START ANALYSIS']")
        .pause(model.pause + 3000)
        

        .waitForElementPresent("(//div[@class='dropdown-menu-icon clickable '])[4]", 6000)
        
        //.click("//div[@class='card-full-nav full-nav-edit-mode-btn']")
        .moveToElement("(//div[@class='dropdown-menu-icon clickable '])[4]", 10, 10)
        .click("(//div[@class='dropdown-menu-icon clickable '])[4]")
        //.click("(//div[@class='dropdown-menu-icon clickable '])[4]")
        .waitForElementPresent("//div[text()='Delete Research']", 6000)
        .moveToElement("//div[text()='Delete Research']", 10, 10)
        .click("//div[text()='Delete Research']")
        .waitForElementPresent("//div[@class='confirmation-button no-cancel red undefined']", 5000)
        .moveToElement("//div[@class='confirmation-button no-cancel red undefined']", 10, 10)
        .click("//div[@class='confirmation-button no-cancel red undefined']")
        .pause(model.pause + 1900)
        .end()

  },
}