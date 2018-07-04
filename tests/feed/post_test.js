var model = require('../../helpers/model.js');
var controller = require('../../helpers/controller.js');
var ObjectId = require('mongodb').ObjectId;

module.exports = {

  'login to canvas activiyt feed for post': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://app.staging.glidr.io')
        // .resizeWindow(1024, 968).pause(model.pause + 500)
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
  },

  'Verify the organizations activiyt feed for post' : function(browser) {
      browser
        .waitForElementPresent('div.org-dashboard-card-container', 4000)
        .verify.elementPresent('.project-image-main.project-image-59b6e26d72bde10001000002', 'entering Spain organization').pause(model.pause + 500)
        .click('.project-image-main.project-image-59b6e26d72bde10001000002')
        .waitForElementPresent('div.hamburger-holder', 4000)
        .click('div.hamburger-holder.close')
  },

  'Test post cancel' : function(browser){
      browser
        .waitForElementPresent('.side-nav-subSection-title', 4000)
        .verify.elementPresent('div.side-nav-subSection-title', 'selecting a project').pause(model.pause + 1500)
        .click('.side-nav-subSection-title')
        .verify.elementPresent('div[data-test="activity-nav"]', 'enter to activity feed').pause(model.pause + 500)
        .click('div[data-test="activity-nav"]')
        .click('.activity-new-post-form-holder')
        .setValue('textarea[class=activity-new-post-input]', 'just to cancel') 
        .pause(model.pause + 500)      
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

 },
  'Test post creation file upload and save' : function(browser){
      browser
        .pause(model.pause + 300)
        .verify.elementPresent('.activity-new-post-form', 'create a post').pause(model.pause + 500)
        .click('.activity-new-post-form')
        .setValue('textarea[class=activity-new-post-input]', 'JAPANで始まる記事の一覧')
        .pause(model.pause + 300) 
        .verify.elementPresent('.activity-new-post-upload-icon.lpc-upload-dark', 'click cloud to upload file').pause(model.pause + 500) 
        .click('.activity-new-post-upload-icon.lpc-upload-dark')
        .setValue('input[type="file"]', require('path').resolve(__dirname + '/spain.png'))
        .verify.elementPresent('div.activity-new-post-media-delete.lpc-close-cancel-mini-icon-white', 'deletes just uploaded file').pause(model.pause + 500) 
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
  },
 } 

