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

      var users = this.options.db.collection('profiles');
      users.remove({'email':this.options.email});

      this.options.db.close();
      client.end();
    },

    'user should be redirected to /login if the url is random': function(client) {
      client
        .url(this.options.domain + '/signup/2543etrgdf')
        .verify.urlContains(this.options.domain + '/login')

    },

    'user should be redirected to /login if token is invalid': function(client) {
      client
        .url(this.options.domain + '/signup/email/2543etrgdf')
        .verify.urlContains(this.options.domain + '/login')

    },

    'user should be able to access signup flow at /signup/email': function(client) {
      client
        .url(this.options.domain + '/signup/email')
        .verify.urlContains(this.options.domain + '/signup/email')

    },

    'user should be redirected to /email if they access /url outside of the flow of the app': function(client) {
      client
        .url(this.options.domain + '/signup/url')
        .verify.urlContains(this.options.domain + '/signup/email')

    },

    'user should be redirected to /email if they access /organization outside of the flow of the app': function(client) {
      client
        .url(this.options.domain + '/signup/organization')
        .verify.urlContains(this.options.domain + '/signup/email')

    },

    'user should be redirected to /login if they access /invitations outside of the flow of the app': function(client) {
      client
        .url(this.options.domain + '/signup/invitations')
        .verify.urlContains(this.options.domain + '/signup/email')

    },

    'user should be redirected to /email if they access /finish outside of the flow of the app': function(client) {
      client
        .url(this.options.domain + '/signup/finish')
        .verify.urlContains(this.options.domain + '/signup/email')

    },

    'user should be redirected to /login if they access /getstarted outside of the flow of the app': function(client) {
      client
        .url(this.options.domain + '/signup/getstarted')
        .verify.urlContains(this.options.domain + '/login')

    },

    'user should be redirected to /login if they access /notfound outside of the flow of the app': function(client) {
      client
        .url(this.options.domain + '/signup/notfound')
        .verify.urlContains(this.options.domain + '/login')

    },

    'user should be redirected to /login if they access /verifyemail outside of the flow of the app': function(client) {
      client
        .url(this.options.domain + '/signup/verifyemail')
        .verify.urlContains(this.options.domain + '/login')

    },

    'user should be redirected to /login if they access /organizationlist outside of the flow of the app': function(client) {
      client
        .url(this.options.domain + '/signup/organizationlist')
        .verify.urlContains(this.options.domain + '/login')

    },

    'user should be redirected to /login if they access /organizationName outside of the flow of the app': function(client) {
      client
        .url(this.options.domain + '/signup/organizationName')
        .verify.urlContains(this.options.domain + '/signup/email')

    },

    'user should be redirected to /login if they access /invite outside of the flow of the app': function(client) {
      client
        .url(this.options.domain + '/signup/invite')
        .verify.urlContains(this.options.domain + '/login')

    },

    'user should be redirected to /login if they access /invite-finish outside of the flow of the app': function(client) {
      client
        .url(this.options.domain + '/signup/invite-finish')
        .verify.urlContains(this.options.domain + '/login')

    },

     'user should be redirected to /login if they access /:slug/signup outside of the flow of the app': function(client) {
      client
        .url(this.options.domain + '/signup/fox/signup')
        .verify.urlContains(this.options.domain + '/login')

    },

     'user should be redirected to /login if they access /findyourorganization outside of the flow of the app': function(client) {
      client
        .url(this.options.domain + '/signup/findyourorganization')
        .verify.urlContains(this.options.domain + '/login')

    },

     'user should be redirected to /login if they access /signin outside of the flow of the app': function(client) {
      client
        .url(this.options.domain + '/signup/signin')
        .verify.urlContains(this.options.domain + '/login')

    },

}