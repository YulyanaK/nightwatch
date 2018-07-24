var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;




module.exports = {

 

  'Login to orgs for experiments': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://passive.glidr.io')
        .resizeWindow(1024, 768).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'looks for glidr logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'searches for active container for email').pause(model.pause + 500)
        .click('div.signin-form-container')
      browser
        .setValue('input[type=text]', 'dortiz@launchpadcentral.com')
        .verify.elementPresent('div.signin-form-container', 'searches for active container for password').pause(model.pause + 500)
        .click('input[type=password]')
      browser
        .setValue('input[type=password]', 'Testtest1!')
        .click('div.signup-show-password')
        .verify.elementPresent('div.login-button', 'checks for button is active').pause(model.pause + 500)
        .click('div.login-button')
        .waitForElementPresent('div.org-container', 4000)
        

    },

  'Verify the organizations for project dashboard' : function(browser) {
      browser
        .useXpath()
        .click("//div[@class='org-dashboard-card-title' and text()='Ghana']")
        .pause(model.pause + 2000)
        .useCss()
        .waitForElementPresent('div.hamburger-holder', 4000)
        .click('div.hamburger-holder')
        .useXpath()
        .click("(//div[@class='side-nav-subSection-title'])[1]").pause(model.pause + 3000)
        
   },

  

  'Go to any assumption to upload a file' : function(browser) {
      browser
        .click("(//div[@class='priority-card-summary '])[1]").pause(model.pause + 3000)
        .setValue("(//input[@id='file-uploader'])[3]", require('path').resolve(__dirname + '/spain.png'))
        .pause(model.pause + 15000)
        .moveToElement("//img[@class='hypothesis-uploaded-media-img']", 10, 1)
        .click("//div[@class='hypothesis-uploaded-media-delete lpc-trash-icon-white']")
        .click("//div[@class='hypothesis-uploaded-media-verify-delete']")
        .end();
        
       
         // browser.waitForElementVisible('.recommendation', 1000, function () {
// moveToElement can also accept offsets
//    browser.waitForElementVisible('.share', 500, function () {
        //browser.click('.share');
    //}, "Click share icon. ");
//});
//}, "Find a recommendation ");

},
}


        























