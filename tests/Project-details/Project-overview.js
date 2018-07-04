var model = require('../../helpers/model');
var controller = require('../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;


module.exports = {

  'login to workspace': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://app.staging.glidr.io')
        // .resizeWindow(1024, 768).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'looks for glidr logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'searches for active container for email').pause(model.pause + 500)
        .click('div.signin-form-container')
      browser
        .setValue('input[type=text]', 'dortiz@launchpadcentral.com')
        .verify.elementPresent('div.signin-form-container', 'searches for active container for password').pause(model.pause + 500)
        .click('input[type=password]')
      browser
        .setValue('input[type=password]', 'Testtest1!')
        .click('div.signup-show-password')
        .verify.elementPresent('div.login-button', 'checks for button is active').pause(model.pause + 500)
        .click('div.login-button')
        .waitForElementPresent('div.org-container', 4000).pause(model.pause + 500)
  },

  'Verify a project and org' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("(//div[@class='org-dashboard-card-container'])[11]", 4000).pause(model.pause + 500)
        .click("(//div[@class='org-dashboard-card-container'])[11]")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 4000)
        .click('div.hamburger-holder')
  },

  'Project overview': function(browser) {
      browser
        .verify.elementPresent('div.side-nav-subSection-title', 'selects a project').pause(model.pause + 1500)
        .click('div.side-nav-subSection-title')
        .verify.elementPresent('div.workspace-overview-btn', 'opens overview').pause(model.pause + 1500)
        .click('div.workspace-overview-btn')
        .pause(model.pause + 1500)

        .useXpath()
        .verify.elementPresent("(//div[@class='details-content'])", 'project description').pause(model.pause + 1500)
        .click("(//div[@class='details-content'])")
        .clearValue("(//textarea[@class='content-field-text'])")
        .setValue("(//textarea[@class='content-field-text'])", 'La Ciudad de México, anteriormente conocida como el Distrito Federal,nota 1​ es una de las 32 entidades federativas de México,18​19​20​ así como la capital de los Estados Unidos Mexicanos.21​ Se localiza en el Valle de México, a una altitud media de 2,240 msnm. Tiene una superficie de 1,495 km2, y se divide administrativamente en 16 delegaciones. Su población es de 8.9 millones de habitantes aproximadamente. Sin embargo, cuando se considera también la Zona Metropolitana del Valle de México,22​ suma entonces una población total de más de 21 millones de habitantes, lo que la coloca en el noveno puesto de las aglomeraciones urbanas más grandes y más pobladas del mundo, y con ello la más grande del continente americano y del mundo hispanohablante.23​')

        .verify.elementPresent("(//div[@class='details-content'])[2]", 'problem statement').pause(model.pause + 1500)
        .click("(//div[@class='details-content'])[2]")
        .clearValue("(//textarea[@class='content-field-text'])[2]")
        .setValue("(//textarea[@class='content-field-text'])[2]", 'Water. It is increasingly difficult to supply regular and equitable clean and affordable water to all inhabitants of the city and surrounding areas. Many people in the city are living with an amount of water that does not allow meet their basic needs.')

        .verify.elementPresent("(//div[@class='details-content'])[3]", 'solution statement').pause(model.pause + 1500)
        .click("(//div[@class='details-content'])[3]")
        .clearValue("(//textarea[@class='content-field-text'])[3]")
        .setValue("(//textarea[@class='content-field-text'])[3]", 'Public security. Although the situation has improved greatly over recent years and other cities of the world (including US) have more high crime rates, we still have the chance to be robbed or assaulted in the street, car or public transport, or being a victim of a high impact crime such as kidnapping. Also there’s a hard situation about Violence Against Women, because there’s a lot of street harassment and sexual abuses to women. Mexico are suffering a strong problem about feminicides (seven women murdered daily by men or Machista violence) and perhaps Mexico City have a low rate of this kind of crimes compared to other states, the problem was raises after the 24A demonstrations. Many individuals and feminist collectives are decided to tackle this problematic.')

        .verify.elementPresent("(//div[@class='details-content'])[4]", 'who is it for').pause(model.pause + 1500)
        .click("(//div[@class='details-content'])[4]")
        .clearValue("(//textarea[@class='content-field-text'])[4]")
        .setValue("(//textarea[@class='content-field-text'])[4]", 'Mexico City, Mexico’s largest city and the most populous metropolitan area in the Western Hemisphere, is also known as Distrito Federal, or the federal district. It is the country’s economic and cultural hub, as well as home to the offices of the federal government.')

        .useCss()
        .verify.elementPresent('div.project-details-add-section-container.clickable', 'add a field').pause(model.pause + 1500)
        
        .useXpath()
        .click("(//div[@class='project-details-add-section-container clickable'])")
        .pause(model.pause + 2000)
        .setValue("(//input[@class='new-content-field-title'])", 'Public Safety')
        .pause(model.pause + 500)
        .click("(//div[@class='new-content-field-save position-absolute enabled cancel'])")
        .pause(model.pause + 500)
        .click("(//div[@class='project-details-add-section-container clickable'])")
        .pause(model.pause + 2000)
        .setValue("(//input[@class='new-content-field-title'])", 'Public Safety')
        .pause(model.pause + 500)
        .click("(//div[@class='new-content-field-save position-absolute enabled'])")

        .verify.elementPresent("(//div[@class='project-dashboard-dropdown-container'])", 'drop down time frame').pause(model.pause + 1500)
        .click("(//div[@class='project-dashboard-dropdown-container'])")
        .pause(model.pause + 500)
        .click("(//div[@class='project-dashboard-dropdown-container'])")

        .verify.elementPresent("(//div[@class='project-dashboard-dropdown-container'])[2]", 'drop down type of project').pause(model.pause + 1500)
        .click("(//div[@class='project-dashboard-dropdown-container'])[2]")
        .pause(model.pause + 500)
        .click("(//div[@class='project-dashboard-dropdown-container'])[2]")

        .verify.elementPresent("(//div[@class='project-dashboard-dropdown-container'])[3]", 'stage').pause(model.pause + 1500)
        .click("(//div[@class='project-dashboard-dropdown-container'])[3]")
        .pause(model.pause + 500)
        .click("(//div[@class='project-dashboard-dropdown-container'])[3]")

        .verify.elementPresent("(//div[@class='project-dashboard-dropdown-container'])[4]", 'describe the market').pause(model.pause + 1500)
        .click("(//div[@class='project-dashboard-dropdown-container'])[4]")
        .pause(model.pause + 500)
        .click("(//div[@class='project-dashboard-dropdown-container'])[4]")

        .verify.elementPresent("(//div[@class='project-dashboard-dropdown-container'])[5]", 'describe the technology').pause(model.pause + 1500)
        .click("(//div[@class='project-dashboard-dropdown-container'])[5]")
        .pause(model.pause + 500)
        .click("(//div[@class='project-dashboard-dropdown-container'])[5]")

        .useCss()
        .verify.elementPresent('div.project-labels-add.float-right', 'opens to add labels').pause(model.pause + 1500)
        .click('div.project-labels-add.float-right')
        .setValue('input.project-label-input.focused', 'one labeld')

        .pause()
        .useXpath()
        .verify.elementPresent("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])", 'notes for invesments').pause(model.pause + 1500)
        .click("(//div[@class='public-DraftEditor-content'])")
        .setValue("(//div[@class='public-DraftEditor-content'])", ['Clarification', browser.Keys.ENTER])

        .useCss()
        .verify.elementPresent('div.float-right.supporting-documents-add-button.clickable')
        .click('div.float-right.supporting-documents-add-button.clickable')
        .setValue('input[type="file"]', require('path').resolve(__dirname + '/log.png'))
        .refresh()
        .pause(model.pause + 1800)
        .end();
    },
}
