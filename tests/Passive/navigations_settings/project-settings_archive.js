var model = require('../../../helpers/model.js');
var controller = require('../../../helpers/controller.js');
var ObjectId = require('mongodb')

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
        .waitForElementPresent('div.org-container', 4000).pause(model.pause + 500)
  },

  'Verify the organizations for Project dashboard' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("//div[@class='org-dashboard-card-title' and text()='Nunavut_QA']", 6000).pause(model.pause + 500)
        .moveToElement("//div[@class='org-dashboard-card-title' and text()='Nunavut_QA']", 10, 10)
        .click("//div[@class='org-dashboard-card-title' and text()='Nunavut_QA']")
        .pause(model.pause + 2000)


        .useCss()
        .waitForElementPresent('div.hamburger-holder', 6000)
        .click('div.hamburger-holder')
  },

  'Create project': function(browser) {
      browser 
        
        .verify.elementPresent('div.side-nav-menu-plus-icon', 'opens a new collection from +').pause(model.pause + 500)
        .click('div.side-nav-menu-plus-icon')

        .pause(model.pause + 1500)
        .verify.elementPresent('textarea.reusable-input', 'project name').pause(model.pause + 500)
        .click('textarea.reusable-input')
        .setValue('textarea.reusable-input', 'The late Stone Age')
        .verify.elementPresent('textarea.reusable-input', 'project description').pause(model.pause + 500)
        .pause(model.pause + 500)

        .useXpath()
        .click("(//textarea[@class='reusable-input'])[2]")
        .pause(model.pause + 500)
        .setValue("(//textarea[@class='reusable-input'])[2]", ['A new analysis of artifacts from a cave in South Africa reveals that the residents were carving bone tools, using pigments, making beads and even using poison 44,000 years ago. These sorts of artifacts had previously been linked to the San culture, which was thought to have emerged around 20,000 years ago.', browser.Keys.ENTER])
        .pause(model.pause + 500)

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
        .verify.elementPresent('div.side-nav-organization-name-holder', 'opens left nav').pause(model.pause + 1500)
        .click('div.side-nav-organization-name-holder')
        .verify.elementPresent('.side-nav-org-options:nth-of-type(3)', 'opens left nav create a project').pause(model.pause + 1500)
        .click('.side-nav-org-options:nth-of-type(3)')
        .verify.elementPresent('div.create-project-nav-button' , 'select create button').pause(model.pause + 1500)
        .click('div.create-project-nav-button')
        .verify.elementPresent('div.create-project-member-option:nth-of-type(2)', 'select invitee 1').pause(model.pause + 1500)
        .click('div.create-project-member-option:nth-of-type(2)')
        .verify.elementPresent('div.create-project-member-option:nth-of-type(3)', 'select invitee 3').pause(model.pause + 1500)
        .click('div.create-project-member-option:nth-of-type(3)')
        .verify.elementPresent('div.create-project-nav-button', 'end of test').pause(model.pause + 1500)
        .click('div.create-project-nav-button')
        .pause(model.pause + 4000)

  },

  'Delete project' : function(browser) {
      browser
        .waitForElementPresent('div.dropdown-menu-icon.clickable', 2000)
        .verify.elementPresent('div.dropdown-menu-icon.clickable', 'opens dropdown gear icon').pause(model.pause + 2500)
        .click('div.dropdown-menu-icon.clickable')

        .useXpath()
        .verify.elementPresent("(//div[text()='Settings'])", 'open Settings').pause(model.pause + 1000)
        .click("(//div[text()='Settings'])")

        .useCss()
        .verify.elementPresent('div.reusable-dropdown-container.show.status-dropdown', 'dropdown to archive project').pause(model.pause + 500)
        .click('div.reusable-dropdown-container.show.status-dropdown')
        .verify.elementPresent('.archive', 'archiving project').pause(model.pause + 500)
        .click('.archive')
        .verify.elementPresent('div.reusable-dropdown-container.show.project-archive-reason', 'dropdown project-archive-reason').pause(model.pause + 500)
        .click('div.reusable-dropdown-container.show.project-archive-reason')
        .verify.elementPresent('div.reusable-dropdown-option.clearfix.position-relative.projectHasBeenPlacedOnHold', 'archived reason').pause(model.pause + 500)
        .click('div.reusable-dropdown-option.clearfix.position-relative.projectHasBeenPlacedOnHold')

        .useXpath()
        .click("(//textarea[@class='content-field-textarea']) [2]")
        .setValue("(//textarea[@class='content-field-textarea']) [2]", ['A new analysis of artifacts from a cave in South Africa reveals that the residents were carving bone tools, using pigments, making beads and even using poison 44,000 years ago. These sorts of artifacts had previously been linked to the San culture, which was thought to have emerged around 20,000 years ago.', browser.Keys.ENTER])
            
        .useCss()
        .verify.elementPresent('a.cancel-link', 'cancel archive').pause(model.pause + 500)
        .click('a.cancel-link')
        .verify.elementPresent('div.reusable-dropdown-container.show.status-dropdown', 'dropdown to archive project').pause(model.pause + 500)
        .click('div.reusable-dropdown-container.show.status-dropdown')
        .verify.elementPresent('.archive', 'archiving project').pause(model.pause + 500)
        .click('.archive')

        .verify.elementPresent('div.reusable-dropdown-container.show.project-archive-reason', 'dropdown project-archive-reason').pause(model.pause + 500)
        .click('div.reusable-dropdown-container.show.project-archive-reason')

        .verify.elementPresent('div.reusable-dropdown-option.clearfix.position-relative.projectHasBeenKilled', 'projectHasBeenKilled').pause(model.pause + 500)
        .click('div.reusable-dropdown-option.clearfix.position-relative.projectHasBeenKilled')
   
        .verify.elementPresent('div.reusable-dropdown-container.show.project-archive-reason', 'dropdown project-archive-reason').pause(model.pause + 500)
        .click('div.reusable-dropdown-container.show.project-archive-reason')

        .verify.elementPresent('div.reusable-dropdown-option.clearfix.position-relative.archivingForAnotherReason', 'archivingForAnotherReason').pause(model.pause + 500)
        .click('div.reusable-dropdown-option.clearfix.position-relative.archivingForAnotherReason')
        .pause(model.pause + 500)

        .useXpath()
        .click("(//textarea[@class='content-field-textarea']) [2]")
        .pause(model.pause + 500)
        .clearValue("(//textarea[@class='content-field-textarea'])[2]")
        .setValue("(//textarea[@class='content-field-textarea'])[2]", ['A new analysis of artifacts which was thought to have emerged around 20,000 years ago.', browser.Keys.ENTER])
        .pause(model.pause + 500)

        .useCss()
        .verify.elementPresent('button.archive-button', 'archives project').pause(model.pause + 500)
        .click('button.archive-button')
         
        .end();
  },
 }

