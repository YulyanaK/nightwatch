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
//       browser.url(context.options.url)
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
//       controller.removeAllCards(function(){
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

  'login to canvas': function(browser) {
      browser
        .url('https://app.staging.glidr.io')
        .resizeWindow(1124, 868).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'looks for glidr logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'searches for active container for email').pause(model.pause + 500)
        .click('div.signin-form-container')
      browser
        .setValue('input[type=text]', 'ortizcdavid@gmail.com')
        .verify.elementPresent('div.signin-form-container', 'searches for active container for password').pause(model.pause + 500)
        .click('input[type=password]')
      browser
        .setValue('input[type=password]', 'Testtest1!')
        .click('div.signup-show-password')
        .verify.elementPresent('div.login-button', 'checks for button is active').pause(model.pause + 500)
        .click('div.login-button')
    },

  'Verify the project name for canvas' : function(browser) {
      browser
        .waitForElementPresent('div.org-dashboard-card-container', 4000)
        .verify.elementPresent('div.org-dashboard-card-container div:nth-of-type(3)', 'beta codes').pause(model.pause + 500)
        .click('div.org-dashboard-card-container div:nth-of-type(3)')
        .waitForElementPresent('div.hamburger-holder', 2000)
        .click('div.hamburger-holder')
        .waitForElementPresent('div.side-nav-subSection-title.active-projects', 5000)
        .click('div.side-nav-subSection-title.active-projects')
        .pause()
    },

  'canvas connect nav shows on click' : function (browser) {
    browser
      .waitForElementPresent('div[data-test="canvas-nav"]', 1000)
      .verify.elementPresent('div[data-test="canvas-nav"]', 'enter to canvas').pause(model.pause + 500)
      .click('div[data-test="canvas-nav"]')
      .verify.elementPresent('div.canvas-nav-connection-title').pause(model.pause + 500)
      .click('div.canvas-nav-connection-title')
      .verify.elementPresent('div[data-test=CustomerSegments0]', 'testing customer segment card').pause(model.pause + 1000)
      .verify.elementPresent('div[data-test=KeyActivities0].card.card-connect-not-selected.keyActivities', 'testing key activites card')
      .verify.elementPresent('div[data-test=ValuePropositions0].card.card-connect-not-selected.valuePropositions', 'testing value proposition card').pause(model.pause + 1000)
      .verify.elementPresent('div[data-test=KeyPartners0].card.card-connect-not-selected.keyPartners', 'testing key partners card').pause(model.pause + 1000)
      .verify.elementPresent('div[data-test=RevenueStreams0].card.card-connect-not-selected.revenueStreams', 'testing revenue stream card')
  },

  'customer segments can be selected and connected to hypothesises' : function (browser) {
    browser
      .verify.elementPresent('div[data-test=CustomerSegments0]', 'testing customer segment card').pause(model.pause + 1000)
      .click('div[data-test=CustomerSegments0]')
      .verify.elementPresent('div[data-test=KeyActivities0]', 'check key activity connection').pause(model.pause + 500)
      .verify.elementPresent('div[data-test=ValuePropositions0]', 'check value prop connection').pause(model.pause + 1000)
      .verify.elementPresent('div[data-test=KeyPartners0]', 'check  key partner connection').pause(model.pause + 1000)
      .verify.elementPresent('div[data-test=RevenueStreams0]', 'check revenue stream connection')
      .click('div[data-test=KeyPartners0]')
      .pause(model.pause + 200)
      .verify.elementPresent('div[data-test=KeyPartners0].card.card-connected.keyPartners', 'key partner connection should hnow be connected').pause(model.pause + 300)
  },

  'connect and edit connection mode are able to exit' : function (browser) {
    browser
      .click('div.connection-edit-button')
      .pause(model.pause + 200)
      .verify.elementPresent('div[data-test=KeyPartners0]', 'test key partners connection status').pause(model.pause + 1000)
      .verify.elementPresent('div[data-test=CustomerSegments0]', 'test customer segments connection status')
      .verify.elementPresent('div[data-test=ValuePropositions0]', 'test value propositions connection status').pause(model.pause + 1000)
      .verify.elementPresent('div[data-test=RevenueStreams0]', 'test revenue streams connection status')
      .verify.elementPresent('div[data-test=KeyActivities0]', 'test key activities connection status').pause(model.pause + 1000)
      .click('div.connection-exit')
      .pause(model.pause + 200)
      .verify.elementNotPresent('div[class=connection-nav-overlay]', 'nav overlay should disapear on exit')
  },

  'hypothesises can be unconnected from customer segments': function (browser) {
    browser
      .click('div[class=canvas-nav-connection-title]')
      .waitForElementVisible('div[data-test=CustomerSegments0]', model.pause + 1000)
      .click('div[data-test=CustomerSegments0].card.card-not-connected.customerSegments')
      .waitForElementVisible('div[data-test=KeyPartners0]', model.pause + 1000)
      .pause(model.pause + 300)
      .click('div[data-test=KeyPartners0]')
      .waitForElementVisible('div[data-test=KeyPartners0]', model.pause + 1000)
      .click('div.connection-edit-button')
      .verify.elementPresent('div[data-test=KeyPartners0]', 'key partners should not be connected')
      .verify.elementPresent('div[data-test=ValuePropositions0]', 'value props should not be connected').pause(model.pause + 1000)
      .verify.elementPresent('div[data-test=RevenueStreams0]', 'revenue streams should not be connected').pause(model.pause + 1000)
      .verify.elementPresent('div[data-test=KeyActivities0]', 'key activities should not be connected')
      .click('div.connection-exit')
      .end();
  }
}