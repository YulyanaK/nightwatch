var model = require('../../helpers/model');
var controller = require('../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;




module.exports = {

 

  'Login to orgs for experiments': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://app.staging.glidr.io')
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
        .waitForElementPresent('div.org-dashboard-card-container', 4000)
        .verify.elementPresent('.project-image-main.project-image-59b6e26d72bde10001000002', 'entering Spain organization').pause(model.pause + 500)
        .click('.project-image-main.project-image-59b6e26d72bde10001000002')
        .waitForElementPresent('div.hamburger-holder', 4000)
        .click('div.hamburger-holder')
        .useXpath()
        .click("(//div[@class='side-nav-subSection-title'])[1]").pause(model.pause + 1000)
        
   },

  

  'Go to any assumption to upload a file' : function(browser) {
      browser
        .click("(//div[@class='priority-card-summary '])[1]").pause(model.pause + 3000)
        .setValue("(//input[@id='file-uploader'])[3]", require('path').resolve('/Users/yulyanakarpava/glidr-dev/integration-tests/tests/team-mgmt/spain.png')).pause(model.pause + 15000)
        .moveTo("(//div[@class='hypothesis-uploaded-media'])[1]")
        .useCss()
        .click('div.hypothesis-uploaded-media-options')
        .click('div.hypothesis-uploaded-media-delete.lpc-trash-icon-white')
        //.moveTo("//img[@class='hypothesis-uploaded-media-options']")
        //.click("//img[@class='hypothesis-uploaded-media-options']")
        //.moveTo("(//div[@class='hypothesis-uploaded-media-delete lpc-trash-icon-white'])[1]")
        //.click("(//div[@class='hypothesis-uploaded-media-delete lpc-trash-icon-white'])[1]")
        //.click("//img[@class='hypothesis-uploaded-media-options']")
        //.click("//img[@class='hypothesis-uploaded-media-img']")
        //.click ("//div[@class='lightbox-download lpc-download-icon-white lightbox-animate']").pause(model.pause + 4000)

//(//input[@id='file-uploader'])[3]
        
        //.window_handles(function(result) {
        //this.verify.equal(result.value.length, 1, '2 windows should be open')
        //var handle = result.value[2]
        //this.switchWindow(handle)


        //.acceptAlert()
        //browser.keys("enter")
        
        //.moveTo("//div[@class='hypothesis-uploaded-media-options']").click("(//div[@class='hypothesis-uploaded-media-delete lpc-trash-icon-white'])[1]")
  
        //.moveTo("//img[@class='hypothesis-uploaded-media-img']")
          //.pause(2000)
          //.click("//div[@class='hypothesis-uploaded-media-options']")
        //.waitForElementPresent("//div[@class='hypothesis-uploaded-media-options']", 2000)
        //div[@class='hypothesis-uploaded-media-delete lpc-trash-icon-white']")
        
       
          

},
}


        //.click("(//span[@class='hover' and text()='Browse'])[3]
        //.setValue("(//span[@class='hover' and text()='Browse'])[3]", require('path').resolve('/Users/yulyanakarpava/glidr-dev/integration-tests/file_uploads'))

  
























