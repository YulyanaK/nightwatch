var model = require('../../helpers/model');
var controller = require('../../helpers/controller');

module.exports = {
  options : {
    url : model.url + '/canvas'
  },

  before : function(browser, done){
    var context = this;
    var startTest = function () {
      browser.url(context.options.url);
      browser.windowMaximize('current').pause(model.pause + 500)
      done();
    };
  
    controller.initializeCanvas(function(token){
      controller.removeAllCards(function(){
        browser.url(context.options.url)
        browser.setCookie(token);
        controller.setProjectDate(new Date(), function(){
          model.connectedCards.forEach(function(card, i){
            controller.insertCard(card, new Date(), function(){
              if (i === model.connectedCards.length - 1){
                startTest()
              }
            });
          });
        });
      });
    })      
  },
  after : function (browser, done) {
    controller.removeAllCards(function(){
      controller.connect().close()
      done()
    });
  },
  
  'Test connected evidence tab in search box' : function(browser){
    browser
      .url(model.url + '') 
      .waitForElementVisible('.nav-new-card-btn-container',  model.pause + 500)
      .click('.nav-new-card-btn-container')
      .verify.elementPresent('div.nav-new-card-type.lpc-interview-circle-icon', 'interview icon').pause(model.pause + 500)
      .click('div.nav-new-card-type.lpc-interview-circle-icon')
      .verify.elementPresent('.interview-nav-title', 'interview title')
      .verify.elementPresent('.no-linked-button', 'link and rate hypothesis button')
      .click('.no-linked-button')
      .verify.elementPresent('.interview-search-input-container', 'interview input container is present')
      .verify.elementPresent('input.link-hypothesis-filter-input', 'interview input field is present')
      .click('input.link-hypothesis-filter-input')
      .setValue('input.link-hypothesis-filter-input', ['ke'])
      .getText('div.link-hypothesis-container-edit:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)', function(text) {
        this.verify.equal(text.value, 'Key Activity')
      })
      .getText('div.link-hypothesis-container-edit:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)', function(text) {
        this.verify.equal(text.value, 'Key Partner')
      })
      .verify.elementPresent('.interview-search-input-container', 'interview input container is present')
      .verify.elementPresent('input.link-hypothesis-filter-input', 'interview input field is present')
      .verify.elementPresent('.interviewee-close-text', 'done button')
      .click('.interviewee-close-text')
  },

    'Test connected evidence with capital letters in search box' : function(browser){
    browser
      .verify.elementPresent('.no-linked-button', 'link and rate hypothesis button')
      .click('.no-linked-button')
      .verify.elementPresent('.interview-search-input-container', 'interview input container is present')
      .verify.elementPresent('input.link-hypothesis-filter-input', 'interview input field is present')
      .click('input.link-hypothesis-filter-input')
      .setValue('input.link-hypothesis-filter-input', ['CH'])
      .getText('div.link-hypothesis-container-edit:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)', function(text) {
        this.verify.equal(text.value, 'Channels')
      })
      .verify.elementPresent('.interview-search-input-container', 'interview input container is present')
      .verify.elementPresent('input.link-hypothesis-filter-input', 'interview input field is present')
      .verify.elementPresent('.interviewee-close-text', 'done button')
      .click('.interviewee-close-text')
  },

  'Test connected evidence with tab' : function(browser) {
    browser
      .verify.elementPresent('.no-linked-button', 'link and rate hypothesis button')
      .click('.no-linked-button')
      .pause(model.pause + 500)
      .verify.elementPresent('div.filter-option:nth-child(3)', 'Cost Structure tab is present')
      .click('div.filter-option:nth-child(3)')
      .getText('.link-hypothesis-title', function(text) {
        this.verify.equal(text.value, 'Cost Structure')
      })
      .end()
  }

}