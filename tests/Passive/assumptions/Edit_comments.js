var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');

module.exports = {
 

 'login to hypothesis': function(browser) {
      browser
        .url('https://passive.glidr.io')
        .resizeWindow(1524, 1068).pause(model.pause + 500)
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
        .pause(model.pause + 5000)
    },

    'Verify user is able to edit Assumption' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("//div[text()='Senegal_QA']", 4000)
        .click("//div[text()='Senegal_QA']")
        .pause(model.pause + 4000)
        .click("//div[@class='hamburger-holder close ']").pause(model.pause + 2000)
        .click("//div[@class='side-nav-subSection-title' and text()=' San Francisco de asis in the bay area and golden gate']").pause(model.pause + 2000)
        .click("//div[@class='nav-center-container   ']//div//a[1]/div")
        .waitForElementPresent("(//div[@class='priority-card-summary '])[2]", 6000)
        .click("(//div[@class='priority-card-summary '])[1]")
        .waitForElementPresent("//div[@class='hypothesis-nav-title hypothesis']", 6000)//Assumptions open
        .pause(model.pause + 2000)
        .waitForElementPresent("//div[@class='card-full-nav full-nav-edit-mode-btn' and text()='Done Editing']", 6000)
        .click("//textarea[@class='content-field-textarea']")
        .clearValue("//textarea[@class='content-field-textarea']").pause(model.pause + 500)
        .setValue("//textarea[@class='content-field-textarea']", 'Editing Assumption Title').pause(model.pause + 500)
        .click("//div[text()='SUMMARY']").pause(model.pause + 1500)
        .click("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[5]").pause(model.pause + 500)
        .clearValue("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[5]").pause(model.pause + 2000)
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
      .click("(//div[@id='currentCard-input-container' and @class='comment-editor'])[3]")
      .keys('new comment')
      //.setValue("(//div[@id='currentCard-input-container' and @class='comment-editor'])[3]", ['new comment', browser.Keys.ENTER])
      .keys([browser.Keys.ENTER])
      //.setValue("(//div[@id='currentCard-input-container' and @class='comment-editor'])[3]", ['new comment', browser.Keys.ENTER])
      
      
      .pause(model.pause + 1000)
      //waitForElementPresent("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[7]", model.pause + 2000)
      .getText("//span[@data-text='true']", function(text) {
          this.verify.equal(text.value, 'new comment')
      })

  },
  'Comments a user created display "You" as the owner' : function (browser){
    browser.expect.element("//span[@class='comment-username']").text.to.equal("You")
  },
  'Comments can be edited if user is owner' : function(browser){ 
    browser
      .pause(model.pause + 200)
      .waitForElementPresent("//span[@data-text='true']", 6000)
      .moveToElement("//span[@data-text='true']", 10, 10)
      .click("//span[@data-text='true']")
      .pause(model.pause + 1000)
      .keys(' edited')
      .keys('\uE006')
      .pause(model.pause + 1000)
      //.waitForElementVisible('#currentCard-comments-div div:nth-child(3) div.comment-body.card-full-comment', model.pause + 600)
      .getText("//span[@data-text='true']", function(text) {
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
      .moveToElement("//span[@data-text='true']", 10, 10).pause(model.pause + 500)
      

      .click("//div[@class='delete-comment-icon lpc-close-cancel-mini-icon-gray']")
      .useXpath()
      
      
  },


  'Correct ammount of comments are loaded': function (browser) {
    for (var i = 1; i < 11; i++) {
      browser.keys("//span[@data-text='true']", [i.toString(), browser.Keys.ENTER])
      browser.pause(model.pause + 50)
    }
    browser
    .pause(model.pause + 1000)
    //browser.expect.element('#currentCard-comments-div div:nth-child(2) div.comment-body.card-full-comment div').text.to.equal("comment from other user")
    //browser.expect.element('#currentCard-comments-div div:nth-child(3) div.comment-body.card-full-comment div').text.to.equal("1")
    
  },
'Verify user is able to add comments': function(browser) {
      browser
        
    .click("//div[@class='card-full-nav full-nav-edit-mode-btn' and text()='Done Editing']").pause(model.pause + 1000)
    .waitForElementPresent("//div[@class='card-full-nav full-nav-edit-mode-btn' and text()='Edit']", 6000)   
    .pause(model.pause + 1000)
    .end()

    },

}
