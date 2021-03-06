//this page is just for reference for the rest of the documents for regression testing 
var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');

module.exports = {

  'login to create a new project': function(browser) {
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
        .waitForElementPresent('div.org-container', 6000).pause(model.pause + 500)
  },

  'Verify the organizations for Project dashboard' : function(browser) {
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
        .waitForElementPresent("//div[@class='org-dashboard-card-title' and text()='Ghana_QA']", 16000).pause(model.pause + 500)
        .moveToElement("//div[@class='org-dashboard-card-title' and text()='Ghana_QA']", 10, 10)
        .click("//div[@class='org-dashboard-card-title' and text()='Ghana_QA']")
        .pause(model.pause + 2000)
        .useCss()
        .waitForElementPresent('div.hamburger-holder', 15000)
        .click('div.hamburger-holder')
  },


  'Searches for more collections and projects' : function(browser) {
      browser
        .waitForElementPresent('div.side-nav-view-more', 6000, 'view more organization names')
        .click('div.side-nav-view-more')
        .verify.elementPresent('div.side-nav-back-arrow', 'return to left navigation with project').pause(model.pause + 4000)
        .click('div.side-nav-back-arrow')
        .pause(model.pause + 500)

        .useXpath()
        .click("(//div[@class='side-nav-view-more'])")
        .verify.elementPresent("(//div[@class='side-nav-view-more'])", 'return to left navigation with collection').pause(model.pause + 4000)
        .click("(//div[@class='side-nav-back-arrow'])")

        .verify.elementPresent("(//div[@class='side-nav-settings-icons'])[7]", 'favorite a project').pause(model.pause + 4000)
        .click("(//div[@class='side-nav-settings-icons'])[7]")
        .verify.elementPresent("(//div[@class='side-nav-settings-icons'])[1]", 'unfavorite a project').pause(model.pause + 4000)
        .click("(//div[@class='side-nav-settings-icons'])[1]")

        .useCss()
        /*.verify.elementPresent('div.sidenav-search-box-container', 'opens input searches container').pause(model.pause + 500)
        .click('div.sidenav-search-box-container')
       
        .setValue('input.input', 'al').pause(model.pause + 1500)

        //.waitForElementPresent('input.input', 4000)
        //.setValue('input.input', 'al').pause(model.pause + 1500)
        .clearValue('input.input')
        .pause(model.pause + 1500)
        .verify.elementPresent('div.sidenav-search-box-container', 'opens input searches container').pause(model.pause + 500)
        .click('div.sidenav-search-box-container')
        .setValue('input.input', 'ex').pause(model.pause + 1500)
        .clearValue('input.input')
        .verify.elementPresent('div.side-nav-forward-arrow', 'searches for backlog').pause(model.pause + 1500)
        .click('div.side-nav-forward-arrow')
        
        .verify.elementPresent('div.hamburger-holder.open', 'side nav inbox').pause(model.pause + 500)
        .click('div.hamburger-holder.open')
        .verify.elementPresent('div.hamburger-holder', 'side nav inbox').pause(model.pause + 500)
        .click('div.hamburger-holder')*/
  },

  'Go to inbox from side navigation' : function(browser) {
      browser
        .verify.elementPresent('div.hamburger-holder', 'opens left nav').pause(model.pause + 1500)
        .click('div.hamburger-holder')

        .verify.elementPresent('div.portfolio-dashboard-side-nav', 'portfolio dashboard').pause(model.pause + 1500)
        .click('div.portfolio-dashboard-side-nav')
        .verify.elementPresent('div.hamburger-holder', 'opens left nav').pause(model.pause + 1500)
        .click('div.hamburger-holder')
        .verify.elementPresent('div.side-nav-inbox-container', 'opens inbox').pause(model.pause + 1500)
        .click('div.side-nav-inbox-container')
        .verify.elementPresent('div.hamburger-holder', 'opens left nav').pause(model.pause + 1500)
        .click('div.hamburger-holder').pause(model.pause + 1500)
        .verify.elementPresent('div.sub-section-container', 'opens leftnav project').pause(model.pause + 1500)
        .click('div.sub-section-container')
        .pause(model.pause + 1500)

        .useCss()
        .element('css selector', 'div.checklist-x-icon', function(result){
            if (result.value && result.value.ELEMENT) {
                // Element is present, do the appropriate tests
                browser.click('div.checklist-x-icon');
            } else {
                // Element is not present.
            }
        });
  },

  'Go to New Collection and explore top nav bar' : function(browser) {
      browser
        .useXpath()
        .pause(model.pause + 1500)
        .waitForElementPresent("//div[@class='side-nav-subSection-title' and text()='Batgirl new_QA']", 6000)
        .click("//div[@class='side-nav-subSection-title' and text()='Batgirl new_QA']")
        .pause(model.pause + 1500)
       
        .waitForElementPresent("//div[@class='nav-center-container   ']//div//a[3]/div", 6000)
        .click("//div[@class='nav-center-container   ']//div//a[3]/div")

        .verify.elementPresent("//div[@class='nav-center-container   ']//div//a[2]/div", 'activity feed').pause(model.pause + 1500)
        .click("//div[@class='nav-center-container   ']//div//a[2]/div")
        .useCss()
        .waitForElementPresent('div.hamburger-holder', 3000)
        .click('div.hamburger-holder').pause(model.pause + 4000)
        .useXpath()
        .moveToElement("(//div[@class='side-nav-settings-icons'])[2]", 10, 10)
        .click("(//div[@class='side-nav-settings-icons'])[2]").pause(model.pause + 500)
        //.verify.elementPresent('div.dropdown-menu-icon.clickable', 'project settings').pause(model.pause + 500)
        //.click('div.dropdown-menu-icon.clickable')
        //.verify.elementPresent('.dropdown-menu-selection', 'project notifications').pause(model.pause + 500)
        //.click('.dropdown-menu-selection')

        
        .verify.elementPresent("(//div[text()='Team'])", 'team').pause(model.pause + 500)
        .click("(//div[text()='Team'])").pause(model.pause + 1500)

        .verify.elementPresent("(//div[text()='Notifications'])", 'notifications').pause(model.pause + 500)
        .click("(//div[text()='Team'])")


        .verify.elementPresent("(//div[@class='close'])", 'close drawer').pause(model.pause + 500)
        .click("(//div[@class='close'])")

        .useCss()
        .verify.elementPresent('div.profile-image-container', 'help menu').pause(model.pause + 500)
        .click('div.profile-image-container')

        .useXpath()
        .verify.elementPresent("//*[contains(text(), 'SIGN OUT')]", 'sings out everywhere').pause(model.pause + 1500)
        .click("//*[contains(text(), 'SIGN OUT')]")  
        .end()
  }
}