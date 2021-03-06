var model = require('../../../../helpers/model');
var controller = require('../../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;

//Change Canvas Card Title
//Edit (uncompleted) experiment
//Convert an experiment type
//Edit evidence


module.exports = {

  'login to workspace': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://passive.glidr.io')
        //.resizeWindow(1440, 780).pause(model.pause + 500)
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
        .element('xpath', "//div[text()='Welcome to GLIDR!']", function(result){
            if (result.value && result.value.ELEMENT) {
                // Element is present, do the appropriate tests
                browser.click("//div[text()='Welcome to GLIDR!']")
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
        .waitForElementPresent("//div[@class='org-dashboard-card-title' and text()='Italy_QA']", 11000).pause(model.pause + 500)
        .moveToElement("//div[@class='org-dashboard-card-title' and text()='Italy_QA']", 10, 10)
        .click("//div[@class='org-dashboard-card-title' and text()='Italy_QA']")
        .pause(model.pause + 2000)

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 6000)
        .click('div.hamburger-holder')

  },

  'Project overview': function(browser) {
      browser
      .useXpath()
      .pause(model.pause + 2000)
        .click("//*[contains(text(), 'Colosseum_QA')]")
        .pause(model.pause + 1000)

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
        .waitForElementPresent("(//div[@class='nav-route position-relative '])", 2000, 'Admin coll goes to canvas')
        .click("//*[contains(text(), 'Ideas')]")
        .pause(model.pause + 800)

    },
        

  'Change Canvas Card Title' : function(browser) {
      browser
        .useXpath()
      //creates a card but should be changing the card title, bug reported.
/*        .verify.elementPresent("(//div[@class='can-section-title'])[2]", 'changes canvas title').pause(model.pause + 1500)
        .click("(//div[@class='can-section-title'])[2]").pause(model.pause + 900)*/

        //card created in product
        .waitForElementPresent("(//div[@class='open-add-card-container no-dropdown'])[2]", 2000, 'adds a new card').pause(model.pause + 500)
        .click("(//div[@class='open-add-card-container no-dropdown'])[2]")
        .keys('Product canvas idea new section')
        .keys(browser.Keys.RETURN)
        .waitForElementPresent("(//div[@class='nav-route position-relative '])", 500, 'moves to business')
        .pause(model.pause + 800)
        .click("//*[contains(text(), 'BUSINESS')]")
        //card created in business
        .verify.elementPresent("(//div[@class='open-add-card-container no-dropdown'])")
        .click("(//div[@class='open-add-card-container no-dropdown'])")
        .keys('Can cun and the train Maya')
        .keys(browser.Keys.RETURN)

    },


  'Edit (uncompleted) experiment': function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("//*[contains(text(), 'Discovery')]", 6000)
        .click("//*[contains(text(), 'Discovery')]")
        .pause(model.pause + 800)
        .verify.elementPresent("(//div[@class='experiment-card-title'])", 'selects an experiment').pause(model.pause + 500)
        .click("(//div[@class='experiment-card-title'])")
        .pause(model.pause + 2000)
        .click("//*[contains(text(), 'PLAN DETAILS')]")
        .pause(model.pause + 1500)
        .clearValue("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[4]")
        .keys('key insights and the new comments for the hypothesis statement is working as xpected ')
        .pause(model.pause + 1500)
        .click("(//div[@class='card-full-nav-x-container'])[3]")
},

 'Change experiment type': function(browser) {
     browser
        .useXpath()
        .pause(model.pause + 800)
        .verify.elementPresent("(//div[@class='experiment-card-container position-relative '])" ,'selects a second card title').pause(model.pause + 800)
        .click("(//div[@class='experiment-card-title'])")
        .pause(model.pause + 2000)
        .click("(//div[@class='experiments-header-due-date-container float-left edit'])")
        // .click("(//div[@class='reusable-dropdown-container show mgmt-dropdown'])")
        .pause(model.pause + 800)
        .click("//*[contains(text(), 'Experiment')]")
        .pause(model.pause + 800)
        .click("(//div[@class='reusable-dropdown-caret'])")
        .pause(model.pause + 800)
        .click("//*[contains(text(), 'Research')]")
        .pause(model.pause + 1000)
        .click("(//div[@class='card-full-nav-x-container'])[3]")
    },

  'Logsout' : function(browser){
      browser
        .useXpath()
        .verify.elementPresent("(//div[@class='float-left nav-dropdown-styles clickable'])[2]", 'select profile settings').pause(model.pause + 1500)
        .click("(//div[@class='float-left nav-dropdown-styles clickable'])[2]")
        .pause(model.pause + 5000)
        .verify.elementPresent("//*[contains(text(), 'Profile & Account Settings')]", 'selects profile and settings')
        .click("//*[contains(text(), 'Profile & Account Settings')]")
        .pause(model.pause + 5000)
        .verify.elementPresent("//*[contains(text(), 'Account Settings')]", 'selects Account settings')
        .click("//*[contains(text(), 'Account Settings')]")
        .pause(model.pause + 5000)
        .verify.elementPresent("//*[contains(text(), 'SIGN OUT EVERYWHERE')]", 'sings out everywhere')
        .click("//*[contains(text(), 'SIGN OUT EVERYWHERE')]")
        .pause(model.pause + 8000)
        .verify.elementPresent("(//div[@class='float-left nav-dropdown-styles clickable'])", 'select profile settings').pause(model.pause + 1500)
        .click("(//div[@class='float-left nav-dropdown-styles clickable'])") 
        .verify.elementPresent("//*[contains(text(), 'SIGN OUT')]", 'sings out everywhere').pause(model.pause + 1500)
        .click("//*[contains(text(), 'SIGN OUT')]")    
  
        .end();
    },
}
