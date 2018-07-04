var controller = require('../../helpers/controller');
var models = require('../../helpers/model');

module.exports = {

    options :{
      email: 'someEmail@mailinator.com',
      inviteEmail:'someInvitetestemail@mailinator.com',
      inviteEmailTwo: 'someInviteTwo@mailinator.com',
      orgName: 'yacht rockers',
      url: 'yachtrockers',
      organizer : 'Daryl Hall',
      fullName: 'John Oates',
      username : 'half-oates',
      password : 'pass',
      db       : "",
      domain: models.url
      
    },

    before :function(browser, done) {
      var context = this;
      var options = this.options;

      options.token = controller.createToken({
        email:this.options.inviteEmail,
        organizer: this.options.organizer,
        organizationName: this.options.orgName,
        slug: this.options.url,
        organizationId: "569d6a9467df6fe384e98907",
        canvasId: "569d6a9467df6fe384e98909"
      }, 2)

      controller.connectToDB(function (db) {
        
        // loading data
        var user = models.userOne;
        var users = db.collection('users');
        users.insert(user);

        var invite = models.inviteOne;

        var invites = db.collection('invites');
        invites.insert(invite);

        var org = models.orgOne;
        var orgs = db.collection('organizations');
        orgs.insert(org);

        options.db = db;
        done();
    
      });
    },

    after : function(client, done) {
      // getting collections
      var options = this.options;
      var invites = this.options.db.collection('invites');
      var orgs = this.options.db.collection('organizations');
      var users = this.options.db.collection('users');

      var docs = invites.find({"email":options.inviteEmail}).toArray(function(err, docs){

        // this is a check to make sure the db coll invites was updated
        if(docs[0].status !== 'accepted'){
          client.verify.urlContains('DB FAILED TO UPDATE STATUS OF INVITE TO ACCEPTED')
        }

        invites.remove({email: options.inviteEmail});
        orgs.remove({slug: options.url});
        users.remove({'primaryEmail': options.inviteEmail});
        users.remove({'primaryEmail': options.email});   
        options.db.close();
        client.end();
        done();
      });

    },

    'new invite clicks from email, testing info on page': function(client) {

      client
        .url(this.options.domain +'/signup/invite/inviteToken=' + this.options.token)
        .expect.element('#sessionFullName').to.be.present.before(models.pause + 5000)

      client
        .expect.element('#invite-organizer-name').text.to.equal(this.options.organizer)

      client
        .expect.element('#group-slug').text.to.equal(this.options.orgName)

      client
        .expect.element('#sign-in-url').text.to.equal(this.options.url + '@launchpadcentral.com')

      client
        .expect.element('#sign-up-flow-button').text.to.equal('JOIN')

    },

    'should have blue border when focused': function(client){

      client
        .click('#sessionFullName')
        .expect.element('#sessionFullName.border-blue-focus').to.be.present.before(models.pause + 1000)

      client
        .click('#sessionUsername')
        .expect.element('#sessionUsername.border-blue-focus').to.be.present.before(models.pause + 1000)

      client
        .expect.element('#sessionFullName.border-blue-focus').to.not.be.present.before(models.pause + 1000)

    },

    'it should go orange with an invalid username': function(client){

      client
        .setValue('#sessionFullName', '$')
        .expect.element('#sessionFullName.orange-error').to.be.present.before(models.pause + 1000)

      client
        .setValue('#sessionUsername', '$%')
        .expect.element('#sessionUsername.orange-error').to.be.present.before(models.pause + 1000)

      client
        .setValue('#password', 'so')
        .expect.element('#password.orange-error').to.be.present.before(models.pause + 1000)

    },

    'it should have a red border when submitting with an error': function(client){
      client
        .click('.next-btn')
        .expect.element('#sessionFullName.red-error').to.be.present.before(models.pause + 1000)

      client
        .expect.element('#sessionUsername.red-error').to.be.present.before(models.pause + 1000)

      client
        .expect.element('#password.red-error').to.be.present.before(models.pause + 1000)


    },

    'it should throw username taken error on focus after submit': function(client){
      client
        .clearValue('#sessionFullName')
        .clearValue('#sessionUsername')
        .clearValue('#password')
        .setValue('#sessionFullName', this.options.fullName)
        .setValue('#sessionUsername', this.options.username)
        .setValue('#password', 'somePass')
        .click('.next-btn')
        .expect.element('#sessionUsername.red-error').to.be.visible.before(models.pause + 1000)

      client
        .click('#sessionUsername')
        .expect.element('#username-error').to.be.visible.before(models.pause + 1000)
    },

    'should log in to canvas after correcting username issue': function(client){
      client
        .clearValue('#sessionUsername')
        .setValue('#sessionUsername', 'more-oates')
        .click('.next-btn')
        .pause(models.pause + 1200)
        .verify.urlContains('/canvas')
    },

    'should send a return to old token back to login': function(client){
      client
        .url(this.options.domain +'/signup/invite/inviteToken=' + this.options.token)
        .expect.element('#returning-invite').to.be.visible.before(models.pause + 600)

      client.verify.urlContains('/signup/signin')

      client
        .click('#close-modal-welcome')
        .expect.element('#returning-invite').to.not.be.present.before(models.pause + 600)
    }


}

