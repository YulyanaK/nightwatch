var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');

module.exports = {


  'login to a new collection': function(browser) {
      browser
        .url('https://passive.glidr.io')
        .resizeWindow(1366, 768).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'checks for logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'checks for container to log in').pause(model.pause + 500)
        .click('div.signin-form-container')
      browser
        .setValue('input[type=text]', 'ykarpava+automation@glidr.io')
        .verify.elementPresent('div.signin-form-container', 'checks for container for email').pause(model.pause + 500)
        .click('input[type=password]')
      browser
        .setValue('input[type=password]', 'Brooklyn1!')
        .click('div.signup-show-password')
        .verify.elementPresent('div.login-button', 'checks for button').pause(model.pause + 500)
        .click('div.login-button')
  },

  'Verifies side nav container opens' : function(browser) {
      browser
        .waitForElementPresent('div.org-dashboard-card-container', 6000)
        .verify.elementPresent('.org-dashboard-card-container', 'entering basic tier organization').pause(model.pause + 500)

        .useXpath()
        .waitForElementPresent("//div[@class='org-dashboard-card-title' and text()='Senegal_QA']", 6000).pause(model.pause + 500)
        .moveToElement("//div[@class='org-dashboard-card-title' and text()='Senegal_QA']", 10, 10)
        .click("//div[@class='org-dashboard-card-title' and text()='Senegal_QA']")
        .pause(model.pause + 2000)

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 6000)
        .click('div.hamburger-holder')

  },

  'Side nav opens for a new collection' : function(browser) {
      browser
        .useXpath()
        .verify.elementPresent("(//div[@class='side-nav-plus-icon-container'])[2]", 'opens a new collection from + icon').pause(model.pause + 2000)
        .click("(//div[@class='side-nav-plus-icon-container'])[2]")
        .pause(model.pause + 1800)

        .click("(//textarea[@class='reusable-input'])")
        .pause(model.pause + 1800)
        .setValue("(//textarea[@class='reusable-input'])", 'Collections to test in Mexico')
        
        .verify.elementPresent("(//textarea[@class='reusable-input'])[2]", 'Mexico is a country between the U.S. ').pause(model.pause + 500)
        .click("(//textarea[@class='reusable-input'])[2]")
        .pause(model.pause + 1800)
        .setValue("(//textarea[@class='reusable-input'])[2]", ' Mexico was The Viceroyalty of New Spain (Spanish: Virreinato de la Nueva España) was an integral territorial entity of the Spanish Empire, established by Habsburg Spain during the Spanish colonization of the Americas. It covered a huge area that included territories in North America, Central America, Asia and Oceania. It originated after the fall of Mexico-Tenochtitlan, the main event of the Spanish conquest, which did not properly end until much later, as its territory continued to grow to the north. It was officially created on 8 March 1535 as a viceroyalty (Spanish: virreinato), the first of four viceroyalties Spain created in the Americas. Its first viceroy was Antonio de Mendoza y Pacheco, and the capital of the viceroyalty was Mexico City, established on the ancient Tenochtitlan. It included what is now Mexico plus the current U.S. states of California, Nevada, Colorado, Utah, New Mexico, Arizona, Texas, Oregon, Washington, Florida and parts of Idaho, Montana, Wyoming, Kansas, Oklahoma and Louisiana; as well as the southwestern part of British Columbia of present-day Canada; plus the Captaincy General of Guatemala (which included the current countries of Guatemala, the Mexican state of Chiapas, Belize, Costa Rica, El Salvador, Honduras, Nicaragua); the Captaincy General of Cuba (current Cuba, Dominican Republic, Puerto Rico, Trinidad and Tobago and Guadeloupe); and the Captaincy General of the Philippines (including the Philippines, the Caroline Islands, the Mariana Islands and the short lived Spanish Formosa in modern day northern Taiwan')
        .pause(model.pause + 2000)
        .click("(//div[text()='NEXT'])")
       
        .useCss()
        .pause(model.pause + 2000) 
        .verify.elementPresent('div.create-collection-project-option.clearfix', 'select a project').pause(model.pause + 900)
        .click('div.create-collection-project-option.clearfix')

        .verify.elementPresent('div.create-collection-project-option.clearfix div:nth-of-type(2)', 'select new project').pause(model.pause + 500)
        .click('div.create-collection-project-option.clearfix div:nth-of-type(2)')
        .verify.elementPresent('div.create-collection-project-option.clearfix div:nth-of-type(3)', 'select new project').pause(model.pause + 500)
        .click('div.create-collection-project-option.clearfix div:nth-of-type(3)')
        .verify.elementPresent('div.create-collection-nav-button', 'New Collection').pause(model.pause + 500)
        .click('div.create-collection-nav-button')
        .end();  
  },
}