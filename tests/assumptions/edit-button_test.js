var model = require('../../helpers/model');
var controller = require('../../helpers/controller');
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
          var newCard = controller.deepCopy(model.card)
          newCard.editing = true
          newCard.updatedBy = model.userTwo['_id']
          newCard.updatedAt = new Date()
          newCard['_id'] = new ObjectId()
          newCard.cardId = new ObjectId()
          newCard.hypothesis.canvasSection = 'keyActivities'
          controller.insertCard(newCard, new Date(), function(){
            newCard.hypothesis.canvasSection = 'valuePropositions'
            newCard.cardId = new ObjectId()
            newCard['_id'] = new ObjectId()
            controller.insertCard(newCard, new Date(2015,5,5,5), function(){
              controller.connect().collection('profiles', function(err, profileColl){
                if (controller.error(err)) return;
                profileColl.insert(model.userTwo, function(){
                  browser.url(context.options.url)
                  browser.windowMaximize().pause(model.pause + 500)
                  done()
                })
              })
            })
          })
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
 'Test edit button': function(browser){
    browser
      .url(model.url + '') 
      .waitForElementVisible('.nav-new-card-btn-container', model.pause + 500)
      .click('.nav-new-card-btn-container')
      .verify.elementPresent('.nav-new-card-type-title')
      .click('.nav-new-card-type-title')
    browser
      .click('div[data-test=KeyPartners0]')
      .waitForElementVisible('.card-full-nav.full-nav-edit-mode-btn', model.pause + 600)
      .getText('.card-full-nav.full-nav-edit-mode-btn', function(result) {
        this.verify.equal(result.value, "EDIT")
    })
      .pause(model.pause + 300)
      .click('.card-full-title', function(){
        browser
        .pause(model.pause + 300)
        .verify.elementPresent('.card-title-edit-form', 'should be able to edit title')
        .getText('.card-full-nav.full-nav-edit-mode-btn', function(result) {
            this.verify.equal(result.value, "EDIT")
        })
        .setValue('.card-title-edit-form', ['edit', browser.Keys.ENTER])
    })
  
      .click('.current-card > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1)', function(){
    browser
      .pause(model.pause + 300)
      .verify.elementPresent('.current-card > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1)', 'should be able to edit summary')
      .setValue('.current-card > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1)', ['edit', browser.Keys.ENTER])
    })
      .verify.elementPresent('div.current-card div.hypothesis-section-container.select-dropdown-container', 'section drop down should exist')
      .verify.elementPresent('div.current-card div.hypothesis-status-container.select-dropdown-container', 'status dropdown should exist')
      .pause(model.pause + 300)
      .click('.card-full-nav.full-nav-edit-mode-btn', function() {
    browser
      .getText('.card-full-nav.full-nav-edit-mode-btn', function(result) {
        this.verify.equal(result.value, "EDIT")
      })
    })
      .click('.card-full-title', function(){
    browser
      .verify.elementPresent('.card-title-edit-form', 'should be able to edit title')
    })
    .click('.current-card > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)', function(){
      browser
      .verify.elementPresent('.current-card > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1)', 'should be able to edit summary')
    })
    .verify.elementNotPresent('div.current-card.section-selector', 'section selector should not exist')
    .verify.elementNotPresent('div.current-card.hypothesis-status-selector', 'hypothesis status selector should not exist')
    .verify.elementPresent('div.hypothesis-header-inline:nth-child(2)', 'state selector container should exist')
    .click('.current-card-nav > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)')
  },
  'Should not be able to edit when card is locked': function(browser){
    browser
    .pause(model.pause + 600)
    .click('div.col:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1)')
    .pause(model.pause + 800)
    .verify.elementPresent('.full-nav-edit-mode-btn-grey', 'card should be locked')
    .click('.current-card > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1)', function(){
      browser.assert.elementNotPresent('div.current-card.edit-summary-form', 'should not be able to edit summary')
    })
    .click('.card-full-title', function(){
      browser.assert.elementNotPresent('div.current-card.card-title-edit-form', 'should not be able to edit title')
    })
    .assert.containsText('.current-card-nav > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3)', 'Jared A.')
    .click('.current-card-nav > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)')
  },
  'Should be able to edit a card when it has been past 5 minutes': function(browser){
    browser
    .pause(model.pause + 800)
    .click('div.col:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1)')
    .pause(model.pause + 800)
    .assert.elementNotPresent('.full-nav-edit-mode-btn-grey', 'card should be unlocked')
    .click('.current-card > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1)', function(){
      browser.assert.elementPresent('.edit-summary-form', 'should be able to edit summary')
    })
    .click('.card-full-title', function(){
      browser.assert.elementPresent('.card-title-edit-form', 'should be able to edit title')
    })
    .assert.containsText('div.current-card div.full-nav-date', 'Saved')
    .end()
  }
}