var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');

module.exports = {
  // options : {
  //   url : model.url + '/canvas'
  // },

  // before : function(browser, done){
  //   var context = this;
  //   var pastProjectDate = new Date(new Date().getTime() - (86400000*10));
  //   var pastCardDate = new Date(new Date().getTime() - (86400000*9));
  //   var startTest = function () {
  //     browser.url(model.url + '/my-account/profile')
  //     browser.windowMaximize().pause(model.pause + 500)
  //     done()
  //   };
  
  //   controller.initializeCanvas(function(token){
  //     controller.removeAllCards(function(){
  //       browser.url(context.options.url)
  //       browser.setCookie(token);
  //       controller.setProjectDate(pastProjectDate, function(){
  //         startTest()
  //       });
  //     });
  //   })      
  // },
  // after : function (browser, done) {
  //   controller.removeAllCards(function(){
  //     controller.connect().close()
  //     done()
  //   });
  // },

  'login to profile': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://passive.glidr.io')
        .resizeWindow(1024, 968).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'looks for glidr logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'searches for active container for email').pause(model.pause + 500)
        .click('div.signin-form-container')
      browser
        .setValue('input[type=text]', 'dortiz+automation@glidr.io')
        .verify.elementPresent('div.signin-form-container', 'searches for active container for password').pause(model.pause + 500)
        .click('input[type=password]')
      browser
        .setValue('input[type=password]', 'Testtest1!')
        .click('div.signup-show-password')
        .waitForElementPresent('div.login-button', 6000, 'checks for button is active').pause(model.pause + 500)
        .click('div.login-button')
  },

  'Verify the organizations for profile' : function(browser) {
      browser
        //.waitForElementPresent("//div[text()='Ruwanda_QA']", 6000)
        //.click("//div[text()='Ruwanda_QA']")
        .useXpath()
        .pause(model.pause + 5000)
        .frame("intercom-borderless-frame")
        .element('xpath', "//div[@class='intercom-block intercom-block-paragraph']", function(result){
            if (result.value && result.value.ELEMENT) {
                // Element is present, do the appropriate tests
                browser.click("//div[@class='intercom-block intercom-block-paragraph']")
                .waitForElementPresent("//div[@class='intercom-borderless-dismiss-button']", 10000)
                .moveToElement("//div[@class='intercom-borderless-dismiss-button']", 10, 10)
                .click("//div[@class='intercom-borderless-dismiss-button']");
            } else {
                // Element is not present.
            }
        });
    browser
        .frame(null)
        .pause(model.pause + 2000)
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
        .pause(model.pause + 2000)
  },

  'verify account profile dropdown menu' : function (browser) {
      browser
        .waitForElementPresent("//img[@class='img-class-right-nav-profile-5b8458b5059c410001e4467b profile-image-adjust']", 6000)
        .click("//img[@class='img-class-right-nav-profile-5b8458b5059c410001e4467b profile-image-adjust']")
        .getText("//div[@class='profile-name profile-name-settings truncate']", function(text) {
            this.verify.equal(text.value, "David Ortiz Caro Sinton Potter")
        })
        .verify.elementPresent("//div[text()='Profile & Account Settings']", 'Profile & Account settings').pause(model.pause + 500)
        .verify.elementPresent("//div[text()='Switch Organizations']", 'switch orgs').pause(model.pause + 500)
        .verify.elementPresent("//div[text()='SIGN OUT']", 'Sign out of').pause(model.pause + 500)
        .verify.elementPresent("//div[text()='Privacy Policy']").pause(model.pause + 500)
        .verify.elementPresent("//div[text()='Terms and Conditions']", 'Terms and Conditions').pause(model.pause + 500)
        .click("//div[text()='Profile & Account Settings']")
  },

  'Profile' : function (browser) {
      browser
        .useXpath()
        .frame("intercom-borderless-frame")
        .element('xpath', "//div[text()='Which one most closely matches your role?']", function(result){
            if (result.value && result.value.ELEMENT) {
                // Element is present, do the appropriate tests
                browser.click("//div[text()='Which one most closely matches your role?']")
                .waitForElementPresent("//div[@class='intercom-borderless-dismiss-button']", 6000)
                .click("//div[@class='intercom-borderless-dismiss-button']");
            } else {
                // Element is not present.
            }
        });
    browser
        .frame(null)



        .waitForElementPresent("//input[@placeholder='First name']", 6000, 'first name')
        .click("//input[@placeholder='First name']").pause(model.pause + 500)
        .clearValue("//input[@placeholder='First name']").pause(model.pause + 500)
        //.setValue("//input[@placeholder='First name']", 'davitis')

        .verify.elementPresent("//input[@placeholder='Last name']", 'last name').pause(model.pause + 500)
        .click("//input[@placeholder='Last name']").pause(model.pause + 500)
        .clearValue("//input[@placeholder='Last name']").pause(model.pause + 500)
        //.setValue("//input[@placeholder='First name']", 'davitis')
        //.setValue("//input[@placeholder='First name']", 'davitis')
        //.setValue("//input[@placeholder='Last name']", 'ortizzz')


        .verify.elementPresent("//input[@placeholder='Phone number']", 'phone').pause(model.pause + 500)
        .click("//input[@placeholder='Phone number']")
        .clearValue("//input[@placeholder='Phone number']")
        //.setValue("//input[@placeholder='Phone number']", '1234567890')

        .verify.elementPresent("//input[@placeholder='Linkedin handle']", 'linkedin').pause(model.pause + 500)
        .click("//input[@placeholder='Linkedin handle']")
        .clearValue("//input[@placeholder='Linkedin handle']")
        //.setValue("//input[@placeholder='Linkedin handle']", 'linkis linkis')

        .verify.elementPresent("//input[@placeholder='Twitter handle']", 'twitter').pause(model.pause + 500)
        .click("//input[@placeholder='Twitter handle']")
        .clearValue("//input[@placeholder='Twitter handle']")
        .setValue("//input[@placeholder='Twitter handle']", 'twita')

        .verify.elementPresent("//input[@placeholder='Your title']", 'title').pause(model.pause + 500)
        .click("//input[@placeholder='Your title']")
        .clearValue("//input[@placeholder='Your title']")
        //.setValue("//input[@placeholder='Your title']", 'King David, your majesty at your service')

        .verify.elementPresent("//input[@placeholder='Company department']", 'department').pause(model.pause + 500)
        .click("//input[@placeholder='Company department']")
        .clearValue("//input[@placeholder='Company department']")
        //.setValue("//input[@placeholder='Company department']", 'Matanga dijo la changa')

        .verify.elementPresent("//textarea[@placeholder='Write something about yourself']", 'about me').pause(model.pause + 500)
        .click("//textarea[@placeholder='Write something about yourself']")
        .clearValue("//textarea[@placeholder='Write something about yourself']")
        //.setValue("//textarea[@placeholder='Write something about yourself']", ' On three occasions (1325–1521, 1821–1823, and 1863–1867), the country was known as Imperio Mexicano (Mexican Empire). All three federal constitutions (1824, 1857 and 1917, the current constitution) used the name Estados Unidos Mexicanos')
        
        .verify.elementPresent("//button[@class='account-settings-profile-settings-button on']")
        .click("//button[@class='account-settings-profile-settings-button on']")
        .end();
 
  },
}

