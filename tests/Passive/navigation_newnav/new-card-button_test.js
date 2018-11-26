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


  'create a new assuption card once new card button is clicked' : function (browser) {
      browser
        .verify.elementPresent('div.nav-new-card-btn-plus.lpc-material-plus').pause(model.pause + 500)
        .click('div.nav-new-card-btn-plus.lpc-material-plus')
        .verify.elementPresent('div.hypothesis', 'assumptions icon').pause(model.pause + 500)
        .click('div.hypothesis')
        
        .useXpath()
        .pause(model.pause + 1500)
        .setValue("(//textarea[@class='content-field-textarea'])", ['this is the objective on testing', browser.Keys.ENTER])

        .useCss()
        .verify.elementPresent('div.full-nav-right > div.card-full-nav.full-nav-edit-mode-btn', 'publish').pause(model.pause + 800)
        .click('div.full-nav-right > div.card-full-nav.full-nav-edit-mode-btn')
        .verify.elementPresent('div.DraftEditor-root', 'summary').pause(model.pause + 500)
        .verify.elementPresent('div.card-full-nav.full-nav-edit-mode-btn', 'full card button').pause(model.pause + 800)
        .verify.elementPresent('div.current-card .card-full-nav-x-container', 'exit assumptions button').pause(model.pause + 800)
        .click('div.current-card .card-full-nav-x-container') 
        .verify.elementPresent('div.confirmation-button.yes-delete.undefined', 'publish assumption').pause(model.pause + 800)
        .click('div.confirmation-button.yes-delete.undefined')

  },


  'create a new post card once new card button is clicked' : function (browser) {
     browser
        .verify.elementPresent('div.nav-new-card-btn-container', 'opens up + button to create a post').pause(model.pause + 1500)
        .click('div.nav-new-card-btn-container')
        
        .verify.elementPresent('div.post', 'post icon').pause(model.pause + 4000)
        .click('div.post')
        .pause(model.pause + 900)
        .click('div.text-editor-container.editable.post').pause(model.pause + 900)
       
        .useXpath()
        .keys('JAPANで始まる記事の一覧')
        .pause(model.pause + 900)

        .click("(//*[contains(text(), 'PUBLISH')])")
        .pause(model.pause + 3000)
        .click("(//div[@class='card-full-nav-x'])[3]")
        
  },

  'create a new interview card once new card button is clicked' : function (browser) {
      browser
        .useCss()
        .waitForElementPresent('div.nav-new-card-btn-container',2000, 'opens the + button')
        .click('div.nav-new-card-btn-container')
        .pause(model.pause + 2000)

        .verify.elementPresent('div.evidence', 'evidence icon').pause(model.pause + 2000)
        .click('div.evidence')

        .verify.elementPresent('div.choose-card-type-card-container', 'full card button').pause(model.pause + 2000)
        .click('div.choose-card-type-card-container')
        .pause(model.pause + 2000)
       
        .useXpath()
        .click("(//div[@class='card-full-nav-x-container'])")
        
        .useCss()
        .verify.elementPresent('.card-full-nav-x-container', 'exit interview button')
        .pause(model.pause + 1000)
        .end();
  },

}