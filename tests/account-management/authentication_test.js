var model = require('../../helpers/model');
var controller = require('../../helpers/controller');

module.exports = {
  options : {
    url : model.url + '/canvas'
  },

  before : function(browser, done){
    var context = this;
    var pastProjectDate = new Date(new Date().getTime() - (86400000*10));
    var pastCardDate = new Date(new Date().getTime() - (86400000*9));
    var startTest = function () {
      browser.url(model.url + '/account-management')
      browser.windowMaximize().pause(model.pause + 500)
      done()
    };
  
    controller.initializeCanvas(function(token){

      controller.removeAllCards(function(){
        browser.url(context.options.url)
        browser.setCookie(token);
        controller.setProjectDate(pastProjectDate, function(){
          startTest()
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
  'verify authentication toggle is off and on' : function (browser) {
    browser
    .click('div[data-test="/account-management/authentication"]')
    .verify.elementPresent('.authentication-toggle-circle.off', 'authentication toggle is off')
    .click('.authentication-toggle-circle.off')
    .verify.elementPresent('.authentication-toggle-circle.on', 'authentication toggle is on')
  },

  'verify checkbox and email validation form': function(browser) {
    browser
    .verify.elementPresent('.authentication-section-icon', 'checkbox is not selected')
    .click('.authentication-section-icon')
    .verify.elementPresent('.authentication-section-icon.selected-box', 'checkbox is selected')
    .click('.authentication-section-icon.selected-box')
    .verify.elementPresent('.orginazation-name-holder.authentication', 'authentication email validation is present')
    .end()
  }
}
