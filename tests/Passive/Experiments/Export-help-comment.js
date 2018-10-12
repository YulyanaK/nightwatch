var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;


module.exports = {

 

  'Login to orgs for experiments': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://passive.glidr.io')
        .resizeWindow(1440, 768).pause(model.pause + 500)
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
        .waitForElementPresent('div.org-container', 4000).pause(model.pause + 500)
  },

  'Verify the organizations for project dashboard' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("(//div[@class='org-dashboard-card-container'])[2]", 6000).pause(model.pause + 500)
        .click("(//div[@class='org-dashboard-card-container'])[2]")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 6000)
        .click('div.hamburger-holder')
  },
  

  'Select a project to verify help comments and export': function(browser) {
      browser
        .waitForElementPresent('.side-nav-subSection-title', 6000)
        .verify.elementPresent('div.side-nav-subSection-title', 'selecting a project').pause(model.pause + 1500)
        .click('.side-nav-subSection-title')
        //.verify.elementPresent('div.experiment-card-container.position-relative', 'selects analyzed card').pause(model.pause + 1500)
        .useXpath()
        .waitForElementPresent("(//*[contains(text(), 'EXPERIMENT')])[11]", 2000)
        .click("(//*[contains(text(), 'EXPERIMENT')])[11]")
  },


  'Run an experiment connect an evidence': function(browser) {
     browser
        .useCss()
        .waitForElementPresent('div.reusable-circle-button', 4000, 'clicks on circle btn')
        .click('div.reusable-circle-button')
        .pause(model.pause + 900)
        .click('div.connect-more-info')
        .pause(model.pause + 900)
        .click('div.connect-more-info')

        // connecting evidence
        .waitForElementPresent('div.connect-card-card-container', 1000, 'connected 1st evidence').pause(model.pause + 1500)
        .click('div.connect-card-card-container')
        .waitForElementPresent('div.connect-card-card-container:nth-of-type(2)', 6000, 'connected 2nd evidence').pause(model.pause + 1500)
        .click('div.connect-card-card-container:nth-of-type(2)')
        .waitForElementPresent('div.connect-card-card-container:nth-of-type(3)', 6000, 'connected 3rd evidence').pause(model.pause + 1500)
        .click('div.connect-card-card-container:nth-of-type(3)')
        .waitForElementPresent('div.connect-card-card-container:nth-of-type(4)', 6000, 'connected 3rd evidence').pause(model.pause + 1500)
        .click('div.connect-card-card-container:nth-of-type(4)')
        .waitForElementPresent('div.connect-cards-close-icon', 4000, 'close-icon').pause(model.pause + 1500)
        .click('div.connect-cards-close-icon')

    },

  'Comments': function(browser) {
     browser
     .useXpath()
      .waitForElementPresent("(//div[@id='currentCard-input-container' and @class='comment-editor'])[3]", 500)
      .click("(//div[@id='currentCard-input-container' and @class='comment-editor'])[3]").pause(model.pause + 500)
      .execute("document.getElementById('currentCard').setAttribute('focused', 'true');")
      .click("(//div[@id='currentCard-input-container' and @class='comment-editor'])[3]")
      .keys('new comment')
      .keys([browser.Keys.ENTER])
      .pause(model.pause + 1000)
      .getText("//span[@data-text='true']", function(text) {
          this.verify.equal(text.value, 'new comment')
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
        .pause(model.pause + 500)
		    .click("//*[contains(text(), 'Include full Evidence note')]")
		    .pause(model.pause + 500)
		    .click("//*[contains(text(), 'Export Pdf')]")
        //.saveScreenshot('./reports/Experiments/experiments.png')
        .end();
    
      },
  }



