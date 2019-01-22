var model = require('../../../helpers/model.js');
var controller = require('../../../helpers/controller.js');
var ObjectId = require('mongodb').ObjectId;

module.exports = {

  'login to canvas activiyt feed for post': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://passive.glidr.io')
        .resizeWindow(1366, 768).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'looks for glidr logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'searches for active container for email').pause(model.pause + 500)
        .click('div.signin-form-container')
      browser
        .setValue('input[type=text]', 'ykarpava+automation@glidr.io')
        .verify.elementPresent('div.signin-form-container', 'searches for active container for password').pause(model.pause + 500)
        .click('input[type=password]')
      browser
        .setValue('input[type=password]', 'Brooklyn1!')
        .click('div.signup-show-password')
        .verify.elementPresent('div.login-button', 'checks for button is active').pause(model.pause + 500)
        .click('div.login-button')
  },

  'Verify the organizations activiyt feed for post' : function(browser) {
      browser
        .useXpath()
        .pause(model.pause + 5000) 
        .frame("intercom-borderless-frame")
        .element('xpath', "//div[@class='intercom-block intercom-block-paragraph']", function(result){
            if (result.value && result.value.ELEMENT) {
                // Element is present, do the appropriate tests
                browser.click("//div[@class='intercom-block intercom-block-paragraph']")
                .waitForElementPresent("//div[@class='intercom-borderless-dismiss-button']", 6000)
                .click("//div[@class='intercom-borderless-dismiss-button']");
            } else {
                // Element is not present.
            }
        });
    browser
        .frame(null)
        
        .frame("intercom-notifications-frame")
        .element('xpath', "//div[@class='intercom-snippet-body intercom-chat-snippet-body']", function(result){
            if (result.value && result.value.ELEMENT) {
                // Element is present, do the appropriate tests
                browser.moveToElement("//div[@class='intercom-snippet-body intercom-chat-snippet-body']", 10, 10)
                .click("//div[@class='intercom-borderless-dismiss-button']");
            } else {
                // Element is not present.
            }
        });
    browser
        .frame(null)
        .waitForElementPresent("//div[@class='org-dashboard-card-title' and text()='Senegal_QA']", 6000).pause(model.pause + 500)
        .moveToElement("//div[@class='org-dashboard-card-title' and text()='Senegal_QA']", 10, 10)
        .click("//div[@class='org-dashboard-card-title' and text()='Senegal_QA']")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 12000)
        .element('css selector', 'div.hamburger-holder', function(result){
            if (result.value && result.value.ELEMENT) {
                // Element is present, do the appropriate tests
                browser
                .click('div.hamburger-holder');
            } else {
                // Element is not present.
                browser
                
                .useXpath()
                .click("(//div[@class='org-dashboard-card-container'])[2]")
                .useCss()
                .waitForElementPresent('div.hamburger-holder', 10000)
                .click('div.hamburger-holder')

            }
        });

       
  },

  'Test post cancel' : function(browser){
      browser
        .waitForElementPresent('.side-nav-subSection-title', 6000)
        .verify.elementPresent('div.side-nav-subSection-title', 'selecting a project').pause(model.pause + 1500)
        .click('.side-nav-subSection-title')
        .useXpath()
        .waitForElementPresent("(//div[@class='dropdown-menu-icon clickable '])[2]", 6000, 'verifies for activity link and icon')
        .click("(//div[@class='dropdown-menu-icon clickable '])[2]")
        .waitForElementPresent("//*[text()='Activity Feed']", 6000)
        .click("//*[text()='Activity Feed']")
        .useCss()
        .waitForElementPresent('.activity-new-post-form-holder', 6000)
        .click('.activity-new-post-form-holder')
        .pause(model.pause + 1500) 

        .useXpath()
        .pause(model.pause + 3500)
        .setValue("(//textarea[@class='activity-new-post-input'])", 'just to cancel').pause(model.pause + 500)
        .pause(model.pause + 500) 

        .useCss()     
        .click('div.activity-post-cancel')
  },

 'Test post save to draft' : function (browser) {
      browser
        .pause(model.pause + 500)
        .verify.elementPresent('.activity-new-post-form', 'save to drafts').pause(model.pause + 1500)
        .click('.activity-new-post-form')
        .pause(model.pause + 3500)
        .setValue('textarea[class=activity-new-post-input]', 'その他のジャパン')
        .click('.activity-post-save')
        .end()

 },
  /*'Test post creation file upload and save' : function(browser){
      browser
        .pause(model.pause + 300)
        .verify.elementPresent('.activity-new-post-form', 'create a post').pause(model.pause + 500)
        .click('.activity-new-post-form')
        .setValue('textarea[class=activity-new-post-input]', 'JAPANで始まる記事の一覧')
        .pause(model.pause + 300) 
        .verify.elementPresent('.activity-new-post-upload-icon.lpc-upload-dark', 'click cloud to upload file').pause(model.pause + 500) 
        //.click('.activity-new-post-upload-icon.lpc-upload-dark')
        //.setValue('input[type="file"]', require('path').resolve(__dirname + '/spain.png'))
        //.verify.elementPresent('div.activity-new-post-media-delete.lpc-close-cancel-mini-icon-white', 'deletes just uploaded file').pause(model.pause + 500) 
        .click('div.activity-new-post-media-delete.lpc-close-cancel-mini-icon-white')
        .verify.elementPresent('.activity-new-post-form', 'create a post').pause(model.pause + 500)
        .click('.activity-new-post-form')
        .setValue('textarea[class=activity-new-post-input]', 'JAPANで始まる記事の一覧')
        .pause(model.pause + 300) 
        .verify.elementPresent('.activity-new-post-upload-icon.lpc-upload-dark', 'click cloud to upload file').pause(model.pause + 500) 
        .click('.activity-new-post-upload-icon.lpc-upload-dark')
        .setValue('input[type="file"]', require('path').resolve(__dirname + '/spain.png'))
        .click('div.activity-post-button')
        // Take another screenshot at the end of the post activity image saved as post_test.png
        .saveScreenshot('./reports/feed/post_test.png')
    .end()
  },*/
 } 

