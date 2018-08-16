var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;


module.exports = {


  'login to an org to invite a member': function(browser) {
      browser
        .url('https://app.glidr.io')
        .resizeWindow(1024, 768).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'checks for logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'checks for container to log in').pause(model.pause + 500)
        .click('div.signin-form-container')
      browser
        .setValue('input[type=text]', 'dortiz@launchpadcentral.com')
        .verify.elementPresent('div.signin-form-container', 'checks for container to log in').pause(model.pause + 500)
        .click('input[type=password]')
      browser
        .setValue('input[type=password]', 'Testtest1!')
        .click('div.signup-show-password')
        .verify.elementPresent('div.login-button', 'checks for button').pause(model.pause + 500)
        .click('div.login-button')
  },

  'Verify the project name' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("(//div[@class='org-dashboard-card-container'])[7]", 6000).pause(model.pause + 500)
        .click("(//div[@class='org-dashboard-card-container'])[7]")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 4000)
        .click('div.hamburger-holder')
  },


  'Invite group, single and two invitees' : function(browser) {
      browser
        .verify.elementPresent('div.side-nav-organization-name-holder', 'checks for name holder').pause(model.pause + 500)
        .click('div.side-nav-organization-name-holder')
        .verify.elementPresent('div.invite', 'checks for invite link').pause(model.pause + 500)
        .click('div.invite')

        //invite an admin
        .verify.elementPresent('div.access-row-item-admin', 'invite an admin').pause(model.pause + 500)
        .click('div.access-row-item-admin')

        //bad email
        .verify.elementPresent('div.invite-form-list-item-container', 'verifies for email').pause(model.pause + 500)
        .click('div.invite-form-list-item-container')
        .clearValue('div.invite-form-list-item-container').pause(model.pause + 500)
        .setValue('input.invite-input.invite-email-input ', 'davidortiz1324@comcast')

        .useXpath()
        //first name
        .verify.elementPresent("(//input[@class='invite-input'])", 'verifies for firstname').pause(model.pause + 500)
        .click("(//input[@class='invite-input'])")
        .clearValue("(//input[@class='invite-input'])").pause(model.pause + 500)
        .setValue("(//input[@class='invite-input'])", 'kawika-')

        //last name
        .verify.elementPresent("(//input[@class='invite-input'])[2]", 'verifies for lastname').pause(model.pause + 500)
        .click("(//input[@class='invite-input'])[2]")
        .clearValue("(//input[@class='invite-input'])[2]").pause(model.pause + 500)
        .setValue("(//input[@class='invite-input'])[2]", 'Kahanamokukuko')

        //good email
        .useCss()
        .verify.elementPresent('input.invite-input.invite-email-input.invalid', 'verifies for email').pause(model.pause + 500)
        .click('input.invite-input.invite-email-input.invalid')
        .clearValue('input.invite-input.invite-email-input.invalid').pause(model.pause + 500)
        .setValue('input.invite-input.invite-email-input', 'davidortiz1324@comcast.net')

        //opens new fields
        .verify.elementPresent('button.invite-list-small-button', 'adds another invitee').pause(model.pause + 500)
        .click('button.invite-list-small-button').pause(model.pause + 500)
        .click('button.invite-list-small-button').pause(model.pause + 500)
        .click('button.invite-list-small-button').pause(model.pause + 500)

        .useXpath()
        //closes new fields
        .verify.elementPresent("(//div[@class='lpc-close-cancel-icon-gray remove-input-x'])", 'closes extra fields').pause(model.pause + 1500)
        .click("(//div[@class='lpc-close-cancel-icon-gray remove-input-x'])[2]").pause(model.pause + 500)
        .click("(//div[@class='lpc-close-cancel-icon-gray remove-input-x'])[3]").pause(model.pause + 500)
        .click("(//div[@class='lpc-close-cancel-icon-gray remove-input-x'])[2]").pause(model.pause + 500)
       
        //adds another invitee
        .verify.elementPresent("(//div[@class='invite-form-list-item-container'])[2]", 'adding another invitee') 
        .click("(//input[@class='invite-input invite-email-input '])[2]").pause(model.pause + 1500)  
        .setValue("(//input[@class='invite-input invite-email-input '])[2]", 'idobarowitz@comcast.net').pause(model.pause + 500) 

        .click("(//input[@class='invite-input'])[3]")
        .pause(model.pause + 1500)
        .setValue("(//input[@class='invite-input'])[3]", 'ortiz')
        .pause(model.pause + 1500)
        .click("(//input[@class='invite-input'])[4]")
        .pause(model.pause + 1500)
        .setValue("(//input[@class='invite-input'])[4]", 'idobarowitz')

        .useCss()
        //invite 
        .verify.elementPresent('button.add-invite-button.list-add-invite-button', 'sents invite').pause(model.pause + 1500)
        .click('button.add-invite-button.list-add-invite-button')

        //re-invite remove invitation
        .useXpath()
        .click("//p[text()='Re-Invite']")
        .pause(model.pause + 1500)
        .click("(//p[text()='Re-Invite'])[2]")
        .pause(model.pause + 1500)
        .click("//p[text()='Remove']")
        .pause(model.pause + 1500)
        .click("//p[text()='Remove']")

        //invite more
        .useCss()
        .verify.elementPresent('button.invite-more-button')
        .click('button.invite-more-button')

        .verify.elementPresent('div.invite-form-list-item-container', 'verifies for email').pause(model.pause + 500)
        .click('div.invite-form-list-item-container')
        .clearValue('div.invite-form-list-item-container').pause(model.pause + 500)
        .setValue('input.invite-input.invite-email-input ', 'davidortiz1324@comcast')

        .useXpath()
        //first name
        .verify.elementPresent("(//input[@class='invite-input'])", 'verifies for firstname').pause(model.pause + 500)
        .click("(//input[@class='invite-input'])")
        .clearValue("(//input[@class='invite-input'])").pause(model.pause + 500)
        .setValue("(//input[@class='invite-input'])", 'kawika-')

        //last name
        .verify.elementPresent("(//input[@class='invite-input'])[2]", 'verifies for lastname').pause(model.pause + 500)
        .click("(//input[@class='invite-input'])[2]")
        .clearValue("(//input[@class='invite-input'])[2]").pause(model.pause + 500)
        .setValue("(//input[@class='invite-input'])[2]", 'Kahanamokukuko')

        //good email
        .useCss()
        .verify.elementPresent('input.invite-input.invite-email-input.invalid', 'verifies for email').pause(model.pause + 500)
        .click('input.invite-input.invite-email-input.invalid')
        .clearValue('input.invite-input.invite-email-input.invalid').pause(model.pause + 500)
        .setValue('input.invite-input.invite-email-input', 'davidortiz1324@comcast.net')

        //opens new fields
        .verify.elementPresent('button.invite-list-small-button', 'adds another invitee').pause(model.pause + 500)
        .click('button.invite-list-small-button').pause(model.pause + 500)
        .click('button.invite-list-small-button').pause(model.pause + 500)
        .click('button.invite-list-small-button').pause(model.pause + 500)

        .useXpath()
        //closes new fields
        .verify.elementPresent("(//div[@class='lpc-close-cancel-icon-gray remove-input-x'])", 'closes extra fields').pause(model.pause + 1500)
        .click("(//div[@class='lpc-close-cancel-icon-gray remove-input-x'])[2]").pause(model.pause + 500)
        .click("(//div[@class='lpc-close-cancel-icon-gray remove-input-x'])[3]").pause(model.pause + 500)
        .click("(//div[@class='lpc-close-cancel-icon-gray remove-input-x'])[2]").pause(model.pause + 500)
       
        //adds another invitee
        .verify.elementPresent("(//div[@class='invite-form-list-item-container'])[2]", 'adding another invitee') 
        .click("(//input[@class='invite-input invite-email-input '])[2]").pause(model.pause + 1500)  
        .setValue("(//input[@class='invite-input invite-email-input '])[2]", 'idobarowitz@comcast.net').pause(model.pause + 500) 

        .click("(//input[@class='invite-input'])[3]")
        .pause(model.pause + 1500)
        .setValue("(//input[@class='invite-input'])[3]", 'ortiz')
        .pause(model.pause + 1500)
        .click("(//input[@class='invite-input'])[4]")
        .pause(model.pause + 1500)
        .setValue("(//input[@class='invite-input'])[4]", 'idobarowitz')

        .useCss()
        //invite 
        .verify.elementPresent('button.add-invite-button.list-add-invite-button', 'sents invite').pause(model.pause + 1500)
        .click('button.add-invite-button.list-add-invite-button')
        .pause()

        .useXpath()
        .click("//p[text()='Re-Invite']")
        .pause(model.pause + 1500)
        .click("(//p[text()='Re-Invite'])[2]")
        .pause(model.pause + 1500)
        .click("//p[text()='Remove']")
        .pause(model.pause + 1500)
        .click("//p[text()='Remove']")

        .useCss()
        .verify.elementPresent('button.done-button', 'done button').pause(model.pause + 1500)
        .click('button.done-button')

        .end();
  },
}