var model = require('../../helpers/model');
var controller = require('../../helpers/controller');


module.exports = {


  'login to profile dashboard': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://app.staging.glidr.io')
        //.resizeWindow(1024, 768).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'looks for glidr logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'seraches for active container for email').pause(model.pause + 500)
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

  'Verify the organizations name for profile dashboard' : function(browser) {
      browser
        .verify.elementPresent('div.org-dashboard-card-container', ' opening org container').pause(model.pause + 500)
        .click('div.org-dashboard-card-container')
  },

  'Opens Portfolio Dashboard and closes it to open it again via the collection' : function (browser) {
      browser
        .waitForElementPresent('div.hamburger-holder.close', 2000)
        .click('div.hamburger-holder.close')
        .verify.elementPresent('div.portfolio-dashboard-side-nav', 'portfolio dashboard').pause(model.pause + 500)
        .click('div.portfolio-dashboard-side-nav')
  },

  'Portfolio Dashboard all collections drop down' : function(browser){ 
      browser
        .verify.elementPresent('div.portfolio-collections-filter-holder', 'all collections drop down').pause(model.pause + 500)
        .click('div.portfolio-collections-filter-holder')
        .verify.elementPresent('div.portfolio-collections-dropdown-selection', 'opens drop down to select collections').pause(model.pause + 500)
        .click('div.portfolio-collections-dropdown-selection')
        .verify.elementPresent('div.portfolio-collections-dropdown-selection:nth-of-type(2)', 'selects a collection').pause(model.pause + 500)
        .click('div.portfolio-collections-dropdown-selection:nth-of-type(2)')
        .verify.elementPresent('div.portfolio-collections-dropdown-selection', 'un-select collections').pause(model.pause + 500)
        .click('div.portfolio-collections-dropdown-selection')
        .verify.elementPresent('div.portfolio-collections-dropdown-selection:nth-of-type(2)', 'un-selects a collection').pause(model.pause + 500)
        .click('div.portfolio-collections-dropdown-selection:nth-of-type(2)')
        .verify.elementPresent('input.portfolio-collections-filter-search-input', 'input search for a collection').pause(model.pause + 500)
        .click('input.portfolio-collections-filter-search-input')
        .clearValue('input.portfolio-collections-filter-search-input')
        .setValue('input.portfolio-collections-filter-search-input', ' wew')
        .clearValue('input.portfolio-collections-filter-search-input')
        .verify.elementPresent('div.clickable-for-dropdown', 'closes drop down').pause(model.pause + 500)
        .click('div.clickable-for-dropdown')
  },

  'Portfolio Dashboard all projects' : function(browser) {
      browser
        .verify.elementPresent('div.portfolio-projects-filter-holder', 'all projects').pause(model.pause + 500)
        .click('div.portfolio-projects-filter-holder')
        .verify.elementPresent('div.portfolio-collections-dropdown-selection', 'selects first project').pause(model.pause + 500)
        .click('div.portfolio-collections-dropdown-selection')
        .verify.elementPresent('div.portfolio-collections-dropdown-selection:nth-of-type(2)', 'selects second project').pause(model.pause + 500)
        .click('div.portfolio-collections-dropdown-selection:nth-of-type(2)')
        .verify.elementPresent('div.portfolio-collections-dropdown-selection:nth-of-type(3)', 'selects third project').pause(model.pause + 500)
        .click('div.portfolio-collections-dropdown-selection:nth-of-type(3)')
        .verify.elementPresent('div.portfolio-collections-dropdown-selection').pause(model.pause + 500)
        .click('div.portfolio-collections-dropdown-selection')
        .verify.elementPresent('div.portfolio-collections-dropdown-selection:nth-of-type(2)', 'de-selects second project').pause(model.pause + 500)
        .click('div.portfolio-collections-dropdown-selection:nth-of-type(2)')
        .verify.elementPresent('div.portfolio-collections-dropdown-selection:nth-of-type(3)', 'de-selects third project').pause(model.pause + 500)
        .click('div.portfolio-collections-dropdown-selection:nth-of-type(3)')        
        .verify.elementPresent('input.portfolio-collections-filter-search-input', 'search for projects').pause(model.pause + 500)
        .click('input.portfolio-collections-filter-search-input')
        .setValue('input.portfolio-collections-filter-search-input', ' Dev').pause(model.pause + 500)
        .clearValue('input.portfolio-collections-filter-search-input')
        .setValue('input.portfolio-collections-filter-search-input', 'Lean').pause(model.pause + 500)
        .clearValue('input.portfolio-collections-filter-search-input')
        .verify.elementPresent('div.portfolio-projects-filter-holder', 'all projects').pause(model.pause + 500)
        .click('div.portfolio-projects-filter-holder')
  },

  'Portfolio Dashboard Active, Backlog, Archive': function(browser) {
      browser
        .verify.elementPresent('div.position-relative.clickable-for-dropdown.portfolio-types-filter-holder', 'active or not').pause(model.pause + 500)
        .click('div.position-relative.clickable-for-dropdown.portfolio-types-filter-holder')
        .verify.elementPresent('div.custom-toggle-container.portdash-filter-icon.float-right', 'Active').pause(model.pause + 500)
        .click('div.custom-toggle-container.portdash-filter-icon.float-right')
        .verify.elementPresent('div.custom-toggle-container.portdash-filter-icon.float-right:nth-of-type(2)', 'opens active').pause(model.pause + 500)
        .click('div.custom-toggle-container.portdash-filter-icon.float-right:nth-of-type(2)')
        .verify.elementPresent('div.custom-field-toggle:nth-of-type(3)', 'opens backlog').pause(model.pause + 500)
        .click('div.custom-field-toggle:nth-of-type(3)')
        .verify.elementPresent('div.filter-dropdown-arrow.float-right', 'closes all').pause(model.pause + 500)
        .click('div.filter-dropdown-arrow.float-right')
        .verify.elementPresent('div.port-filter-dropdown-container.clearfix.false', 'closes active or not').pause(model.pause + 500)
        .click('div.port-filter-dropdown-container.clearfix.false')
        .verify.elementPresent('div.filter-dropdown-arrow.float-right', 'closes all').pause(model.pause + 500)
        .click('div.filter-dropdown-arrow.float-right')
     
  },

  'Portfolio Dashboard date picker': function(browser) {
      browser
        .verify.elementPresent('div.portfolio-filter-date-container', 'date picker').pause(model.pause + 500)
        .click('div.portfolio-filter-date-container')
        .verify.elementPresent('div.DayPicker-Day:nth-of-type(4) ', 'select a date to start').pause(model.pause + 500)
        .click('div.DayPicker-Day:nth-of-type(4)')
        .verify.elementPresent('div.DayPicker-Day:nth-of-type(7) ', 'select a date to end').pause(model.pause + 500)
        .click('div.DayPicker-Day:nth-of-type(7)')
        .verify.elementPresent('span.portfolio-card-title', 'verifies that the project is active').pause(model.pause + 500)
        .click('span.portfolio-card-title')
        .end();
  }
}
