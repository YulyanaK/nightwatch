var controller = require('../../helpers/controller.js');
var models = require('../../helpers/model');

module.exports = {

    options :{
      email:'someEmail@mailinator.com',
      orgName: 'yacht rockers',
      url: 'yachtrockers',
      goodInviteOne : 'goodEmail1@mailinator.com',
      goodInviteTwo : 'goodEmail2@mailinator.com',
      goodInviteThree : 'goodEmail3@mailinator.com',
      goodInviteFour : 'goodEmail4@mailinator.com',
      badInviteOne : 'someBadEmail',
      badInviteTwo : 'bad@emailTwo',
      fullName : 'Daryl Hall',
      username : 'half-oates',
      password : 'pass',
      domain: models.url
      
    },

    before :function(browser, done) {

      //getting token
      this.options.token = controller.createToken({email:this.options.email}, 2);

      var options = this.options;

      controller.connectToDB(function (db) {
          options.db = db;
          done()
      });
    },

    after : function(client) {
      
      var orgs = this.options.db.collection("organizations");
      orgs.remove({"slug":this.options.url});

      var users = this.options.db.collection('users');
      users.remove({'primaryEmail':this.options.email});

      this.options.db.close();
      client.end();
    },

    'enters a new user email and clicks submit': function(client) {
      client
        .url(this.options.domain + '/signup/email')
        .expect.element('#sessionEmail').to.be.present.before(models.pause + 1000);

    },

    'expects verify email to be present': function(client){
      
      client
        .setValue('#sessionEmail', [this.options.email, client.Keys.ENTER])
        .expect.element('#verify-email-card').to.be.present.before(models.pause + 1000);

      client
        .verify.urlContains('signup/verifyemail');

    },

    'returns from welcome email and goes to signup/organization': function(client){
      
      // token for someEmail@launchpadcentral.com
      client.url(this.options.domain + '/signup/email/newUserToken=' + this.options.token)
        .expect.element('#sessionOrganization').to.be.present.before(models.pause + 1000);

      client
        .verify.urlContains('signup/organization');

    },

    'enters org and moves to page signup/url': function(client){
      client
        .setValue('#sessionOrganization', [this.options.orgName, client.Keys.ENTER])
        .expect.element('#sessionURL').to.be.present.before(models.pause + 1000);

      client
        .verify.urlContains('signup/url');

    },



    'button should be enabled, clicked and user moved to signup/invitations': function(client){
      
      client
        .expect.element('#sessionURL').to.have.value.that.equals('yachtrockers')
      client
        .expect.element('#url-submit').to.be.enabled.before(models.pause + 600)

      client
        .click('#url-submit')
        .expect.element('#user-icon-0').to.be.present.before(models.pause + 2000)

      client
        .verify.urlContains('signup/invitations');

    },

    'skip this step on invitations should work': function(client){

      client
        .click('#skip-step-link')
        .expect.element('#sessionFullName').to.be.present.before(models.pause + 1000)

      client
        .verify.urlContains('signup/finish')

    },


    'name fields should go back to blue border after fixed': function(client){
      
      client
        .setValue('#sessionFullName', this.options.fullName)
        .expect.element('#sessionFullName.border-blue-focus').to.be.present.before(models.pause + 1000)

      client
        .setValue('#sessionUsername', this.options.username)
        .expect.element('#sessionUsername.border-blue-focus').to.be.present.before(models.pause + 1000)

      client
        .setValue('#sessionPassword', this.options.password)
        .expect.element('#sessionPassword.border-blue-focus').to.be.present.before(models.pause + 1000)

    },

    'should log in and move to canvas': function(client){
      
      client
        .expect.element('.next-btn').to.be.enabled

      client
        .click('.next-btn')

      client
        .pause(models.pause + 1500)
        .verify.urlContains('/canvas')
    }

}

