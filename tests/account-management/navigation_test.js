var model = require('../../helpers/model');
var controller = require('../../helpers/controller');

module.exports = {
  options : {
    url : model.url + '/canvas'
  },

  before : function(browser, done){
    var context = this;
    var pastProjectDate = new Date(new Date().getTime() - (86400000*10));
    var pastCardDate = new Date(new Date().getTime() - (86400000*9));
    var startTest = function () {
      browser.url(model.url + '/account-management')
      browser.windowMaximize().pause(model.pause + 500)
      done()
    };
  
    controller.initializeCanvas(function(token){

      controller.removeAllCards(function(){
        browser.url(context.options.url)
        browser.setCookie(token);
        controller.setProjectDate(pastProjectDate, function(){
          startTest()
        });
      });
    })      
  },
  after : function (browser, done) {
    
    controller.removeAllCards(function(){
      controller.connect().close()
      done()
    });
  },
  'verify account management navigation and re route' : function (browser) {
    browser
    .verify.elementPresent('div[data-test="/account-management/organization-settings"]', 'organization settings route is present')
    .verify.elementPresent('.page-navigation-selected-tab.organizationSettingsNavUnderline', 'organization settings route is selected')
    .verify.elementPresent('div[data-test="/account-management/authentication"]', 'authentication is present')
    .click('div[data-test="/account-management/authentication"]')
    .verify.elementPresent('.page-navigation-selected-tab.authenticationNavUnderline', 'authentication is selected')
    .verify.elementPresent('div[data-test="/account-management/team-management"]', 'team management route is present')
    .click('div[data-test="/account-management/team-management"]')
    .verify.elementPresent('.page-navigation-selected-tab.teamManagementsNavUnderline', 'team management is selected')
    .verify.elementPresent('div[data-test="/account-management/access-logs"]', 'access logs route is present')
    .click('div[data-test="/account-management/access-logs"]')
    .verify.elementPresent('.page-navigation-selected-tab.teamAccessLogsNavUnderline', 'access logs is selected')
  },


  'my account management navigation mobile should become a dropdown': function(browser) {
    browser
    .resizeWindow(400, 600).pause(model.pause + 500)
    .verify.elementPresent('a[data-test="/account-management/access-logs"]', 'access logs is selected in dropdown')
    .verify.elementPresent('.page-navigation-section-container.select-dropdown-container')
    .click('.page-navigation-section-container.select-dropdown-container')
    .verify.elementPresent('a[data-test="/account-management/organization-settings"]', 'organizations is present')
    .click('a[data-test="/account-management/organization-settings"]')
    .verify.elementPresent('a[data-test="/account-management/organization-settings"]', 'organizations is selected in dropdown')
    .click('.page-navigation-section-container.select-dropdown-container')
    .verify.elementPresent('a[data-test="/account-management/authentication"]', 'authentication is present')
    .click('.page-navigation-section-container.select-dropdown-container')
    .verify.elementPresent('a[data-test="/account-management/team-management"]', 'authentication is selected in the dropdown')
    .click('.page-navigation-section-container.select-dropdown-container')
    .verify.elementPresent('a[data-test="/account-management/team-management"]', 'team management is present')
    .click('a[data-test="/account-management/team-management"]')
    .verify.elementPresent('a[data-test="/account-management/team-management"]', 'profile is selected in the dropdown dropdown')
    .end()
  }
}
