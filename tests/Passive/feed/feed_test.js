var model = require('../../../helpers/model.js');
var controller = require('../../../helpers/controller.js');
var ObjectId = require('mongodb').ObjectId;

module.exports = {


  'login to canvas': function(browser) {
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
        .pause(model.pause + 1500)

      browser
        .useXpath()
        .waitForElementPresent("(//div[@class='dropdown-menu-icon clickable '])[2]", 6000, 'verifies for activity link and icon')
        .click("(//div[@class='dropdown-menu-icon clickable '])[2]")
        .pause(model.pause + 1500)
        .waitForElementPresent("//*[text()='Activity Feed']", 6000)
        .click("//*[text()='Activity Feed']")

      browser  
        .useCss()
        .waitForElementPresent('div.activity-card-container', 1000)
        .verify.elementPresent('div.activity-card-container', 'VP1 name of card').pause(model.pause + 1500)
        .verify.elementPresent('div.activity-feed.comment-editor', ' verify input element').pause(model.pause + 2500)
        .click('div.activity-feed.comment-editor')
        .pause(model.pause + 1500)
        .keys('I am a comment for all the nice and humbled people in this planet earth, are we alone??')
        .keys(browser.Keys.ENTER)
        .pause(model.pause + 1500)
  },

  'Shows full card once activity body clicked' : function(browser) {
      browser
        .verify.elementPresent('.activity-body-target-holder', 'activity body target holder ').pause(model.pause + 1500)
        .click('.activity-body-target-holder')
        .pause(model.pause + 1500)
     browser
        .useXpath()
        .click("(//div[@class='card-full-nav-x-container'])[3]")
        .pause(model.pause + 500)
     browser
        .useCss()
        .waitForElementPresent('.activity-body-target-holder', 6000, 'it goes back to the holder')
        .click('.activity-body-target-holder')
        .pause(model.pause + 500)
  },

  'Test get more comments' : function(browser){
    browser  
        .useXpath()
        .click("(//div[@class='comment-editor'])[3]")
        .keys('Avrupada kayda geçmiş ilk yazılı belge olarak ise MÖ yıllarında Antik Yunanistanda Homerosun yazdığı İlyada destanı gösterilebilir')
        .keys(browser.Keys.ENTER)

        .pause(model.pause + 500)
        .waitForElementPresent("(//div[@class='comment-editor'])[3]", 6000, 'first comment')
        .click("(//div[@class='comment-editor'])[3]")
        .keys('Kuasar, evrenin en uzak köşelerinde yüksek bir enerjiyle parlayan gökadalara verilen addır')
        .keys(browser.Keys.ENTER)
        .pause(model.pause + 900)
        .waitForElementPresent("(//div[@class='comment-editor'])[3]", 1000, 'second comment')
        .click("(//div[@class='comment-editor'])[3]")
        .pause(model.pause + 500)
        .keys('Die Wikipedia ist ein offenes Projekt')
        .keys(browser.Keys.ENTER)
        .pause(model.pause + 900)
        .waitForElementPresent("(//div[@class='comment-editor'])[3]", 1000, 'third comment')
        .click("(//div[@class='comment-editor'])[3]")
        .pause(model.pause + 500)
        .keys('Danach wurde es zu einem festen Bestand­teil der restlichen Tour')
        .keys(browser.Keys.ENTER)
        .pause(model.pause + 1500)
        .waitForElementPresent("(//div[@class='comment-editor'])[3]", 1000, 'fourth comment')
        .click("(//div[@class='comment-editor'])[3]")
        .keys('مقالات مختارة أخرى: الجبهة ')
        .keys(browser.Keys.ENTER)
        .pause(model.pause + 500)
        .waitForElementPresent("(//div[@class='comment-editor'])[3]", 1000, ' fith comment')
        .click("(//div[@class='comment-editor'])[3]")
        .keys('ألمانيا للوكسمبورغ ')
        .keys(browser.Keys.ENTER)
        .pause(model.pause + 500)
        .waitForElementPresent("(//div[@class='comment-editor'])[3]", 1000, ' sixth comment')
        .click("(//div[@class='comment-editor'])[3]")
        .keys('Panait Istrati, (d. 10 Ağustos 1884 - ö. 18 Nisan 1935) Romen yazar. Balkanların Maksim Gorkisi olarak anılır')

        .useCss()
        .verify.elementPresent('div.card-full-nav-x-container', 'return to activity feed').pause(model.pause + 500)
        .click('div.card-full-nav-x-container')
        // Take another screenshot at the end of the filter activity image saved as feed_test.png
        //.saveScreenshot('./reports/feed/feed_test.png')
      .end();
   },
}

