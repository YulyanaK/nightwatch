var model = require('../../../../helpers/model');
var controller = require('../../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;

//Access private and public projects 
//Reads dashboard take over all tabs
//Comments add and delete, adds tags @mentions Evidence
//View attachements
//view connections assumptions
//view activity feed 


module.exports = {

  'login to workspace': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://app.glidr.io')
        //.resizeWindow(1440, 780).pause(model.pause + 500)
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
        .verify.elementPresent('div.login-button', 'checks for button is active').pause(model.pause + 500)
        .click('div.login-button')
        .waitForElementPresent('div.org-container', 7000).pause(model.pause + 500)
        
        .useCss()
       // .verify.elementPresent('div.org-container').pause(model.pause + 3500)
    
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
  },

  'Verify a project and org' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("//div[@class='org-dashboard-card-title' and text()='Mozambique_QA']", 11000).pause(model.pause + 500)
        .moveToElement("//div[@class='org-dashboard-card-title' and text()='Mozambique_QA']", 10, 10)
        .click("//div[@class='org-dashboard-card-title' and text()='Mozambique_QA']")
        .pause(model.pause + 2000)

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 6000)
        .click('div.hamburger-holder')

  },

  'Select a private project and heads to Dashboard': function(browser) {
      browser
      .useXpath()
      .pause(model.pause + 2000)
       .click("(//div[@class='sub-section-container'])")
        .pause(model.pause + 900)

        .useCss()
        .element('css selector', 'div.checklist-x-icon', function(result){
            if (result.value && result.value.ELEMENT) {
                // Element is present, do the appropriate tests
                browser.click('div.checklist-x-icon');
            } else {
                // Element is not present.
            }
        });


      browser
        .waitForElementPresent('div.basic-dropdown-selected-text.center-nav-page-routes', 6000, 'selects a dashboard')
        .click('div.basic-dropdown-selected-text.center-nav-page-routes')

        .useXpath()
        .waitForElementPresent("//*[contains(text(), 'Dashboard')]", 6000, 'open dashboard')
        .click("//*[contains(text(), 'Dashboard')]").pause(model.pause + 900)
        .pause(model.pause + 800)

    },
        

  'Browse dashboard' : function(browser) {
      browser
        .verify.elementPresent("(//div[@class='dashboard-metrics-title'])", 'Metrics').pause(model.pause + 1500)
        .click("(//div[@class='dashboard-metrics-title'])")
        .pause(model.pause + 800)
        .click("(//span[@class='project-metrics-title-edit float-right'])[3]")
    },


  'Interview comments edit @mentions': function(browser) {
      browser
        .useXpath()
        //Should add here tags bug has been reported
        .waitForElementPresent("(//div[@class='evidence-list-item'])", 2000, 'selects an intrview').pause(model.pause + 800)
        .click("//span[text()='interview']")

        .verify.elementPresent("(//div[@class='comment-editor'])[3]", 'add comments and @mentions').pause(model.pause + 2000)
        .click("(//div[@class='comment-editor'])[3]").pause(model.pause + 1800)

        .keys('Hello Roby con chismes')
        .keys(browser.Keys.ENTER)
        .click("(//div[@class='comment-editor'])[3]").pause(model.pause + 800)
        .keys('Some types are more common in children,  and others are more common in adults. You may find relief from  dermatitis with medications and topical creams. Contact your  doctor for an appointment if your skin is infected, painful, or  uncomfortable, or if your dermatitis is widespread or isn’t getting  better')
        .keys(browser.Keys.ENTER)
        .click("(//div[@class='comment-editor'])[3]").pause(model.pause + 800)
        .keys('@')
        .keys(browser.Keys.ENTER)
        .pause(model.pause + 1000)
        .keys('making comments for @menitons')
        .keys(browser.Keys.ENTER)
        .pause(model.pause + 1000)
        .verify.elementPresent("(//div[@class='comment'])", 'edit comments').pause(model.pause + 1800)
        .click("(//div[@class='comment'])").pause(model.pause + 1800)
        .keys(browser.Keys.ENTER)
},

  'view images': function(browser) {
      browser
        .verify.elementPresent("(//div[@class='media-canvas-image-holder'])" ,'selects an image').pause(model.pause + 800)
        .click("(//div[@class='media-canvas-image-holder'])")
        .pause(model.pause + 1800)
        .click("(//div[@class='lightbox-arrow lpc-multi-use-arrow-white right'])")
        .pause(model.pause + 1800)
        .click("(//div[@class='lightbox-arrow lpc-multi-use-arrow-white right'])")
        .pause(model.pause + 1800)
        .click("//*[contains(text(), 'CLOSE')]")
 },


 'View connections in ideas': function(browser) {
      browser
        .verify.elementPresent("(//div[@class='card-full-nav-x'])[3]", 'close interview evidence')
        .click("(//div[@class='card-full-nav-x'])[3]")
        .pause(model.pause + 800)
        .click("//*[contains(text(), 'Ideas')]")
        .pause(model.pause + 800)
        .verify.elementPresent("(//div[@class='card-content'])[2]", 'edits a collection').pause(model.pause + 800)
        .click("(//div[@class='card-content'])[2]")
        .pause(model.pause + 800)
        .click("(//span[@class='connection-tab   last-tab'])[3]")
        .pause(model.pause + 800)
        .click("//*[contains(text(), 'Ideas')]")
        .pause(model.pause + 800)
        .click("//*[contains(text(), 'Evidence')]")
        .pause(model.pause + 800)
        .click("//*[contains(text(), 'Research & Experiments')]")
        .verify.elementPresent("(//div[@class='card-full-nav-x'])[3]", 'close ideas connections').pause(model.pause + 800)
        .click("(//div[@class='card-full-nav-x'])[3]")

},

  'View activity feed': function(browser) {
      browser
        .waitForElementPresent("(//div[@class='basic-dropdown-selected-text center-nav-page-routes '])", 5000,  'opens for feed')
        .click("(//div[@class='basic-dropdown-selected-text center-nav-page-routes '])")
        .pause(model.pause + 1500)
        .click("//*[contains(text(), 'Activity Feed')]")
        .pause(model.pause + 1500)
        .click("(//div[@class='activity-header-icon-favorite lpc-favorite-icon-solid-gray'])[1]")
        .pause(model.pause + 1500)
        .click("(//div[@class='activity-header-icon-favorite lpc-favorite-icon-solid-yellow'])[1]")
        .pause(model.pause + 1500)
        .click("(//div[@class='profile-image no-image'])")
        .pause(model.pause + 1500)
        .click("//*[contains(text(), 'SIGN OUT')]")
        .end();
    },
}
