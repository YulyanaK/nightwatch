 var model = require('../../helpers/model.js');
 var controller = require('../../helpers/controller.js');
 var ObjectId = require('mongodb').ObjectId;

 module.exports = {
  options : {
    url : model.url + '/canvas'
  },

  before : function(browser, done){
    var context = this
    browser
    .url(this.options.url)
    controller.initializeCanvas(function(token){
      browser.setCookie(token)
      controller.insertCard(model.card, new Date(), function(){
        browser.url(context.options.url)
        browser.windowMaximize().pause(model.pause + 500)
        done()
      })
    })
  },
  after : function (browser, done) {
    controller.removeAllCards(function(){
      controller.connect().close()
      done()
    });
  },
 'Test state-selector' : function(browser){
    browser
        .url(model.url + '') 
        .waitForElementVisible('.nav-new-card-btn-container', model.pause + 500)
        .click('.nav-new-card-btn-container')
        .verify.elementPresent('.nav-new-card-type-title')
        .click('.nav-new-card-type-title')
        .waitForElementVisible('.card-full-current-card', model.pause + 600)
        .verify.cssClassPresent('.hypothesis-status-dropdown-value', 'inTesting')
        .waitForElementVisible('.hypothesis-status-dropdown-value', model.pause + 600)
        .moveTo('.hypothesis-status-dropdown-value', 2, 2,function(){
     browser.mouseButtonClick(0)
     })
        .click('.hypothesis-status-dropdown-value')
        .pause(model.pause + 500)
        .waitForElementVisible('a[data-test="validated"]', model.pause + 600)
        .click('a[data-test="validated"]')
        .verify.cssClassPresent('.lpc-validated-icon', 'validated')
        .waitForElementVisible('div.hypothesis-status-container.select-dropdown-container', model.pause + 600)
        .waitForElementVisible(".hypothesis-status-dropdown-value", model.pause + 600)
        .moveTo('.hypothesis-status-dropdown-value', 2, 2,function(){
    browser.mouseButtonClick(0)
    })
        .click('.hypothesis-status-dropdown-value')
        .pause(model.pause + 500)
        .waitForElementVisible('a[data-test="invalidated"]', model.pause + 600)
        .click('a[data-test="invalidated"]')
        .pause(model.pause + 500)
        .verify.cssClassPresent('.hypothesis-status-icon', 'invalidated')
        .waitForElementVisible(".hypothesis-status-dropdown-value", model.pause + 600)
        .moveTo('.hypothesis-status-dropdown-value', 2, 2,function(){
    browser.mouseButtonClick(0)
    })
        .click('.hypothesis-status-dropdown-value')
        .pause(model.pause + 300)
        .waitForElementVisible('a[data-test="paused"]', model.pause + 600)
        .click('a[data-test="paused"]')
        .pause(model.pause + 500)
        .verify.cssClassPresent('.hypothesis-status-icon', 'paused')
        .pause(model.pause + 500)
        .waitForElementVisible(".hypothesis-status-dropdown-value", model.pause + 600)
        .moveTo('.hypothesis-status-dropdown-value', 2, 2,function(){
    browser.mouseButtonClick(0)
    })
        .click('.hypothesis-status-dropdown-value')
        .pause(model.pause + 500)
        .waitForElementVisible('a[data-test="archived"]', model.pause + 600)
        .click('a[data-test="archived"]')
        .verify.cssClassPresent('.hypothesis-status-icon', 'archived').pause(model.pause + 1000)
        .end()
  }
}