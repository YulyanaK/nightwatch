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
        .element('xpath', "//div[@class='intercom-block intercom-block-paragraph']", function(result){
            if (result.value && result.value.ELEMENT) {
                // Element is present, do the appropriate tests
                browser.click("//div[@class='intercom-block intercom-block-paragraph']")
                .waitForElementPresent("//div[@class='intercom-borderless-dismiss-button']", 6000)
                .click("//div[@class='intercom-borderless-dismiss-button']");
            } else {
                // Element is not present.
            }
        });
    browser
        .frame(null)
        
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
        .waitForElementPresent("//div[text()='AssumptionsTest_QA']", 4000)
        .click("//div[text()='AssumptionsTest_QA']")
        .pause(model.pause + 4000)
        .waitForElementPresent("//div[@class='hamburger-holder close ']", 6000)
        .moveToElement("//div[@class='hamburger-holder close ']", 10, 10)
        .click("//div[@class='hamburger-holder close ']").pause(model.pause + 2000)
        .waitForElementPresent("//div[@class='side-nav-subSection-title' and text()='Sample Project']", 6000)
        .click("//div[@class='side-nav-subSection-title' and text()='Sample Project']").pause(model.pause + 2000)

    browser
        .useCss()
        .element('css selector', 'div.checklist-x-icon', function(result){
            if (result.value && result.value.ELEMENT) {
                // Element is present, do the appropriate tests
                browser.useXpath()
                .click("//div[@class='checklist-not-show-text']");
            } else {
                // Element is not present.
            }
        });
        browser
        .useXpath()
        .waitForElementPresent("//div[@class='nav-container position-relative ']//a/div[text()='Ideas']", 6000)
        .click("//div[@class='nav-container position-relative ']//a/div[text()='Ideas']")
        .waitForElementPresent("//div[@class='workspace-subnav-wrapper  ideas']/div[text()='BUSINESS']", 6000)
        .click("//div[@class='workspace-subnav-wrapper  ideas']/div[text()='BUSINESS']")
        .waitForElementPresent("//div[@class='canvas-view-button ']", 6000)
        .click("//div[@class='canvas-view-button ']")
        .waitForElementPresent("//div[@class='nav-new-card-btn-plus lpc-material-plus ']", 10000)
        .click("//div[@class='nav-new-card-btn-plus lpc-material-plus ']").pause(model.pause + 2000)
        .click("//div[@class='hypothesis-fab']")
        .waitForElementPresent("//div[@class='choose-card-type-selection-card-title' and text()='business idea']", 6000)
        .click("//div[@class='choose-card-type-selection-card-title' and text()='business idea']")
        .pause(model.pause + 2000)
        .waitForElementPresent("//div[@class='hypothesis-nav-title hypothesis']", 18000)
        .pause(model.pause + 2000)
        .click("//textarea[@class='content-field-textarea']")
        .setValue("//textarea[@class='content-field-textarea']", 'Automation Tests Idea').pause(model.pause + 2000)
        .click("//div[@class='card-full-nav full-nav-edit-mode-btn' and text()='PUBLISH']")
        .click("(//div[@class='card-full-nav-x'])[3]")
        .waitForElementPresent("//div[@class='card-content' and text()='Automation Tests Idea']", 10000)
        .moveToElement("//div[@class='card-content' and text()='Automation Tests Idea']", 10, 10)
        .click("//div[@class='card-content' and text()='Automation Tests Idea']")
        .waitForElementPresent("(//div[@class='dropdown-menu-icon clickable '])[4]", 8000)
        .waitForElementPresent("//div[@class='card-full-nav full-nav-edit-mode-btn' and text()='Done Editing']", 6000)
        .moveToElement("//div[@class='card-full-nav full-nav-edit-mode-btn' and text()='Done Editing']", 10, 10)
        .moveToElement("(//div[@class='dropdown-menu-icon clickable '])[4]", 10, 10)
        .click("//div[@class='card-nav-option']/div[@class='dropdown-menu-container more-dropdown hypothesis ']")
        .waitForElementPresent("//div[text()='Delete Idea']", 6000)
        .click("//div[text()='Delete Idea']")
        .waitForElementPresent("//div[@class='confirmation-button no-cancel red undefined']", 6000)
        .click("//div[@class='confirmation-button no-cancel red undefined']")
        .pause(model.pause + 3000)
        //.waitForElementPresent("//div[@data-test='keyPartners-add-card']", 6000)
        //.click("//div[@data-test='keyPartners-add-card']")
        //.waitForElementPresent("//div[@class='card-form-container']", 6000)
        //.setValue("//div[@class='card-form-container']", 'Business Canvas 0110')
        //.pause()

        



        

    

  
        .end()

  },
}