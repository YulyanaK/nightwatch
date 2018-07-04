var model = require('../../helpers/model');
var controller = require('../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;


module.exports = {


  'login': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://app.staging.glidr.io')
        .resizeWindow(1366, 768).pause(model.pause + 500)
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

  'Verify the project name' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("(//div[@class='org-dashboard-card-container'])[8]", 4000).pause(model.pause + 500)
        .click("(//div[@class='org-dashboard-card-container'])[8]")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 4000)
        .click('div.hamburger-holder')
    },
  
  'verify cards from canvas once new card button is clicked' : function (browser) {
      browser
        .waitForElementPresent('div.sub-section-container', 1000)
        .click('div.sub-section-container')
        .verify.elementPresent('.nav-new-card-type.lpc-hypothesis-new', 'assumptions').pause(model.pause + 500)
        .verify.elementPresent('.nav-new-card-type-title.hypothesis', 'assumptions title').pause(model.pause + 500)
        .verify.elementPresent('.nav-new-card-type.lpc-interview-new ', 'interview').pause(model.pause + 500)
        .verify.elementPresent('.nav-new-card-type-title.customerInterview', 'interview title').pause(model.pause + 500)
        .verify.elementPresent('.nav-new-card-type.lpc-post-new ', 'post').pause(model.pause + 500)
        .verify.elementPresent('.nav-new-card-type-title.post', 'post title').pause(model.pause + 500)
  },

  'create a new assuption card once new card button is clicked' : function (browser) {
      browser
        .verify.elementPresent('div.nav-new-card-btn-plus.lpc-material-plus').pause(model.pause + 500)
        .click('div.nav-new-card-btn-plus.lpc-material-plus')
        .verify.elementPresent('.nav-new-card-type.lpc-hypothesis-new', 'assumptions icon').pause(model.pause + 500)
        .click('.nav-new-card-type.lpc-hypothesis-new')
        
        .useXpath()
        .pause(model.pause + 1500)
        //.click("(//div[@class='content-field-container.assumption-title'])")
        .pause(model.pause + 1500)
        .setValue("(//textarea[@class='content-field-textarea'])", ['this is the objective on testing', browser.Keys.ENTER])

        .useCss()
        .verify.elementPresent('div.full-nav-right > div.card-full-nav.full-nav-edit-mode-btn', 'publish').pause(model.pause + 800)
        .click('div.full-nav-right > div.card-full-nav.full-nav-edit-mode-btn')
        .verify.elementPresent('div.DraftEditor-root', 'summary').pause(model.pause + 500)
        .verify.elementPresent('div.card-full-nav.full-nav-edit-mode-btn', 'full card button').pause(model.pause + 800)
        .verify.elementPresent('div.current-card .card-full-nav-x-container', 'exit assumptions button').pause(model.pause + 800)
        .click('div.current-card .card-full-nav-x-container') 
        .verify.elementPresent('div.confirmation-button.yes-delete.undefined', 'publish assumption').pause(model.pause + 800)
        .click('div.confirmation-button.yes-delete.undefined')

  },


  'create a new post card once new card button is clicked' : function (browser) {
     browser
        .verify.elementPresent('div.nav-new-card-btn-container', 'opens up + button to create a post').pause(model.pause + 500)
        .click('div.nav-new-card-btn-container')
        .verify.elementPresent('div.nav-new-card-type.lpc-post-new', 'post icon').pause(model.pause + 2000)
        .click('div.nav-new-card-type.lpc-post-new')
        .pause(model.pause + 4000)
        .verify.elementPresent('div > div.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr', 'whats on your mind post').pause(model.pause + 1500)
        .click('div > div.public-DraftStyleDefault-ltr')
        .pause(model.pause + 800)
        .setValue('div > div.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr', ' testing')
        .verify.elementPresent('div.card-full-nav.full-nav-edit-mode-btn', 'publish post').pause(model.pause + 500)
        .click('div.card-full-nav.full-nav-edit-mode-btn')
        .verify.elementPresent('div.current-card .card-full-nav-x-container', 'exit post button').pause(model.pause + 800)
        .click('div.current-card .card-full-nav-x-container') 
  },

  'create a new interview card once new card button is clicked' : function (browser) {
      browser
        .verify.elementPresent('.nav-new-card-btn-container','opens the + button').pause(model.pause + 500)
        .click('.nav-new-card-btn-container')
        .verify.elementPresent('.lpc-interview-new ', 'interview icon').pause(model.pause + 500)
        .click('.lpc-interview-new ')
        .verify.elementPresent('div.choose-card-type-card-container', 'full card button').pause(model.pause + 500)
        .click('div.choose-card-type-card-container')
        .pause(model.pause + 1000)
        .useXpath()
        .click("(//div[@class='card-full-nav-x-container'])")
        
        .useCss()
        .verify.elementPresent('.card-full-nav-x-container', 'exit interview button')
        .pause(model.pause + 1000)
        .end();
  },

}