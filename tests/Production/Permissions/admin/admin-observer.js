var model = require('../../../../helpers/model');
var controller = require('../../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;

// Can cretea a project
// Acceess public project
// Access org preferences and personal log
// View attached files
// Can Favorite


module.exports = {

  'login to workspace': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://app.glidr.io')
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
        
        .useCss()
       // .verify.elementPresent('div.org-container').pause(model.pause + 3500)
    
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
  },

  'Verify a project and org' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("//div[@class='org-dashboard-card-title' and text()='India_QA']", 11000).pause(model.pause + 500)
        .moveToElement("//div[@class='org-dashboard-card-title' and text()='India_QA']", 10, 10)
        .click("//div[@class='org-dashboard-card-title' and text()='India_QA']")
        .pause(model.pause + 2000)
   
        .useCss()
        .waitForElementPresent('div.hamburger-holder', 6000)
        .click('div.hamburger-holder')
        .verify.elementPresent('div.side-nav-organization-name-holder', 'opens left nav').pause(model.pause + 500)
        .click('div.side-nav-organization-name-holder')
    },

  'Create project, invitation': function(browser) {
       browser 
        .verify.elementPresent('.side-nav-org-options:nth-of-type(3)', 'opens left nav create a project').pause(model.pause + 500)
        .click('.side-nav-org-options:nth-of-type(3)')
        .verify.elementPresent('textarea.reusable-input', 'project name').pause(model.pause + 500)
        .click('textarea.reusable-input')
        .setValue('textarea.reusable-input', 'Tségháhoodzání')
        .verify.elementPresent('div.reusable-text-area.description', 'project description').pause(model.pause + 500)
        .click('div.reusable-text-area.description')

        .useXpath()
        .setValue("(//textarea[@class='reusable-input'])[2]", 'The Navajo Nation (Navajo: Naabeehó Bináhásdzo) is a Native American territory covering about 17,544,500 acres (71,000 km2; 27,413 sq mi), occupying portions of northeastern Arizona, southeastern Utah, and northwestern New Mexico in the United States. This is the largest land area retained by a Native American tribe, with a population of roughly 350,000 as of 2016.')
        
        .useCss()
        .verify.elementPresent('div.pill-button', 'make it private').pause(model.pause + 500)
        .click('div.pill-button')
        .pause(1000)
        .verify.elementPresent('div.pill-button-text.private', 'make it public').pause(model.pause + 500)
        .click('div.pill-button-text.private')
        .verify.elementPresent('div.create-project-nav-button', 'click next').pause(model.pause + 500)
        .click('div.create-project-nav-button')

        //invites people to the project
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
        .pause(model.pause + 1000)
        .verify.elementPresent('div.hamburger-holder', 'open hamburger-holder').pause(model.pause + 3000)
        .click('div.hamburger-holder')
        .pause(model.pause + 20000)
  },


  'Access to a public project': function(browser) {
      browser
        .useXpath()
        .verify.elementPresent("(//div[@class='side-nav-settings-icons'])[2]", 'access public project').pause(model.pause + 800)
        .click("(//div[@class='side-nav-settings-icons'])[2]")

    },
        

  'Access org preferences and personal log ' : function(browser) {
      browser
        //member lands in project notifications
        //then moves onto profile logs
        .pause(model.pause + 1000)
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
        .verify.elementPresent('div.hamburger-holder', 'open hamburger-holder').pause(model.pause + 3000)
        .click('div.hamburger-holder')

        .useXpath()
        .verify.elementPresent("//*[contains(text(), 'India and Mombay')]", 'access idea to see images').pause(model.pause + 1800)
        .click("//*[contains(text(), 'India and Mombay')]")
        .pause(model.pause + 800)
        .click("//*[contains(text(), 'BUSINESS')]")
     
        .waitForElementPresent("(//div[@data-test='KeyPartners0'])", 3000, 'selects a card to see images')
        .click("(//div[@data-test='KeyPartners0'])")
        .pause(model.pause + 4000)
        .click("(//div[@class='media-canvas-image-container'])")
        .pause(model.pause + 1800)
        .click("(//div[@class='lightbox-arrow lpc-multi-use-arrow-white right'])")
        .pause(model.pause + 1800)
        .click("(//div[@class='lightbox-arrow lpc-multi-use-arrow-white right'])")
        .pause(model.pause + 1800)
        .click("//*[contains(text(), 'CLOSE')]")
        //.pause(model.pause + 1800)
        //.click("//*[contains(text(), 'Done Editing')]")
        .waitForElementPresent("(//div[@class='card-full-nav-x-container'])[3]", 6000, 'done editing').pause(model.pause + 1800)
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
