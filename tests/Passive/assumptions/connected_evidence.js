  var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');

module.exports = {
 

 'login to hypothesis': function(browser) {
      browser
        .url('https://passive.glidr.io')
        .resizeWindow(1124, 868).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'looks for glidr logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'searches for active container for email').pause(model.pause + 500)
        .click('div.signin-form-container')
      browser
        .setValue('input[type=text]', 'ykarpava+automation@glidr.io')
        .verify.elementPresent('div.signin-form-container', 'searches for active container for password').pause(model.pause + 500)
        .click('input[type=password]')
      browser
        .setValue('input[type=password]', 'Brooklyn1!')
        .click('div.signup-show-password')
        .verify.elementPresent('div.login-button', 'checks for button is active').pause(model.pause + 500)
        .click('div.login-button')
        .pause(model.pause + 5000)
    },

  'Verify user is able to connect Evidence to Assumption' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("//div[text()='Senegal_QA']", 4000)
        
        .click("//div[text()='Senegal_QA']")
        .pause(model.pause + 4000)
        .click("//div[@class='hamburger-holder close ']").pause(model.pause + 2000)
        .click("//div[@class='side-nav-subSection-title' and text()=' San Francisco de asis in the bay area and golden gate']").pause(model.pause + 2000)
        .click("//div[@class='nav-new-card-btn-plus lpc-material-plus ']").pause(model.pause + 2000)
        .click("//div[@class='nav-new-card-type-title hypothesis' and text()='Assumption']")
        .waitForElementPresent("//div[@class='hypothesis-nav-title hypothesis']", 6000)
        .pause(model.pause + 2000)

        .click("//textarea[@class='content-field-textarea']")
        .setValue("//textarea[@class='content-field-textarea']", 'Automation Tests Assumption_Connect_Evidence').pause(model.pause + 2000)
        .click("(//span[@id='connections'])[3]").pause(model.pause + 500)//click Connections
        .click("//div[@class='connections-circle-button ']")
        .pause(model.pause + 3000)
        .click("//div[text()='NEW']")//Click add new Evidence
        .waitForElementPresent("//div[@class='choose-card-type-selection-card-title' and text()='INTERVIEW']", 5000)
        .pause(model.pause + 2000)
        .click("//div[@class='choose-card-type-selection-card-title' and text()='INTERVIEW']")//select Interview
        .waitForElementPresent("(//div[text()='Add person'])[2]", 5000)
        .click("(//div[text()='Add person'])[2]")
        .pause(model.pause + 2000)
        .moveToElement("(//input[@class='new-interviewee-input'])[1]", 10, 10)
        .setValue("(//input[@class='new-interviewee-input'])[1]", 'Any name')//Adding Interviewee
        .pause(model.pause + 500)
        .moveToElement("(//input[@class='new-interviewee-input'])[2]", 10, 10)
        .setValue("(//input[@class='new-interviewee-input'])[2]", 'Anyemail@gmail.com')
        .pause(model.pause + 500)
        .moveToElement("(//input[@class='new-interviewee-input'])[3]", 10, 10)
        .setValue("(//input[@class='new-interviewee-input'])[3]", '3472104444')
        .pause(model.pause + 500)
        .moveToElement("(//input[@class='new-interviewee-input'])[4]", 10, 10)
        .setValue("(//input[@class='new-interviewee-input'])[4]", 'Any Title')
        .pause(model.pause + 500)
        .moveToElement("(//input[@class='new-interviewee-input'])[5]", 10, 10)
        .setValue("(//input[@class='new-interviewee-input'])[5]", 'Any Company Inc')
        .pause(model.pause + 500)
        .moveToElement("//button[@class='new-interviewee-submit']", 10, 10)
        .click("//button[@class='new-interviewee-submit']")
        .pause(model.pause + 1000)
        .click("//div[@class='interviewee-close-text']")
        .waitForElementPresent("(//div[@class='details-title no-content' and text()='KEY INSIGHTS'])[2]", 6000)
        .click("(//div[@class='details-title no-content' and text()='KEY INSIGHTS'])[2]")
        .keys('key insights')
        //.setValue("(//div[@data-contents='true'])[6]", 'Assumptions_Evidence_Test. Key Insights')
        .pause(model.pause + 1000)
        .click("//div[@class='publish-btn']")//publishing Evidence
        .pause(model.pause + 4000)
        .click("(//span[@id='connections'])[3]").pause(model.pause + 500)
        .verify.elementPresent("//div[@class='connections-card-evidence-title' and text()='Any name']")
        .click("//div[@class='connections-card-evidence-title' and text()='Any name']")
        .pause(model.pause + 3000)
        .click("(//div[@class='dropdown-menu-icon clickable '])[5]").pause(model.pause + 500)
        .click("//div[text()='Delete Evidence • Interview']").pause(model.pause + 500)
        .click("(//div[text()='Delete Evidence • Interview'])[2]").pause(model.pause + 500)
        .end()











    },
}