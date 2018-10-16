var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;


module.exports = {

	'Login to workspace' : function (browser) {
		browser
			.url('https://app.glidr.io')
			.resizeWindow(1440, 768).pause(model.pause + 500)
			.verify.elementPresent('div.login-logo.lpc-glidr-beta-login','looks for glidr logo').pause(model.pause + 500)
			.verify.elementPresent('div.signin-form-container', 'searches for active container').pause(model.pause + 500)
			.click('div.signin-form-container')
		browser
			.setValue('input[type=text]', 'dortiz+automation@glidr.io')
			.verify.elementPresent('div.signin-form-container', 'searches for second active container').pause(model.pause + 500)
			.click('input[type=password]')
		browser
			.setValue('input[type=password]', 'Testtest1!')
			.click('div.signup-show-password')
			.verify.elementPresent('.login-button', 'checks for button is active').pause(model.pause + 500)
			.click('.login-button')
			.waitForElementPresent('.org-container', 4000).pause(model.pause + 500)
	},

	'Verify for a project and an organization' : function(browser) {
		browser
			.useXpath()
			.waitForElementPresent("(//div[@class='org-dashboard-card-container'])[2]", 6000)
			.click("(//div[@class='org-dashboard-card-container'])[2]")

			.useCss()
			.waitForElementPresent('div.hamburger-holder', 6000, 'waits for hemaburger to open')
			.click('div.hamburger-holder')

	},

	'Opens to project': function(browser) {
		browser
			.waitForElementPresent('.side-nav-subSection-title', 6000)
			.verify.elementPresent('.side-nav-subSection-title', 'selects a project').pause(model.pause + 1000)
			.click('.side-nav-subSection-title')

			.useXpath()
			.waitForElementPresent("(//*[contains(text(), 'EXPERIMENT')])[18]", 2000)
			.click("(//*[contains(text(), 'EXPERIMENT')])[18]")
			.pause(model.pause + 1500)
			.click("(//div[@class='hover position-relative float-right success-circle-button'])")
	},

	'Run an experiment connect an evidence' : function (browser) {
		browser
			.useCss()
			.pause(model.pause + 1900)
			.verify.elementPresent('div.connect-more-info', 'opens and closes')
			.pause(model.pause + 1900)
			.click('div.connect-more-info')
			.pause(model.pause + 1900)
            .click('div.connect-more-info',)
			
			// connect evidences
            .verify.elementPresent('div.connect-card-card-container:nth-of-type(2)', 'connect first evidence').pause(model.pause + 500)
           	.click('div.connect-card-card-container:nth-of-type(2)')
           	.verify.elementPresent('div.connect-card-card-container:nth-of-type(3)', 'connect first evidence').pause(model.pause + 500)
           	.click('div.connect-card-card-container:nth-of-type(3)')
           	.verify.elementPresent('div.connect-card-card-container:nth-of-type(4)', 'connect first evidence').pause(model.pause + 500)
           	.click('div.connect-card-card-container:nth-of-type(4)')

           	//search for connected evidences
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
    		.pause(model.pause + 2000)
    		.click("(//div[@class='choose-card-type-card-container'])")
    		.pause(model.pause + 4000)
    		.click("(//div[contains(text(), 'Add Interviewee')])[2]")

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
    		.click("(//div[@class='experiment-connected-evidence-expand'])[6]")
    },

    'Run experiments and validate connections before analyzed': function(browser) {
    	  browser
    		.verify.elementPresent("(//div[@class='criteria-selection-icon-checkmark'])", 'checkmark validation').pause(model.pause + 900)
    		.click("(//div[@class='criteria-selection-icon-checkmark'])")
    		.pause(model.pause + 500)
    		.click("(//div[@class='criteria-selection-icon-checkmark'])[9]")
    		.pause(model.pause + 500)
    		.click("(//div[@class='criteria-selection-icon-checkmark'])[11]")
    		.pause(model.pause + 500)
    		.click("(//div[@class='criteria-selection-icon-x'])[6]")
    		.pause(model.pause + 500)
    		.click("(//div[@class='criteria-selection-icon-x'])[10]")
    		
    		//validations
    		.verify.elementPresent("(//div[@class='evidence-icon hover Disconfirming'])").pause(model.pause + 500)
    		.click("(//div[@class='evidence-icon hover Disconfirming'])[12]")
 			.pause(model.pause + 500)
 			.click("(//div[@class='evidence-icon hover Neutral'])[14]")
 			.pause(model.pause + 500)
 			.click("(//div[@class='evidence-icon hover Leaning Confirming'])[15]")
 			.pause(model.pause + 500)	 
 			.click("(//div[@class='evidence-icon hover Confirming'])[16]")
 			.pause(model.pause + 500)	 
 			.click("(//div[@class='evidence-icon hover Leaning Confirming'])[17]")
 			.pause(model.pause + 500)
 			.click("(//div[@class='evidence-icon hover Neutral'])[18]")
 			.pause(model.pause + 500)	 
 			.click("(//div[@class='evidence-icon hover Leaning Disconfirming'])[8]")
 			.pause(model.pause + 500)	 
 			.click("(//div[@class='evidence-icon hover Disconfirming'])[19]")	
 			.pause(model.pause + 500) 
 			.click("(//div[@class='evidence-icon hover Leaning Confirming'])[20]")
 			.pause(model.pause + 500) 
 			.click("(//div[@class='evidence-icon hover Neutral'])[21]")
 			.pause(model.pause + 500)
 			.click("(//div[@class='evidence-icon hover Leaning Confirming'])[22]")
 			.pause(model.pause + 2000)
 			.verify.elementPresent("(//div[@class='takeover-navigation-button-container clearfix next '])[2]", 'starts analysis').pause(model.pause + 500)	
 			.click("(//div[@class='takeover-navigation-button-container clearfix next '])[2]") 		
			.end()

   },


}

