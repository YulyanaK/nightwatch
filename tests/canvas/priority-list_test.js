var model = require('../../helpers/model');
var controller = require('../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;


module.exports = {
  // options : {
  //   url : model.url + 'https://testing.stage.glidr.io/canvas'
  // },

  // before : function(browser, done){
  //   var context = this
  //   var pastProjectDate = new Date(new Date().getTime() - (86400000*10));
  //   var pastCardDate = new Date(new Date().getTime() - (86400000*9))
  //   var startTest = function () {
  //     browser.url(context.options.url)
  //     browser.windowMaximize().pause(model.pause + 500)
  //     done()
  //   }

  //   controller.initializeCanvas(function(token){
  //     controller.removeAllCards(function(){
  //       browser
  //       .url(context.options.url)
  //       .setCookie(token)
  //       controller.setProjectDate(pastProjectDate, function(){
  //         var newCards = controller.deepCopy(model.connectedCards)
  //         newCards.forEach(function(card, i){
  //           controller.insertCard(card, pastCardDate, function(){
  //             if (newCards.length-1 === i){
  //               newCards.forEach(function(kard, j){
  //                 if (kard.hypothesis) {
  //                   kard.hypothesis.title = "Current " + kard.hypothesis.title
  //                 }
  //                 kard['_id'] = new ObjectId()
  //                 if(kard.hypothesis && kard.hypothesis.canvasSection !== "customerSegments") { kard.cardId = new ObjectId() }
  //                 controller.insertCard(kard, new Date(), function(){
  //                   if (newCards.length -1 === j) {
  //                     startTest()
  //                   }
  //                 })
  //               })
  //             }
  //           })
  //         })

  //       });
  //     });
  //   });
  // },
  // after : function (browser, done) {
  //   controller.removeAllCards(function(){
  //     controller.connect().close()
  //     done()
  //   });
  // },

  'login to canvas priority list': function(browser) {
      browser
        .url('https://app.stage.glidr.io')
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

  'Verify the project name for canvas priority list' : function(browser) {
      browser
        .waitForElementPresent('div.org-dashboard-card-container', 4000)
        .verify.elementPresent('div.org-dashboard-card-container div:nth-of-type(3)', 'beta codes').pause(model.pause + 500)
        .click('div.org-dashboard-card-container div:nth-of-type(3)')
        .waitForElementPresent('div.hamburger-holder', 2000)
        .click('div.hamburger-holder')
        .waitForElementPresent('div.side-nav-subSection-title.active-projects', 5000)
        .click('div.side-nav-subSection-title.active-projects')
    },

  'canvas time priority list' : function (browser) {
      browser
        .waitForElementPresent('div[data-test="canvas-nav"]', 1000)
        .verify.elementPresent('div[data-test="canvas-nav"]', 'enter to canvas').pause(model.pause + 500)
        .click('div[data-test="canvas-nav"]')
  },


  'Priority list in testing' : function (browser) {
      browser
        .verify.elementPresent('div.priority-toggle-icon', 'verifies for icon to be present').pause(model.pause + 800)
        .verify.elementPresent('div.priority-toggle-text', 'verifies for text to be present').pause(model.pause + 800)
        .click('div.priority-toggle-container')
        .verify.elementPresent('div.priority-filter-toggle', 'opens drop down').pause(model.pause + 800)
        .click('div.priority-filter-toggle')
        .verify.elementPresent('div.priority-dropdown-wrapper.active', 'checks tesing is selected')
        .verify.elementPresent('div.priorty-card-selection.clearfix', 'drop down is present').pause(model.pause + 800)
        .click('div.priorty-card-selection.clearfix:nth-of-type(2)').pause(model.pause + 800)
        .verify.elementPresent('div.priority-filter-toggle', 'validate').pause(model.pause + 800)
        .click('div.priority-filter-toggle')
        .verify.elementPresent('div.priorty-card-selection.clearfix', 'invalidate').pause(model.pause + 800)
        .click('div.priorty-card-selection.clearfix:nth-of-type(3)').pause(model.pause + 800)
        .verify.elementPresent('div.priority-filter-toggle', 'drop down').pause(model.pause + 800)
        .click('div.priority-filter-toggle')
        .verify.elementPresent('div.priorty-card-selection.clearfix', 'parked').pause(model.pause + 800)
        .click('div.priorty-card-selection.clearfix:nth-of-type(4)').pause(model.pause + 800)
        .verify.elementPresent('div.priority-filter-toggle', 'drop dpwn opens').pause(model.pause + 800)
        .click('div.priority-filter-toggle')
        .verify.elementPresent('div.priorty-card-selection.clearfix', 'archived').pause(model.pause + 800)
        .click('div.priorty-card-selection.clearfix:nth-of-type(5)').pause(model.pause + 800)
        .verify.elementPresent('div.priority-filter-toggle', 'opens dropdown').pause(model.pause + 800)
        .click('div.priority-filter-toggle')
        .verify.elementPresent('div.priorty-card-selection.clearfix', 'in testing').pause(model.pause + 800)
        .click('div.priorty-card-selection.clearfix:nth-of-type(1)').pause(model.pause + 800)
      },

  'In testing create a new card (useCss)' : function(browser) {
      browser
        .verify.elementPresent('div.float-right.priority-list-quick-add', 'opens new card').pause(model.pause + 1000)
        .click('div.float-right.priority-list-quick-add').pause(model.pause + 1000)
        .verify.elementPresent('div.priority-quick-add-card-container', 'sets value on card').pause(model.pause + 1000)
        .setValue('.quick-add-textarea', ['labels for peace', '\uE006'])
        .verify.elementPresent('.lpc-close-cancel-mini-icon-gray', 'closes opened card').pause(model.pause + 1000)
        .click('.lpc-close-cancel-mini-icon-gray')
<<<<<<< HEAD
        .verify.elementPresent('.priority-card-container', ' closes canvas to go to hypothesis')
        .click('.priority-card-container')
        .verify.elementPresent('div.card-full-nav.full-nav-edit-mode-btn:nth-of-type(1)', 'closes hypotheses to go back to canvas')
        .click('div.card-full-nav-x-container')
=======
        // .verify.elementPresent('.priority-card-container', ' closes canvas to go to hypothesis')
        // .click('.priority-card-container')
        // .verify.elementPresent('div.card-full-nav.full-nav-edit-mode-btn:nth-of-type(1)', 'closes hypotheses to go back to canvas')
        // .click('div.card-full-nav-x-container')
>>>>>>> a13ac22312a48aac55012816ad883a51538ddaa4
      browser
        .useCss()
        .moveToElement('.priority-card-drag-icon.position-absolute',  0,  0)
        .mouseButtonDown(0)
        .moveToElement('body',  -127,  -143) // Move to offset position of 200(x) 600(y)
        .mouseButtonUp(0)
        .pause(5000)  // Keep browser open for 5 seconds so you can see result
<<<<<<< HEAD
        .end();
  },
=======
        
        .pause()

     
 },
  


  'Can go back days and reflect the correct state of the canvas' : function (browser) {
      browser
        .click('span.canvas-nav-left-arrow')
        .pause(model.pause + 300)
        .verify.elementPresent('div[data-test=keyPartners-section]', 'no cards should be present')
        .verify.elementPresent('div[data-test=KeyActivities0]', 'no cards should be present')
        .verify.elementPresent('div[data-test=ValuePropositions0]', 'no cards should be present')
        .verify.elementPresent('div[data-test=CustomerSegments0]', 'no cards should be present')
        .verify.elementPresent('div[data-test=RevenueStreams0]', 'no cards should be present')
        .end();
  }
>>>>>>> a13ac22312a48aac55012816ad883a51538ddaa4

}