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
        .setValue('input[type=text]', 'dortiz@launchpadcentral.com')
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
        .waitForElementPresent('div.org-dashboard-card-container', 6000)
        .useXpath()
        .click("//div[text()='Senegal']")
        .useCss()
        .waitForElementPresent('div.hamburger-holder', 2000)
        .click('div.hamburger-holder')
        .useXpath()
        .waitForElementPresent("//div[text()='ACTIVE PROJECTS']", 5000)
        .click("(//div[@class='side-nav-settings-icons'])[8]")
    },

  'verify dropdown visible once overflow icon is clicked and project notifications shows' : function (browser) {
      browser
        .pause(model.pause + 2000)
        .waitForElementPresent("//div[text()='Notifications']", 4000)
        .click("//div[text()='Notifications']")
        
        .verify.elementPresent("//div[@class='project-notifications-toggle-circle on']", 'verifies for toggle circle').pause(model.pause + 1500)
        .click("//div[@class='project-notifications-toggle-circle on']")
        .pause(model.pause + 1500)
        .verify.elementPresent("//div[@class='blur-out-holder']", 'on blur out').pause(model.pause + 1500)
        .verify.elementPresent("//div[@class='project-notifications-toggle-circle off']", 'turn off toggle').pause(model.pause + 1500)
        .click("//div[@class='project-notifications-toggle-circle off']")
        
        .verify.elementPresent("//div[@class='project-notifications-option-text']", 'enabled notifications').pause(model.pause + 1500)
        .verify.elementPresent("//div[@class='custom-toggle-container notification']", 'end container').pause(model.pause + 1500)
        .end();


  },

}