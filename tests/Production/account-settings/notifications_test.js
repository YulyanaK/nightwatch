var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');

module.exports = {
  // options : {
  //   url : model.url + '/canvas'
  // },

  // before : function(browser, done){
  //   var context = this;
  //   var pastProjectDate = new Date(new Date().getTime() - (86400000*10));
  //   var pastCardDate = new Date(new Date().getTime() - (86400000*9));
  //   var startTest = function () {
  //     browser.url(model.url + '/my-account/notifications')
  //     browser.windowMaximize().pause(model.pause + 500)
  //     done()
  //   };
  
  //   controller.initializeCanvas(function(token){
  //     controller.removeAllCards(function(){
  //       browser.url(context.options.url)
  //       browser.setCookie(token);
  //       controller.setProjectDate(pastProjectDate, function(){
  //         startTest()
  //       });
  //     });
  //   })      
  // },
  // after : function (browser, done) {
  //   controller.removeAllCards(function(){
  //     controller.connect().close()
  //     done()
  //   });
  // },

  'login to notifications in profile': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://app.glidr.io')
        .resizeWindow(1024, 968).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'looks for glidr logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'searches for active container for email').pause(model.pause + 500)
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

 /* 'Verify the organizations for profile notifications' : function(browser) {
      browser
        .waitForElementPresent('div.org-dashboard-card-container', 4000)
        .verify.elementPresent('div.org-dashboard-card-container div:nth-of-type(3)', 'beta codes').pause(model.pause + 500)
        .click('div.org-dashboard-card-container div:nth-of-type(3)')
  },*/

  'verify all checkboxes in in-app are active and onClick functionality works' : function (browser) {
      browser
        .pause(model.pause + 4000)
        .useXpath()
        .waitForElementPresent("//div[text()='Ruwanda_QA']", 6000)
        .moveToElement("//div[text()='Ruwanda_QA']", 10, 10)
        .click("//div[text()='Ruwanda_QA']")
        .pause(model.pause + 4000)

        .frame("intercom-borderless-frame")
        .element('xpath', "//div[text()='Which one most closely matches your role?']", function(result){
            if (result.value && result.value.ELEMENT) {
                // Element is present, do the appropriate tests
                browser.click("//div[text()='Which one most closely matches your role?']")
                .waitForElementPresent("//div[@class='intercom-borderless-dismiss-button']", 6000)
                .click("//div[@class='intercom-borderless-dismiss-button']");
            } else {
                // Element is not present.
            }
        });
    browser
        .frame(null)   

    browser
        .waitForElementPresent("//div[@class='dropdown-menu-icon inbox active']", 12000)
        .click("//div[@class='dropdown-menu-icon inbox active']").pause(model.pause + 1000)
        .waitForElementPresent("//div[@class='notificaiton-description']", 6000, 'Edits to cards in a project I have access to')
        .click("//div[@class='dropdown-menu-icon inbox active']").pause(model.pause + 1000)
        .click("//div[text()='VIEW IN YOUR INBOX']")
        .pause(model.pause + 4000)
  },


  'verify all checkboxes in email are active and onClick functionality works': function(browser) {
      browser
        .verify.elementPresent("//div[@class='inbox-number-of-unread safari_only_inbox-vertical-align']", 'Inbox unread').pause(model.pause + 1000)
        .click("//div[@class='inbox-number-of-unread safari_only_inbox-vertical-align']")
        .verify.elementPresent("//div[@class='project-type-location']", 'edits to cards')
        .end();
  },
}

