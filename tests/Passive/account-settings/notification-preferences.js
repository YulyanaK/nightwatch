var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;

module.exports = {
//   options : {
//     url : model.url + '/canvas'
//   },

// before : function(browser, done){
//     var context = this;
//     var pastProjectDate = new Date(new Date().getTime() - (86400000*10));
//     var pastCardDate = new Date(new Date().getTime() - (86400000*9));
//     var startTest = function () {
//       browser.url(model.url + '/my-account')
//       browser.windowMaximize().pause(model.pause + 500)
//       done()
//     };

//     controller.connectToDB(function(db) {
//       var users = db.collection('profiles')
//       users.insert(model.member1);
//       users.insert(model.member2);
//       db.close();
//     });
  
//     controller.initializeCanvas(function(token){
//        controller.removeAllCards(function(){
//         browser.url(context.options.url)
//         browser.setCookie(token);
//         controller.setProjectDate(pastProjectDate, function(){
//           var newCards = controller.deepCopy(model.connectedCards)
//           newCards.forEach(function(card, i){
//             card.connections = []
//             controller.insertCard(card, pastCardDate, function(){
//               if (i === newCards.length - 1){
//                 newCards.forEach(function(card,i){
//                   controller.insertCard(card, new Date(), function(){
//                     if (newCards.length - 1 === i){
//                       startTest()
//                     }
//                   });
//                 });
//               }
//             });
//           }); 
          
//         });
//       });
//     })      
//   },
//   after : function (browser, done) {
//     controller.removeAllCards(function(){
//       controller.connect().close()
//       done()
//     });
//   }, 

  'login to notifications': function(browser) {
      browser
        .url('https://passive.glidr.io')
        .resizeWindow(1024, 768).pause(model.pause + 500)
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

  'Verify the project name' : function(browser) {
      browser
        .useXpath()
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
        .useCss()
        .element('css selector', 'div.checklist-x-icon', function(result){
            if (result.value && result.value.ELEMENT) {
                // Element is present, do the appropriate tests
                browser.useXpath()
                .click("//div[@class='checklist-not-show-text']");
            } else {
                // Element is not present.
            }
        });
        browser
        .waitForElementPresent('div.org-dashboard-card-container', 6000)
        .useXpath()
        .moveToElement("//div[text()='Ruwanda_QA']", 10, 10)
        .click("//div[text()='Ruwanda_QA']")
        .useCss()
        .waitForElementPresent('div.hamburger-holder', 10000)
        .click('div.hamburger-holder')
        .useXpath()
        .waitForElementPresent("//div[text()='ACTIVE PROJECTS']", 5000)
        .waitForElementPresent("(//div[@class='side-nav-settings-icons'])[8]", 6000)
        .moveToElement("(//div[@class='side-nav-settings-icons'])[8]", 10, 10)
        .click("(//div[@class='side-nav-settings-icons'])[8]")
    },

  'verify dropdown visible once overflow icon is clicked and project notifications shows' : function (browser) {
      browser
        .pause(model.pause + 2000)
        .waitForElementPresent("//div[text()='Notifications']", 6000)
        .click("//div[text()='Notifications']")
        .useCss()
        .element('css selector', 'div.checklist-x-icon', function(result){
            if (result.value && result.value.ELEMENT) {
                // Element is present, do the appropriate tests
                browser.useXpath()
                .click("//div[@class='checklist-not-show-text']");
            } else {
                // Element is not present.
            }
        });
        browser
        .useXpath()
        .verify.elementPresent("//div[@class='project-notifications-toggle-circle on']", 'verifies for toggle circle').pause(model.pause + 1500)
        .click("//div[@class='project-notifications-toggle-circle on']")
        .pause(model.pause + 1500)
        .waitForElementPresent("//div[@class='blur-out-holder']", 6000, 'on blur out').pause(model.pause + 1500)
        .waitForElementPresent("//div[@class='project-notifications-toggle-circle off']", 6000, 'turn off toggle').pause(model.pause + 1500)
        .click("//div[@class='project-notifications-toggle-circle off']")
        
        .verify.elementPresent("//div[@class='project-notifications-option-text']", 'enabled notifications').pause(model.pause + 1500)
        .verify.elementPresent("//div[@class='custom-toggle-container notification']", 'end container').pause(model.pause + 1500)
        .end();


  },

}