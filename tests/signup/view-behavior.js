var controller = require('../../helpers/controller');
var models = require('../../helpers/model');

module.exports = {

    options :{
      email: 'someEmail@mailinator.com',
      emailTwo: 'someEmailTwo@mailinator.com',
      goodInviteOne : 'goodEmail1@mailinator.com',
      goodInviteTwo : 'goodEmail2@mailinator.com',
      goodInviteThree : 'goodEmail3@mailinator.com',
      goodInviteFour : 'goodEmail4@mailinator.com',
      badInviteOne : 'someBadEmail',
      badInviteTwo : 'bad@emailTwo',
      orgName: 'yacht rockers',
      url: 'yachtrockers',
      urlTwo: 'yacht-rockers',
      fullName : 'John Oates',
      username : 'half-oates',
      usernameTwo: 'full-oates',
      password : 'pass',
      db       : "",
      domain : models.url
      
    },

    before :function(browser, done) {

      var options = this.options;

      options.token = controller.createToken({
        email:this.options.emailTwo
      }, 2)

      controller.connectToDB(function (db) {

        var user = models.userOne;
        var users = db.collection('users');
        users.insert(user);

        var org = models.orgOne;
        var orgs = db.collection('organizations');
        orgs.insert(org);

        options.db = db;
        done()
    
      });
    },

    after : function(client) {

      var orgs = this.options.db.collection('organizations');
      var users = this.options.db.collection('users');
      var invites = this.options.db.collection('invites');


      orgs.remove({slug: this.options.url});
      orgs.remove({slug: this.options.urlTwo});
      users.remove({'primaryEmail': this.options.email});  
      users.remove({'primaryEmail':this.options.emailTwo});
      invites.remove({slug:this.options.urlTwo})

      this.options.db.close();
      client.end();
    },

    'initial email page should show up': function(client) {
      client
        .url(this.options.domain + '/signup/email')
        .expect.element('#sessionEmail').to.be.present.before(models.pause + 1000);

    },

    'expects nav buttons to not work on initial email page': function(client){
      
      client
        .click('#org-nav-bullet')
        .verify.urlContains('signup/email')

      client
        .click('#url-nav-bullet')
        .verify.urlContains('signup/email')

      client
        .click('#invite-nav-bullet')
        .verify.urlContains('signup/email')

      client
        .click('#finish-nav-bullet')
        .verify.urlContains('signup/email')

      client
        .click('#find-org-link')
        .expect.element('#find-organization-email').to.be.present.before(models.pause + 1000)

      client
        .verify.urlContains('signup/findyourorganization')

      client
        .click('#go-back-link')
        .expect.element('#sessionEmail').to.be.present.before(models.pause + 1000)

      client
        .verify.urlContains('signup/email')
    },

    'on initial email screen borders should show correctness' : function(client){

      client
        .setValue('#sessionEmail', this.options.badInviteOne)
        .verify.cssClassPresent('#sessionEmail', 'orange-error')

      client
        .click('.next-btn')
        .verify.cssClassPresent('#sessionEmail', 'red-error')

      client
        .expect.element('#email-card.email-error-alert').to.be.visible

      client
        .click('#sessionEmail')
        .expect.element('#email-card.email-error-alert').to.not.be.visible.before(models.pause + 1000)

      client
        .clearValue('#sessionEmail')
        .setValue('#sessionEmail', this.options.emailTwo)
        .verify.cssClassPresent('#sessionEmail', 'border-blue-focus')

      client
        .verify.cssClassNotPresent('#sessionEmail', 'red-error')
    },

    'expects verify email to be present': function(client){
      
      client
        .click('.next-btn')
        .expect.element('#verify-email-card').to.be.present.before(models.pause + 1000);

      client
        .verify.urlContains('signup/verifyemail');

    },

    'returns from welcome email and goes to signup/organization': function(client){
      
      // token for someEmailTwo@launchpadcentral.com
      client.url(this.options.domain + '/signup/email/newUserToken=' + this.options.token)
        .expect.element('#sessionOrganization').to.be.present.before(models.pause + 1000);

      client
        .verify.urlContains('signup/organization');

      client
        .expect.element('.next-btn').to.not.be.enabled

    },

    'nav dot check on org page should work': function(client){

      client
        .click('#email-nav-bullet')
        .verify.urlContains('signup/email')

      client
        .click('#url-nav-bullet')
        .verify.urlContains('signup/email')

      client
        .click('#invite-nav-bullet')
        .verify.urlContains('signup/email')

      client
        .click('#finish-nav-bullet')
        .verify.urlContains('signup/email')

      client
        .click('#org-nav-bullet')
        .expect.element('#sessionOrganization').to.be.present.before(models.pause + 1000)

      client
        .verify.urlContains('/signup/organization')

      client
        .click('#url-nav-bullet')
        .verify.urlContains('/signup/organization')

      client
        .click('#invite-nav-bullet')
        .verify.urlContains('/signup/organization')

      client
        .click('#finish-nav-bullet')
        .verify.urlContains('/signup/organization')

    },

    'should move to url page after org is entered and button clicked': function(client){
      client
        .setValue('#sessionOrganization', this.options.orgName)
        .click('.next-btn')
        .expect.element('#sessionURL').to.be.present.before(models.pause + 1000)

      client
        .expect.element('#sessionURL').to.have.value.that.equals('yacht-rockers')
    },

    'nav dot check on url page should work': function(client){

      client
        .click('#email-nav-bullet')
        .verify.urlContains('signup/email')

      client
        .click('#invite-nav-bullet')
        .verify.urlContains('signup/email')

      client
        .click('#finish-nav-bullet')
        .verify.urlContains('signup/email')

      client
        .click('#org-nav-bullet')
        .expect.element('#sessionOrganization').to.be.present.before(models.pause + 1000)

      client
        .verify.urlContains('/signup/organization')

      client
        .click('#invite-nav-bullet')
        .verify.urlContains('signup/organization')

      client
        .click('#finish-nav-bullet')
        .verify.urlContains('signup/organization')

      client
        .click('#url-nav-bullet')
        .expect.element('#sessionURL').to.be.present.before(models.pause + 1000)

      client
        .verify.urlContains('/signup/url')

      client
        .click('#invite-nav-bullet')
        .verify.urlContains('/signup/url')

      client
        .click('#finish-nav-bullet')
        .verify.urlContains('/signup/url')

    },

    'url checking should work' :function(client){

      client
        .expect.element('#sessionURL').to.have.value.that.equals("yacht-rockers").before(models.pause + 100)

      client
        .expect.element("#suggest-prompt-ok").to.be.visible.before(models.pause + 500)

      client
        .clearValue('#sessionURL')
        .setValue('#sessionURL', '!@#$%^&')
        .expect.element('#sessionURL').to.have.value.that.equals("").before(models.pause + 600)

      client
        .expect.element('.next-btn').to.not.be.enabled.before(models.pause + 500)
      
      client
        .expect.element('#suggest-prompt-empty').to.be.visible

      client
        .clearValue('#sessionURL')
        .setValue('#sessionURL', this.options.url)
        .expect.element('.next-btn').to.not.be.enabled.before(models.pause + 2000)

      client    
        .expect.element('#suggest-prompt-url-exists').to.be.visible.before(models.pause + 2000)
      
      client
        .click('.url-suggest')
        .expect.element('#sessionURL').to.have.value.that.equals('yacht-rockers-team').before(models.pause + 600)
      client
        .clearValue('#sessionURL')
        .setValue('#sessionURL', 'some-new-slug')
        .expect.element('.next-btn').to.be.enabled.before(models.pause + 1000)

      client
        .expect.element('#suggest-prompt-ok').to.be.visible.before(models.pause + 500)


      client
        .clearValue('#sessionURL')
        .setValue('#sessionURL', '$')
        .expect.element('#sessionURL').to.have.value.that.equals('').before(models.pause + 600)

      client
        .expect.element('#suggest-prompt-empty').to.be.visible.before(models.pause + 1000)

      client
        .click('#url-suggest-empty')
        .expect.element('#sessionURL').to.have.value.that.equals('yachtrockersteam').before(models.pause + 1000)

      client
        .expect.element('#suggest-prompt-ok').to.be.visible.before(models.pause + 600)

      client
        .clearValue('#sessionURL')
        .setValue('#sessionURL', 'yacht-rockers-riot')
        .expect.element('.next-btn').to.be.enabled.before(models.pause + 600)

    },

    'enters url and clicks enter, button should be disabled': function(client){

      client
        .clearValue('#sessionURL')
        .setValue('#sessionURL', 'yacht-rockers')
        .expect.element('#url-submit').to.not.be.enabled.before(models.pause + 500)

      client
        // should be checking if url is available so button should not trigger
        .expect.element('#url-submit').to.be.enabled.before(models.pause + 1000)

      client
        .click('#url-submit')
        .expect.element('#user-icon-2').to.be.present.before(models.pause + 1000)

    },

    'nav dot check on invites page should work': function(client){

      client
        .click('#email-nav-bullet')
        .expect.element('#sessionEmail').to.be.present.before(models.pause + 1000)

      client
        .verify.urlContains('signup/email')

      client
        .click('#finish-nav-bullet')
        .expect.element('#sessionFullName').to.be.present.before(models.pause + 1000)

      client
        .verify.urlContains('signup/finish')

      client
        .click('#org-nav-bullet')
        .expect.element('#sessionOrganization').to.be.present.before(models.pause + 1000)

      client
        .verify.urlContains('/signup/organization')

      client
        .click('#url-nav-bullet')
        .expect.element('#sessionURL').to.be.present.before(models.pause + 1000)

      client
        .verify.urlContains('/signup/url')

      client
        .click('#invite-nav-bullet')
        .expect.element('#user-icon-0').to.be.present.before(models.pause + 1000)

      client
        .verify.urlContains('signup/invitations')

    },

    'entering a bad invite email address should show error': function(client){

      client
        .setValue('#user-icon-0', this.options.goodInviteOne)
        .setValue('#user-icon-1', this.options.badInviteOne)
        .expect.element('#user-icon-1.orange-error').to.be.present.before(models.pause + 1000)

    },

    'after entering a third email a fourth input should be available': function(client){

      client
        .setValue('#user-icon-2', this.options.badInviteTwo)
        .expect.element('#user-icon-3').to.be.visible.before(models.pause + 500);

      client
        .expect.element('#user-icon-2.orange-error').to.be.present.before(models.pause + 500)

      client
        .setValue('#user-icon-3', this.options.goodInviteTwo)
        .expect.element('#user-icon-4').to.be.visible.before(models.pause + 50);

    },

    'after fixing email it should have blue border': function(client){

      client
        .clearValue('#user-icon-1')
        .setValue('#user-icon-1', this.options.goodInviteThree)
        .expect.element('#user-icon-1.orange-error').to.not.be.present.before(models.pause + 500)


    },

    'after clicking enter, errors should have red border': function(client){
      
      client
        .expect.element('#sign-up-flow-button').to.be.enabled.before(models.pause + 1000)

      client
        .click('.next-btn')
        .expect.element('#user-icon-2.red-error').to.be.present.before(models.pause + 1000)
      
    },

    'invite should show tooltip when clicked on with red-error': function(client){
      
      client
        .expect.element('#user-icon-2.red-error').to.be.visible.before(1000)



      client
        .click('#user-icon-2')
        .execute("angular.element('input#user-icon-2').focus()")
        .expect.element('#invite-error-2').to.be.visible.before(models.pause + 1000)

      client
        .click('#user-icon-3')
        .execute("angular.element('input#user-icon-2').blur()")
        .expect.element('#invite-error-2').to.not.be.visible.before(models.pause + 1000)


    },

    'should move on to signup/finish after fixed': function(client){

      client
        .clearValue('#user-icon-2')
        .setValue('#user-icon-2', this.options.goodInviteFour)
        .expect.element('#sign-up-flow-button').to.be.enabled.before(models.pause + 1000)

      client
        .click('#sign-up-flow-button')
        .expect.element('#sessionFullName').to.be.present.before(models.pause + 1000)

      client
        .verify.urlContains('signup/finish')
    },

    'fields should have blue border when focused and correct or empty': function(client){
      
      client
        .expect.element('#sessionFullName.border-blue-focus').to.be.present.before(models.pause + 1000)

      client
        .click('#sessionUsername')
        .execute('angular.element("#sessionFullName").blur().scope().$apply()')
        .execute('angular.element("#sessionUsername").focus().scope().$apply()')
        .expect.element('#sessionUsername.border-blue-focus').to.be.present.before(models.pause + 5000)

      client
        .click("#sessionPassword")
        .execute('angular.element("#sessionUsername").blur().scope().$apply()')
        .execute('angular.element("#sessionPassword").focus().scope().$apply()')
        .expect.element('#sessionPassword.border-blue-focus').to.be.present.before(models.pause + 1000)

    },

    'fields should have orange border when blurred and insufficient':  function(client){

      client.expect.element('#sessionFullName.orange-error').to.be.present.before(models.pause + 1000)
      
      client.expect.element('#sessionUsername.orange-error').to.be.present.before(models.pause + 1000)

      client
        .click('#sessionFullName')
        .execute('angular.element("#sessionPassword").blur()')
        .execute('angular.element("#sessionFullName").focus()')
        .verify.cssClassPresent('#sessionPassword', 'orange-error')

    },

    'name fields should turn red if enter is clicked with errors': function(client){

      client
        .click('.next-btn')

      // making sure these classes are present
      client.expect.element('#sessionFullName.red-error').to.be.present.before(models.pause + 1000)
      client.expect.element('#sessionUsername.red-error').to.be.present.before(models.pause + 1000)
      client.expect.element('#sessionPassword.red-error').to.be.present.before(models.pause + 1000)

    },

    'name fields should show tool tip if focused after red-error': function(client){

      client
        .click('#sessionFullName')
        .execute('angular.element("#sessionFullName").focus()')
        .expect.element('#full-name-tooltip').to.be.visible.before(models.pause + 1000)

      client
        .click('#sessionUsername')
        .execute('angular.element("#sessionFullName").blur()')
        .execute('angular.element("#sessionUsername").focus()')
        .expect.element('#full-name-tooltip').to.not.be.visible.after(1000)

      client
        .expect.element('#username-tooltip').to.be.visible.before(models.pause + 1000)

      client
        .click('#sessionPassword')
        .execute('angular.element("#sessionUsername").blur()')
        .execute('angular.element("#sessionPassword").focus()')
        .expect.element('#username-tooltip').to.not.be.visible.before(models.pause + 1000)

      client
        .expect.element('#password-tooltip').to.be.visible.before(models.pause + 1000)

      client
        .click('#sessionFullName')
        .execute('angular.element("#sessionPassword").blur()')
        .execute('angular.element("#sessionFullName").focus()')
        .expect.element('#password-tooltip').to.not.be.visible.after(1000)

    },

    'name fields should go back to blue border after fixed': function(client){
      
      client
        .setValue('#sessionFullName', this.options.fullName)
        .expect.element('#sessionFullName.border-blue-focus').to.be.present.before(models.pause + 1000)

      client
        .setValue('#sessionUsername', this.options.usernameTwo)
        .expect.element('#sessionUsername.border-blue-focus').to.be.present.before(models.pause + 1000)

      client
        .setValue('#sessionPassword', this.options.password)
        .expect.element('#sessionPassword.border-blue-focus').to.be.present.before(models.pause + 1000)

    },

    'nav dot check on finish page should work and inputs filled': function(client){

      client
        .click('#email-nav-bullet')
        .expect.element('#sessionEmail').to.be.present.before(models.pause + 500)

      client
        .verify.urlContains('signup/email')

      client
        .expect.element('#sessionEmail').to.have.value.that.equals(this.options.emailTwo);

      client
        .click('#org-nav-bullet')
        .expect.element('#sessionOrganization').to.be.present.before(models.pause + 1000)

      client
        .verify.urlContains('signup/organization')

      client
        .expect.element('#sessionOrganization').to.have.value.that.equals(this.options.orgName);

      client
        .click('#url-nav-bullet')
        .expect.element('#sessionURL').to.be.present.before(models.pause + 1000)

      client
        .verify.urlContains('/signup/url')

      client
        .expect.element('#sessionURL').to.have.value.that.equals(this.options.urlTwo);

      client
        .click('#invite-nav-bullet')
        .expect.element('#user-icon-0').to.be.present.before(models.pause + 1000)

      client
        .verify.urlContains('/signup/invitations')

      client
        .expect.element('#user-icon-0').to.have.value.that.equals(this.options.goodInviteOne)

      client
        .expect.element('#user-icon-1').to.have.value.that.equals(this.options.goodInviteThree)

      client
        .expect.element('#user-icon-2').to.have.value.that.equals(this.options.goodInviteFour)

      client    
        .expect.element('#user-icon-3').to.have.value.that.equals(this.options.goodInviteTwo)

      client
        .click('#finish-nav-bullet')
        .expect.element('#sessionFullName').to.be.present.before(models.pause + 1000)

      client
        .verify.urlContains('signup/finish')

      client
        .expect.element('#sessionFullName').to.have.value.that.equals(this.options.fullName)

      client
        .expect.element('#sessionUsername').to.have.value.that.equals(this.options.usernameTwo)

      client
        .expect.element('#sessionPassword').to.have.value.that.equals(this.options.password)

    },

    'should log in and move to canvas': function(client){
      
      client
        .expect.element('.next-btn').to.be.enabled

      client
        .click('.next-btn')

      client
      .expect.element('.nav-org-name').to.be.present.before(models.pause + 5000)

      client
        .verify.urlContains('/canvas')
    },
}

