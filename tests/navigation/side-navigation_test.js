//this page is just for reference for the rest of the documents for regression testing 
var model = require('../../helpers/model');
var controller = require('../../helpers/controller');

module.exports = {

  'login to create a new project': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://app.staging.glidr.io')
        .resizeWindow(1366, 768).pause(model.pause + 500)
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

  'Verify the organizations for Project dashboard' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("(//div[@class='org-dashboard-card-container'])[5]", 4000).pause(model.pause + 500)
        .click("(//div[@class='org-dashboard-card-container'])[5]")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 2000)
        .click('div.hamburger-holder')
  },


  'Searches for more collections and projects' : function(browser) {
      browser
        .verify.elementPresent('div.side-nav-view-more', 'view more organization names').pause(model.pause + 500)
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
        .verify.elementPresent('div.sidenav-search-box-container', 'opens input searches container').pause(model.pause + 500)
        .click('div.sidenav-search-box-container')
        .setValue('input.input', 'al').pause(model.pause + 1500)
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
        .click('div.hamburger-holder')
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
        .click('div.hamburger-holder')
        .verify.elementPresent('div.sub-section-container', 'opens leftnav project').pause(model.pause + 1500)
        .click('div.sub-section-container')
  },

  'Go to New Collection and explore top nav bar' : function(browser) {
      browser
        .verify.elementPresent('div.side-sub-section-holder', 'opens an active project').pause(model.pause + 500)
        .click('div.side-sub-section-holder')
        .verify.elementPresent('div[data-test="dashboard-nav"]', 'dashboard').pause(model.pause + 500)
        .click('div[data-test="dashboard-nav"]')
        .verify.elementPresent('div[data-test="activity-nav"]', 'activity feed').pause(model.pause + 500)
        .click('div[data-test="activity-nav"]')
        .verify.elementPresent('div.dropdown-menu-icon.clickable', 'project settings').pause(model.pause + 500)
        .click('div.dropdown-menu-icon.clickable')
        .verify.elementPresent('.dropdown-menu-selection', 'project notifications').pause(model.pause + 500)
        .click('.dropdown-menu-selection')

        .useXpath()
        .verify.elementPresent("(//div[text()='Team'])", 'team').pause(model.pause + 500)
        .click("(//div[text()='Team'])")

        .verify.elementPresent("(//div[text()='Notifications'])", 'notifications').pause(model.pause + 500)
        .click("(//div[text()='Team'])")


        .verify.elementPresent("(//div[@class='close'])", 'close drawer').pause(model.pause + 500)
        .click("(//div[@class='close'])")

        .useCss()
        .verify.elementPresent('div.profile-image-container', 'help menu').pause(model.pause + 500)
        .click('div.profile-image-container')
        .verify.elementPresent('div.close.clickable', 'close drawer').pause(model.pause + 500)
        .click('div.close.clickable')
        .end()
  }
}