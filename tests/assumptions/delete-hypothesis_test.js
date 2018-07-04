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
      controller.removeAllCards(function(){
        browser.setCookie(token)
        controller.insertCard(model.card, new Date(), function(){
          browser.url(context.options.url)
          browser.windowMaximize().pause(model.pause + 500)
          done()
        })
      })
    })
  },
  after : function (browser, done) {
    controller.removeAllCards(function(){
      controller.connect().close()
      done()
    });
  },
  'Test card Delete': function(browser){
    browser
      .url(model.url + '') 
      .waitForElementVisible('.nav-new-card-btn-container', model.pause + 500)
      .click('.nav-new-card-btn-container')
      .verify.elementPresent('.nav-new-card-type-title')
      .click('.nav-new-card-type-title')
    browser
      .pause(model.pause + 700)
      .click('.card')
      .waitForElementVisible('.card-full-current-card', model.pause + 800)
      .pause(model.pause + 800)
      .waitForElementVisible('div.card-full-nav.hide-for-small-only.hide-for-small-only', model.pause + 800)
      .pause(model.pause + 600)
      .waitForElementVisible('div.current-card a.full-nav-more-options', model.pause + 800)
      .click('div.current-card a.full-nav-more-options')
      .pause(model.pause + 600)
      .waitForElementVisible('div.current-card ul.menu.delete-card-dropdown', model.pause + 800)
      .waitForElementVisible('div.current-card .hypothesis-delete', model.pause + 800)
      .pause(model.pause + 300)
      .moveToElement('div.current-card a.hypothesis-delete', 5, 5, function(){
      browser
      .mouseButtonClick()
      .pause(model.pause + 500)
      .waitForElementVisible('div.confirmation-button.yes-delete', model.pause + 800)
      .click('div.confirmation-button.yes-delete')
      .pause(model.pause + 300)
      .verify.elementNotPresent('div.current-card div.card-full-current-card', 'should redirect to canvas')
      .pause(model.pause + 800)
      .verify.elementNotPresent('div.current-card div.card' , 'card should no longer exist')
      .end()
      
    })
  }

}