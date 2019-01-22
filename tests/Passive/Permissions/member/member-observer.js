var model = require('../../../../helpers/model');
var controller = require('../../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;

// Acceess private project
// Access org preferences and personal log
// View attached files
// Can Favorite


module.exports = {

  'login to workspace': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://passive.glidr.io')
        .resizeWindow(1440, 780).pause(model.pause + 500)
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
        .waitForElementPresent('div.org-container', 7000).pause(model.pause + 500)  
  },

  'Verify a project and org' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("//div[@class='org-dashboard-card-title' and text()='Italy_QA']", 11000).pause(model.pause + 500)
        .moveToElement("//div[@class='org-dashboard-card-title' and text()='Italy_QA']", 10, 10)
        .click("//div[@class='org-dashboard-card-title' and text()='Italy_QA']")
        .pause(model.pause + 2000)
    browser
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
    browser
        .useCss()
        .waitForElementPresent('div.hamburger-holder', 6000)
        .click('div.hamburger-holder')

    },
   
  'Select a private project and heads to Dashboard': function(browser) {
      browser
      .useXpath()
      .pause(model.pause + 4000)
       .click("//*[contains(text(), 'Colosseum_QA')]")
        .pause(model.pause + 900)

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
        .useCss()
        .waitForElementPresent('div.hamburger-holder', 6000)
        .click('div.hamburger-holder')
    },


  'Access to a private project': function(browser) {
      browser
        .useXpath()
        .pause(model.pause + 3000)
        .click("//*[contains(text(), 'The Renaissance_QA')]")
    },
        

  'Access org preferences and personal log ' : function(browser) {
      browser
        .useXpath()
        .verify.elementPresent("(//div[@class='profile-image-container profile-image right-nav-profile'])", 'profile settings').pause(model.pause + 1500)
        .click("(//div[@class='profile-image-container profile-image right-nav-profile'])")
        .pause(model.pause + 800)
        .click("//*[contains(text(), 'Profile & Account Settings')]")
        .pause(model.pause + 1800)
        .click("//*[contains(text(), 'Access Logs')]")
    },


  'view images': function(browser) {
      browser
        .useCss()
        .waitForElementPresent('div.hamburger-holder', 6000, 'open hamburger-holder')
        .click('div.hamburger-holder')

        .useXpath()
        .waitForElementPresent("//*[contains(text(), 'Piazza Nuova_QA')]", 4000, 'access idea to see images')
        .click("//*[contains(text(), 'Piazza Nuova_QA')]")
        .pause(model.pause + 1800)
        .click("//*[contains(text(), 'BUSINESS')]")

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
        .waitForElementPresent("(//div[@data-test='KeyPartners0'])", 3000, 'selects a card to see images')
        .click("(//div[@data-test='KeyPartners0'])")
        .pause(model.pause + 1000)
        .click("(//div[@class='media-canvas-image-container'])")
        .pause(model.pause + 1800)
        .click("(//div[@class='lightbox-arrow lpc-multi-use-arrow-white right'])")
        .pause(model.pause + 1800)
        .click("(//div[@class='lightbox-arrow lpc-multi-use-arrow-white right'])")
        .pause(model.pause + 1800)
        .click("//*[contains(text(), 'CLOSE')]")
        .pause(model.pause + 1800)
        .verify.elementPresent("(//div[@class='card-full-nav-x-container'])[3]", 'done editing').pause(model.pause + 1800)
        .click("(//div[@class='card-full-nav-x-container'])[3]")
 },

  'View activity feed can favorite cards': function(browser) {
      browser
        .waitForElementPresent("(//div[@class='basic-dropdown-selected-text center-nav-page-routes '])", 5000,  'opens for feed')
        .click("(//div[@class='basic-dropdown-selected-text center-nav-page-routes '])")
        .pause(model.pause + 1500)
        .click("//*[contains(text(), 'Activity Feed')]")
        .pause(model.pause + 1500)
        .click("(//div[@class='activity-header-icon-favorite lpc-favorite-icon-solid-gray'])[1]")
        .pause(model.pause + 1500)
        .click("(//div[@class='activity-header-icon-favorite lpc-favorite-icon-solid-yellow'])[1]")
        .pause(model.pause + 1500)
        .click("(//div[@class='profile-image no-image'])")
        .pause(model.pause + 1500)
        .click("//*[contains(text(), 'SIGN OUT')]")
        .end();
    },
}

