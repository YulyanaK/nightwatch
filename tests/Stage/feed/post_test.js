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
        .waitForElementPresent("(//div[@class='org-dashboard-card-container'])[2]", 4000).pause(model.pause + 500)
        .click("(//div[@class='org-dashboard-card-container'])[2]")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 6000)
        .click('div.hamburger-holder')
  },

  'Test post cancel' : function(browser){
      browser
        .waitForElementPresent('.side-nav-subSection-title', 4000)
        .verify.elementPresent('div.side-nav-subSection-title', 'selecting a project').pause(model.pause + 1500)
        .click('.side-nav-subSection-title')
        .useXpath()
        .verify.elementPresent("//div[@class='nav-center-container   ']//div//a[2]/div[1]", 'enter to activity feed').pause(model.pause + 500)
        .click("//div[@class='nav-center-container   ']//div//a[2]/div[1]")
        .useCss()
        .click('.activity-new-post-form-holder')
        .pause(model.pause + 1500) 

        .useXpath()
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
        .pause(model.pause + 1500)
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

