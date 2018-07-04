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
      browser.windowMaximize('').pause(model.pause + 500)
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
  'Test connected evidence tab' : function(browser){
    browser
      .url(model.url + '') 
      .waitForElementVisible('.nav-new-card-btn-container', model.pause + 500)
      .click('.nav-new-card-btn-container')
      .verify.elementPresent('.nav-new-card-type-title')
      .click('.nav-new-card-type-title')
    browser
      .waitForElementVisible('div[id=app]', model.pause + 500)
      .verify.elementPresent('div[data-test=KeyPartners0]', 'key partner card should exist')
      .click('div[data-test=KeyPartners0]')
      .verify.elementPresent('.evidence-tab.evidence.tab.active', 'evidence tab should be active')
      .verify.elementPresent('.hypothesis-tab.connections.tab', 'hypothesis tab should not be active').pause(model.pause + 500)
      .click('.hypothesis-tab.connections.tab')
      .verify.elementPresent('.hypothesis-tab.connections.tab.active', 'hypothesis tab should be active').pause(model.pause + 500)
      .verify.elementNotPresent('.evidence-tab.evidence.tab.active', 'evidence tab should not be active').pause(model.pause + 500)
      .verify.elementPresent('.evidence-tab.evidence.tab', 'evidence tab should be present')
      .click('.evidence-tab.evidence.tab')
      .verify.elementPresent('div.card-comments.current-card-comments')
      .click('div.hide-card-comments')
      .verify.elementPresent('.evidence-tab.evidence.tab.active', 'evidence tab should be active')
  },

  'Test connected evidence display cards' : function(browser){
    browser
      .verify.elementPresent('div.card-full-title')
      .click('div.card-full-title')
      .verify.elementPresent('.hypothesis-connection-tabs-header').pause(model.pause + 500)
  },

  'Test filter by type' : function(browser){
    browser
      .verify.elementPresent('li.is-dropdown-submenu-parent.is-right-arrow.opens-right')
      .click('a.hypothesis-connection-filter-selected.rating').pause(model.pause + 500)
      .click('li a[data-test="p2"]')
      .verify.elementPresent('li a[data-test="p1"]')
      .click('li a[data-test="p1"]').pause(model.pause + 500)
      .verify.elementPresent('li.is-dropdown-submenu-parent.is-right-arrow.opens-right')
      .click('a.hypothesis-connection-filter-selected.rating').pause(model.pause + 500)
      .verify.elementPresent('li a[data-test="n0"]')
      .click('li a[data-test="n0"]').pause(model.pause + 500)
      .verify.elementPresent('li.is-dropdown-submenu-parent.is-right-arrow.opens-right')
      .click('a.hypothesis-connection-filter-selected.rating').pause(model.pause + 500)
      .verify.elementPresent('li a[data-test="m1"]')
      .click('li a[data-test="m1"]').pause(model.pause + 500)
      .verify.elementPresent('li.is-dropdown-submenu-parent.is-right-arrow.opens-right')
      .click('a.hypothesis-connection-filter-selected.rating').pause(model.pause + 500)
      .verify.elementPresent('li a[data-test="m2"]', 'all option should exist')
      .click('li a[data-test="m2"]').pause(model.pause + 500)
      .verify.elementPresent('li.is-dropdown-submenu-parent.is-right-arrow.opens-right')
      .click('a.hypothesis-connection-filter-selected.rating').pause(model.pause + 500)
      .verify.elementPresent('li a[data-test="unrated"]', 'all option should exist')
      .click('li a[data-test="unrated"]').pause(model.pause + 500)
      .verify.elementPresent('li.is-dropdown-submenu-parent.is-right-arrow.opens-right')
      .click('li.is-dropdown-submenu-parent.is-right-arrow.opens-right')
      .verify.elementPresent('li a[data-test="all"]', 'all option should exist')
      .click('li a[data-test="all"]').pause(model.pause + 500)
      .verify.elementPresent('li a[data-test="post"]', 'all option should exist')
      .click('li a[data-test="post"]').pause(model.pause + 500)
      .click('li a[data-test="interview"]')
  },

  'tabs evidence and connections' : function(browser){
   browser
      .verify.elementNotPresent('.leaning-disconfirming .hypothesis-connected-evidence-card', 'leaning-disconfirming evidence card should not exist')
      .verify.elementPresent('.hypothesis-tab.connections.tab', 'hypothesis tab should be active').pause(model.pause + 500)
      .click('.hypothesis-tab.connections.tab')
      .verify.elementPresent('.evidence-tab.evidence.tab')
      .click('.evidence-tab.evidence.tab')
      .verify.elementPresent('.card-full')  
      .end();
  },

}