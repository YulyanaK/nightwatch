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

  'Test title edit' : function(browser){
    browser
      .url(model.url + '') 
      .waitForElementVisible('.nav-new-card-btn-container', model.pause + 500)
      .click('.nav-new-card-btn-container')
      .verify.elementPresent('.nav-new-card-type-title')
      .click('.nav-new-card-type-title')
      .waitForElementVisible('.card-full-current-card', model.pause + 600)
      .click('.card-full-title', function(){
    browser
      .waitForElementVisible('.card-title-edit-form', model.pause + 900)
      .setValue('.card-title-edit-form', ['edit', browser.Keys.ENTER])
    })
      .pause(model.pause + 800)
      .getText('.card-full-title', function(text){
        if (text.value === 'editcard'){
            this.verify.equal(text.value, 'editcard')

        }else{
            this.verify.equal(text.value, 'cardedit')
        }
    })
  },

  'test edit length' : function(browser){
    browser
      .keys('\uE007')
      .waitForElementVisible('div.card-full-title', model.pause + 1000)
      .click('.card-full-title')
      .verify.elementPresent('.card-title-edit-form')
      .setValue('.card-title-edit-form', ['editediteditediteditediteditediteditediteditediteditediteditediteditedit'])
      .verify.elementPresent('div.full-card-title-countdown')
      .verify.containsText('.full-card-title-countdown', '20').pause(model.pause + 1000)
      .setValue('.card-title-edit-form', ['1'])
      .verify.containsText('.full-card-title-countdown', '19')
      .setValue('.card-title-edit-form', ['2'])
      .verify.containsText('.full-card-title-countdown', '18')
      .setValue('.card-title-edit-form', ['3'])
      .verify.containsText('.full-card-title-countdown', '17')
      .setValue('.card-title-edit-form', ['4'])
      .verify.containsText('.full-card-title-countdown', '16').pause(model.pause + 1000)
      .setValue('.card-title-edit-form', ['5'])
      .verify.containsText('.full-card-title-countdown', '15')
      .setValue('.card-title-edit-form', ['6'])
      .verify.containsText('.full-card-title-countdown', '14')
      .setValue('.card-title-edit-form', ['7'])
      .verify.containsText('.full-card-title-countdown', '13')
      .setValue('.card-title-edit-form', ['8'])
      .verify.containsText('.full-card-title-countdown', '12').pause(model.pause + 1000)
      .setValue('.card-title-edit-form', ['9'])
      .verify.containsText('.full-card-title-countdown', '11')
      .setValue('.card-title-edit-form', ['0'])
      .verify.containsText('.full-card-title-countdown', '10')
      .setValue('.card-title-edit-form', ['9'])
      .verify.containsText('.full-card-title-countdown', '9').pause(model.pause + 1000)
      .setValue('.card-title-edit-form', ['8'])
      .verify.containsText('.full-card-title-countdown', '8')
      .setValue('.card-title-edit-form', ['7'])
      .verify.containsText('.full-card-title-countdown', '7')
      .setValue('.card-title-edit-form', ['6'])
      .verify.containsText('.full-card-title-countdown', '6')
      .setValue('.card-title-edit-form', ['5'])
      .verify.containsText('.full-card-title-countdown', '5')
      .setValue('.card-title-edit-form', ['4'])
      .verify.containsText('.full-card-title-countdown', '4').pause(model.pause + 1000)
      .setValue('.card-title-edit-form', ['3'])
      .verify.containsText('.full-card-title-countdown', '3')
      .setValue('.card-title-edit-form', ['2'])
      .verify.containsText('.full-card-title-countdown', '2').pause(model.pause + 1000)
      .setValue('.card-title-edit-form', ['1'])
      .verify.containsText('.full-card-title-countdown', '1')
      .setValue('.card-title-edit-form', ['0'])
      .verify.containsText('.full-card-title-countdown', '0')
      .setValue('.card-title-edit-form', ['1'])
      .verify.containsText('.full-card-title-countdown', '0').pause(model.pause + 1000)
      .getValue('.card-title-edit-form', function(val){
    browser.verify.equal(val.value.length, 100);
    browser.end()
    })

  }  

}

