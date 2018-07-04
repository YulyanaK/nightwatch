var model = require('../../helpers/model');
var controller = require('../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;


module.exports = {

 

  'Login to orgs for experiments': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://app.staging.glidr.io')
        // .resizeWindow(1024, 768).pause(model.pause + 500)
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
        .waitForElementPresent('div.org-dashboard-card-container', 4000)
        .verify.elementPresent('.project-image-main.project-image-59b6e26d72bde10001000002', 'entering Spain organization').pause(model.pause + 500)
        .click('.project-image-main.project-image-59b6e26d72bde10001000002')
        .waitForElementPresent('div.hamburger-holder', 4000)
        .click('div.hamburger-holder')
  },
  

  'Select a project to create an experiments': function(browser) {
      browser
        .waitForElementPresent('.side-nav-subSection-title', 4000)
        .verify.elementPresent('div.side-nav-subSection-title', 'selecting a project').pause(model.pause + 1500)
        .click('.side-nav-subSection-title')
        .verify.elementPresent('div.lpc-add-button-mini-gray.float-right.clickable', '+ to add a research').pause(model.pause + 1500)
        .click('div.lpc-add-button-mini-gray.float-right.clickable')
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
        .verify.elementPresent('div.content-field-container.success-metrics-input', 'what metrics will you measure?').pause(model.pause + 1500) 
        
        .useXpath()
        .click("(//textarea[@class='content-field-textarea'])[4]")
        .setValue("(//textarea[@class='content-field-textarea'])[4]", ['What are the metrics for the assumption that will be entered for testing', browser.Keys.ENTER])

        .useXpath()
        .click("(//textarea[@class='content-field-textarea'])[5]")
        .setValue("(//textarea[@class='content-field-textarea'])[5]", ['The metrics result should be in most casese a positive one since it is for testing purpuses', browser.Keys.ENTER])
        .click("//div[text()='ADD']")

        .useCss()         
        .verify.elementPresent('div.reusable-circle-button', 'connect an assumption').pause(model.pause + 1500) 
        .click('div.reusable-circle-button')   
        .verify.elementPresent('div.content-field-container.success-metrics-input', 'what metrics will you measure?').pause(model.pause + 1500) 
        
        .useXpath()
        .click("(//textarea[@class='content-field-textarea'])[6]")
        .setValue("(//textarea[@class='content-field-textarea'])[6]", ['2nd What are the metrics for the assumption that will be entered for testing', browser.Keys.ENTER])

        .useXpath()
        .click("(//textarea[@class='content-field-textarea'])[7]")
        .setValue("(//textarea[@class='content-field-textarea'])[7]", ['2nd The metrics result should be in most casese a positive one since it is for testing purpuses', browser.Keys.ENTER])
        .click("//div[text()='ADD']")

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
        .click('div.float-right.experiments-success-metrics-close')

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
        .click("//span[text()='RUN EXPERIMENT']")

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
      .verify.elementPresent('div.criteria-selection-icon-checkmark', 'check mark').pause(model.pause + 1500)
      .click('div.criteria-selection-icon-checkmark')

      .useXpath()
      .click("(//div[@class='criteria-selection-icon-x'])[2]")
      .click("(//div[@class='criteria-selection-icon-checkmark'])[3]")
      .click("(//div[@class='criteria-selection-icon-x'])[4]")
      .click("(//div[@class='criteria-selection-icon-checkmark'])[5]")
      .click("(//div[@class='criteria-selection-icon-x'])[6]")

      .useCss()
      .verify.elementPresent('div.evidence-icon.hover.Disconfirming', 'Disconfirming').pause(model.pause + 500)
      .click('div.evidence-icon.hover.Disconfirming')

      // .useXpath()
      // .click("(//div[@class='evidence-icon.hover.Leaning.Disconfirming'])[3]")
      // .click("(//div[@class='evidence-icon.hover.Neutral'])[3]")
      // .click("(//div[@class='evidence-icon.hover.Leaning.Confirming'])[4]")
      // .click("(//div[@class='evidence-icon.hover.Confirming'])[5]")
      // .verify.elementPresent('div.evidence-icon.hover.Leaning.Confirming', 'leaning Confirming').pause(model.pause + 500)

    },

  'Run Analysis': function(browser) {
    browser
        .verify.elementPresent('div.takeover-navigation-button-container.clearfix.next', 'start analysis').pause(model.pause + 500)
        .click('div.takeover-navigation-button-container.clearfix.next')
        .verify.elementPresent('div.criteria-selection-icon-checkmark', 'objective met').pause(model.pause + 500)
        .click('div.criteria-selection-icon-checkmark')

        .useXpath()
        // check mark 
        .click("(//div[@class='criteria-selection-icon-checkmark'])[2]")

        .useCss()
        .verify.elementPresent('div.criteria-selection-icon-x').pause(model.pause + 500)
        .click('div.criteria-selection-icon-x')
        .verify.elementPresent('div.experiment-analyze-results-button.clickable', 'succesful').pause(model.pause + 500)
        .click('div.experiment-analyze-results-button.clickable ')

        .verify.elementPresent('div.experiment-analyze-results-button.clickable:nth-of-type(2)', 'fialed').pause(model.pause + 1500)
        .click('div.experiment-analyze-results-button.clickable:nth-of-type(2)')

        .verify.elementPresent('div.experiment-analyze-results-button.clickable:nth-of-type(3)', 'inconclusive').pause(model.pause + 1500)
        .click('div.experiment-analyze-results-button.clickable:nth-of-type(3)')

        .verify.elementPresent('div.content-field-container', 'results of the experiment').pause(model.pause + 500)
        .click('div.content-field-container')
        .setValue('.content-field-textarea' , ['need to make more experiments to find out a good result', browser.Keys.ENTER])

        .useXpath()
        //set value for first text area
        .click("(//textarea[@class='content-field-textarea'])")
        .setValue("(//textarea[@class='content-field-textarea'])", ['2nd What are the metrics for the assumption that will be entered for testing', browser.Keys.ENTER])
        // set value for second text area
        .click("(//textarea[@class='content-field-textarea']) [2]")
        .setValue("(//textarea[@class='content-field-textarea']) [2]", ['2nd What are the metrics for the assumption that will be entered for testing', browser.Keys.ENTER])
        
        .useCss()
        //opens grid
        .verify.elementPresent('div.experiment-analyze-view-grid.float-right', 'opens grid').pause(model.pause + 500)
        .click('div.experiment-analyze-view-grid.float-right')
        .verify.elementPresent('div.grid-close-icon.float-right', 'closes grid').pause(model.pause + 500)
        .click('div.grid-close-icon.float-right')

        .verify.elementPresent('div.experiment-analyze-results-button.clickable:nth-of-type(3)', 'keep testing').pause(model.pause + 500)
        .click('div.experiment-analyze-results-button.clickable:nth-of-type(3)')
      
        .verify.elementPresent('div.experiment-analyze-results-button.clickable', 'invalidate').pause(model.pause + 500)
        .click('div.experiment-hypothesis-impact-card-validate.clearfix > div.experiment-analyze-results-button.not-clickable:nth-of-type(2)')

.pause()
        .verify.elementPresent('div.experiment-analyze-results-button.not-clickable:nth-of-type(3)', 'keep testing').pause(model.pause + 500)
        .click('div.experiment-analyze-results-button.not-clickable:nth-of-type(3)')

        .verify.elementPresent('div.project-impact-section-container.hypothesis', 'hypothesis').pause(model.pause + 500)
        .click('div.project-impact-section-container.hypothesis')
        .verify.elementPresent('div.project-impact-section-container.market', 'market').pause(model.pause + 500)
        .click('div.project-impact-section-container.market')
        .verify.elementPresent('div.project-impact-section-container.investments', 'investments').pause(model.pause + 500)
        .click('div.project-impact-section-container.investments')

        .saveScreenshot('./reports/Experiments/experiments.png')
        .end();
    
      },
  }