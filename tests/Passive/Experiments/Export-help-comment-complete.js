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
        .waitForElementPresent("(//*[contains(text(), 'EXPERIMENT')])[28]", 2000, 'searches for experiments on analyze phase')
        .click("(//*[contains(text(), 'EXPERIMENT')])[28]")
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
        .verify.elementPresent("//*[contains(text(), 'Export Pdf')]",'export pdf').pause(model.pause + 500)
        .click("(//div[@class='help-section-button'])[3]")
        //.saveScreenshot('./reports/Experiments/experiments.png')

  },

  
  'Run Analysis step 4': function(browser) {
     browser
        //impact of project
        .useCss()
        .verify.elementPresent('div.project-impact-section-container.hypothesis', 'assumptions').pause(model.pause + 900)
        .click('div.project-impact-section-container.hypothesis')
        .verify.elementPresent('div.hypothesis-edit-header-close-wrapper', 'closes assumption').pause(model.pause + 900)
        .click('div.hypothesis-edit-header-close-wrapper')
        .verify.elementPresent('div.project-impact-section-container.market', 'market size').pause(model.pause + 900)
        .click('div.project-impact-section-container.market')

        .verify.elementPresent('div.experiment-market-size-currency-input', 'target').pause(model.pause + 500)
        .click('input.experiment-market-size-currency-input')
        .clearValue('input.experiment-market-size-currency-input')
        .setValue('input.experiment-market-size-currency-input', '14234')

        .useXpath()
        .verify.elementPresent("(//input[@class='experiment-market-size-currency-input'])[2]", 'served').pause(model.pause + 500)
        .click("(//input[@class='experiment-market-size-currency-input'])[2]")
        
        .clearValue("(//input[@class='experiment-market-size-currency-input'])[2]")
        .pause(model.pause + 500)
        .setValue("(//input[@class='experiment-market-size-currency-input'])[2]", '4325')

        .verify.elementPresent("(//input[@class='experiment-market-size-currency-input'])[3]", 'Total').pause(model.pause + 500)
        .click("(//input[@class='experiment-market-size-currency-input'])[3]")
        .clearValue("(//input[@class='experiment-market-size-currency-input'])[3]")
        .setValue("(//input[@class='experiment-market-size-currency-input'])[3]", '52342')

        .verify.elementPresent("(//textarea[@class='content-field-textarea'])[5]", 'market notes').pause(model.pause + 500)
        .click("(//textarea[@class='content-field-textarea'])[5]")
        .clearValue("(//textarea[@class='content-field-textarea'])[5]")
        .pause(model.pause + 500)
        .setValue("(//textarea[@class='content-field-textarea'])[5]", 'to enter market notes')
              
        .useCss()
        .verify.elementPresent('div.hypothesis-edit-header-close-wrapper', 'closes market size').pause(model.pause + 500)
        .click('div.hypothesis-edit-header-close-wrapper')


        .verify.elementPresent('div.project-impact-section-container.details', 'project overview').pause(model.pause + 500)
        .click('div.project-impact-section-container.details')

        .useXpath()
        .verify.elementPresent("(//textarea[@class='content-field-textarea'])[5]", 'market notes').pause(model.pause + 500)
        .click("(//textarea[@class='content-field-textarea'])[5]")
        .clearValue("(//textarea[@class='content-field-textarea'])[5]")
        .pause(model.pause + 1500)
        .setValue("(//textarea[@class='content-field-textarea'])[5]", 'The Evidence is concrete data you can use to validate Assumptions, learn more about a topic during Research, or help an Experiment succeed or fail. There are two types of Evidence; Interview and Other. Using this “Other” type of Evidence, you can easily post survey results, landing page test results, secondary research, competitive analysis, and any other evidence.  The Evidence is most useful when its connected to other data in your project to help you confirm or disconfirm your assumptions. Check out the “Connections” area to connect your interview to an assumption, research, or experiment.')
 
        .verify.elementPresent("(//textarea[@class='content-field-textarea'])[6]", 'market notes').pause(model.pause + 500)
        .click("(//textarea[@class='content-field-textarea'])[6]")
        .clearValue("(//textarea[@class='content-field-textarea'])[6]")
        .pause(model.pause + 1500)
        .setValue("(//textarea[@class='content-field-textarea'])[6]", 'Your search for GLIDR Jobs in San Francisco, CA does not match any jobs. We suggest you. Make sure all words are spelled correctly Try more general keywords Replace abbreviations with the entire word Check your spelling')
 

        //dropdowns
        .verify.elementPresent("(//div[@class='project-dashboard-dropdown-container'])", 'type of project').pause(model.pause + 500)
        .click("(//div[@class='project-dashboard-dropdown-container'])")
        .pause(model.pause + 1500)
        .click("//*[contains(text(), 'Service')]")
        .pause(model.pause + 800)
        .click("(//div[@class='project-dashboard-dropdown-container'])")
        .pause(model.pause + 800)
        .click("//*[contains(text(), 'Product')]")
        .pause(model.pause + 800)

        .verify.elementPresent("(//div[@class='project-dashboard-dropdown-container'])[2]", 'time frame').pause(model.pause + 1500)
        .click("(//div[@class='project-dashboard-dropdown-container'])[2]")
        .pause(model.pause + 1500)
        .click("//*[contains(text(), '3 - 6 months')]")
        .pause(model.pause + 800)
        .click("(//div[@class='project-dashboard-dropdown-container'])[2]")
        .pause(model.pause + 800)
        .click("//*[contains(text(), '6 - 12 months')]")
        .pause(model.pause + 800)

        .verify.elementPresent("(//div[@class='project-dashboard-dropdown-container'])[3]", 'stage').pause(model.pause + 500)
        .click("(//div[@class='project-dashboard-dropdown-container'])[3]")
        .pause(model.pause + 800)
        .click("//div[text()='Problem Validation']")
        .pause(model.pause + 800)
        .click("(//div[@class='project-dashboard-dropdown-container'])[3]")
        .pause(model.pause + 800)
        .click("//div[text()='Solution Validation']")

        .verify.elementPresent("(//div[@class='project-dashboard-dropdown-container'])[4]", 'describe the market').pause(model.pause + 500)
        .click("(//div[@class='project-dashboard-dropdown-container'])[4]")
        .pause(model.pause + 800)
        .click("//div[text()='Existing market that we currently serve']")
        .pause(model.pause + 800)
        .click("(//div[@class='project-dashboard-dropdown-container'])[4]")
        .pause(model.pause + 800)
        .click("//div[text()='Existing market that we do not serve']")
        .pause(model.pause + 800)

        .verify.elementPresent("(//div[@class='project-dashboard-dropdown-container'])[5]", 'describe the technology').pause(model.pause + 500)
        .click("(//div[@class='project-dashboard-dropdown-container'])[5]")
        .pause(model.pause + 800)
        .click("//div[text()='Existing technology that we currently use/deploy']")
        .pause(model.pause + 800)
        .click("(//div[@class='project-dashboard-dropdown-container'])[5]")
        .pause(model.pause + 800)
        .click("//div[text()='Existing technology that we do not currently use/deploy']")
        .pause(model.pause + 800)

        .verify.elementPresent("(//div[@class='project-dashboard-dropdown-container'])[6]", 'describe the technology').pause(model.pause + 500)
        .click("(//div[@class='project-dashboard-dropdown-container'])[6]")
        .pause(model.pause + 800)
        .click("//div[text()='tacos']")
        .pause(model.pause + 800)
        .click("(//div[@class='project-dashboard-dropdown-container'])[6]")
        .pause(model.pause + 800)
        .click("//div[text()='ice-cream']")
        .pause(model.pause + 800)

        .useCss()
        .verify.elementPresent('input.experiment-analyze-details-currency-input', 'input invested raised').pause(model.pause + 500)
        .click('input.experiment-analyze-details-currency-input')
        .clearValue('input.experiment-analyze-details-currency-input')
        .pause(model.pause + 800)
        .setValue('input.experiment-analyze-details-currency-input', '132454')
        .pause(model.pause + 1500)

        .useXpath()
        .verify.elementPresent("(//input[@class='experiment-analyze-details-currency-input'])[2]", 'input invested raised').pause(model.pause + 1500)
        .click("(//input[@class='experiment-analyze-details-currency-input'])[2]")
        .clearValue("(//input[@class='experiment-analyze-details-currency-input'])[2]")
        .pause(model.pause + 1500)
        .setValue("(//input[@class='experiment-analyze-details-currency-input'])[2]", '543190')
        .pause(model.pause + 1500)

        .useCss()
        .verify.elementPresent('div.hypothesis-edit-header-close-wrapper', 'closes market size, complete, cancel, complete').pause(model.pause + 500)
        .click('div.hypothesis-edit-header-close-wrapper')
        
        .useXpath()
        .pause(model.pause + 1500)
        .click("//span[text()='COMPLETE']")
        .pause(model.pause + 900)
        .click("//*[contains(text(), 'CANCEL')]")
        .pause(model.pause + 900)
        .click("//span[text()='COMPLETE']")
        .pause(model.pause + 900)
        .click("//*[contains(text(), 'COMPLETE')]")
        //.saveScreenshot('./reports/Experiments/experiments.png')
        .end();
    
      },
  }



