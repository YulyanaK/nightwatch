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
  'Test connected cards' : function(browser){
    browser
    .url(model.url + '') 
    .waitForElementVisible('div#app', model.pause + 1000)
    .verify.elementPresent('div[data-test=KeyPartners0]', 'key partner card should exist')
    .verify.elementPresent('div[data-test=KeyActivities0]', 'key activity card should exist')
    .verify.elementPresent('div[data-test=ValuePropositions0]', 'value prop card should exist').pause(model.pause + 1000)
    .verify.elementPresent('div[data-test=CustomerSegments0]', 'customer segment card should exist')
    .verify.elementPresent('div[data-test=CostStructure0]', 'cost structure card should exist').pause(model.pause + 1000)
    .verify.elementPresent('div[data-test=Channels0]', 'channels card should exist')
    .click('div[data-test=KeyPartners0]')
    .pause(model.pause + 500)
    .verify.elementPresent('div.current-card  div.hypothesis-tab.connections.tab', 'connections tab should exist')
    .click('div.current-card div.hypothesis-tab.connections.tab')
    .verify.elementPresent('div.hypothesis-connection-tabs-title', 'title should be showing tab should exist').pause(model.pause + 1000)
    .verify.elementPresent('div[data-test=channels-connected]', 'channels connection card should exist')
    .verify.elementPresent('div[data-test=keyActivities-connected]', 'keyActivities connection card should exist')
    .verify.elementPresent('div[data-test=valuePropositions-connected]', 'valuePropositions connection card should exist').pause(model.pause + 1000)
    .verify.elementPresent('div[data-test=costStructure-connected]', 'costStructure connection card should exist')
    .verify.elementPresent('div[data-test=customerSegments-connected]', 'customerSegments connection card should exist')
    .verify.elementPresent('div[data-test=revenueStreams-connected]', 'revenueStreams connection card should exist').pause(model.pause + 1000)

    .click('div.current-card  div[data-test=customerSegments-connected]')
    .pause(model.pause + 500)
    .verify.elementPresent('div.hypothesis-tab.connections.tab', 'connections tab should exist')
    .click('div.current-card  div.hypothesis-tab.connections.tab')
    .verify.elementPresent('div[data-test=channels-connected]', 'channels connection card should exist')
    .verify.elementPresent('div[data-test=keyActivities-connected]', 'keyActivities connection card should exist').pause(model.pause + 1000)
    .verify.elementPresent('div[data-test=valuePropositions-connected]', 'valuePropositions connection card should exist')
    .verify.elementPresent('div[data-test=costStructure-connected]', 'costStructure connection card should exist')
    .verify.elementPresent('div[data-test=keyPartners-connected]', 'keyPartners connection card should exist').pause(model.pause + 1000)
    .verify.elementPresent('div[data-test=revenueStreams-connected]', 'revenueStreams connection card should exist').pause(model.pause + 1000)
    .end();

  }

}