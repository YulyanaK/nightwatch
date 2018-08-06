var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');

module.exports = {
 

 'login to hypothesis': function(browser) {
      browser
        .url('https://app.glidr.io')
        .resizeWindow(1124, 868).pause(model.pause + 500)
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
        .pause(model.pause + 5000)
    },

    'Verify user is able to edit Assumption' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("//div[text()='Senegal']", 4000)
        .click("//div[text()='Senegal']")
        .pause(model.pause + 4000)
        .click("//div[@class='hamburger-holder close ']").pause(model.pause + 2000)
        .click("//div[@class='side-nav-subSection-title' and text()=' San Francisco de asis in the bay area and golden gate']").pause(model.pause + 2000)
        .click("(//div[@class='priority-card-summary '])[1]")
        .waitForElementPresent("//div[@class='hypothesis-nav-title hypothesis']", 6000)//Assumptions open
        .pause(model.pause + 2000)
        .verify.elementPresent("//div[@class='card-full-nav full-nav-edit-mode-btn' and text()='Done Editing']")
        .click("//textarea[@class='content-field-textarea']")
        .clearValue("//textarea[@class='content-field-textarea']").pause(model.pause + 500)
        .setValue("//textarea[@class='content-field-textarea']", 'Editing Assumption Title').pause(model.pause + 500)
        .click("//div[text()='SUMMARY']").pause(model.pause + 1500)
        .click("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[5]").pause(model.pause + 500)
        .setValue("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[5]", 'summary').pause(model.pause + 2000)
        //.setValue("//div[@class='hypothesis-summary']//div[@class='text-editor-container    hypothesis']", "Edited Summary").pause(model.pause + 2000)
        
    },  
'Comments can be added' : function(browser){
    browser

      
      //.click("(//div[@data-tooltiptext='Open and close comments'])[3]")
      //.click("(//div[@data-tooltiptext='Open and close comments'])[3]")
      //.waitForElementVisible("(//div[text()='Leave a comment'])[3]", model.pause + 2000)
      //.click("(//div[text()='Leave a comment'])[3]")
      //.click("//div[@className='comment-form-outer-container']").pause(model.pause + 500)
      .waitForElementPresent("(//div[@id='currentCard-input-container' and @class='comment-editor'])[3]", 6000)

      //.click("(//div[@class='public-DraftEditorPlaceholder-root'])[6]")
      //.waitForElementPresent("//div[@class='public-DraftEditorPlaceholder-root public-DraftEditorPlaceholder-hasFocus']", 6000)
      .click("(//div[@id='currentCard-input-container' and @class='comment-editor'])[3]").pause(model.pause + 500)
      //client.setValue("(//div[@id='currentCard-input-container' and @class='comment-editor'])[3]", 'new comment')
      //.pause(model.pause + 1000)

      .execute("document.getElementById('currentCard').setAttribute('focused', 'true');")
      .setValue("(//div[@id='currentCard-input-container' and @class='comment-editor'])[3]", 'new comment')
      //.setValue("(//div[@id='currentCard-input-container' and @class='comment-editor'])[3]", ['new comment', browser.Keys.ENTER])
      .keys([browser.Keys.ENTER])
      //.setValue("(//div[@id='currentCard-input-container' and @class='comment-editor'])[3]", ['new comment', browser.Keys.ENTER])
      
      
      /*.pause(model.pause + 1000)
      .waitForElementPresent("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[7]", model.pause + 2000)
      .getText("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[7]", function(text) {
          this.verify.equal(text.value, 'new comment')
      })*/



    


  },
  /*'Comments a user created display "You" as the owner' : function (browser){
    browser.expect.element("//span[@class='comment-username']").text.to.equal("You")
  },
  'Comments can be edited if user is owner' : function(browser){ 
    browser
      .pause(model.pause + 200)
      .useCss()
      .click('#currentCard-comments-div div:nth-child(3) div.comment-body.card-full-comment')
      .waitForElementVisible('.edit-comment-form', model.pause + 600)
      .setValue('.edit-comment-form', [' edited', browser.Keys.ENTER])
      .waitForElementVisible('#currentCard-comments-div div:nth-child(3) div.comment-body.card-full-comment', model.pause + 600)
      .getText('#currentCard-comments-div div:nth-child(3) div.comment-body.card-full-comment', function(text) {
        if (text.value === 'new comment edited') {
          this.verify.equal(text.value, 'new comment edited')
        } else if (text.value === 'editednew comment'){
          this.verify.equal(text.value, 'editednew comment')
        }
      })
  },
  'Comments can be deleted if user is owner' : function(browser){ 
    browser
      .useXpath()
      .moveToElement("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[7]", 10, 10) 
      .useCss()

      .click('.delete-comment-icon')
      
      
  },


  'Correct ammount of comments are loaded': function (browser) {
    for (var i = 1; i < 11; i++) {
      browser.setValue('#currentCard-comment-input', [i.toString(), browser.Keys.ENTER])
      browser.pause(model.pause + 50)
    }
    browser
    .pause(model.pause + 1000)
    browser.expect.element('#currentCard-comments-div div:nth-child(2) div.comment-body.card-full-comment div').text.to.equal("comment from other user")
    browser.expect.element('#currentCard-comments-div div:nth-child(3) div.comment-body.card-full-comment div').text.to.equal("1")
    
  },
'Verify user is able to add comments': function(browser) {
      browser
        
    .click("//div[@class='card-full-nav full-nav-edit-mode-btn' and text()='Done Editing']").pause(model.pause + 1000)
    .verify.elementPresent("//div[@class='card-full-nav full-nav-edit-mode-btn' and text()='Edit']").pause(model.pause + 1000)    
    .pause(model.pause + 1000)
    .end()

    },*/





}