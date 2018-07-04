var model = require('../../helpers/model');
var controller = require('../../helpers/controller');
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
        .url('https://app.stage.glidr.io')
        .resizeWindow(1024, 768).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'looks for glidr logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'seraches for active container for email').pause(model.pause + 500)
        .click('div.signin-form-container')
      browser
        .setValue('input[type=text]', 'ortizcdavid@gmail.com')
        .verify.elementPresent('div.signin-form-container', 'searches for active container for password').pause(model.pause + 500)
        .click('input[type=password]')
      browser
        .setValue('input[type=password]', 'Sandpaper@347!')
        .click('div.signup-show-password')
        .verify.elementPresent('div.login-button', 'checks for button is active').pause(model.pause + 500)
        .click('div.login-button')
    },

  'Verify the project name' : function(browser) {
      browser
        .waitForElementPresent('div.org-dashboard-card-container', 4000)
        .click('div.org-dashboard-card-container')
        .waitForElementPresent('div.hamburger-holder', 2000)
        .click('div.hamburger-holder')
        .waitForElementPresent('div.side-nav-subSection-title.active-projects', 5000)
        .click('div.side-nav-subSection-title.active-projects')
    },

  'verify dropdown visible once overflow icon is clicked and project notifications shows' : function (browser) {
      browser
        .waitForElementPresent('.dropdown-icon.dots-icon-nav', 2000)
        .click('.dropdown-icon.dots-icon-nav')
        .verify.elementPresent('a[data-test="projectNotifications"]', 'selects project notifications').pause(model.pause + 1500)
        .click('a[data-test="projectNotifications"]')
        .verify.elementPresent('.project-notifications-toggle-circle.on', 'verifies for toggle circle').pause(model.pause + 1500)
        .click('.project-notifications-toggle-circle.on')
        .verify.elementPresent('.blur-out-holder', 'on blur out').pause(model.pause + 1500)
        .verify.elementPresent('.project-notifications-toggle-circle.off', 'turn off toggle').pause(model.pause + 1500)
        .click('.project-notifications-toggle-circle.off')
        .verify.elementNotPresent('.blur-out-holder', 'onblur out').pause(model.pause + 1500)
        .verify.elementPresent('.project-notifications-your-choices-text.redirect-text', 'test input').pause(model.pause + 1500)
        .click('.project-notifications-your-choices-text.redirect-text')
        .verify.elementPresent('.account-notifications-container', 'end container').pause(model.pause + 1500)
        .end();
  },

}