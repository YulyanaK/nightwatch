var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');

module.exports = {

  'login': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://app.glidr.io')
        .resizeWindow(1366, 768).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'looks for glidr logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'seraches for active container for email').pause(model.pause + 500)
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
  },

  'Inbox first check, click hamburger to enter site in oerder to follow (step 2)' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("(//div[@class='org-dashboard-card-container'])[2]", 4000).pause(model.pause + 500)
        .click("(//div[@class='org-dashboard-card-container'])[2]")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 5000)
        .click('div.hamburger-holder')
        .pause(model.pause + 1500)
  },

  '(Step 2) Select inbox from side nav menu': function(browser) {
      browser
        .verify.elementPresent('div.side-nav-inbox-container', 'my inbox left nav').pause(model.pause + 500)
        .click('div.side-nav-inbox-container')
  },

  'verify links are activewhen are clicked' : function (browser) {
      browser
        .verify.elementPresent('div[data-test="Inbox"]', 'select inbox').pause(model.pause + 500)
        .click('div[data-test="Inbox"]')
        .verify.elementPresent('div[data-test="Unread"]', 'filter section unread is present').pause(model.pause + 1500)
        .click('div[data-test="Unread"]')
        .verify.elementPresent('div[data-test="Project updates"]', 'filter section project updates is selected').pause(model.pause + 1500)
        .click('div[data-test="Project updates"]')
        .verify.elementPresent('div[data-test="@Mentions"]', 'filter section @mentions is selected').pause(model.pause + 1500)
        .click('div[data-test="@Mentions"]')
        .verify.elementPresent('div[data-test="Favorites"]', 'filter section favorites is selected').pause(model.pause + 1500)
        .click('div[data-test="Favorites"]')
        .verify.elementPresent('div[data-test="Drafts"]', 'filter section drafts is selected').pause(model.pause + 1500)
        .click('div[data-test="Drafts"]')
  },

  'verify click on filter section' : function (browser) {
      browser
        .verify.elementPresent('div[data-test="Unread"]', 'filter section inbox is selected').pause(model.pause + 1500)
        .click('div[data-test="Unread"]')
        .verify.elementPresent('div.selected-true:nth-child(2)', 'Unread has been selected and it is true').pause(model.pause + 500)
        .verify.elementPresent('div.selected-true:nth-child(1)', 'Messages has been selected and it is true')
        .verify.elementPresent('div[data-test="Project updates"]', 'filter section inbox is selected').pause(model.pause + 1500)
        .click('div[data-test="Project updates"]')
        .verify.elementPresent('div.selected-true:nth-child(1)', 'Project Updates has been selected and it is true')
        .verify.elementPresent('div[data-test="@Mentions"]', 'filter section inbox is selected').pause(model.pause + 1500)
        .click('div[data-test="@Mentions"]')
        .verify.elementPresent('div.selected-true:nth-child(1)', '@Mentions has been selected and it is true')
        .verify.elementPresent('div[data-test="Drafts"]', 'filter section drafts is selected').pause(model.pause + 1500)
        .click('div[data-test="Drafts"]')
        .verify.elementPresent('div.selected-true:nth-child(1)', 'Drafts has been selected and it is true').pause(model.pause + 1500)
    },


  'verify show more link' : function (browser) {
    browser
       .verify.elementPresent('div[data-test="Unread"]', 'filter section inbox is selected').pause(model.pause + 500)
       .click('div[data-test="Unread"]')
       .verify.elementPresent('div.inbox-show-more', 'click show more 20 times').pause(model.pause + 500)
       .click('div.inbox-show-more')

        .elements('css selector', 'div.inbox-show-more', function (result) {
            for (var i = 1; i < 21; i++) {
           var element = result.value[i];
    browser
        .click('div.inbox-show-more').pause(model.pause + 1500);
          }
        })
        .end();
  }
}