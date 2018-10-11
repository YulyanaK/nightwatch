var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;


module.exports = {

  'login to workspace': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://passive.glidr.io')
        .resizeWindow(1566, 768).pause(model.pause + 500)
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
        .useXpath()
        .moveToElement("//div[@class='login-button']", 10, 10)
        .mouseButtonClick(0)
        //.click("//div[@class='login-button']")
        
        .useCss()
        .waitForElementPresent('div.org-container', 4000).pause(model.pause + 500)
        
  },

  'Verify a project and org' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("(//div[@class='org-dashboard-card-container'])[6]", 4000).pause(model.pause + 500)
        .click("(//div[@class='org-dashboard-card-container'])[6]")
        .pause(model.pause + 2000)

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 4000)
        .click('div.hamburger-holder')
  },

  'Project overview': function(browser) {
      browser
        .verify.elementPresent('div.side-nav-subSection-title', 'selects a project').pause(model.pause + 2000)
        .moveToElement('div.side-nav-subSection-title', 10, 10)
        .mouseButtonClick(0)

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
        //.verify.elementPresent("//div[@class='workspace-overview-btn']", 'opens overview').pause(model.pause + 1500)
        .waitForElementPresent("//div[@class='workspace-overview-title']", 6000)
        .moveToElement("//div[@class='profile-text text-nav ']", 10, 10)
        .moveToElement("//div[@class='workspace-overview-title']", 10, 10).pause(model.pause + 1500)
        .click("//div[@class='workspace-overview-title']")
        .pause(model.pause + 4500)

        .verify.elementPresent("(//div[@class='details-content'])", 'project description').pause(model.pause + 500)
        .click("(//div[@class='details-content'])")
        .clearValue("(//textarea[@class='content-field-text'])")
        .pause(model.pause + 1500)
        .setValue("(//textarea[@class='content-field-text'])", 'La Ciudad de México, anteriormente conocida como el Distrito Federal,nota 1​ es una de las 32 entidades federativas de México,18​19​20​')

        .verify.elementPresent("(//div[@class='details-content'])[2]", 'problem statement').pause(model.pause + 500)
        .click("(//div[@class='details-content'])[2]")
        .clearValue("(//textarea[@class='content-field-text'])[2]")
        .pause(model.pause + 1500)
        .setValue("(//textarea[@class='content-field-text'])[2]", 'Water.')

        .verify.elementPresent("(//div[@class='details-content'])[3]", 'solution statement').pause(model.pause + 500)
        .click("(//div[@class='details-content'])[3]")
        .clearValue("(//textarea[@class='content-field-text'])[3]")
        .pause(model.pause + 1500)
        .setValue("(//textarea[@class='content-field-text'])[3]", 'Public security. Although the situation has improved greatly over recent years and other cities of the world (including US)')

        .verify.elementPresent("(//div[@class='details-content'])[4]", 'who is it for').pause(model.pause + 500)
        .click("(//div[@class='details-content'])[4]")
        .clearValue("(//textarea[@class='content-field-text'])[4]")
        .pause(model.pause + 1500)
        .setValue("(//textarea[@class='content-field-text'])[4]", 'Mexico City, Mexico’s largest city and the most populous metropolitan area in the Western Hemisphere, is also known as Distrito Federal, or the federal district. ')

        .useCss()
        .verify.elementPresent('div.project-details-add-section-container.clickable', 'add a field').pause(model.pause + 500)
        
        //Add a field
        .useXpath()
        .verify.elementPresent("(//div[@class='project-details-add-section-container clickable'])", 'add a new field').pause(model.pause + 500)
        .click("(//div[@class='project-details-add-section-container clickable'])")
        .pause(model.pause + 2000)
        .setValue("(//input[@class='new-content-field-title'])", 'Public Safety')
        .pause(model.pause + 500)
        .click("(//div[@class='new-content-field-save position-absolute enabled cancel'])")
        .pause(model.pause + 500)
        .click("(//div[@class='project-details-add-section-container clickable'])")
        .pause(model.pause + 1500)
        .setValue("(//input[@class='new-content-field-title'])", 'Public Safety')
        .pause(model.pause + 500)
        .verify.elementPresent("(//div[@class='new-content-field-save position-absolute enabled'])", 'enter new text').pause(model.pause + 2500)
        .click("(//div[@class='new-content-field-save position-absolute enabled'])")
        .pause(model.pause + 2500)
        .click("(//div[@class='reusable-content-field projectDetails'])[5]")
        .setValue("(//textarea[@class='content-field-text'])[5]", 'new card for safety')
        .pause(model.pause + 2500)
        .moveToElement("(//div[@class='takeover-title-container'])[6]", 10, 10)
        .click("(//*[@class='content-field-edit-icon'])").pause(model.pause + 2500)
        .moveToElement("(//div[@class='content-field-delete-holder'])", 10, 10)
        .click("(//div[@class='content-field-delete-holder'])").pause(model.pause + 2500)
       
        .useCss()
        .element('css selector', 'span.content-field-cancel.delete', function(result){
            if (result.value && result.value.ELEMENT) {
                // Element is present, do the appropriate tests
                browser.click('span.content-field-cancel.delete');
            } else {
                // Element is not present.
            }
        });



        //dropdowns
      browser
        .useXpath()
        .verify.elementPresent("(//div[@class='project-dashboard-dropdown-container'])", 'drop down time frame').pause(model.pause + 1500)
        .click("(//div[@class='project-dashboard-dropdown-container'])")
        .pause(model.pause + 900)
        .click("//*[contains(text(), 'Product')]")
        .pause(model.pause + 900)
        .click("(//div[@class='project-dashboard-dropdown-container'])")
        .pause(model.pause + 900)
        .click("//*[contains(text(), 'Service')]")

        .verify.elementPresent("(//div[@class='project-dashboard-dropdown-container'])[2]", 'drop down type of project').pause(model.pause + 1500)
        .click("(//div[@class='project-dashboard-dropdown-container'])[2]")
        .pause(model.pause + 900)
        .click("(//*[contains(text(), 'Problem Validation')])")
        .pause(model.pause + 900)
        .click("(//div[@class='project-dashboard-dropdown-container'])[2]")
        .pause(model.pause + 900)
        .moveToElement("//*[contains(text(), 'Solution Validation')]", 10, 10)
        .click("//*[contains(text(), 'Solution Validation')]")

        .waitForElementPresent("(//div[@class='project-dashboard-dropdown-container'])[3]",2000, 'stage')
        .click("(//div[@class='project-dashboard-dropdown-container'])[3]")
        .pause(model.pause + 900)
        .click("(//*[contains(text(), '1 - 3 months')])")
        .pause(model.pause + 900)
        .click("(//div[@class='project-dashboard-dropdown-container'])[3]")
        .pause(model.pause + 900)
        .click("//*[contains(text(), '12 - 18 months')]")

        .verify.elementPresent("(//div[@class='project-dashboard-dropdown-container'])[4]", 'describe the market').pause(model.pause + 1500)
        .click("(//div[@class='project-dashboard-dropdown-container'])[4]")
        .pause(model.pause + 900)
        .click("//div[text()='Existing market that we currently serve']")
        .pause(model.pause + 900)
        .click("(//div[@class='project-dashboard-dropdown-container'])[4]")
        .pause(model.pause + 900)
        .click("//*[contains(text(), 'New market')]")

        .verify.elementPresent("(//div[@class='project-dashboard-dropdown-container'])[5]", 'describe the technology').pause(model.pause + 1500)
        .click("(//div[@class='project-dashboard-dropdown-container'])[5]")
        .pause(model.pause + 900)
        .click("//div[text()='Existing technology that we currently use/deploy']")
        .pause(model.pause + 900)
        .click("(//div[@class='project-dashboard-dropdown-container'])[5]")
        .pause(model.pause + 900)
        .moveToElement("//*[contains(text(), 'New technology')]", 10, 10)
        .click("//*[contains(text(), 'New technology')]")

        //add comments
        .useXpath()
        .verify.elementPresent("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])", 'adding first comment').pause(model.pause + 1500)
        .click("(//div[@class='public-DraftEditor-content'])")
        .setValue("(//div[@class='public-DraftEditor-content'])", 'Clarification')
        .keys('\uE006')

        .verify.elementPresent("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])", 'second comment').pause(model.pause + 1500)
        .click("(//div[@class='public-DraftEditor-content'])")
        .setValue("(//div[@class='public-DraftEditor-content'])", 'adding more text to see if this works')
        .keys('\uE006')

        .verify.elementPresent("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])", 'third comment').pause(model.pause + 1500)
        .click("(//div[@class='public-DraftEditor-content'])")
        .setValue("(//div[@class='public-DraftEditor-content'])", 'placeres implecables')
        .keys('\uE006')

        //add labels
        .useXpath()
        .verify.elementPresent("(//div[@class='project-labels-add float-right'])", 'opens to add labels').pause(model.pause + 1500)
        .click("(//div[@class='project-labels-add float-right'])")
        .pause(model.pause + 500)
        .setValue("(//input[@class='project-label-input focused'])", 'label')
        .pause(model.pause + 1000)
        //.keys('apple\n').pause(model.pause + 1000)
        .keys(browser.Keys.RETURN)
        //.keys('\uE006')
        .pause(model.pause + 1000)

        .verify.elementPresent("(//div[@class='project-labels-add float-right'])", 'creates second label').pause(model.pause + 1500)
        // .click("(//div[@class='project-labels-add float-right'])")
        .pause(model.pause + 1500)
        .setValue("(//input[@class='project-label-input focused'])", 'two labels')
        .pause(model.pause + 2000)
        .keys(browser.Keys.ENTER)
        //.keys('\uE006')
        // .pause(model.pause + 1000)

        // .click("(//div[@class='project-labels-add float-right'])")
        // .pause(model.pause + 1500)
        // .setValue("(//input[@class='project-label-input focused'])", 'three labels')
        // .pause(model.pause + 2000)
        // .keys(browser.Keys.ENTER)
        //.keys('\uE006')
        /*.pause(model.pause + 1000)

        .moveToElement("(//div[@class='label-hover-container'])", 10, 10)
        .click("(//div[@class='lpc-close-cancel-mini-icon-white dashboard-label-delete'])")
        .pause(model.pause + 1500)

        .moveToElement("(//div[@class='label-hover-container'])", 10, 10)
        .click("(//div[@class='lpc-close-cancel-mini-icon-white dashboard-label-delete'])[2]")
        .pause(model.pause + 1500)

        .click("(//div[@class='label-hover-container'])")
        .click("(//div[@class='lpc-close-cancel-mini-icon-white dashboard-label-delete'])")
        .pause(model.pause + 1500)*/
        .end();
    },
}
