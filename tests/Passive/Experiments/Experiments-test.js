var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;


module.exports = {

 

  'Login to orgs for experiments': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://passive.glidr.io')
          // .resizeWindow(1024, 768).pause(model.pause + 500)
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
        .waitForElementPresent("(//div[@class='org-dashboard-card-container'])[2]", 4000).pause(model.pause + 500)
        .click("(//div[@class='org-dashboard-card-container'])[2]")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 4000)
        .click('div.hamburger-holder')
  },
  

  'Select a project to create an experiments': function(browser) {
      browser
        .waitForElementPresent('.side-nav-subSection-title', 4000)
        .verify.elementPresent('div.side-nav-subSection-title', 'selecting a project').pause(model.pause + 1500)
        .click('.side-nav-subSection-title')

        .verify.elementPresent('div.workspace-takeover-btn', '+ to add a research').pause(model.pause + 1500)
        .click('div.workspace-takeover-btn')
        .verify.elementPresent('div.lpc-evaluation', 'selects an experiment').pause(model.pause + 1500)
        .click('div.lpc-evaluation')
  },

  'Create an experiment plan phase': function(browser) {
    browser
        .waitForElementPresent('div.interview-datepicker-holder', 6000)
        .click('div.interview-datepicker-holder')
        .verify.elementPresent('div.DayPicker-Week:nth-of-type(4) > div.DayPicker-Day:nth-of-type(5)', 'date selectd').pause(model.pause + 2500)
        .click('div.DayPicker-Week:nth-of-type(4) > div.DayPicker-Day:nth-of-type(5)')
        .verify.elementPresent('div.experiment-add-member-plus', 'drop down').pause(model.pause + 2500)
        .click('div.experiment-add-member-plus')
        .verify.elementPresent('div.experiment-add-member-container', 'selects a users').pause(model.pause + 1500)
        .click('div.experiment-add-member-container')
        .verify.elementPresent('.experiments-navigation-member-container', 'closes dropdown users').pause(model.pause + 500)
        .click('.experiments-navigation-member-container')

        // enter tags
        .verify.elementPresent('div.float-left.hover.experiments-tags-icon', 'adding tags').pause(model.pause + 1500)
        .click('div.float-left.hover.experiments-tags-icon') 
        .setValue('input.tag-field-label-input.focused', ['nightwatch', browser.Keys.ENTER]) 
        .pause(model.pause + 1500)
        .setValue('input.tag-field-label-input.focused', ['Test nightwatch', browser.Keys.ENTER])
        .pause(model.pause + 1500)
        .setValue('input.tag-field-label-input.focused', ['Clarification', browser.Keys.ENTER])
        .pause(model.pause + 1500) 

        //adding research
        .verify.elementPresent('div.content-field-container.organization-setting-input.org-name', 'research name').pause(model.pause + 1500)
        .click('div.content-field-container.organization-setting-input.org-name')
        .setValue('.content-field-textarea', ['What is the name of the variable being tested in an experiment?', browser.Keys.ENTER]) 

        .verify.elementPresent('div.text-editor-container', 'hypothesis statement').pause(model.pause + 1500) 
        .click('div.text-editor-container')

        .useXpath()
        .click("//*[contains(text(), 'HYPOTHESIS STATEMENT')]")
        .keys('key insights and the new comments for the hypothesis statement is wokring as xpected ')

        .useCss()
        .verify.elementPresent('.content-field-container.organization-setting-input.org-name div:nth-of-type(3)', 'Plan details').pause(model.pause + 1500)

        .useXpath()
        .click("//*[contains(text(), 'PLAN DETAILS')]")
        .keys('key insights and the new comments for the hypothesis statement is working as xpected ')
    
        .useCss()         
        .verify.elementPresent('div.reusable-circle-button', 'connect an assumption').pause(model.pause + 1500) 
        .click('div.reusable-circle-button')   
        .verify.elementPresent('div.content-field-container.success-metrics-input', 'what metrics will you measure?').pause(model.pause + 1500) 

        .useXpath()
        .pause(model.pause + 800) 
        .click("//*[contains(text(), 'WHAT METRIC WILL YOU MEASURE?')]")
        .keys('What are the metrics for the assumption that will be entered for testing')

        .useXpath()
        .pause(model.pause + 800) 
        .click("//*[contains(text(), 'HOW WOULD YOU DEFINE SUCCESS FOR THIS METRIC?')]")
        .keys('The metrics result should be in most casese a positive one since it is for testing purpuses')
        .pause(model.pause + 800) 
        .click("//*[contains(text(), 'ADD')]")

        // connects assumptions
        .waitForElementPresent("(//div[@class='hover position-relative float-right success-circle-button'])[2]", 6000) 
        .click("(//div[@class='hover position-relative float-right success-circle-button'])[2]")
        
        .useCss()
        .waitForElementPresent('div.connect-card-card-container', 6000, 'selects 1st assumption').pause(model.pause + 1500) 
        .click('div.connect-card-card-container')
        .waitForElementPresent('div.connect-card-card-container:nth-of-type(3)', 6000, 'selects 2nd assumption').pause(model.pause + 1500) 
        .click('div.connect-card-card-container:nth-of-type(3)')
        .waitForElementPresent('div.connect-card-card-container:nth-of-type(4)', 6000, 'selects 3rd assumption').pause(model.pause + 1500) 
        .click('div.connect-card-card-container:nth-of-type(4)')
        .waitForElementPresent('div.connect-card-card-container:nth-of-type(5)', 6000, 'selects 4th assumption').pause(model.pause + 1500) 
        .click('div.connect-card-card-container:nth-of-type(5)')
        .waitForElementPresent('div.connect-cards-close-icon', 6000, 'close selected assumptions').pause(model.pause + 1500) 
        .click('div.connect-cards-close-icon')
        
        // clicks over icons messages
        .verify.elementPresent('div.content-field-edit-icon', 'tooltip message').pause(model.pause + 1500) 
        .click('div.content-field-edit-icon')
        .verify.elementPresent('div.tooltip-close-container.clearfix', 'close tooltip').pause(model.pause + 1500) 
        .click('div.tooltip-close-container.clearfix')
        .verify.elementPresent('div.content-field-edit-icon', 'tooltip message').pause(model.pause + 1500) 
        .click('div.content-field-edit-icon')
        .verify.elementPresent('div.tooltip-close-container.clearfix', 'close tooltip').pause(model.pause + 1500) 
        .click('div.tooltip-close-container.clearfix')
        
        .useXpath()
        .click("//span[text()='RUN EXPERIMENT']")

        .useCss()
        .verify.elementPresent('div.experiments-documents-drag-container', 'adding files').pause(model.pause + 1500)
        .click('div.experiments-documents-drag-container')
        .setValue('input[type="file"]', require('path').resolve(__dirname + '/ScreenShot.png'))
  },

  'Run an experiment connect an evidence': function(browser) {
     browser
        .waitForElementPresent('div.reusable-circle-button', 1500, 'clicks on circle btn')
        .click('div.reusable-circle-button')
        .pause(model.pause + 900)
        .click('div.connect-more-info')
        .pause(model.pause + 900)
        .click('div.connect-more-info')

        // connecting evidence
        .waitForElementPresent('div.connect-card-card-container', 6000, 'connected 1st evidence').pause(model.pause + 1500)
        .click('div.connect-card-card-container')
        .waitForElementPresent('div.connect-card-card-container:nth-of-type(2)', 6000, 'connected 2nd evidence').pause(model.pause + 1500)
        .click('div.connect-card-card-container:nth-of-type(2)')
        .waitForElementPresent('div.connect-card-card-container:nth-of-type(3)', 6000, 'connected 3rd evidence').pause(model.pause + 1500)
        .click('div.connect-card-card-container:nth-of-type(3)')
        .waitForElementPresent('div.connect-card-card-container:nth-of-type(4)', 6000, 'connected 3rd evidence').pause(model.pause + 1500)
        .click('div.connect-card-card-container:nth-of-type(4)')
        .waitForElementPresent('div.connect-cards-close-icon', 4000, 'close-icon').pause(model.pause + 1500)
        .click('div.connect-cards-close-icon')
        .waitForElementPresent('div.criteria-selection-icon-checkmark', 6000, 'check mark select criteria').pause(model.pause + 1500)
        .click('div.criteria-selection-icon-checkmark')

        //select checkmark
        .useXpath()
        .click("(//div[@class='criteria-selection-icon-checkmark'])")
        .pause(model.pause + 500)
        .click("(//div[@class='criteria-selection-icon-x'])[2]")
        .pause(model.pause + 500)
        .click("(//div[@class='criteria-selection-icon-checkmark'])[3]")
        .pause(model.pause + 500)
        .click("(//div[@class='criteria-selection-icon-x'])[4]")
        .pause(model.pause + 500)
        .click("(//div[@class='criteria-selection-icon-x'])")
        .pause(model.pause + 500)

        //conforming disconfirming 
        .click("(//div[@class='evidence-icon hover Disconfirming'])")
        .pause(model.pause + 500)
        .click("(//div[@class='evidence-icon hover Leaning Disconfirming'])[2]")
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
        .click("(//div[@class='evidence-icon hover Leaning Disconfirming'])[8]")
        .pause(model.pause + 500)
        .click("(//div[@class='evidence-icon hover Disconfirming'])[9]")
        .pause(model.pause + 500)
        .click("(//div[@class='evidence-icon hover Leaning Disconfirming'])[10]")
        .pause(model.pause + 500)
        .click("(//div[@class='evidence-icon hover Neutral'])[11]")
        .pause(model.pause + 500)
        .click("(//div[@class='evidence-icon hover Leaning Confirming'])[12]")
    },

  'Run Analysis step 1': function(browser) {
     browser
        .useCss()
        .verify.elementPresent('div.takeover-navigation-button-container.clearfix.next', 'start analysis').pause(model.pause + 500)
        .click('div.takeover-navigation-button-container.clearfix.next')
        .verify.elementPresent('div.criteria-selection-icon-checkmark', 'objective met').pause(model.pause + 500)
        .click('div.criteria-selection-icon-checkmark')

        // check mark 
        .useXpath()
        .click("(//div[@class='criteria-selection-icon-checkmark'])")
        .pause(model.pause + 500)

        .useCss()
        .verify.elementPresent('div.criteria-selection-icon-x').pause(model.pause + 500)
        .click('div.criteria-selection-icon-x')
        .verify.elementPresent('div.experiment-analyze-results-button.clickable', 'succesful').pause(model.pause + 500)
        .click('div.experiment-analyze-results-button.clickable ')
        
        .useXpath()
        .pause(model.pause + 500)
        .click("//*[contains(text(), 'FAILED')]")
        .pause(model.pause + 500)
        .click("//*[contains(text(), 'INCONCLUSIVE')]")
        .pause(model.pause + 500)

        .click("//*[contains(text(), 'RESULTS OF THE EXPERIMENT')]")
        .keys('the experiment result insights and the new comments FOR results of the experiment')

},

  'Run Analysis step 2': function(browser) {
     browser
        .useXpath()
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
        .verify.elementPresent('.experiment-analyze-view-grid', 'opens grid').pause(model.pause + 500)
        .click('.experiment-analyze-view-grid')
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

        .pause(model.pause + 1500)
        .click("(//div[text()='VALIDATE'])[4]")
        .pause(model.pause + 1500)
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



