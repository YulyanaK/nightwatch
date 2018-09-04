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

  'Verify user is able to create and delete Assumption' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("//div[text()='Senegal_QA']", 4000)
        
        .click("//div[text()='Senegal_QA']")
        .pause(model.pause + 4000)
        .click("//div[@class='hamburger-holder close ']").pause(model.pause + 2000)
        .click("//div[@class='side-nav-subSection-title' and text()=' San Francisco de asis in the bay area and golden gate']").pause(model.pause + 2000)
        .click("//div[@class='nav-new-card-btn-plus lpc-material-plus ']").pause(model.pause + 2000)
        .click("(//div[@class='nav-new-card-type-title hypothesis opened'])[1]")
        .waitForElementPresent("//div[@class='hypothesis-nav-title hypothesis']", 6000)
        .pause(model.pause + 2000)
        .click("//textarea[@class='content-field-textarea']")
        .setValue("//textarea[@class='content-field-textarea']", 'Automation Tests Assumption').pause(model.pause + 2000)
        .click("//div[@class='card-full-nav full-nav-edit-mode-btn' and text()='PUBLISH']")
        .click("(//div[@class='card-full-nav-x'])[3]")
        .waitForElementPresent("//div[@class='nav-center-container   ']//div//a/div", 6000)
        .click("//div[@class='nav-center-container   ']//div//a/div")
        //returns to Worspace
        .waitForElementPresent("(//div[@class='priority-card-summary '])[1]", 6000)
        .getText("(//div[@class='priority-card-summary '])[1]", function(result) { 
        this.verify.equal(result.value, "Automation Tests Assumption")
      })
        .click("(//div[@class='priority-card-summary '])[1]")
        .waitForElementPresent("//div[@class='hypothesis-nav-title hypothesis']", 6000)//Assumption card takeover displayed
        .click("(//div[@class='dropdown-menu-icon clickable '])[5]").pause(model.pause + 500)
        .click("//div[text()='Delete Assumption']")
        .waitForElementPresent("//div[@class='confirmation-button no-cancel red undefined' and text()='Delete Assumption']", 6000)
        .click("//div[@class='confirmation-button-holder']/div[text()='Delete Assumption']").pause(model.pause + 4000)
        .waitForElementPresent("//div[@class='nav-center-container   ']//div//a/div", 6000)//Returns to Workspace
        

    },

  'Verify user is able to edit Assumption and select Canvas Section': function(browser) {
      browser
        //.url(model.url + '')
        .refresh()
        .pause(model.pause + 4000)
        .click("(//div[@class='priority-card-summary '])[1]")
        .waitForElementPresent("//div[@class='hypothesis-nav-title hypothesis']", 6000)//Assumption card takeover displayed
        .pause(model.pause + 2000)
        .click("//textarea[@class='content-field-textarea']").pause(model.pause + 1000)
        .clearValue("//textarea[@class='content-field-textarea']").pause(model.pause + 1000)
        .setValue("//textarea[@class='content-field-textarea']", 'Canvas Section Assumption').pause(model.pause + 2000)//Enter title
        .click("(//div[@class='reusable-dropdown-caret'])[2]").pause(model.pause + 2000)
        .click("//div[text()='Channels']").pause(model.pause + 500)
        .click("(//span[@id='connections'])[3]").pause(model.pause + 500)//click Connections
        .click("//div[text()='Research & Experiments']").pause(model.pause + 500)
        .click("//div[@class='connections-circle-button ']")
        .pause(model.pause + 3000)
        //.click("//span[text()='Connect']")//Connection Pop UP opens
        .waitForElementPresent("//div[@class='connect-cards-new-hypothesis-button position-absolute  ']", 6000)
        .click("(//div[@class='title'])[1]").pause(model.pause + 3000)//connected Experiment/Research
        //.verifyElementPresent("//div[@class='connect-cards-selected-count changed']")
        .click("//div[@class='close-icon']").pause(model.pause + 500)
        .waitForElementPresent("(//div[@class='hypothesis-linked-evidence-number float-left'])[3]", 4000)
        .getText("(//div[@class='hypothesis-linked-evidence-number float-left'])[3]")
        .click("//div[@class='card-full-nav full-nav-edit-mode-btn' and text()='Done Editing']").pause(model.pause + 500)
        .click("(//div[@class='card-full-nav-x'])[3]")
        .waitForElementPresent("//div[@class='nav-center-container   ']//div//a/div", 6000)//returns to Worspace
        .click("//div[@class='canvas-btn-title inline-block']")
        .waitForElementPresent("//div[@class='canvas-nav-date-text']", 6000)//switch to Canvas
        //.verifyElementPresent("//div[@class='card-content' and text()='Canvas Section Assumption']")
        .click("//div[@class='kanban-icon']").pause(model.pause + 500)
        .click("//div[@class='canvas-icon']").pause(model.pause + 500)
        .click("//div[@class='card-content' and text()='Canvas Section Assumption']")
        .waitForElementPresent("//div[@class='hypothesis-nav-title hypothesis']", 6000)//Assumption card takeover displayed
        .pause(model.pause + 2000)
        .clearValue("//textarea[@class='content-field-textarea']").pause(model.pause + 1000)
        .setValue("//textarea[@class='content-field-textarea']", 'Canvas Section Assumption- Real-time').pause(model.pause + 2000)//Enter title
        .click("//div[@class='card-full-nav full-nav-edit-mode-btn' and text()='Done Editing']").pause(model.pause + 500)
        .click("(//div[@class='card-full-nav-x'])[3]")
        .waitForElementPresent("//div[@class='canvas-nav-date-text']", 6000)//switch to Canvas
        .getText("//div[@data-test='Channels0']/div[@class='card-content']", function(result) {
        this.verify.equal(result.value, "Canvas Section Assumption- Real-time")
      })
        .click("//div[@class='card-content' and text()='Canvas Section Assumption- Real-time']")
        .waitForElementPresent("//div[@class='hypothesis-nav-title hypothesis']", 7000)//Assumption card takeover displayed
        .pause(model.pause + 2000)
        .click("(//div[@class='dropdown-menu-icon clickable '])[5]").pause(model.pause + 500)
        .click("//div[text()='Delete Assumption']")
        .waitForElementPresent("//div[@class='confirmation-button no-cancel red undefined' and text()='Delete Assumption']", 6000)
        .click("//div[@class='confirmation-button-holder']/div[text()='Delete Assumption']").pause(model.pause + 4000)
        .end()

  },
}