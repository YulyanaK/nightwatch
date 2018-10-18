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
        .waitForElementPresent("(//div[@class='org-dashboard-card-container'])[3]", 6000).pause(model.pause + 500)
        .click("(//div[@class='org-dashboard-card-container'])[3]")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 6000)
        .click('div.hamburger-holder')
  },
  

  'Select a project to verify help comments and export': function(browser) {
      browser
        .waitForElementPresent('.side-nav-subSection-title', 6000)
        .verify.elementPresent('div.side-nav-subSection-title', 'selecting a project').pause(model.pause + 1500)
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
        .waitForElementPresent("(//*[contains(text(), 'EXPERIMENT')])", 4000, 'searches for experiments on analyze phase')
        .click("(//*[contains(text(), 'EXPERIMENT')])")
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

  'analysis step 1 and 2': function(browser) {
    browser
        .useCss()
        .verify.elementPresent('div.criteria-selection-icon-checkmark', 'to start analysis').pause(model.pause + 500)
        .click('div.criteria-selection-icon-checkmark')
        .verify.elementPresent('div.criteria-selection-icon-x').pause(model.pause + 500)
        .click('div.criteria-selection-icon-x')
        .verify.elementPresent('div.experiment-analyze-results-button.clickable', 'succesful').pause(model.pause + 500)       .click('div.experiment-analyze-results-button.clickable ')
      
         .useXpath()
         .pause(model.pause + 500)
         .click("//*[contains(text(), 'FAILED')]")
         .pause(model.pause + 500)
         .click("//*[contains(text(), 'INCONCLUSIVE')]")
         .pause(model.pause + 500)

         .click("//*[contains(text(), 'RESULTS OF THE EXPERIMENT')]")
         .keys('the experiment result insights and the new comments FOR results of the experiment')
        
        //set value for first text area
        .verify.elementPresent("(//div[@class='experiment-results-success-question-title'])", 'key learnings')
        .click("//*[contains(text(), 'KEY LEARNINGS')]")
        .pause(model.pause + 500)
        .keys('2nd What are the metrics for the assumption that will be entered for testing')
        .pause(model.pause + 500)
},

  'Run Analysis step 3': function(browser) {
     browser

        //opens grid and closes grid
        .useCss()
        .verify.elementPresent('div.experiment-analyze-view-grid.float-right', 'opens grid').pause(model.pause + 500)
        .click('div.experiment-analyze-view-grid.float-right')
        .pause(model.pause + 500)

        .useXpath()
        .click("//*[contains(text(), 'View Grid')]")

        .useCss()
        .verify.elementPresent('div.grid-close-icon', 'closes grid').pause(model.pause + 1500)
        .click('div.grid-close-icon')
        // validate evidences
        .useXpath()
        .pause(model.pause + 1500)
        .click("//div[text()='VALIDATE']")
        .pause(model.pause + 500)

        .verify.elementPresent("(//textarea[@class='content-field-textarea'])", 'validate notes').pause(model.pause + 1500)
        .click("(//textarea[@class='content-field-textarea'])")
        .clearValue("(//textarea[@class='content-field-textarea'])")
        .pause(model.pause + 500)
        .keys('The test for validation has pass 100% and true.')
        .click("(//div[@class='show-icon'])")
        .pause(model.pause + 900)
        .click("(//div[@class='show-icon'])")

        .click("(//div[text()='VALIDATE'])[2]")
        .pause(model.pause + 500)
//         .verify.elementPresent("//*[contains(text(), 'YES, CONTINUE')]", 'chagne from validate to invalidate').pause(model.pause + 500)
//         .click("//*[contains(text(), 'YES, CONTINUE')]")
//         .pause(model.pause + 500)
//         .verify.elementPresent("(//div[text()='INVALIDATE'])[2]", 'invalidate notes').pause(model.pause + 1500)
//         .click("(//textarea[@class='content-field-textarea'])[2]")
//         .clearValue("(//textarea[@class='content-field-textarea'])[2]")
//         .keys('Invalidation is because we could not fiish the test for ph.')
        .click("(//div[@class='show-icon'])[2]")
        .pause(model.pause + 900)
        .click("(//div[@class='show-icon'])[2]")
        .pause(model.pause + 900)

//         .click("(//div[text()='KEEP TESTING'])[3]")
        .click("(//div[text()='VALIDATE'])[3]")
        .pause(model.pause + 500)
//         .click("//*[contains(text(), 'YES, CONTINUE')]")
        .pause(model.pause + 500)

//         .verify.elementPresent("(//div[text()='KEEP TESTING'])[3]", 'keep testing notes').pause(model.pause + 1500)
        .click("(//div[@class='show-icon'])[3]")
        .pause(model.pause + 900)
        .click("(//div[@class='show-icon'])[3]")
        .pause(model.pause + 900)
        // .click("(//textarea[@class='content-field-textarea'])[3]")
        // .clearValue("(//textarea[@class='content-field-textarea'])[3]")
        // .keys('ADN noticias sin limite desde las horas de la manan hast las horas de la noche.')
        .click("(//div[@class='show-icon'])[4]")
        .pause(model.pause + 900)
        .click("(//div[@class='show-icon'])[4]")

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

        .verify.elementPresent("(//textarea[@class='content-field-textarea'])[3]", 'market notes').pause(model.pause + 500)
        .click("(//textarea[@class='content-field-textarea'])[3]")
        .clearValue("(//textarea[@class='content-field-textarea'])[3]")
        .pause(model.pause + 500)
        .setValue("(//textarea[@class='content-field-textarea'])[3]", 'to enter market notes')
   
        .useCss()
        .verify.elementPresent('div.hypothesis-edit-header-close-wrapper', 'closes market size').pause(model.pause + 500)
        .click('div.hypothesis-edit-header-close-wrapper')
        .pause(model.pause + 500)

        .useXpath()
        .verify.elementPresent("(//div[text()='Investment'])", 'Investments').pause(model.pause + 500)
        .click("(//div[text()='Investment'])")
        .verify.elementPresent("(//input[@class='experiment-market-size-currency-input'])", 'served').pause(model.pause + 500)
        .click("(//input[@class='experiment-market-size-currency-input'])")
        
        .clearValue("(//input[@class='experiment-market-size-currency-input'])")
        .pause(model.pause + 500)
        .setValue("(//input[@class='experiment-market-size-currency-input'])", '4325')

        .verify.elementPresent("(//input[@class='experiment-market-size-currency-input'])[2]", 'Total').pause(model.pause + 500)
        .click("(//input[@class='experiment-market-size-currency-input'])[2]")
        .clearValue("(//input[@class='experiment-market-size-currency-input'])[2]")
        .setValue("(//input[@class='experiment-market-size-currency-input'])[2]", '52342')


        .verify.elementPresent("(//textarea[@class='content-field-textarea'])[4]", 'market notes').pause(model.pause + 500)
        .click("(//textarea[@class='content-field-textarea'])[4]")
        .clearValue("(//textarea[@class='content-field-textarea'])[4]")
        .pause(model.pause + 500)
        .setValue("(//textarea[@class='content-field-textarea'])[4]", 'to enter market notes')

        .useCss()
        .verify.elementPresent('div.project-impact-section-container.details', 'project overview').pause(model.pause + 500)
        .click('div.project-impact-section-container.details')

        .useXpath()
        .verify.elementPresent("(//textarea[@class='content-field-textarea'])[3]", 'validation notes').pause(model.pause + 500)
        .click("(//textarea[@class='content-field-textarea'])[3]")
        .clearValue("(//textarea[@class='content-field-textarea'])[3]")
        .pause(model.pause + 1500)
        .setValue("(//textarea[@class='content-field-textarea'])[3]", 'Савва Иванович МамонтовСавва Иванович МамонтовСавва Иванович Мамонтов.')
        .verify.elementPresent("(//textarea[@class='content-field-textarea'])[5]", 'solution statements').pause(model.pause + 500)
        .click("(//textarea[@class='content-field-textarea'])[5]")
        .clearValue("(//textarea[@class='content-field-textarea'])[5]")
        .pause(model.pause + 1500)
        .setValue("(//textarea[@class='content-field-textarea'])[5]", 'The Evidence is concrete data you can use to validate Assumptions, learn more about a topic during Research, or help an Experiment succeed or fail. There are two types of Evidence; Interview and Other. Using this “Other” type of Evidence, you can easily post survey results, landing page test results, secondary research, competitive analysis, and any other evidence.  The Evidence is most useful when its connected to other data in your project to help you confirm or disconfirm your assumptions. Check out the “Connections” area to connect your interview to an assumption, research, or experiment.')

        .verify.elementPresent("(//textarea[@class='content-field-textarea'])[6]", 'notes').pause(model.pause + 500)
        .click("(//textarea[@class='content-field-textarea'])[6]")
        .clearValue("(//textarea[@class='content-field-textarea'])[6]")
        .pause(model.pause + 1500)
        .setValue("(//textarea[@class='content-field-textarea'])[6]", 'Your search for GLIDR Jobs in San Francisco, CA does not match any jobs. We suggest you. Make sure all words are spelled correctly Try more general keywords Replace abbreviations with the entire word Check your spelling')

        .verify.elementPresent("(//textarea[@class='content-field-textarea'])[8]", 'Investment').pause(model.pause + 1500)
        .click("(//textarea[@class='content-field-textarea'])[8]")
        .clearValue("(//textarea[@class='content-field-textarea'])[8]")
        .pause(model.pause + 1500)
        .setValue("(//textarea[@class='content-field-textarea'])[8]", 'siete')


 
        //dropdowns
        .verify.elementPresent("(//div[@class='project-dashboard-dropdown-container'])", 'type of project').pause(model.pause + 1500)
        .click("(//div[@class='project-dashboard-dropdown-container'])")
        .pause(model.pause + 1500)
        .click("//*[contains(text(), 'Service')]")
        .pause(model.pause + 1500)
        .click("(//div[@class='project-dashboard-dropdown-container'])")
        .pause(model.pause + 800)
        .click("//*[contains(text(), 'Product')]")
        .pause(model.pause + 800)

        .verify.elementPresent("(//div[@class='project-dashboard-dropdown-container'])[2]", 'time frame').pause(model.pause + 1500)
        .click("(//div[@class='project-dashboard-dropdown-container'])[2]")
        .pause(model.pause + 1500)
        .click("//*[contains(text(), '3 - 6 months')]")
        .pause(model.pause + 1500)
        .click("(//div[@class='project-dashboard-dropdown-container'])[2]")
        .pause(model.pause + 1500)
        .click("//*[contains(text(), '6 - 12 months')]")
        .pause(model.pause + 1500)

        .verify.elementPresent("(//div[@class='project-dashboard-dropdown-container'])[3]", 'stage').pause(model.pause + 1500)
        .click("(//div[@class='project-dashboard-dropdown-container'])[3]")
        .pause(model.pause + 800)
        .click("//div[text()='Problem Validation']")
        .pause(model.pause + 800)
        .click("(//div[@class='project-dashboard-dropdown-container'])[3]")
        .pause(model.pause + 800)
        .click("//div[text()='Solution Validation']")

        .verify.elementPresent("(//div[@class='project-dashboard-dropdown-container'])[5]", 'describe the technology').pause(model.pause + 1500)
        .click("(//div[@class='project-dashboard-dropdown-container'])[5]")
        .pause(model.pause + 800)
        .click("//div[text()='Existing technology that we currently use/deploy']")
        .pause(model.pause + 800)
        .click("(//div[@class='project-dashboard-dropdown-container'])[5]")
        .pause(model.pause + 800)
        .click("//div[text()='Existing technology that we do not currently use/deploy']")
        .pause(model.pause + 800)

        .useCss()
        .verify.elementPresent('input.experiment-analyze-details-currency-input', 'input invested raised').pause(model.pause + 1500)
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
        .verify.elementPresent('div.hypothesis-edit-header-close-wrapper', 'closes market size, complete, cancel, complete').pause(model.pause + 1500)
        .click('div.hypothesis-edit-header-close-wrapper')
        
        .useXpath()
        .pause(model.pause + 1500)
        .click("//span[text()='COMPLETE']")
        .pause(model.pause + 900)
        .click("//*[contains(text(), 'CANCEL')]")
        .pause(model.pause + 900)
        .click("//span[text()='COMPLETE']")
        .pause(model.pause + 900)
        .click("(//div[@class='confirmation-button no-cancel undefined'])")
        //.saveScreenshot('./reports/Experiments/experiments.png')
        .end();
    
      },
  }
