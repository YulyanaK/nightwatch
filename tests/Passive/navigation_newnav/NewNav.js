var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;

module.exports = {


  'login': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://passive.glidr.io')
        .resizeWindow(1366, 768).pause(model.pause + 500)
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

    },

   'Verify the project name' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("//div[@class='org-dashboard-card-title' and text()='Senegal_QA']", 6000).pause(model.pause + 500)
        .moveToElement("//div[@class='org-dashboard-card-title' and text()='Senegal_QA']", 10, 10)
        .click("//div[@class='org-dashboard-card-title' and text()='Senegal_QA']")
        .pause(model.pause + 2000)

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 6000)
        .click('div.hamburger-holder')

        .waitForElementPresent('.side-nav-subSection-title', 6000)
        .verify.elementPresent('div.side-nav-subSection-title', 'selecting a project').pause(model.pause + 1500)
        .click('div.side-nav-subSection-title')

        .element('css selector', 'div.checklist-x-icon', function(result){
            if (result.value && result.value.ELEMENT) {
                // Element is present, do the appropriate tests
                browser.click('div.checklist-x-icon');
            } else {
                // Element is not present.
            }
        });
    },
  
  'Selects new top nav links' : function (browser) {
      browser
        .waitForElementPresent('.side-nav-subSection-title', 4000)
        .verify.elementPresent('div.side-nav-subSection-title', 'selecting a project').pause(model.pause + 1500)
        .click('.side-nav-subSection-title')
        .verify.elementPresent('div[data-test="dashboard-nav"]', 'click activity').pause(model.pause + 1500)
        .click('div[data-test="activity-nav"]')
        .verify.elementPresent('div[data-test="dashboard-nav"]', 'click dashboard').pause(model.pause + 1500)
        .click('div[data-test="dashboard-nav"]')
        //opens right drawer for notifications
        .verify.elementPresent('div.position-relative.notif-drawer-icon-wrapper', 'opens right drawer notifications').pause(model.pause + 500)
        .click('div.position-relative.notif-drawer-icon-wrapper')
        
        .verify.elementPresent('div.options:nth-of-type(2)', 'opens drafts').pause(model.pause + 1500)
        .click('div.options:nth-of-type(2)')
        
        .useXpath()
        .click("(//div[@class='close'])")

        .useCss()
        .verify.elementPresent('div.dropdown-menu-icon.clickable', 'opens gear dropdown-menu-icon').pause(model.pause + 1500)
        .click('div.dropdown-menu-icon.clickable')
        // returns to dashboard
        .verify.elementPresent('div[data-test="dashboard-nav"]', 'click dashboard').pause(model.pause + 500)
        .click('div[data-test="dashboard-nav"]')
        .verify.elementPresent('a.org-nav-title.project-view.go-to-project.truncate', 'click on project name').pause(model.pause + 500)
        .click('a.org-nav-title.project-view.go-to-project.truncate')
        .end();
  },

}