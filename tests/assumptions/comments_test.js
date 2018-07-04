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
        browser.windowMaximize('').pause(model.pause + 500)
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
  'Comments can not be edited or deleted by non-owners' : function (browser) {
    browser
      .url(model.url + '')
      .waitForElementVisible('.nav-new-card-btn-container', model.pause + 500)
      .click('.nav-new-card-btn-container')
      .verify.elementPresent('.nav-new-card-type-title')
      .click('.nav-new-card-type-title')
      .verify.elementPresent('#currentCard-comment-input')
      .setValue('#currentCard-comment-input', ['nightwatch', browser.Keys.ENTER])
      .setValue('#currentCard-comment-input', ['nightwatch', browser.Keys.ENTER])
      .waitForElementPresent('#currentCard-comments-div div.comment-body.card-full-comment', model.pause + 600)
      .click('#currentCard-comments-div div.comment-body.card-full-comment')
      .waitForElementPresent('.edit-comment', model.pause + 600)
    browser
      .waitForElementPresent('.delete-comment-icon', model.pause + 600)
      .click('.delete-comment-icon')  
  },
  'Comments can be added' : function(browser){
    browser
      .waitForElementVisible('#currentCard-comment-input', model.pause + 600)
      .setValue('#currentCard-comment-input', ['new comment', browser.Keys.ENTER])
      .waitForElementPresent('div.comment-body.card-full-comment', model.pause + 600)
      .waitForElementPresent('#currentCard-comments-div div:nth-child(3) div.comment-body.card-full-comment', model.pause + 600)
      .getText('#currentCard-comments-div div:nth-child(3) div.comment-body.card-full-comment', function(text) {
          this.verify.equal(text.value, 'new comment')
      })
  },
  'Comments a user created display "You" as the owner' : function (browser){
    browser.expect.element('#currentCard-comments-div div:nth-child(3) span.comment-username').text.to.equal("You")
  },
  'Comments can be edited if user is owner' : function(browser){ 
    browser
      .pause(model.pause + 200)
      .click('#currentCard-comments-div div:nth-child(3) div.comment-body.card-full-comment')
      .waitForElementVisible('.edit-comment-form', model.pause + 600)
      .setValue('.edit-comment-form', [' edited', browser.Keys.ENTER])
      .waitForElementVisible('#currentCard-comments-div div:nth-child(3) div.comment-body.card-full-comment', model.pause + 600)
      .getText('#currentCard-comments-div div:nth-child(3) div.comment-body.card-full-comment', function(text) {
        if (text.value === 'new comment edited') {
          this.verify.equal(text.value, 'new comment edited')
        } else if (text.value === 'editednew comment'){
          this.verify.equal(text.value, 'editednew comment')
        }
      })
  },
  'Comments can be deleted if user is owner' : function(browser){ 
    browser
      .moveToElement('#currentCard-comments-div div:nth-child(3) div.comment-body.card-full-comment', 10, 10, function() {
        browser.waitForElementVisible('.delete-comment-icon', model.pause + 600, function(){
          browser.click('.delete-comment-icon')
        })
      })
      .verify.elementNotPresent('#currentCard-comments-div div:nth-child(3) div.comment-body.card-full-comment')
  },
  'Correct ammount of comments are loaded': function (browser) {
    for (var i = 1; i < 11; i++) {
      browser.setValue('#currentCard-comment-input', [i.toString(), browser.Keys.ENTER])
      browser.pause(model.pause + 50)
    }
    browser
    .pause(model.pause + 1000)
    browser.expect.element('#currentCard-comments-div div:nth-child(2) div.comment-body.card-full-comment div').text.to.equal("comment from other user")
    browser.expect.element('#currentCard-comments-div div:nth-child(3) div.comment-body.card-full-comment div').text.to.equal("1")
    browser.end();
  }
}