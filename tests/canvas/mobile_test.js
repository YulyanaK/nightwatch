var model = require('../../helpers/model');
var controller = require('../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;

module.exports = {
  // options : {
  //   url : model.url + '/canvas'
  // },

  // before : function(browser, done){
  //   var context = this;
  //   var pastProjectDate = new Date(new Date().getTime() - (86400000*10));
  //   var pastCardDate = new Date(new Date().getTime() - (86400000*9));
  //   var startTest = function () {
  //     browser.url(context.options.url)
  //     browser.resizeWindow(1024, 768).pause(model.pause + 500)
  //     done()
  //   };

  //   controller.connectToDB(function(db) {
  //     var users = db.collection('profiles')
  //     users.insert(model.member1);
  //     users.insert(model.member2);
  //     db.close();
  //   });
  
  //   controller.initializeCanvas(function(token){
  //     controller.removeAllCards(function(){
  //       browser.url(context.options.url)
  //       browser.setCookie(token);
  //       controller.setProjectDate(pastProjectDate, function(){
  //         model.connectedCards.forEach(function(card, i){
  //           controller.insertCard(card, pastCardDate, function(){
  //             if (i === model.connectedCards.length - 1){
  //               model.connectedCards.forEach(function(card,i){
  //                 controller.insertCard(card, new Date(), function(){
  //                   if (model.connectedCards.length - 1 === i){
  //                     startTest()
  //                   }
  //                 });
  //               });
  //             }
  //           });
  //         }); 
          
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

  'login to canvas mobile': function(browser) {
      browser
        .url('https://app.staging.glidr.io/sign-in/log-in')
        .resizeWindow(668, 1024).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'looks for glidr logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'searches for active container for email').pause(model.pause + 500)
        .click('div.signin-form-container')
        .pause()
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

  'Verify the project name for canvas mobile' : function(browser) {
      browser
        .waitForElementPresent('div.org-dashboard-card-container', 4000)
        .verify.elementPresent('div.org-dashboard-card-container div:nth-of-type(3)', 'beta codes').pause(model.pause + 500)
        .click('div.org-dashboard-card-container div:nth-of-type(3)')
        .waitForElementPresent('div.hamburger-holder', 2000)
        .click('div.hamburger-holder')
        .waitForElementPresent('div.side-nav-subSection-title.active-projects', 5000)
        .click('div.side-nav-subSection-title.active-projects')
    },

  'Tablet should not some elements tablet': function(browser) {
      browser
        .verify.elementPresent('a.canvas-mobile-down-arrow.lpc-multi-use-arrow-white', 'dropdown menu canvas').pause(model.pause + 500)
        .click('a.canvas-mobile-down-arrow.lpc-multi-use-arrow-white')
        .verify.elementPresent('ul.menu.section-dropdown.routes.submenu.is-dropdown-submenu.first-sub.vertical.js-dropdown-active', 'click to canvas').pause(model.pause + 500)
        .verify.elementPresent('li.is-submenu-item.is-dropdown-submenu-item:nth-of-type(2)', 'click to canvas').pause(model.pause + 500)
        .click('li.is-submenu-item.is-dropdown-submenu-item:nth-of-type(2)')
        .verify.elementPresent('a.canvas-mobile-down-arrow.lpc-multi-use-arrow-white', 'dropdown menu canvas').pause(model.pause + 500)
        .click('a.canvas-mobile-down-arrow.lpc-multi-use-arrow-white')
        .verify.elementPresent('li.is-submenu-item.is-dropdown-submenu-item:nth-of-type(3)', 'click to activity').pause(model.pause + 500)
        .click('li.is-submenu-item.is-dropdown-submenu-item:nth-of-type(3)')
        .verify.elementPresent('a.canvas-mobile-down-arrow.lpc-multi-use-arrow-white', 'dropdown menu canvas').pause(model.pause + 500)
        .click('a.canvas-mobile-down-arrow.lpc-multi-use-arrow-white')
        .verify.elementPresent('li.is-submenu-item.is-dropdown-submenu-item:nth-of-type(1)', 'click to dashboard').pause(model.pause + 500)
        .click('li.is-submenu-item.is-dropdown-submenu-item:nth-of-type(1)')
        .verify.elementPresent('a.canvas-mobile-down-arrow.lpc-multi-use-arrow-white', 'dropdown menu canvas').pause(model.pause + 500)
        .click('a.canvas-mobile-down-arrow.lpc-multi-use-arrow-white')
        .verify.elementPresent('li.is-submenu-item.is-dropdown-submenu-item:nth-of-type(2)', 'click back to canvas').pause(model.pause + 500)
        .click('li.is-submenu-item.is-dropdown-submenu-item:nth-of-type(2)')
        .verify.elementPresent('div.open-add-card.lpc-add-button-mini-gray').pause(model.pause + 500)
        .click('div.open-add-card.lpc-add-button-mini-gray')
        .verify.elementPresent('div[data-test=customerSegments-mobile-section]').pause(model.pause + 1000)
        .click('div[data-test=customerSegments-mobile-section]')
        .setValue('div[data-test=customerSegments-mobile-section]', ["Current Key Partner", '\uE006'])
        .verify.elementPresent('div[data-test=customerSegments-mobile-section]', 'customer segments').pause(model.pause + 500)
        .verify.elementPresent('div[data-test=valuePropositions-mobile-section]', 'value proposition').pause(model.pause + 500)
        .verify.elementPresent('div[data-test=customerRelationships-mobile-section]', 'customer relationships').pause(model.pause + 500)
        .verify.elementPresent('div[data-test=channels-mobile-section]', 'channels').pause(model.pause + 500)
        .verify.elementPresent('div[data-test=revenueStreams-mobile-section]', 'revenue streams').pause(model.pause + 500)
        .verify.elementPresent('div[data-test=keyActivities-mobile-section]', 'key activities').pause(model.pause + 500)
        .verify.elementPresent('div[data-test=keyResources-mobile-section]', 'key resources').pause(model.pause + 500)
        .verify.elementPresent('div[data-test=costStructure-mobile-section]', 'cost structor').pause(model.pause + 500)
        .verify.elementPresent('div[data-test=keyPartners-mobile-section]', 'key partners').pause(model.pause + 500)
  },

  'Mobile should not have more elements': function(browser) {
      browser
        .resizeWindow(420, 900).pause(model.pause + 500)
        .verify.elementPresent('.open-add-card', 'open connectedCards')
        .verify.elementNotPresent('.canvas-nav-connect', 'canvas connect not present')
        .verify.elementNotPresent('.day-week-selector', 'day selctor not present')
        .verify.elementNotPresent('.canvas-nav-view-by', 'canvas view by not present')
        .verify.elementPresent('.date', 'date present')
        .verify.elementPresent('span.canvas-nav-left-arrow.lpc-multi-use-arrow-black', 'checking dates').pause(model.pause + 500)
        .click('span.canvas-nav-left-arrow.lpc-multi-use-arrow-black')
        .pause(model.pause + 500)
        .click('span.canvas-nav-left-arrow.lpc-multi-use-arrow-black')
        .pause(model.pause + 500)
        .click('span.canvas-nav-left-arrow.lpc-multi-use-arrow-black')
        .pause(model.pause + 500)
        .click('span.canvas-nav-right-arrow.lpc-multi-use-arrow-black')
        .pause(model.pause + 500)
        .click('span.canvas-nav-right-arrow.lpc-multi-use-arrow-black')
        .pause(model.pause + 500)
        .click('span.canvas-nav-right-arrow.lpc-multi-use-arrow-black')
        .pause(model.pause + 500)
        .end();
  },
}