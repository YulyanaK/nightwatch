var model = require('../../../helpers/model.js');
var controller = require('../../../helpers/controller.js');
var ObjectId = require('mongodb').ObjectId;

module.exports = {


  'login to canvas': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://app.glidr.io')
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

  'Verify the organizations for canvas' : function(browser) {
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
        .waitForElementPresent('div.hamburger-holder', 18000)
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

  'Canvas' : function(browser) {
      browser 
        .useCss()
        .waitForElementPresent('.side-nav-subSection-title', 6000)
        .verify.elementPresent('div.side-nav-subSection-title', 'selecting a project').pause(model.pause + 1500)
        .click('.side-nav-subSection-title')
        .useXpath()
        .waitForElementPresent("(//div[@class='dropdown-menu-icon clickable '])[2]", 6000, 'verifies for activity link and icon')
        .click("(//div[@class='dropdown-menu-icon clickable '])[2]")
        .waitForElementPresent("//*[text()='Activity Feed']", 6000)
        .click("//*[text()='Activity Feed']")
        .useCss()
        .waitForElementPresent('div.activity-card-container', 1000)
        .verify.elementPresent('div.activity-card-container', 'VP1 name of card').pause(model.pause + 500)
        .verify.elementPresent('div.activity-feed.comment-editor', ' verify input element').pause(model.pause + 1500)
        .click('div.DraftEditor-root')
        .setValue('div.public-DraftEditor-content', ['I am a comment for all the nice and humbled people in this planet earth, are we alone??', browser.Keys.ENTER])
  },

  'Shows full card once activity body clicked' : function(browser) {
      browser
        .verify.elementPresent('.activity-body-target-holder', 'activity body target holder ').pause(model.pause + 500)
        .click('.activity-body-target-holder')
        .click('.current-card-nav > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)')
        .pause(model.pause + 500)
        .waitForElementPresent('.activity-body-target-holder', 6000, 'it goes back to the holder')
        .pause(model.pause + 500)
  },

  'Test get more comments' : function(browser){
    browser  
        .useXpath()
        .click("(//div[@class='public-DraftEditor-content'])")
        .setValue("(//div[@class='public-DraftEditor-content'])", ['Avrupada kayda geçmiş ilk yazılı belge olarak ise MÖ yıllarında Antik Yunanistanda Homerosun yazdığı İlyada destanı gösterilebilir', browser.Keys.ENTER])
        .pause(model.pause + 500)
        .waitForElementPresent("(//div[@class='DraftEditor-editorContainer'])[2]", 6000)
        .click("(//div[@class='DraftEditor-editorContainer'])[2]")
        .setValue("(//div[@class='public-DraftEditor-content']) [2]", ['Kuasar, evrenin en uzak köşelerinde yüksek bir enerjiyle parlayan gökadalara verilen addır', browser.Keys.ENTER])
        .pause(model.pause + 500)
        .waitForElementPresent("(//div[@class='DraftEditor-editorContainer'])[2]", 6000)
        .click("(//div[@class='public-DraftEditor-content'])[3]")
        .setValue("(//div[@class='public-DraftEditor-content'])[3]", ['Die Wikipedia ist ein offenes Projekt', browser.Keys.ENTER])
        .pause(model.pause + 500)
        .click("(//div[@class='public-DraftEditor-content'])[4]")
        .setValue("(//div[@class='public-DraftEditor-content'])[4]",['Danach wurde es zu einem festen Bestand­teil der restlichen Tour.', browser.Keys.ENTER])
        .pause(model.pause + 1500)
        .click("(//div[@class='public-DraftEditor-content'])[2]")
        .setValue("(//div[@class='public-DraftEditor-content'])[2]", ['مقالات مختارة أخرى: الجبهة ', browser.Keys.ENTER])
        .pause(model.pause + 500)
        .click("(//div[@class='public-DraftEditor-content'])[3]")
        .setValue("(//div[@class='public-DraftEditor-content'])[3]",['ألمانيا للوكسمبورغ ', browser.Keys.ENTER])
        .pause(model.pause + 500)
        .click("(//div[@class='public-DraftEditor-content'])[4]")
        .setValue("(//div[@class='public-DraftEditor-content'])[4]", ['Panait Istrati, (d. 10 Ağustos 1884 - ö. 18 Nisan 1935) Romen yazar. Balkanların Maksim Gorkisi olarak anılır', browser.Keys.ENTER])

        .useCss()
        .verify.elementPresent('div.card-full-nav-x-container', 'return to activity feed').pause(model.pause + 500)
        .click('div.card-full-nav-x-container')
        // Take another screenshot at the end of the filter activity image saved as feed_test.png
        //.saveScreenshot('./reports/feed/feed_test.png')
      .end();
   },
}

