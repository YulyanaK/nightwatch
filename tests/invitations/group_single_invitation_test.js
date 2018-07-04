var model = require('../../helpers/model');
var controller = require('../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;


module.exports = {
  // options : {
  //   domain: 'http://dev.launchpadcentral.com/',
  //   organizer: 'rickster wuebkster',
  //   organizationName: 'yacht rockers',
  //   slug: 'yachtrockers',
  //   initials: 'FN',
  //   email : 'testemail@mailinator.com',
  //   groupInvites: 'testemail@mailinator.com,testemail@mailinator.com,testemail@mailinator.com,testemail@mailinator.com,testemail@mailinator.com,testemail@mailinator.com',
  //   firstName :'Launchpad',
  //   fullName : 'Launchpad Central',
  //   lastName: 'Central',
  //   password: '1234567890',
  //   url : model.url + '/canvas',
  //   userName: 'sandstorm'
  // },

  // before : function(browser, done){
  //   var context = this;
  //   var pastProjectDate = new Date(new Date().getTime() - (86400000*10));
  //   var pastCardDate = new Date(new Date().getTime() - (86400000*9));
  //   var startTest = function () {
  //     browser.url(context.options.url)
  //     browser.resizeWindow().pause(model.pause + 500)
  //     done()
  //   };


  //   this.options.returnToken = controller.createToken({
  //     organizer: this.options.organizer,
  //     email:this.options.email,
  //     organizationId: ObjectId("569fece07cf18c2738dc82cb"),
  //     slug: this.options.slug,
  //     organizationName:this.options.organizationName
  //   }, 2);


  //   controller.initializeCanvas(function(token){
  //     browser.url(context.options.url)
  //     browser.setCookie(token);
  //     startTest()
  //   })      
  // },
  // after : function (browser, done) {
  //   var options = this.options;
  //   var invites = controller.connect().collection('invites');
  //   var docs = invites.find({"email":this.options.email}).toArray(function(err, docs){
  //   var profiles = controller.connect().collection('profiles');
  //   var organizations = controller.connect().collection('organizations');


  //     if (err) {
  //       console.log('there was an error making a db query!!!!');
  //     }

  //     if (docs[0].length === 0){
  //       console.log('status is invited');
  //     }

  //     invites.remove({email: options.email});
  //     profiles.remove({email: options.email});
  //     profiles.remove({email: model.user.email});
  //     organizations.remove({slug: model.org.slug});

  //     controller.connect().close();
  //     browser.end();
  //     done();
  //   });
  //   browser.end();
  // },

  'login to an org to invite many member': function(browser) {
      browser
        .url('https://app.staging.glidr.io')
        .resizeWindow(1024, 768).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'checks for logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'checks for container to log in').pause(model.pause + 500)
        .click('div.signin-form-container')
      browser
        .setValue('input[type=text]', 'ortizcdavid@gmail.com')
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
        .waitForElementPresent('div.org-dashboard-card-container', 4000)
        .click('div.org-dashboard-card-container')
        .waitForElementPresent('div.hamburger-holder', 2000)
        .click('div.hamburger-holder')
        .verify.elementPresent('.side-nav-organization-name', 'organization name').pause(model.pause + 500)
        .getText('.side-nav-organization-name', function(text) {
         this.verify.equal(text.value, "dognate")
        })
        .verify.elementPresent('div.side-nav-organization-name-holder', 'checks for name holder').pause(model.pause + 500)
        .click('div.side-nav-organization-name-holder')
        .verify.elementPresent('div.invite', 'checks for invite link').pause(model.pause + 500)
        .click('div.invite')
  },


  'Invite group, single and two invitees' : function(browser) {
      browser
        .verify.elementPresent('div.access-row-item-member', 'checks for member to be present').pause(model.pause + 500)
        .click('div.access-row-item-member')
        .verify.elementPresent('input.invite-input-label', ' verifies for email').pause(model.pause + 500)
        .click('input.invite-input-label')
        .setValue('input.invite-input-label', 'davidortiz1324@comcast')
        .setValue('input.invite-input-label', 'kawika-')
        .verify.elementPresent('button.add-invite-button.list-add-invite-button', 'checks for trigger tooltip, orange  turns into red ').pause(model.pause + 1500)
        .click('button.add-invite-button.list-add-invite-button')
        .clearValue('input.invalid-input-label')
        .verify.elementPresent('input.warning-input-label', 'cleared invalid email and sets correct email')
        .setValue('input.warning-input-label', 'idobarowitz@comcast.net')
        .verify.elementPresent('div.invite-lastname-label').pause(model.pause + 500)
        .click('div.invite-lastname-label')
        .setValue('div.invite-lastname-label', 'ortiz')
  },

  'Inviting more members to an org': function(browser){
      browser
        .verify.elementPresent('a.invite-list-text-a', 'trigger invite  many people').pause(model.pause + 500)
        .click('a.invite-list-text-a')
        .verify.elementPresent('textarea.multi-invite-textarea').pause(model.pause + 500)
        .click('textare.multi-invite-textarea')
        .setValue('textarea.multi-invite-textarea', 'cacomixtle19@gmail.com, kalika-sinton@comcast.net, ortizcdavid@gmail.com, cacomixtle@icloud.com')
        .verify.elementPresent('button.add-invite-button')
        .click('button.add-invite-button')
      
  },

  'Add one more invitee': function(browser){
      browser    
        .verify.elementPresent('button.invite-list-small-button', 'add another invitee').pause(model.pause + 500)
        .click('button.invite-list-small-button')
        .verify.elementPresent('input#invite-email', 'veryfies for email').pause(model.pause + 500)
        .click('div#remove-input-x')
        .click('div#remove-input-x')
        .verify.elementPresent('button#trigger-invites-button', 'checks for button active').pause(model.pause + 500)
        .click('button#trigger-invites-button')
        .verify.elementPresent('#invite-done-button', 'finish invitation').pause(model.pause + 500)
        .click('#invite-done-button')
        .end();
      },
}