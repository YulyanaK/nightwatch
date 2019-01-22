var model = require('../../../helpers/model.js');
var controller = require('../../../helpers/controller.js');
var ObjectId = require('mongodb')

 module.exports = {


  'login to create a new project': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://app.glidr.io')
        .resizeWindow(1024, 768).pause(model.pause + 500)
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
        .waitForElementPresent('div.login-button', 6000)
        .click('div.login-button')
        .waitForElementPresent('div.org-container', 7000).pause(model.pause + 500)
  },

  'Verify the organizations for Project dashboard' : function(browser) {
      browser
        .useXpath()
        .pause(model.pause + 5000)
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
        .waitForElementPresent("//div[@class='org-dashboard-card-title' and text()='AutomationTesting_QA']", 6000).pause(model.pause + 500)
        .moveToElement("//div[@class='org-dashboard-card-title' and text()='AutomationTesting_QA']", 10, 10)
        .click("//div[@class='org-dashboard-card-title' and text()='AutomationTesting_QA']")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 12000)
        .click('div.hamburger-holder')
        .verify.elementPresent('div.side-nav-organization-name-holder', 'opens left nav').pause(model.pause + 500)
        .click('div.side-nav-organization-name-holder')
  },

  'Create project': function(browser) {
      browser 
        .verify.elementPresent('.side-nav-org-options:nth-of-type(3)', 'opens left nav create a project').pause(model.pause + 500)
        .click('.side-nav-org-options:nth-of-type(3)')
        .verify.elementPresent('textarea.reusable-input', 'project name').pause(model.pause + 500)
        .click('textarea.reusable-input')
        .setValue('textarea.reusable-input', 'The late Stone Age')
        .verify.elementPresent('div.reusable-text-area.description', 'project description').pause(model.pause + 500)
        .click('div.reusable-text-area.description')

        .useXpath()
        .setValue("(//textarea[@class='reusable-input'])[2]", 'A new analysis of artifacts from a cave in South Africa reveals that the residents were carving bone tools, using pigments, making beads and even using poison 44,000 years ago. These sorts of artifacts had previously been linked to the San culture, which was thought to have emerged around 20,000 years ago.')
        
        .useCss()
        .verify.elementPresent('div.pill-button', 'make it private').pause(model.pause + 500)
        .click('div.pill-button')
        .pause(1000)
        .verify.elementPresent('div.pill-button-text.private', 'make it public').pause(model.pause + 500)
        .click('div.pill-button-text.private')
        .verify.elementPresent('div.create-project-nav-button', 'click next').pause(model.pause + 500)
  },

  'Invite people to your project' : function(browser) {
      browser
        .verify.elementPresent('div.create-project-nav-button ', 'add ').pause(model.pause + 500)
        .click('div.create-project-nav-button')

        .verify.elementPresent('div.create-project-member-option', ' checking for more options').pause(model.pause + 500)
        .click('div.create-project-member-option')
        .verify.elementPresent('div.project-member-cancel-icon.lpc-close-cancel-mini-icon-blue', 'cancel').pause(model.pause + 500)
        .click('div.project-member-cancel-icon.lpc-close-cancel-mini-icon-blue')
        .verify.elementPresent('div.create-project-nav-back-arrow.lpc-back-arrow-button-white-create-project', 'next button').pause(model.pause + 500)
        .click('div.create-project-nav-back-arrow.lpc-back-arrow-button-white-create-project')
        .verify.elementPresent('div.close-collection-button.lpc-close-button-large-white-no-background.create-project', 'close page').pause(model.pause + 500)
        .click('div.close-collection-button.lpc-close-button-large-white-no-background.create-project')
        .verify.elementPresent('div.hamburger-holder', 'open hamburger-holder').pause(model.pause + 1000)
        .click('div.hamburger-holder')
        .verify.elementPresent('div.side-nav-organization-name-holder', 'opens left nav').pause(model.pause + 500)
        .click('div.side-nav-organization-name-holder')
        .verify.elementPresent('.side-nav-org-options:nth-of-type(3)', 'opens left nav create a project').pause(model.pause + 500)
        .click('.side-nav-org-options:nth-of-type(3)')
        .waitForElementPresent('div.create-project-nav-button' , 6000, 'select create button').pause(model.pause + 500)
        .click('div.create-project-nav-button')
        .useXpath()
        .waitForElementPresent("(//div[@class='profile-name create-project-member'])[1]", 6000, 'select invitee 1').pause(model.pause + 500)
        .click("(//div[@class='profile-name create-project-member'])[1]")
        .waitForElementPresent("(//div[@class='profile-name create-project-member'])[2]", 6000, 'select invitee 3').pause(model.pause + 500)
        .click("(//div[@class='profile-name create-project-member'])[2]")
        .waitForElementPresent("//div[@class='create-project-nav-button ']", 6000, 'end of test').pause(model.pause + 500)
        .click("//div[@class='create-project-nav-button ']")
        .pause(model.pause + 8500)
        .useCss()
        .waitForElementPresent('div.hamburger-holder', 12000)
        .click('div.hamburger-holder')
        .useXpath()
        .waitForElementPresent("//div[@class='side-nav-subSection-title' and text()='The late Stone Age']", 6000)
        .waitForElementPresent("(//div[@class='side-nav-settings-icons'])[3]", 6000)
        .moveToElement("(//div[@class='side-nav-settings-icons'])[4]", 10, 10)
        .click("(//div[@class='side-nav-settings-icons'])[4]")
        .waitForElementPresent("//div[@class='trash-can']", 10000)
        .moveToElement("//div[@class='trash-can']", 10, 10)
        .click("//div[@class='trash-can']")
        .waitForElementPresent("//div[@class='project-delete-buttons confirm']", 8000)
        .click("//div[@class='project-delete-buttons confirm']")
        .waitForElementPresent("//div[@class='confirmation-button no-cancel red undefined' and text()='DELETE PROJECT']", 8000)
        .click("//div[@class='confirmation-button no-cancel red undefined' and text()='DELETE PROJECT']")
        .pause(model.pause + 5500)
        .end();

    },

    /*'Delete the project just created' : function(browser) {
      browser
        .verify.elementPresent('div.hamburger-holder').pause(model.pause + 4000)
        .click('div.hamburger-holder')
        
        .useXpath()
        .verify.elementPresent("(//div[@class='side-nav-settings-icons'])[8]", 'verify for delte the project').pause(model.pause + 500)
        .click("(//div[@class='side-nav-settings-icons'])[8]")
        .verify.elementPresent("//div[text()='Settings']", 'settings').pause(model.pause + 1500)
        .click("//div[text()='Settings']")
        .useCss()
        .verify.elementPresent('div.delete-project-button').pause(model.pause + 500)
        .click('div.delete-project-button')
        .verify.elementPresent('div.project-delete-buttons.confirm').pause(model.pause + 500)
        .click('div.project-delete-buttons.confirm')
        .verify.elementPresent('div.confirmation-button.no-cancel.red.undefined', 'Delete project').pause(model.pause + 1500)
        .click('div.confirmation-button.no-cancel.red.undefined')
        .end();
  },*/
 }