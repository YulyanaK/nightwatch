var model = require('../../helpers/model.js');
var controller = require('../../helpers/controller.js');
var ObjectId = require('mongodb').ObjectId;

module.exports = {


  'login to canvas': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://passive.glidr.io')
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

  'Verify the organizations for canvas' : function(browser) {
      browser
        .waitForElementPresent('div.org-dashboard-card-container', 4000)
        .verify.elementPresent('.project-image-main.project-image-583dcdf8b8dc3000019ef0e2', 'entering Spain organization').pause(model.pause + 500)
        .click('.project-image-main.project-image-583dcdf8b8dc3000019ef0e2')
        .waitForElementPresent('div.hamburger-holder', 4000)
        .click('div.hamburger-holder.close')
  },

  'Canvas' : function(browser) {
      browser 
        .waitForElementPresent('.side-nav-subSection-title', 4000)
        .verify.elementPresent('div.side-nav-subSection-title', 'selecting a project').pause(model.pause + 1500)
        .click('.side-nav-subSection-title')
        .verify.elementPresent('div[data-test="activity-nav"]', 'enter to activity feed').pause(model.pause + 500)
        .click('div[data-test="activity-nav"]')
        .waitForElementPresent('div.activity-card-container', 1000)
        .verify.elementPresent('div.activity-card-container', 'VP1 name of card').pause(model.pause + 500)
        .verify.elementPresent('div.activity-feed.comment-editor', ' verify input element').pause(model.pause + 500)
        .click('div.DraftEditor-root')
        .setValue('div.public-DraftEditor-content', ['I am a comment for all the nice and humbled people in this planet earth, are we alone??', browser.Keys.ENTER])
  },

  'Shows full card once activity body clicked' : function(browser) {
      browser
        .verify.elementPresent('.activity-body-target-holder', 'activity body target holder ').pause(model.pause + 500)
        .click('.activity-body-target-holder')
        .click('.current-card-nav > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)')
        .pause(model.pause + 500)
        .verify.elementPresent('.activity-body-target-holder', 'it goes back to the holder')
        .pause(model.pause + 500)
  },

  'Test get more comments' : function(browser){
    browser  
        .useXpath()
        .click("(//div[@class='public-DraftEditor-content'])")
        .setValue("(//div[@class='public-DraftEditor-content'])", ['Avrupada kayda geçmiş ilk yazılı belge olarak ise MÖ yıllarında Antik Yunanistanda Homerosun yazdığı İlyada destanı gösterilebilir', browser.Keys.ENTER])
        .pause(model.pause + 500)
        .click("(//div[@class='DraftEditor-editorContainer'])[2]")
        .setValue("(//div[@class='public-DraftEditor-content']) [2]", ['Kuasar, evrenin en uzak köşelerinde yüksek bir enerjiyle parlayan gökadalara verilen addır', browser.Keys.ENTER])
        .pause(model.pause + 500)
        .click("(//div[@class='public-DraftEditor-content'])[3]")
        .setValue("(//div[@class='public-DraftEditor-content'])[3]", ['Die Wikipedia ist ein offenes Projekt, in dem jeder mitarbeiten darf – also sei mutig und hilf mit, sie zu erweitern und zu verbessern! Diese Seite gibt einen ersten Überblick', browser.Keys.ENTER])
        .pause(model.pause + 500)
        .click("(//div[@class='public-DraftEditor-content'])[4]")
        .setValue("(//div[@class='public-DraftEditor-content'])[4]",['Danach wurde es zu einem festen Bestand­teil der restlichen Tour, und die Band spielte ihn auch bei den meisten Auftritten der Lovetown-Tour im Jahr 1989.', browser.Keys.ENTER])
        .pause(model.pause + 500)
        .click("(//div[@class='public-DraftEditor-content'])[2]")
        .setValue("(//div[@class='public-DraftEditor-content'])[2]", ['مقالات مختارة أخرى: الجبهة الغربية (الحرب العالمية الأولى) – داء نيوكاسل – سلاما هي المقالات المختارة؟ – بوابة الحرب العالمية الأولى – بوابة تاريخ أوروبا', browser.Keys.ENTER])
        .pause(model.pause + 500)
        .click("(//div[@class='public-DraftEditor-content'])[3]")
        .setValue("(//div[@class='public-DraftEditor-content'])[3]",['ألمانيا للوكسمبورغ وبلجيكا في سنة 1914، ثم السيطرة العسكرية على المناطق الصناعية المهمة في فرنسا. كانت الحرب سجالًا في الجبهة الغربية، بدءًا من انتصار الحلفاء في معركة المارن الأولى، وبعد ذلك، حفر كلا الجانبين خطاً متعرجاً محصناً من الخنادق لتبدأ حرب الخنادق. امتد خط الخنادق من بحر الشمال إلى الحدود السويسرية مع فرنسا، وظل هذا الخط ثابتًا لم يتغير معظم أيام الحرب. بين', browser.Keys.ENTER])
        .pause(model.pause + 500)
        .click("(//div[@class='public-DraftEditor-content'])[4]")
        .setValue("(//div[@class='public-DraftEditor-content'])[4]", ['Panait Istrati, (d. 10 Ağustos 1884 - ö. 18 Nisan 1935) Romen yazar. Balkanların Maksim Gorkisi olarak anılır', browser.Keys.ENTER])

        .useCss()
        .verify.elementPresent('div.card-full-nav-x-container', 'return to activity feed').pause(model.pause + 500)
        .click('div.card-full-nav-x-container')
        // Take another screenshot at the end of the filter activity image saved as feed_test.png
        .saveScreenshot('./reports/feed/feed_test.png')
      .end();
   },
}

