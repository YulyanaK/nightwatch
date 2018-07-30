var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;


module.exports = {

 

  'Login to orgs for research': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://app.glidr.io')
        //.resizeWindow(1024, 768).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'looks for glidr logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'searches for active container for email').pause(model.pause + 500)
        .click('div.signin-form-container')
      browser
        .setValue('input[type=text]', 'dortiz@launchpadcentral.com')
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
        .waitForElementPresent("(//div[@class='org-dashboard-card-container'])[7]", 4000).pause(model.pause + 500)
        .click("(//div[@class='org-dashboard-card-container'])[7]")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 4000)
        .click('div.hamburger-holder')
  },
  

  'Select a project to create an research': function(browser) {
      browser
        .waitForElementPresent('.side-nav-subSection-title', 4000)
        .verify.elementPresent('div.side-nav-subSection-title', 'selecting a project').pause(model.pause + 1500)
        .click('.side-nav-subSection-title')

        .verify.elementPresent('div.workspace-takeover-btn', '+ to add a research').pause(model.pause + 1500)
        .click('div.workspace-takeover-btn')
        .verify.elementPresent('div.lpc-exploration', 'selects a research').pause(model.pause + 1500)
        .click('div.lpc-exploration')
  },

  'Create an research plan phase': function(browser) {
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
        .setValue('input.tag-field-label-input.focused', ['night', browser.Keys.ENTER]) 
        .pause(model.pause + 1500)
        .setValue('input.tag-field-label-input.focused', ['Test', browser.Keys.ENTER])
        .pause(model.pause + 1500)
        .setValue('input.tag-field-label-input.focused', ['Clara', browser.Keys.ENTER])
        .pause(model.pause + 1500) 
        //adding research
        .verify.elementPresent('div.content-field-container.organization-setting-input.org-name', 'research name').pause(model.pause + 1500)
        .click('div.content-field-container.organization-setting-input.org-name')
        .setValue('.content-field-textarea', ['What is the name of the variable being tested in an experiment?', browser.Keys.ENTER]) 
        .verify.elementPresent('div.content-field-container.organization-setting-input.org-name:nth-of-type(2)', 'experiment name').pause(model.pause + 1500)
        
        .useXpath()
        .click("(//textarea[@class='content-field-textarea'])[2]")
        //.click('div.content-field-container.organization-setting-input.org-name:nth-of-type(2)')
        .setValue("(//textarea[@class='content-field-textarea'])[2]", ['this is the objective on testing', browser.Keys.ENTER])
        .useCss()
        .verify.elementPresent('.content-field-container.organization-setting-input.org-name div:nth-of-type(3)', 'hypothesis statement').pause(model.pause + 1500)

        .useXpath()
        .click("(//textarea[@class='content-field-textarea'])[3]")
        .setValue("(//textarea[@class='content-field-textarea'])[3]", ['The goal is for the research to be a success', browser.Keys.ENTER])
                  
        .useCss()         
        .verify.elementPresent('div.reusable-circle-button', 'connect an assumption').pause(model.pause + 1500) 
        .click('div.reusable-circle-button')   

        .verify.elementPresent('div.reusable-circle-hover-slideout', 'opens connections for assumptions ghost box').pause(model.pause + 1500)  
        .click('div.reusable-circle-hover-slideout')
        // connects assumptions
        .verify.elementPresent('div.connect-card-card-container', 'selects an assumptions').pause(model.pause + 1500) 
        .click('div.connect-card-card-container')
        .verify.elementPresent('div.connect-card-card-container:nth-of-type(2)', 'selects an assumption').pause(model.pause + 1500) 
        .click('div.connect-card-card-container:nth-of-type(2)')
        .verify.elementPresent('div.connect-card-card-container:nth-of-type(3)', 'selects 2nd assumption').pause(model.pause + 1500) 
        .click('div.connect-card-card-container:nth-of-type(3)')
        .verify.elementPresent('div.connect-card-card-container:nth-of-type(3)', 'selects 3rd assumption').pause(model.pause + 1500) 
        .click('div.connect-card-card-container:nth-of-type(3)')
        // clicks over icons messages
        .verify.elementPresent('div.connect-cards-close-icon', 'close connect assumption').pause(model.pause + 1500) 
        .click('div.connect-cards-close-icon')
        .verify.elementPresent('div.content-field-edit-icon', 'tooltip message').pause(model.pause + 1500) 
        .click('div.content-field-edit-icon')
        .verify.elementPresent('div.tooltip-close-container.clearfix', 'close tooltip').pause(model.pause + 1500) 
        .click('div.tooltip-close-container.clearfix')
        .verify.elementPresent('div.content-field-edit-icon', 'tooltip message').pause(model.pause + 1500) 
        .click('div.content-field-edit-icon')
        .verify.elementPresent('div.tooltip-close-container.clearfix', 'close tooltip').pause(model.pause + 1500) 
        .click('div.tooltip-close-container.clearfix')
        
        .useXpath()
        .click("//span[text()='RUN RESEARCH']")

        .useCss()
        .verify.elementPresent('div.experiments-documents-drag-container', 'adding files').pause(model.pause + 500)
        .click('div.experiments-documents-drag-container')
        .setValue('input[type="file"]', require('path').resolve(__dirname + '/ScreenShot.png'))
  },

  'Run an experiment connect an evidence': function(browser) {
     browser
        .verify.elementPresent('div.reusable-circle-button', 'connect an evidence').pause(model.pause + 500)
        .click('div.reusable-circle-button')
        .verify.elementPresent('div.connect-card-card-container', 'connected evidence').pause(model.pause + 3000)
        .click('div.connect-card-card-container')
        .pause(model.pause + 500)
        .click('div.connect-more-info')
        .pause(model.pause + 500)
        .click('div.connect-more-info')

        // connecting assumptions
        .verify.elementPresent('div.connect-card-card-container:nth-of-type(2)', 'connected 2nd evidence').pause(model.pause + 1500)
        .click('div.connect-card-card-container:nth-of-type(2)')
        .verify.elementPresent('div.connect-card-card-container:nth-of-type(3)', 'connected 3rd evidence').pause(model.pause + 1500)
        .click('div.connect-card-card-container:nth-of-type(3)')
        .verify.elementPresent('div.connect-cards-close-icon', 'close-icon').pause(model.pause + 1500)
        .click('div.connect-cards-close-icon')

        .useXpath()
        .click("(//div[@class='evidence-icon hover Leaning Disconfirming'])[3]")
        .click("(//div[@class='evidence-icon hover Neutral'])[3]")
        .click("(//div[@class='evidence-icon hover Leaning Confirming'])[4]")
        .click("(//div[@class='evidence-icon hover Confirming'])[5]")

    },

  'Run Analysis': function(browser) {
     browser
        .useCss()
        .verify.elementPresent('div.takeover-navigation-button-container.clearfix.next', 'start analysis').pause(model.pause + 500)
        .click('div.takeover-navigation-button-container.clearfix.next')

        .verify.elementPresent('div.experiment-analyze-results-button.clickable', 'succesful').pause(model.pause + 500)
        .click('div.experiment-analyze-results-button.clickable')

        .verify.elementPresent('div.experiment-analyze-results-button.clickable:nth-of-type(2)', 'fialed').pause(model.pause + 1500)
        .click('div.experiment-analyze-results-button.clickable:nth-of-type(2)')

        .verify.elementPresent('div.experiment-analyze-results-button.clickable:nth-of-type(3)', 'inconclusive').pause(model.pause + 1500)
        .click('div.experiment-analyze-results-button.clickable:nth-of-type(3)')

        .verify.elementPresent('div.content-field-container', 'results of the experiment').pause(model.pause + 500)
        .click('div.content-field-container')
        .setValue('.content-field-textarea' , ['need to make more experiments to find out a good result', browser.Keys.ENTER])

        .useXpath()
        //set value for first text area
        .click("(//textarea[@class='content-field-textarea'])[1]")
        .setValue("(//textarea[@class='content-field-textarea'])[1]", ['2nd What are the metrics for the assumption that will be entered for testing', browser.Keys.ENTER])
        // set value for second text area
        .click("(//textarea[@class='content-field-textarea'])[2]")
        .setValue("(//textarea[@class='content-field-textarea']) [2]", ['2nd What are the metrics for the assumption that will be entered for testing', browser.Keys.ENTER])
 },       
        
 'Run Analysis step 3': function(browser) {
     browser
        //opens grid
        .useCss()
        .verify.elementPresent('div.experiment-analyze-view-grid.float-right', 'opens grid').pause(model.pause + 500)
        .click('div.experiment-analyze-view-grid.float-right')
        .verify.elementPresent('div.grid-close-icon.float-right', 'closes grid').pause(model.pause + 500)
        .click('div.grid-close-icon.float-right')

},

   'Run Analysis step 4': function(browser) {
     browser
        //impact of project
        .verify.elementPresent('div.project-impact-section-container.hypothesis', 'hypothesis').pause(model.pause + 500)
        .click('div.project-impact-section-container.hypothesis')
        .verify.elementPresent('div.hypothesis-edit-header-close-wrapper', 'closes assumption').pause(model.pause + 500)
        .click('div.hypothesis-edit-header-close-wrapper')

        .verify.elementPresent('div.project-impact-section-container.market', 'market size').pause(model.pause + 500)
        .click('div.project-impact-section-container.market')

        .verify.elementPresent('div.experiment-market-size-currency-input', 'target').pause(model.pause + 500)
        .click('input.experiment-market-size-currency-input')
        .clearValue('input.experiment-market-size-currency-input')
        .setValue('input.experiment-market-size-currency-input', '14234')

        .useXpath()
        .verify.elementPresent("(//input[@class='experiment-market-size-currency-input'])[2]", 'serverd').pause(model.pause + 500)
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

        .verify.elementPresent('div.project-impact-section-container.investment', 'investments').pause(model.pause + 500)
        .click('div.project-impact-section-container.investment')

        .verify.elementPresent('div.experiment-market-size-currency-input', 'target').pause(model.pause + 500)
        .click('input.experiment-market-size-currency-input')
        .clearValue('input.experiment-market-size-currency-input')
        .setValue('input.experiment-market-size-currency-input', '14234')

        .useXpath()
        .verify.elementPresent("(//input[@class='experiment-market-size-currency-input'])[2]", 'serverd').pause(model.pause + 500)
        .click("(//input[@class='experiment-market-size-currency-input'])[2]")
        .clearValue("(//input[@class='experiment-market-size-currency-input'])[2]")
        .pause(model.pause + 500)
        .setValue("(//input[@class='experiment-market-size-currency-input'])[2]", '4325')

        .verify.elementPresent("(//textarea[@class='content-field-textarea'])[3]", 'market notes').pause(model.pause + 500)
        .click("(//textarea[@class='content-field-textarea'])[3]")
        .clearValue("(//textarea[@class='content-field-textarea'])[3]")
        .pause(model.pause + 500)
        .setValue("(//textarea[@class='content-field-textarea'])[3]", 'to enter market notes')
              
        .useCss()
        .verify.elementPresent('div.hypothesis-edit-header-close-wrapper', 'closes market size').pause(model.pause + 500)
        .click('div.hypothesis-edit-header-close-wrapper')

        .verify.elementPresent('div.project-impact-section-container.details', 'project overview').pause(model.pause + 500)
        .click('div.project-impact-section-container.details')

        .useXpath()
        .verify.elementPresent("(//textarea[@class='content-field-textarea'])[3]", 'market notes').pause(model.pause + 500)
        .click("(//textarea[@class='content-field-textarea'])[3]")
        .clearValue("(//textarea[@class='content-field-textarea'])[3]")
        .pause(model.pause + 1500)
        .setValue("(//textarea[@class='content-field-textarea'])[3]", 'The Evidence is concrete data you can use to validate Assumptions, learn more about a topic during Research, or help an Experiment succeed or fail. There are two types of Evidence; Interview and Other. Using this “Other” type of Evidence, you can easily post survey results, landing page test results, secondary research, competitive analysis, and any other evidence.  The Evidence is most useful when its connected to other data in your project to help you confirm or disconfirm your assumptions. Check out the “Connections” area to connect your interview to an assumption, research, or experiment.')
        
        //dropdowns
        .verify.elementPresent("(//div[@class='project-dashboard-dropdown-container'])", 'type of project').pause(model.pause + 500)
        .click("(//div[@class='project-dashboard-dropdown-container'])")
        .pause(model.pause + 1500)
        .click("//div[text()='Service']")
        .click("(//div[@class='project-dashboard-dropdown-container'])")
        .pause(model.pause + 500)
        //.click("//div[text()='Product']")

        .verify.elementPresent("(//div[@class='project-dashboard-dropdown-container'])[2]", 'time frame').pause(model.pause + 1500)
        .click("(//div[@class='project-dashboard-dropdown-container'])[2]")
        .pause(model.pause + 1500)
        .click("//div[text()='3 - 6 months']")
        .pause(model.pause + 800)
        .click("(//div[@class='project-dashboard-dropdown-container'])[2]")
        .pause(model.pause + 800)
        .click("//div[text()='6 - 12 months']")
        .pause(model.pause + 800)

        .verify.elementPresent("(//div[@class='project-dashboard-dropdown-container'])[3]", 'stage').pause(model.pause + 500)
        .click("(//div[@class='project-dashboard-dropdown-container'])[3]")
        .pause(model.pause + 800)
        .click("//div[text()='Problem Validation']")
        .pause(model.pause + 800)
        .click("(//div[@class='project-dashboard-dropdown-container'])[3]")
        .pause(model.pause + 800)
        .click("//div[text()='Solution Validation']")
        .pause(model.pause + 800)

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
        .verify.elementPresent('div.hypothesis-edit-header-close-wrapper', 'closes market size').pause(model.pause + 500)
        .click('div.hypothesis-edit-header-close-wrapper')

        //move up to validate
        .useXpath()
        .pause(model.pause + 1500)
        .click("//div[text()='VALIDATE']")

        .verify.elementPresent("(//textarea[@class='content-field-textarea'])[3]", 'validate notes').pause(model.pause + 1500)
        .click("(//textarea[@class='content-field-textarea'])[3]")
        // .clearValue("(//textarea[@class='content-field-textarea'])[3]")
        .pause(model.pause + 1500)
        .setValue("(//textarea[@class='content-field-textarea'])[3]", 'The test for validtaio has pass 100% and true.')
        
        .verify.elementPresent("(//div[@class='connected-evidence-show'])", 'opens evidence raitings').pause(model.pause + 1500)
        .click("(//div[@class='connected-evidence-show'])")
        .pause(model.pause + 1500)
        .click("(//div[@class='experiment-hypothesis-impact-expand-container'])")
        .pause(model.pause + 1500)

        .click("(//div[text()='INVALIDATE'])[2]")
        .verify.elementPresent("(//textarea[@class='content-field-textarea'])[4]", 'validate notes').pause(model.pause + 1500)
        .click("(//textarea[@class='content-field-textarea'])[4]")
        // .clearValue("(//textarea[@class='content-field-textarea'])[4]")
        .pause(model.pause + 1500)
        .setValue("(//textarea[@class='content-field-textarea'])[4]", 'The test for invalidation has pass 100% and true.')

        .click("//span[text()='COMPLETE']")
        //.saveScreenshot('./reports/Experiments/experiments.png')
        .end();
    
      },
  }



