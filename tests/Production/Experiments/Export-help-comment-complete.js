var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;


module.exports = {

 

  'Login to orgs for experiments': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://app.glidr.io')
        .resizeWindow(1024, 768).pause(model.pause + 500)
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

  'Verify the organizations for project dashboard' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("(//div[@class='org-dashboard-card-container'])[2]", 4000).pause(model.pause + 500)
        .click("(//div[@class='org-dashboard-card-container'])[2]")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 4000)
        .click('div.hamburger-holder')   
  },

  'intialize on the canvas': function(browser) {
      browser
      .waitForElementPresent('.side-nav-subSection-title', 4000)
      .verify.elementPresent('div.side-nav-subSection-title', 'selecting a project to initialize the canvas').pause(model.pause + 1500)
      .click('.side-nav-subSection-title')
      .element('css selector', 'div.checklist-x-icon', function(result){
            if (result.value && result.value.ELEMENT) {
                // Element is present, do the appropriate tests
                browser.click('div.checklist-x-icon');
            } else {
                // Element is not present.
            }
        });
  },
  

  'Select a project to verify help comments and export': function(browser) {
      browser
        .waitForElementPresent('.side-nav-subSection-title', 4000)
        .verify.elementPresent('div.side-nav-subSection-title', 'selecting a project').pause(model.pause + 1500)
        .click('.side-nav-subSection-title')

        .useXpath()
        .verify.elementPresent("(//*[contains(text(), 'What is the name of the variable being tested in an exp...')])[10]", 'selects a card').pause(model.pause + 1500)
        .click("(//*[contains(text(), 'What is the name of the variable being tested in an exp...')])[10]")
},


  'Comments': function(browser) {
     browser
     .useXpath()
      .waitForElementPresent("(//div[@id='currentCard-input-container' and @class='comment-editor'])[3]", 500)
      .click("(//div[@id='currentCard-input-container' and @class='comment-editor'])[3]").pause(model.pause + 1500)
      .execute("document.getElementById('currentCard').setAttribute('focused', 'true');")
      .click("(//div[@id='currentCard-input-container' and @class='comment-editor'])[3]")
      .keys('Mérida (Spanish pronunciation: [ˈmeɾiða] (About this sound listen)) is the capital of Yucatan, a state in Mexico. Merida is also the largest city of the Yucatán Peninsula. It is located in the northwest part of the state, about 35 kilometres (22 miles) off the coast of the Gulf of Mexico.The city is also the municipal seat of the Municipality of Mérida, which includes the city and the areas around it.')
      .keys([browser.Keys.ENTER])
      .pause(model.pause + 1000)
      .getText("//span[@data-text='true']", function(text) {
          this.verify.equal(text.value, 'Mérida (Spanish pronunciation: [ˈmeɾiða] (About this sound listen)) is the capital of Yucatan, a state in Mexico. Merida is also the largest city of the Yucatán Peninsula. It is located in the northwest part of the state, about 35 kilometres (22 miles) off the coast of the Gulf of Mexico.The city is also the municipal seat of the Municipality of Mérida, which includes the city and the areas around it.')
      })
},

  'Run Help': function(browser) {
     browser
        .verify.elementPresent("(//div[@class='help-section-button'])[4]", 'help, plan, analize, run').pause(model.pause + 500)
        .click("(//div[@class='help-section-button'])[4]")
        .pause(model.pause + 1500)
        .click("(//*[contains(text(), 'Plan')])[2]")
        .pause(model.pause + 1500)
        .click("(//*[contains(text(), 'Run')])[2]")
        .pause(model.pause + 1500)
        .click("(//*[contains(text(), 'Analyze')])[2]")
},


  'Export experiment': function(browser) {
     browser
        .verify.elementPresent("(//div[@class='help-section-button'])[3]", 'export pdf').pause(model.pause + 500)
        .click("(//div[@class='help-section-button'])[3]")
        .pause(model.pause + 1500)
		.click("//*[contains(text(), 'Include full Evidence note')]")
		.pause(model.pause + 1500)
		.click("//*[contains(text(), 'Export Pdf')]")
        //.saveScreenshot('./reports/Experiments/experiments.png')
        .end();
    
      },
  }



