var controller = require('../../helpers/controller');
var models = require('../../helpers/model');

module.exports = {

    // options : {
    //   email: 'someEmail@mailinator.com',
    //   inviteEmail:'someInvitetestemail@mailinator.com',
    //   inviteEmailTwo: 'someInviteTwo@mailinator.com',
    //   organizationName: 'yacht rockers',
    //   url: 'yachtrockers',
    //   fullName : 'Dudley Moore',
    //   organizer: 'Daryl Hall',
    //   username : 'suds',
    //   password : 'pass',
    //   db       : "",
    //   domain: models.url
      
    // },

    // before :function(browser, done) {

    //   var options = this.options;
    //   var context = this
    //   options.token = controller.createToken({
    //     email:this.options.inviteEmail,
    //     organizer: this.options.organizer,
    //     slug: this.options.url,
    //     organizationName: this.options.organizationName,
    //     organizationId: "569d6a9467df6fe384e98907",
    //     canvasId: "569d6a9467df6fe384e98909"
    //   }, 2)

    //   controller.connectToDB(function (db) {
        
    //     // loading data
    //     var user = models.userOne;
    //     var users = db.collection('users');
    //     users.insert(user);

    //     var invite = models.inviteOne;
    //     var invites = db.collection('invites');
    //     invites.insert(invite);

    //     var org = models.orgOne;
    //     var orgs = db.collection('organizations');
    //     orgs.insert(org);

    //     options.db = db;
    //     done()
    //   });
    // },

    // after : function(client) {
    //   // getting collections
    //   // getting collections
    //   var invites = this.options.db.collection('invites');
    //   var orgs = this.options.db.collection('organizations');
    //   var users = this.options.db.collection('users');

    //   // removing created entries
    //   invites.remove({email: this.options.inviteEmail});
    //   orgs.remove({slug: this.options.url});
    //   users.remove({'primaryEmail': this.options.inviteEmail});
    //   users.remove({'primaryEmail': this.options.email});   


    //   this.options.db.close();
    //   client.end();
    // },

    'should enter the user through invite flow': function(browser){
      browser
        .url('https://app.staging.glidr.io')
      browser
        .expect.element('#sessionFullName').to.be.present.before(models.pause + 1500)

      browser

        // .setValue('#sessionFullName', this.options.fullName)
        // .setValue('#sessionUsername', this.options.username)
        // .setValue('#password', this.options.password)


      browser
        .click('.next-btn')
        .pause(models.pause + 1200)
        .verify.urlContains('/canvas')

      browser.end();
    },

    'should redirect to /login with any random urls': function(browser){
      
      browser.url(this.options.domain + '/klajsd')

      browser.expect.element('#sessionURL').to.be.present.before(models.pause + 1000)

      browser.verify.urlContains('/login')

    },

    'should redirect to create org from create org link on sign-in-slug': function(browser){

      browser
        .click('#create-org-button')
        .expect.element('#sessionEmail').to.be.visible.before(models.pause + 500)

      browser
        .verify.urlContains('signup/email')

    },

    'should throw modal when trying to create new org with existing email': function(browser){
      browser
        .setValue('#sessionEmail', 'someEmail@mailinator.com')
        .click('.next-btn')
        .expect.element('#email-confirm-modal').to.be.visible.before(models.pause + 50)

    },

    'should move to sign in when clicking button on modal': function(browser){

      browser
        .click('#sign-into-org-button')
        .expect.element('#sessionURL').to.be.present.before(models.pause + 1000)

      browser
        .verify.urlContains('/login')

    },

    'should redirect to find/org from sign-in/slug link': function(browser){

      browser
        .expect.element('#find-org-link').to.be.present.before(models.pause + 100)

      browser
        .click('#find-org-link')
        .expect.element('#find-organization-email').to.be.present.before(models.pause + 1000)

      browser
        .verify.urlContains('signup/findyourorganization')

      browser
        .click('#go-back-link')
        .expect.element('#sessionURL').to.be.present.before(models.pause + 250)

      browser
        .verify.urlContains('login')
      
    },

    'should not find slug': function(browser){

      var badSlug = "badSlug";
      browser
        .setValue('#sessionURL', this.options.badSlug)

        .click('#sign-in-button')
        .expect.element('#login-slug-not-found-error').to.be.visible.before(models.pause + 1000)

      browser
        .clearValue('#sessionURL')

      browser
        .sendKeys('#sessionURL', this.options.url)
        .expect.element('#login-slug-not-found-error').to.not.be.visible.before(models.pause + 1000)

      browser
        .click('#sign-in-button')
        .expect.element('#joined-user-password').to.be.present.before(models.pause + 1000)

      browser
        .verify.urlContains('signup/signin')

    },


    'should have red borders if enter clicked with empty fields': function(browser){

      browser
        .click('.next-btn')

      browser
        .expect.element('#joined-user-name.red-error').to.be.visible.before(models.pause + 1000)

      browser.expect.element('#joined-user-password.red-error').to.be.visible.before(models.pause + 1000)

      browser  
        .click('#joined-user-name')
        .setValue('#joined-user-name', 'l')
        .expect.element('#joined-user-name.red-error').to.not.be.present.before(models.pause + 1000)

      browser
        .expect.element('#joined-user-name.border-blue-focus').to.be.present.before(models.pause + 1000)

      browser
        .clearValue('#joined-user-name')
        .click('.next-btn')
        .expect.element('#joined-user-name.red-error').to.be.present.before(models.pause + 1000)

      browser
        .expect.element('#joined-user-password.red-error').to.be.present.before(models.pause + 1000)

      browser
        .clearValue('#joined-user-name')
        .setValue('#joined-user-name', 'someBadUsername')
        .expect.element('#joined-user-name.border-blue-focus').to.be.present.before(models.pause + 1000)

      browser
        .setValue('#joined-user-password', 'someFakepass')
        .click('.next-btn')

      browser
      .expect.element('#joined-user-password.password-input.orange-error').to.be.present.before(models.pause + 1000)

      browser
        .expect.element('#joined-user-name.orange-error').to.be.present.before(models.pause + 1000)

      browser
        .expect.element('.alert-bubble-password-error').to.be.visible.before(models.pause + 500)

      browser
        .click('#joined-user-name')
        .expect.element('.alert-bubble-password-error').to.not.be.visible.before(models.pause + 500)

    },

    'should log in after setting correct value': function(browser){

      browser
        .clearValue('#joined-user-name')
        .setValue('#joined-user-name', this.options.inviteEmail)
        .verify.cssClassNotPresent('#joined-user-name', 'orange-error')

      browser
        .clearValue('#joined-user-password')
        .setValue('#joined-user-password', this.options.password)
        .verify.cssClassNotPresent('#joined-user-password', 'orange-error')

      browser
        .click('.next-btn')
        .pause(models.pause + 1200)
        .verify.urlContains('/canvas')
        .end();
        
    },
}