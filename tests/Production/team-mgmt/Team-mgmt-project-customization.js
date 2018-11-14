
var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;


module.exports = {


  'login to Project dashboard': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://app.glidr.io')
        //.resizeWindow(1024, 768).pause(model.pause + 500)
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

  'Verify the organizations for Project dashboard' : function(browser) {
      browser

        .useXpath()
        .waitForElementPresent("(//div[@class='org-dashboard-card-container'])[2]", 4000).pause(model.pause + 500)
        .click("(//div[@class='org-dashboard-card-container'])[2]")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 4000)
        .click('div.hamburger-holder')
        .verify.elementPresent('div.side-nav-organization-name-holder', 'opens left nav').pause(model.pause + 500)
        .click('div.side-nav-organization-name-holder')
        .verify.elementPresent('div.side-nav-org-options.invite-link', 'invite link is active').pause(model.pause + 4000)
        .click('div.side-nav-org-options.invite-link')
  },

  'Resources menu': function(browser) {
      browser
        .verify.elementPresent('div[data-test="/org-management/customization"]', 'customization').pause(model.pause + 500)
        .click('div[data-test="/org-management/customization"]')
        .verify.elementPresent('div.expand-btn', 'expand section').pause(model.pause + 500)
        .click('div.expand-btn')
        .verify.elementPresent('div.custom-toggle-container', 'disable and enebale toggle').pause(model.pause + 500)
        .click('div.custom-toggle-container')
        .click('div.custom-toggle-container')
        .clearValue('div.small-6.columns.title > input')
        .verify.elementPresent('div.small-6.columns.title > input', 'input value for customization link').pause(model.pause + 500)
        .click('div.small-6.columns.title > input')
        .setValue('div.small-6.columns.title > input', 'Launchpad Central V1')
        .clearValue('.small-3.link > input')
        .verify.elementPresent('.small-3.link > input', 'add url link').pause(model.pause + 500)
        .click('.small-3.link > input')
        .setValue('.small-3.link', 'https://launchpadcentral.com/')
        .verify.elementPresent('div.custom-field-delete', 'deletes links').pause(model.pause + 500)
        .click('div.custom-field-delete')
        .verify.elementPresent('div.small-6.columns.title > input', 'input value for customization link').pause(model.pause + 500)
        .click('div.small-6.columns.title > input')
        .clearValue('div.small-6.columns.title > input')
        .setValue('div.small-6.columns.title > input', 'Launchpad Central V1')
        .verify.elementPresent('.small-3.link > input', 'add url link').pause(model.pause + 500)
        .click('.small-3.link > input')
        .clearValue('.small-3.link')
        .setValue('.small-3.link > input', 'https://launchpadcentral.com/')
        .verify.elementPresent('div.custom-field-save-button').pause(model.pause + 500)
        .click('div.custom-field-save-button')
        .verify.elementPresent('div.expand-btn', 'closes resource menu').pause(model.pause + 500)
        .click('div.expand-btn')
   },

  'Project questionares fields': function(browser) {
       browser
        .useXpath()
        .click("(//div[@class='expand-btn']) [2]")

        .useCss()
        .verify.elementPresent('div.project-customization-dropdown-container', 'selects menu from drop down').pause(model.pause + 500)
        .click('div.project-customization-dropdown-container')
        .verify.elementPresent('div.project-customization-dropdown-option-container.position-relative', 'check for active input field to set value').pause(model.pause + 500)
        .click('div.project-customization-dropdown-option-container.position-relative')
        .setValue('input[value=""]', ' New form text field')
        .verify.elementPresent('div.custom-field-save-button', 'save button active').pause(model.pause + 800)
        .click('div.custom-field-save-button')
        .verify.elementPresent('div.project-customization-form-edit', 'pen icon for editing').pause(model.pause + 800)
        .click('div.project-customization-form-edit')
        .verify.elementPresent('div.custom-toggle-container.custom-field-icon', 'toggle button to be deisabled').pause(model.pause + 800)
        .click('div.custom-toggle-container.custom-field-icon')
        .verify.elementPresent('div.custom-field-save-button', 'disabled button').pause(model.pause + 800)
        .click('div.custom-field-save-button')
        .verify.elementPresent('div.project-customization-form-edit', 'pen icon for editing').pause(model.pause + 800)
        .click('div.project-customization-form-edit')
        .verify.elementPresent('div.custom-toggle-container.custom-field-icon', 'turn on free-form text field').pause(model.pause + 800)
        .click('div.custom-toggle-container.custom-field-icon')
        .verify.elementPresent('div.custom-field-close', 'makes ure x icon is active and working').pause(model.pause + 800)
        .click('div.custom-field-close')
        .verify.elementPresent('div.project-customization-form-edit', 'pen icon for editing').pause(model.pause + 800)
        .click('div.project-customization-form-edit')
        .waitForElementVisible('div.custom-trash-container',  1500, 'hover on trash container')
        .click('div.custom-trash-container')
        .verify.elementPresent('div.custom-field-cancel-button', 'cancel button is active').pause(model.pause + 800)
        .click('div.custom-field-cancel-button')
        .waitForElementVisible('div.custom-trash-container',  1500, 'makes sure the trah button is active')
        .click('div.custom-trash-container')
        .verify.elementPresent('div.custom-field-save-button', 'confirm delete free-from text field').pause(model.pause + 800)
        .click('div.custom-field-save-button')

  },

  'Test for single-select dropdown' : function(browser) {
  	   browser
        .waitForElementPresent('div.project-customization-dropdown-container.clearfix', 1000, 'opens up drop down menu')
        .click('div.project-customization-dropdown-container.clearfix')
        .verify.elementPresent('div.project-customization-dropdown-holder > div:nth-of-type(2)', 'select Single-Select Dropdown').pause(model.pause + 800)
        .getText('div.project-customization-dropdown-holder > div:nth-of-type(2)', function(text) {
         this.verify.equal(text.value, "Single-Select Dropdown")
        })
        .click('div.project-customization-dropdown-holder > div:nth-of-type(2)')
        .verify.elementPresent('div.custom-field-close', 'x to close window').pause(model.pause + 500)
        .click('div.custom-field-close')
        .verify.elementPresent('div.project-customization-dropdown-container.clearfix', 'opens up drop down menu').pause(model.pause + 500)
        .click('div.project-customization-dropdown-container.clearfix')
        .verify.elementPresent('div.project-customization-dropdown-holder > div:nth-of-type(2)', 'select Single-Select Dropdown').pause(model.pause + 800)
        .getText('div.project-customization-dropdown-holder > div:nth-of-type(2)', function(text) {
         this.verify.equal(text.value, "Single-Select Dropdown")
        })
        .click('div.project-customization-dropdown-holder > div:nth-of-type(2)')
        .verify.elementPresent('div.custom-title-field-container', 'enter title of single-Select Dropdown').pause(model.pause + 500)
        .click('div.custom-title-field-container')
        .setValue('input[value=""]', 'Single-Dropdown Selection')
        .verify.elementPresent('div.custom-title-field-container.multiline', 'add list values seperated by commas')
        .setValue('input[value=""]', 'Value1, Value2, Value3')
        .verify.elementPresent('div.custom-field-save-button', 'verifyes save button is working').pause(model.pause + 500)
        .click('div.custom-field-save-button')
        .verify.elementPresent('div.project-customization-form-edit', 'select editor icon').pause(model.pause + 500)
        .click('div.project-customization-form-edit')
        .verify.elementPresent('div.custom-toggle-container.custom-field-icon', 'turns toogle disbled')
        .click('div.custom-toggle-container.custom-field-icon')
        .verify.elementPresent('div.custom-field-cancel-button', 'cancel disabling').pause(model.pause + 500)
        .click('div.custom-field-cancel-button')
        .verify.elementPresent('div.custom-toggle-container.custom-field-icon', 'turns toogle disbled').pause(model.pause + 500)
        .click('div.custom-toggle-container.custom-field-icon')
        .verify.elementPresent('div.custom-field-save-button', 'disable button').pause(model.pause + 500)
        .click('div.custom-field-save-button')
        .verify.elementPresent('div.project-customization-form-edit', 'select editor icon').pause(model.pause + 500)
        .click('div.project-customization-form-edit')
        .verify.elementPresent('div.custom-toggle-container.custom-field-icon', 'turns toogle on').pause(model.pause + 500)
        .click('div.custom-toggle-container.custom-field-icon')
        .verify.elementPresent('div.custom-field-delete', 'deletes single drop down').pause(model.pause + 500)
        .click('div.custom-field-delete')
  },

  'Test for Multi-Select Dropdown' : function(browser) {
  	  browser
        .waitForElementPresent('div.project-customization-dropdown-container.clearfix', 1000, 'opens up drop down menu')
        .click('div.project-customization-dropdown-container.clearfix')
        .verify.elementPresent('div.project-customization-dropdown-holder > div:nth-of-type(2)', 'select Single-Select Dropdown').pause(model.pause + 800)
        .getText('div.project-customization-dropdown-holder > div:nth-of-type(3)', function(text) {
         this.verify.equal(text.value, "Multi-Select Dropdown")
        })
        .click('div.project-customization-dropdown-holder > div:nth-of-type(3)')
        .verify.elementPresent('div.custom-field-close', 'x to close window').pause(model.pause + 500)
        .click('div.custom-field-close')
        .verify.elementPresent('div.project-customization-dropdown-container.clearfix', 'opens up drop down menu').pause(model.pause + 500)
        .click('div.project-customization-dropdown-container.clearfix')
        .verify.elementPresent('div.project-customization-dropdown-holder > div:nth-of-type(2)', 'select Single-Select Dropdown').pause(model.pause + 800)
        .getText('div.project-customization-dropdown-holder > div:nth-of-type(3)', function(text) {
         this.verify.equal(text.value, "Multi-Select Dropdown")
        })
        .click('div.project-customization-dropdown-holder > div:nth-of-type(3)')
        .verify.elementPresent('div.custom-title-field-container', 'enter title of single-Select Dropdown').pause(model.pause + 500)
        .click('div.custom-title-field-container')
        .setValue('input[value=""]', 'Single-Dropdown Selection')
        .verify.elementPresent('div.custom-title-field-container.multiline', 'add list values seperated by commas')
        .setValue('input[value=""]', 'Value1, Value2, Value3')
        .verify.elementPresent('div.custom-field-save-button', 'verifyes save button is working').pause(model.pause + 500)
        .click('div.custom-field-save-button')
        .verify.elementPresent('div.project-customization-form-edit', 'select editor icon').pause(model.pause + 500)
        .click('div.project-customization-form-edit')
        .verify.elementPresent('div.custom-toggle-container.custom-field-icon', 'turns toogle disbled')
        .click('div.custom-toggle-container.custom-field-icon')
        .verify.elementPresent('div.custom-field-cancel-button', 'cancel disabling').pause(model.pause + 500)
        .click('div.custom-field-cancel-button')
        .verify.elementPresent('div.custom-toggle-container.custom-field-icon', 'turns toogle disbled').pause(model.pause + 500)
        .click('div.custom-toggle-container.custom-field-icon')
        .verify.elementPresent('div.custom-field-save-button', 'disable button').pause(model.pause + 500)
        .click('div.custom-field-save-button')
        .verify.elementPresent('div.project-customization-form-edit', 'select editor icon').pause(model.pause + 500)
        .click('div.project-customization-form-edit')
        .verify.elementPresent('div.custom-toggle-container.custom-field-icon', 'turns toogle on').pause(model.pause + 500)
        .click('div.custom-toggle-container.custom-field-icon')
        .verify.elementPresent('div.custom-field-delete', 'deletes single drop down').pause(model.pause + 500)
        .click('div.custom-field-delete')
        .verify.elementPresent('div.custom-field-cancel-button').pause(model.pause + 500)
        .click('div.custom-field-cancel-button')
        .verify.elementPresent('div.custom-field-delete', 'deletes single drop down').pause(model.pause + 500)
        .click('div.custom-field-delete')
        .verify.elementPresent('div.custom-field-save-button').pause(model.pause + 500)
        .click('div.custom-field-save-button')
  },

  'Numeric text field, disabled, enabled deleted' : function(browser) {
      browser
        .verify.elementPresent('div.project-customization-dropdown-container.clearfix', 'opens up drop down menu').pause(model.pause + 500)
        .click('div.project-customization-dropdown-container.clearfix')
        .verify.elementPresent('div.project-customization-dropdown-holder > div:nth-of-type(4)', 'select Single-Select Dropdown').pause(model.pause + 800)
        .getText('div.project-customization-dropdown-holder > div:nth-of-type(4)', function(text) {
         this.verify.equal(text.value, "Numeric Text Field")
        })
        .click('div.project-customization-dropdown-holder > div:nth-of-type(4)') 
        .verify.elementPresent('div.position-relative.float-left', 'select number').pause(model.pause + 800)
        .click('div.position-relative.float-left')
        .verify.elementPresent('div.project-customization-dropdown-option-container.position-relative', 'opens dropdown').pause(model.pause + 800)
        .click('div.project-customization-dropdown-option-container.position-relative')
        .setValue('input[value=""]', '234513413242132313421')
        .verify.elementPresent('div.custom-field-save-button', 'save button').pause(model.pause + 800)
        .click('div.custom-field-save-button')
        .verify.elementPresent('div.project-customization-form-edit', 'edit icon is present').pause(model.pause + 800)
        .click('div.project-customization-form-edit')
        .verify.elementPresent('div.custom-toggle-container.custom-field-icon', 'turn toggle off').pause(model.pause + 800)
        .click('div.custom-toggle-container.custom-field-icon')
        .verify.elementPresent('div.custom-field-cancel-button', 'cancel disabling').pause(model.pause + 800)
        .click('div.custom-field-cancel-button')
        .verify.elementPresent('div.custom-toggle-container.custom-field-icon', 'turn toggle on').pause(model.pause + 800)
        .click('div.custom-toggle-container.custom-field-icon')
        .verify.elementPresent('div.custom-field-save-button', 'disabled button').pause(model.pause + 500)
        .click('div.custom-field-save-button')
        .verify.elementPresent('div.project-customization-form-edit', 'edit icon is present').pause(model.pause + 800)
        .click('div.project-customization-form-edit')
        .verify.elementPresent('div.custom-field-delete', 'delete numeric text field').pause(model.pause + 800)
        .click('div.custom-field-delete')
        .verify.elementPresent('div.custom-field-save-button', 'comfirm deleted numeric text field').pause(model.pause + 800)
        .click('div.custom-field-save-button')
  },

  'Currency text field, disabled, enabled deleted': function(browser) {
      browser
        .verify.elementPresent('div.project-customization-dropdown-container.clearfix', 'opens up drop down menu').pause(model.pause + 500)
        .click('div.project-customization-dropdown-container.clearfix')
        .verify.elementPresent('div.project-customization-dropdown-holder > div:nth-of-type(4)', 'select Single-Select Dropdown').pause(model.pause + 800)
        .getText('div.project-customization-dropdown-holder > div:nth-of-type(4)', function(text) {
         this.verify.equal(text.value, "Numeric Text Field")
        })
        .click('div.project-customization-dropdown-holder > div:nth-of-type(4)')
        .verify.elementPresent('div.position-relative.float-left')
        .click('div.position-relative.float-left')
        .verify.elementPresent('div.project-customization-dropdown-holder > div:nth-of-type(2)', 'verifies for currecny dropdown').pause(model.pause + 800)
        .getText('div.project-customization-dropdown-holder > div:nth-of-type(2)', function(text) {
         this.verify.equal(text.value, "Currency")
        })
        .click('div.project-customization-dropdown-holder > div:nth-of-type(2)')
        .verify.elementPresent('div.custom-title-field-container', 'verifyes for input container').pause(model.pause + 800)
        .click('div.custom-title-field-container')
        .setValue('input[value=""]', '$123413432.1234123')
        .verify.elementPresent('div.custom-field-save-button', 'save button').pause(model.pause + 800)
        .click('div.custom-field-save-button')
        .verify.elementPresent('div.project-customization-form-edit', 'edit icon is present').pause(model.pause + 800)     
        .click('div.project-customization-form-edit')
        .verify.elementPresent('div.custom-toggle-container.custom-field-icon', 'turn toggle off').pause(model.pause + 800)
        .click('div.custom-toggle-container.custom-field-icon')
        .verify.elementPresent('div.custom-field-cancel-button', 'cancel disabling').pause(model.pause + 800)
        .click('div.custom-field-cancel-button')
        .verify.elementPresent('div.custom-toggle-container.custom-field-icon', 'turn toggle off').pause(model.pause + 800)
        .click('div.custom-toggle-container.custom-field-icon')
        .verify.elementPresent('div.custom-field-save-button', 'disabled button').pause(model.pause + 500)
        .click('div.custom-field-save-button')
        .verify.elementPresent('div.project-customization-form-edit', 'edit icon is present').pause(model.pause + 800)     
        .click('div.project-customization-form-edit')
        .verify.elementPresent('div.custom-field-delete', 'delete numeric text field').pause(model.pause + 800)
        .click('div.custom-field-delete')
        .verify.elementPresent('div.custom-field-save-button', 'comfirm deleted numeric text field').pause(model.pause + 800)
        .click('div.custom-field-save-button')
  },

  'percentage field, disabled, enabled deleted' : function(browser) {
      browser
        .verify.elementPresent('div.project-customization-dropdown-container.clearfix', 'opens up drop down menu').pause(model.pause + 500)
        .click('div.project-customization-dropdown-container.clearfix')
        .verify.elementPresent('div.project-customization-dropdown-holder > div:nth-of-type(4)', 'select Single-Select Dropdown').pause(model.pause + 800)
        .getText('div.project-customization-dropdown-holder > div:nth-of-type(4)', function(text) {
         this.verify.equal(text.value, "Numeric Text Field")
        })
        .click('div.project-customization-dropdown-holder > div:nth-of-type(4)')
        .verify.elementPresent('div.position-relative.float-left', 'selects numeric dropdown').pause(model.pause + 500)
        .click('div.position-relative.float-left')
        .verify.elementPresent('div.project-customization-dropdown-holder > div:nth-of-type(3)', 'verifies for currecny dropdown').pause(model.pause + 800)
        .getText('div.project-customization-dropdown-holder > div:nth-of-type(3)', function(text) {
         this.verify.equal(text.value, "Percentage")
        })
        .click('div.project-customization-dropdown-holder > div:nth-of-type(3)')
        .verify.elementPresent('div.custom-title-field-container', 'verifyes for input container').pause(model.pause + 800)
        .click('div.custom-title-field-container')
        .setValue('input[value=""]', '%123413432.1234123%')
        .verify.elementPresent('div.custom-field-save-button', 'save button').pause(model.pause + 800)
        .click('div.custom-field-save-button')
        .verify.elementPresent('div.project-customization-form-edit', 'edit icon is present').pause(model.pause + 800)     
        .click('div.project-customization-form-edit')
        .verify.elementPresent('div.custom-toggle-container.custom-field-icon', 'turn toggle off').pause(model.pause + 800)
        .click('div.custom-toggle-container.custom-field-icon')
        .verify.elementPresent('div.custom-field-cancel-button', 'cancel disabling').pause(model.pause + 800)
        .click('div.custom-field-cancel-button')
        .verify.elementPresent('div.custom-toggle-container.custom-field-icon', 'turn toggle off').pause(model.pause + 800)
        .click('div.custom-toggle-container.custom-field-icon')
        .verify.elementPresent('div.custom-field-save-button', 'disabled button').pause(model.pause + 500)
        .click('div.custom-field-save-button')
        .verify.elementPresent('div.project-customization-form-edit', 'edit icon is present').pause(model.pause + 800)     
        .click('div.project-customization-form-edit')
        .verify.elementPresent('div.custom-field-delete', 'delete numeric text field').pause(model.pause + 800)
        .click('div.custom-field-delete')
        .verify.elementPresent('div.custom-field-save-button', 'comfirm deleted numeric text field').pause(model.pause + 800)
        .click('div.custom-field-save-button')
        .verify.elementPresent('div.custom-field-save-button', 'comfirm deleted 2nd field').pause(model.pause + 800)
        .click('div.custom-field-save-button')
        .end();
  },
}

