var model = require('../../helpers/model');
var controller = require('../../helpers/controller');

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
        .url('https://app.stage.glidr.io')
        .resizeWindow(1024, 968).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'looks for glidr logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'searches for active container for email').pause(model.pause + 500)
        .click('div.signin-form-container')
      browser
        .setValue('input[type=text]', 'ortizcdavid@gmail.com')
        .verify.elementPresent('div.signin-form-container', 'searches for active container for password').pause(model.pause + 500)
        .click('input[type=password]')
      browser
        .setValue('input[type=password]', 'Sandpaper@347!')
        .click('div.signup-show-password')
        .verify.elementPresent('div.login-button', 'checks for button is active').pause(model.pause + 500)
        .click('div.login-button')
  },

  'Verify the organizations for profile' : function(browser) {
      browser
        .waitForElementPresent('div.org-dashboard-card-container', 4000)
        .verify.elementPresent('div.org-dashboard-card-container div:nth-of-type(3)', 'beta codes').pause(model.pause + 500)
        .click('div.org-dashboard-card-container div:nth-of-type(3)')
  },

  'verify account profile dropdown menu' : function (browser) {
      browser
        .pause(model.pause + 1000)
        .verify.elementPresent('img.profile-image.small-profile', 'profile image container is present').pause(model.pause + 500)
        .click('img.profile-image.small-profile')
        .verify.elementPresent('div.profile-name.profile-name-settings').pause(model.pause + 500)
        .getText('div.profile-name.profile-name-settings', function(text) {
            this.verify.equal(text.value, "Davito San")
        })
        .verify.elementPresent('div.profile-settings-text.profile-account', 'Profile & Account settings').pause(model.pause + 500)
        .verify.elementPresent('div.profile-settings-text.switch-orgs', 'switch orgs').pause(model.pause + 500)
        .verify.elementPresent('div.profile-settings.sign-out', 'Sign out of').pause(model.pause + 500)
        .verify.elementPresent('div.profile-settings.org-name', 'TestingOrg').pause(model.pause + 500)
        .verify.elementPresent('div.privacy-policy-text.privacy-policy-text', 'Privacy Policy').pause(model.pause + 500)
        .verify.elementPresent('div.privacy-policy-text.terms-and-conditions', 'Terms and Conditions').pause(model.pause + 500)
        .verify.elementPresent('div.profile-settings-text.profile-account', 'Profile & Account settings').pause(model.pause + 500)
        .click('div.profile-settings-text.profile-account')
  },

  'Profile' : function (browser) {
      browser
        .verify.elementPresent('div[data-test="firstName"]', 'first name').pause(model.pause + 500)
        .click('div[data-test="firstName"]')
        .clearValue('input.account-settings-profile-input')
        .setValue('input.account-settings-profile-input', 'Davito')

        .verify.elementPresent('div[data-test="lastName"]', 'last name').pause(model.pause + 500)
        .click('div[data-test="lastName"]')
        .clearValue('input[data-test="lastName"]')
        .setValue('input[data-test="lastName"]', 'san')

        .verify.elementPresent('div[data-test="phone"]', 'phone').pause(model.pause + 500)
        .click('div[data-test="phone"]')
        .clearValue('input[data-test="phone"]')
        .setValue('input[data-test="phone"]', '1234567890')

        .verify.elementPresent('div[data-test="linkedin"]', 'linkedin').pause(model.pause + 500)
        .click('div[data-test="linkedin"]')
        .clearValue('input[data-test="linkedin"]')
        .setValue('input[data-test="linkedin"]', 'linkis linkis')

        .verify.elementPresent('div[data-test="twitter"]', 'tweeter').pause(model.pause + 500)
        .click('div[data-test="twitter"]')
        .clearValue('input[data-test="twitter"]')
        .setValue('input[data-test="twitter"]', 'twita')

        .verify.elementPresent('div[data-test="title"]', 'title').pause(model.pause + 500)
        .click('div[data-test="title"]')
        .clearValue('input[data-test="title"]')
        .setValue('input[data-test="title"]', 'King David, your majesty at your service')

        .verify.elementPresent('div[data-test="department"]', 'department').pause(model.pause + 500)
        .click('div[data-test="department"]')
        .clearValue('input[data-test="department"]')
        .setValue('input[data-test="department"]', 'Matanga dijo la changa')

        .verify.elementPresent('div[data-test="aboutMe"]', 'about me').pause(model.pause + 500)
        .click('div[data-test="aboutMe"]')
        .clearValue('textarea[data-test="aboutMe"]')
        .setValue('textarea[data-test="aboutMe"]', ' On three occasions (1325–1521, 1821–1823, and 1863–1867), the country was known as Imperio Mexicano (Mexican Empire). All three federal constitutions (1824, 1857 and 1917, the current constitution) used the name Estados Unidos Mexicanos')
        
        .verify.elementPresent('.account-settings-profile-settings-button.on')
        .click('.account-settings-profile-settings-button.on')
        .end();
 
  },
}

