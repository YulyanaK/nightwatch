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

  'login to canvas': function(browser) {
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

  'Verify the project name for canvas' : function(browser) {
      browser
        .waitForElementPresent('div.org-dashboard-card-container', 4000)
        .verify.elementPresent('div.org-dashboard-card-container div:nth-of-type(3)', 'beta codes').pause(model.pause + 500)
        .click('div.org-dashboard-card-container div:nth-of-type(3)')
        .waitForElementPresent('div.hamburger-holder', 2000)
        .click('div.hamburger-holder')
        .waitForElementPresent('div.side-nav-subSection-title.active-projects', 5000)
        .click('div.side-nav-subSection-title.active-projects')
    },

  'canvas time' : function (browser) {
      browser
        .waitForElementPresent('div[data-test="canvas-nav"]', 1000)
        .verify.elementPresent('div[data-test="canvas-nav"]', 'enter to canvas').pause(model.pause + 500)
        .click('div[data-test="canvas-nav"]')
  },


  'Verifyes that all cards are being displayed correctly and field text is correct' : function (browser) {
      browser
        .waitForElementVisible('div[data-test=KeyPartners0]', model.pause + 1000)
        .waitForElementVisible('div[data-test=KeyActivities0]', model.pause + 1000)
        .waitForElementVisible('div[data-test=ValuePropositions0]', model.pause + 1000)
        .waitForElementVisible('div[data-test=CustomerSegments0]', model.pause + 1000)
        .waitForElementVisible('div[data-test=RevenueStreams0]', model.pause + 1000)
        .pause(1000)  
        .waitForElementVisible('div[data-test=KeyPartners0]', model.pause + 1000)
        .waitForElementVisible('div[data-test=KeyActivities0]', model.pause + 1500)
        .waitForElementVisible('div[data-test=valuePropositions-section]', model.pause + 1000)
        .waitForElementVisible('div[data-test=customerSegments-section]', model.pause + 1000)
        .waitForElementVisible('div[data-test=revenueStreams-section]', model.pause + 1000)
        .waitForElementVisible('span.canvas-nav-left-arrow', model.pause + 1000)
        .pause(model.pause + 600)
        .waitForElementVisible('div[data-test=keyPartners-section]', model.pause + 1000)
        .getText('div[data-test=keyPartners-section]', function(text) {
          this.verify.equal(text.value, "KEY PARTNERS (1)\nCurrent Key Partner")
          })
        .click('div.can-section-title')
        .setValue('div.can-section-title', ['KEY PARTNERS', '\uE006'])
        .pause(model.pause + 600)
        .waitForElementVisible('div[data-test=keyActivities-section]', model.pause + 1000)
        .getText('div[data-test="keyActivities-section"]', function(text) {
          this.verify.equal(text.value, 'KEY ACTIVITIES (1)\nAlawa iho oe ma ka aoao')
          })
        .click('div[data-test="keyActivities-section"] div.clickable')
        .setValue('div[data-test="keyActivities-section"]', ['KEY ACTIVITIES', '\uE006'])
        .pause(model.pause + 600)
        .waitForElementVisible('div[data-test=valuePropositions-section]', model.pause + 1000)
        .getText('div[data-test="valuePropositions-section"]', function(text) {
          this.verify.equal(text.value, 'VALUE PROPOSITIONS (1)\nvaluePropositions-section')
          })
        .click('div[data-test=valuePropositions-section] div.clickable')
        .setValue('div[data-test=valuePropositions-section]', ['VALUE PROPOSITIONS', '\uE006'])
        .pause(model.pause + 600)
        .waitForElementVisible('div[data-test=customerSegments-section]', model.pause + 1000)
        .getText('div[data-test="customerSegments-section"]', function(text) {
          this.verify.equal(text.value, 'CUSTOMER SEGMENTS (1)\nCS 3')
          })
        .click('div[data-test="customerSegments-section"] div.clickable')
        .setValue('div[data-test="customerSegments-section"]', ['CUSTOMER SEGMENTS', '\uE006'])
        .pause(model.pause + 600)
        .waitForElementVisible('div[data-test="keyResources-section"]', model.pause + 1000)
        .getText('div[data-test="keyResources-section"]', function(text) {
          this.verify.equal(text.value, 'KEY RESOURCES (2)\n6kb rounded up to nearest increment of 4KB is 8KB.\nNä huahelu e kau ana')
          })
        .click('div[data-test="keyResources-section"] div.clickable')
        .setValue('div[data-test="keyResources-section"]', ['KEY RESOURCES', '\uE006'])
        .pause(model.pause + 600)
        .waitForElementVisible('div[data-test="channels-section"]', model.pause + 1000)
        .getText('div[data-test="channels-section"]', function(text) {
          this.verify.equal(text.value, 'CHANNELS (1)\n神の子よ、今こそ始まりの時！\n1')
          })
        .click('div[data-test="channels-section"] div.clickable')
        .setValue('div[data-test="channels-section"]', ['CHANNELS', '\uE006'])
        .pause(model.pause + 600)
        .waitForElementVisible('div[data-test="costStructure-section"]', model.pause + 1000)
        .getText('div[data-test="costStructure-section"]', function(text) {
          this.verify.equal(text.value, 'COST STRUCTURE (2)\nCR 1\n7]\\')
          })
        .click('div[data-test="costStructure-section"] div.clickable')
        .setValue('div[data-test="costStructure-section"]', ['COST STRUCTURE', '\uE006'])
        .pause(model.pause + 600)
        .waitForElementVisible('div[data-test=revenueStreams-section]', model.pause + 1000)
        .getText('div[data-test="revenueStreams-section"]', function(text) {
          this.verify.equal(text.value, 'REVENUE STREAMS (2)\nहिन्दी विकिपीडिया\n1\n（怖がらないで、その身を委ねて）\n1')
        })
        .click('div[data-test=revenueStreams-section] div.clickable')
        .setValue('div[data-test="revenueStreams-section"]', ['REVENUE STREAMS', '\uE006'])
  },

  'Goes forward in time on canvas and displays the current cards' : function(browser) {
      browser
        .verify.elementPresent('span.canvas-nav-right-arrow').pause(model.pause + 1000)
        .click('span.canvas-nav-left-arrow').pause(model.pause + 1000)
        .click('span.canvas-nav-right-arrow').pause(model.pause + 1000)
        .verify.elementPresent('div[data-test=keyPartners-section]', 'key partner card should be visible')
        .verify.elementPresent('div[data-test="keyActivities-section"]', 'key activity card should be visible')
        .verify.elementPresent('div[data-test="valuePropositions-section"]', 'value prop card should be visible')
        .verify.elementPresent('div[data-test="customerSegments-section"]', 'customer segment card should be visible')
        .verify.elementPresent('div[data-test="revenueStreams-section"]', 'revenue stream card should be visible')
        .verify.elementPresent('div[data-test="KeyPartners0"]', 'second key partern card should be visible')
        .verify.elementPresent('div[data-test="KeyActivities0"]', 'second key activity card should be visible')
        .verify.elementPresent('div[data-test="valuePropositions-section"]', 'second value prop card should be visible')
        .verify.elementPresent('div[data-test="CustomerSegments0"]', 'second customer segment card should be visible')
        .verify.elementPresent('div[data-test="RevenueStreams1"]', 'second revenue stream card should be visible')
  },
  
  'Can change between days and weeks' : function (browser) {
      browser
        .waitForElementVisible('.dropdown.menu.canvas-navigation', model.pause + 1000)
        .waitForElementVisible('.date', model.pause + 1000)
        .getText('.date', function(text) {
          var weeks = text.value.indexOf("| Week") > -1
          this.verify.equal(weeks, true)
        })
        .click('.dropdown.menu.canvas-navigation')
        .pause(model.pause + 500)
        .waitForElementVisible('a.days-weeks-options', model.pause + 1000)
        .click('.day-week-selector-dropdown > li:nth-child(2)')
        .waitForElementVisible('.date', model.pause + 1000)
        .getText('.date', function(text) {
          var days = text.value.indexOf("| Day") > -1
          this.verify.equal(days, true)
        })
  },

  'Can go back days and reflect the correct state of the canvas' : function (browser) {
      browser
        .click('.dropdown.menu.canvas-navigation')
        .waitForElementVisible('.day-week-selector-dropdown > li:nth-child(2)', model.pause + 1000)
        .click('.day-week-selector-dropdown > li:nth-child(2)')
        .pause(model.pause + 1000)
        .click('span.canvas-nav-left-arrow')
        .pause(model.pause + 1000)
        .click('span.canvas-nav-left-arrow')
        .pause(model.pause + 1000)
        .click('span.canvas-nav-left-arrow')
        .pause(model.pause + 1000)
        .click('span.canvas-nav-left-arrow')
        .pause(model.pause + 1000)
        .click('span.canvas-nav-left-arrow')
        .pause(model.pause + 1000)
        .click('span.canvas-nav-left-arrow')
        .pause(model.pause + 1000)
        .click('span.canvas-nav-left-arrow')
        .pause(model.pause + 1000)
        .click('span.canvas-nav-left-arrow')
        .pause(model.pause + 1000)
        .click('span.canvas-nav-left-arrow')
        .pause(model.pause + 1000)
        .getText('div[data-test="keyPartners-section"]', function(text) {
            this.verify.equal(text.value, "KEY PARTNERS (0)")
        })
        .getText('div[data-test=keyActivities-section]', function(text) {
            this.verify.equal(text.value, "KEY ACTIVITIES (1)\nAlawa iho oe ma ka aoao")
        })
        .getText('div[data-test=valuePropositions-section]', function(text) {
            this.verify.equal(text.value, "VALUE PROPOSITIONS (1)\nvaluePropositions-section")
        })
        .getText('div[data-test="customerSegments-section"]', function(text) {
            this.verify.equal(text.value, "CUSTOMER SEGMENTS (1)\nCS 3")
        })
        .getText('div[data-test="revenueStreams-section"]', function(text) {
            this.verify.equal(text.value, "REVENUE STREAMS (2)\nहिन्दी विकिपीडिया\n1\n（怖がらないで、その身を委ねて）\n1")
        })
        .click('span.canvas-nav-left-arrow')
        .pause(model.pause + 300)
        .verify.elementPresent('div[data-test=keyPartners-section]', 'no cards should be present')
        .verify.elementPresent('div[data-test=KeyActivities0]', 'no cards should be present')
        .verify.elementPresent('div[data-test=ValuePropositions0]', 'no cards should be present')
        .verify.elementPresent('div[data-test=CustomerSegments0]', 'no cards should be present')
        .verify.elementPresent('div[data-test=RevenueStreams0]', 'no cards should be present')
        .end();
  }

}