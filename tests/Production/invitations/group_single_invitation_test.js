var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;


module.exports = {


  'login to an org to invite many member': function(browser) {
      browser
        .url('https://app.glidr.io')
        .resizeWindow(1024, 968).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'checks for logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'checks for container to log in').pause(model.pause + 500)
        .click('div.signin-form-container')
      browser
        .setValue('input[type=text]', 'dortiz+automation@glidr.io')
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

        .verify.elementPresent('div.side-nav-organization-name-holder', 'checks for name holder').pause(model.pause + 500)
        .click('div.side-nav-organization-name-holder')
        .verify.elementPresent('div.invite', 'checks for invite link').pause(model.pause + 500)
        .click('div.invite')
  },


  'Invite group invitees members' : function(browser) {
      browser
        //invite memebers
        .verify.elementPresent('div.access-row-item-member', 'invite an admin').pause(model.pause + 500)
        .click('div.access-row-item-member')

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

  },

  'Inviting more members to an org': function(browser){
      browser
        .verify.elementPresent('div.invite-list-text', 'trigger invite  many people').pause(model.pause + 500)
        .click('div.invite-list-text')
        .verify.elementPresent('textarea.multi-invite-textarea', 'entering list of new invitees').pause(model.pause + 800)
        .click('textarea.multi-invite-textarea')
        .pause(model.pause + 800)
        .setValue('textarea.multi-invite-textarea', 'ykarpava@glidr.io, dortiz@glidr.io, karenubence@comcast.net, ortiz.german@comcast.net')
        .pause(model.pause + 800)
        .verify.elementPresent('button.add-invite-button', 'adding invitess to list')
        .click('button.add-invite-button')
      
  },

  'Add invitees to a project': function(browser){
      browser    
        .verify.elementPresent('div.add-project-input-container', 'adding porjects').pause(model.pause + 500)
        .click('div.add-project-input-container')

        .useXpath()
        .verify.elementPresent("(//div[@class='list-project-name'])", 'sample project').pause(model.pause + 500)
        .click("(//div[@class='list-project-name'])")

        .useCss()
        //selects a project
        .verify.elementPresent('div.add-project-input-container', 'adding porjects').pause(model.pause + 500)
        .click('div.add-project-input-container')

        //invite 
        .verify.elementPresent('button.add-invite-button.list-add-invite-button', 'sents invite').pause(model.pause + 1500)
        .click('button.add-invite-button.list-add-invite-button')

        .useXpath()
        //remove invitee
        .pause(model.pause + 1500)
        .click("//p[text()='Remove']")
        .pause(model.pause + 1500)
        .click("//p[text()='Remove']")
        .pause(model.pause + 1500)
        .click("//p[text()='Remove']")
        .pause(model.pause + 1500)
        .click("//p[text()='Remove']")
        .pause(model.pause + 1500)
        .click("//p[text()='Remove']")

        .useCss()
        //done button
        .verify.elementPresent('button.done-button', 'done button').pause(model.pause + 1500)
        .click('button.done-button')
        .end();
      },
   }





