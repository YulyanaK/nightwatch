var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;


module.exports = {

	'Login to workspace' : function (browser) {
		browser
    			.url('https://passive.glidr.io')
    			.resizeWindow(1440, 768).pause(model.pause + 500)
    			.verify.elementPresent('div.login-logo.lpc-glidr-beta-login','looks for glidr logo').pause(model.pause + 500)
    			.verify.elementPresent('div.signin-form-container', 'searches for active container').pause(model.pause + 500)
    			.click('div.signin-form-container')
    		browser
    			.setValue('input[type=text]', 'ykarpava+automation@glidr.io')
    			.verify.elementPresent('div.signin-form-container', 'searches for second active container').pause(model.pause + 500)
    			.click('input[type=password]')
    		browser
    			.setValue('input[type=password]', 'Brooklyn1!')
    			.click('div.signup-show-password')
    			.waitForElementPresent('.login-button', 6000)
    			.click('.login-button')
    			.waitForElementPresent('.org-container', 8000).pause(model.pause + 500)
	},

	'Verify for a project and an organization' : function(browser) {
		browser
    			.useXpath()
    			.waitForElementPresent("(//div[@class='org-dashboard-card-container'])[3]", 6000)
    			.click("(//div[@class='org-dashboard-card-container'])[3]")

    			.useCss()
    			.waitForElementPresent('div.hamburger-holder', 6000, 'waits for hamburger to open')
    			.click('div.hamburger-holder')

	},

	'Opens to project': function(browser) {
		browser
    			.waitForElementPresent('.side-nav-subSection-title', 6000)
    			.verify.elementPresent('.side-nav-subSection-title', 'selects a project').pause(model.pause + 1000)
    			.click('.side-nav-subSection-title')


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
    			.waitForElementPresent("(//div[@class='workspace-inner-column-container'])[2]//div//div//div[@class='experiment-card-title']", 6000)
    			//.waitForElementPresent("(//*[contains(text(), 'EXPERIMENT')])", 6000)
    			//.click("(//*[contains(text(), 'EXPERIMENT')])")
    			.click("(//div[@class='workspace-inner-column-container'])[2]//div//div//div[@class='experiment-card-title']")
    			.pause(model.pause + 2000)
    			.waitForElementPresent("(//div[@class='hover position-relative float-right success-circle-button'])", 6000)
    			.click("(//div[@class='hover position-relative float-right success-circle-button'])")
	},

	'Run an experiment connect an evidence' : function (browser) {
		   browser
    			.pause(model.pause + 2000)
                .waitForElementPresent("(//div[@class='connect-more-info'])", 6000)
    	        .click("(//div[@class='connect-more-info'])")
    			.pause(model.pause + 1900)
                .click("(//div[@class='connect-more-info'])")

          // connect evidences
          .waitForElementPresent("(//div[@class='connect-card-card-container '])", 6000) 
          .click("(//div[@class='connect-card-card-container '])")
          .verify.elementPresent("(//div[@class='connect-card-card-container '])[2]", 'selects 2nd assumption').pause(model.pause + 1000) 
          .click("(//div[@class='connect-card-card-container '])[2]")
          .verify.elementPresent("(//div[@class='connect-card-card-container '])[3]", 'selects 3rd assumption').pause(model.pause + 1500) 

          //search for connected evidences
          .useCss()
          .verify.elementPresent('input.connect-cards-search-input', 'search field').pause(model.pause + 900)
          .click('input.connect-cards-search-input')
          .setValue('input.connect-cards-search-input', 'an')
          .pause(model.pause + 1500)
          .clearValue('input.connect-cards-search-input')
          .pause(model.pause + 500)
          .setValue('input.connect-cards-search-input', 'car')
          .pause(model.pause + 1500)
          .clearValue('input.connect-cards-search-input')
          .pause(model.pause + 500)
     },

  
  'Add new avidence' : function(browser){
      browser
          .useXpath()
          .verify.elementPresent("(//div[text()='CREATE NEW'])", 'creates a new evidence').pause(model.pause + 1000)
          .click("(//div[text()='CREATE NEW'])")
          .pause(model.pause + 1500)
          .click("(//div[@class='choose-card-type-card-container'])")
          .pause(model.pause + 1500)
          .verify.elementPresent("(//div[@class='interviewee-add-text clickable interview-edit-mode-text'])[2]", 'select new interviewee').pause(model.pause + 1500)
          .click("(//div[@class='interviewee-add-text clickable interview-edit-mode-text'])[2]")

          //add an interviewee
          .pause(model.pause + 900)
          .moveToElement("(//input[@class='new-interviewee-input'])[1]", 10, 10)
          .setValue("(//input[@class='new-interviewee-input'])[1]", 'Full Name')
          .pause(model.pause + 900)
          .moveToElement("(//input[@class='new-interviewee-input'])[2]", 10, 10)
          .setValue("(//input[@class='new-interviewee-input'])[2]", 'Title')
          .pause(model.pause + 900)
          .moveToElement("(//input[@class='new-interviewee-input'])[3]", 10, 10)
          .setValue("(//input[@class='new-interviewee-input'])[3]", 'company')
          .pause(model.pause + 900)
          .moveToElement("(//input[@class='new-interviewee-input'])[4]", 10, 10)
          .setValue("(//input[@class='new-interviewee-input'])[4]", 'anyemail@gmail.com')
          .pause(model.pause + 900)
          .moveToElement("(//input[@class='new-interviewee-input'])[5]", 10, 10)
          .setValue("(//input[@class='new-interviewee-input'])[5]", '3456789000')
          .pause(model.pause + 900)
          .moveToElement("(//button[@class='new-interviewee-submit'])", 10,10)
          .click("(//button[@class='new-interviewee-submit'])")
          .pause(model.pause + 900)
          .click("(//div[@class='interviewee-close-text'])")
          .pause(model.pause + 900)
          .waitForElementPresent("(//div[@class='details-title no-content' and text()='KEY INSIGHTS'])[2]", 500, 'enter insigghts')
          .click("(//div[@class='details-title no-content' and text()='KEY INSIGHTS'])[2]")
          .keys('Bミイス価値とし')
          .pause(model.pause + 500)
          .click("(//div[@class='details-title no-content' and text()='NOTES'])[2]")
          .keys('1921 قثسفهبر شبشسيصمثمح رسيبمضثم /سيبمسكيبمجخنقفس/يلبومينبلسرتذ ،شسيب، بننضخ٢٠٣٨٠٩٨٠٩٤٣-٤٥٠ه-٠نيترنس٩٨٠٩سبح ،خجنلسخنحخ-٠ه-٣٤=كولبسي')
          .pause(model.pause + 500)

          // publish evidence
          .click("(//div[@class='publish-btn'])")
          .pause(model.pause + 1500)
          .verify.elementPresent("(//div[@class='experiment-connected-evidence-expand'])", 'opens measure and rate').pause(model.pause + 900)
          .click("(//div[@class='experiment-connected-evidence-expand'])[3]")
          .pause(model.pause + 500)
          .click("(//div[@class='experiment-connected-evidence-expand'])[4]")
          .pause(model.pause + 500)
          .click("(//div[@class='experiment-connected-evidence-expand'])[5]")
          .pause(model.pause + 500)

    },

    'Run experiments and validate connections before analyzed': function(browser) {
        browser
          .verify.elementPresent("(//div[@class='criteria-selection-icon-checkmark'])[2]", 'checkmark validation').pause(model.pause + 900)
          .click("(//div[@class='criteria-selection-icon-checkmark'])[2]")
          .pause(model.pause + 500)
          .click("(//div[@class='criteria-selection-icon-checkmark'])[4]")
          .pause(model.pause + 500)
          .click("(//div[@class='criteria-selection-icon-x'])[3]")
          .pause(model.pause + 500)
          
          //validations
          .verify.elementPresent("(//div[@class='evidence-icon hover Disconfirming'])").pause(model.pause + 500)
          //conforming disconfirming 
          .click("(//div[@class='evidence-icon hover Disconfirming'])[2]")
          .pause(model.pause + 500)
          .click("(//div[@class='evidence-icon hover Leaning Disconfirming'])[7]")
          .pause(model.pause + 500)
          .click("(//div[@class='evidence-icon hover Neutral'])[3]")
          .pause(model.pause + 500)
          .click("(//div[@class='evidence-icon hover Leaning Confirming'])[4]")
          .pause(model.pause + 500)
          .click("(//div[@class='evidence-icon hover Confirming'])[5]")
          .pause(model.pause + 500)
          .click("(//div[@class='evidence-icon hover Leaning Confirming'])[6]")
          .pause(model.pause + 500)
          .click("(//div[@class='evidence-icon hover Neutral'])[7]")
          .pause(model.pause + 500)
          .click("(//div[@class='evidence-icon hover Leaning Disconfirming'])[11]")
          .pause(model.pause + 500)
          .click("(//div[@class='evidence-icon hover Disconfirming'])[2]")
          .pause(model.pause + 500)
          .click("(//div[@class='evidence-icon hover Leaning Disconfirming'])[10]")
          .pause(model.pause + 500)
          .click("(//div[@class='evidence-icon hover Neutral'])[11]")
          .pause(model.pause + 500)
          .click("(//div[@class='evidence-icon hover Leaning Confirming'])[12]")
          .pause(model.pause + 500) 
          .verify.elementPresent("(//div[@class='takeover-navigation-button-container clearfix next '])[2]", 'starts analysis').pause(model.pause + 500)  
          .click("(//div[@class='takeover-navigation-button-container clearfix next '])[2]")    
        .end()

   },


}
