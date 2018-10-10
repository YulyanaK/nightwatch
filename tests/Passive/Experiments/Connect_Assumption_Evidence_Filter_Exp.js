var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');
var ObjectId = require('mongodb').ObjectId;


module.exports = {

 

  'Login to orgs for experiments': function(browser) {
      browser
        //.url(model.url + '')
        .url('https://app.glidr.io')
          // .resizeWindow(1024, 768).pause(model.pause + 500)
        .verify.elementPresent('div.login-logo.lpc-glidr-beta-login', 'looks for glidr logo').pause(model.pause + 500)
        .verify.elementPresent('div.signin-form-container', 'searches for active container for email').pause(model.pause + 500)
        .click('div.signin-form-container')
      browser
        .setValue('input[type=text]', 'ykarpava+automation@glidr.io')
        .verify.elementPresent('div.signin-form-container', 'searches for active container for password').pause(model.pause + 500)
        .click('input[type=password]')
      browser
        .setValue('input[type=password]', 'Brooklyn1!')
        .click('div.signup-show-password')
        .verify.elementPresent('div.login-button', 'checks for button is active').pause(model.pause + 500)
        .click('div.login-button')
        .waitForElementPresent('div.org-container', 4000).pause(model.pause + 500)
  },

  'Verify the organizations for project dashboard' : function(browser) {
      browser
        .useXpath()
        .waitForElementPresent("(//div[@class='org-dashboard-card-container'])[2]", 4000).pause(model.pause + 500)
        .click("(//div[@class='org-dashboard-card-container'])[2]")

        .useCss()
        .waitForElementPresent('div.hamburger-holder', 4000)
        .click('div.hamburger-holder')
  },
  

   'Select a project to create an experiments': function(browser) {
      browser
        .waitForElementPresent('.side-nav-subSection-title', 4000)
        .verify.elementPresent('div.side-nav-subSection-title', 'selecting a project').pause(model.pause + 1500)
        .click('.side-nav-subSection-title')

        .verify.elementPresent('div.workspace-takeover-btn', '+ to add a research').pause(model.pause + 1500)
        .click('div.workspace-takeover-btn')
        .verify.elementPresent('div.lpc-evaluation', 'selects an experiment').pause(model.pause + 1500)
        .click('div.lpc-evaluation')
  },

  'Create an experiment plan phase': function(browser) {
    browser
        .waitForElementPresent('div.interview-datepicker-holder', 6000)
        .click('div.interview-datepicker-holder')
        .verify.elementPresent('div.DayPicker-Week:nth-of-type(4) > div.DayPicker-Day:nth-of-type(5)', 'date selectd').pause(model.pause + 2500)
        .click('div.DayPicker-Week:nth-of-type(4) > div.DayPicker-Day:nth-of-type(5)')
        .verify.elementPresent('div.experiment-add-member-plus', 'drop down').pause(model.pause + 2500)
        .click('div.experiment-add-member-plus')
        .verify.elementPresent('div.experiment-add-member-container', 'selects a users').pause(model.pause + 1500)
        .click('div.experiment-add-member-container')
        .verify.elementPresent('.experiments-navigation-member-container', 'closes dropdown users').pause(model.pause + 500)
        .click('.experiments-navigation-member-container')

        //adding research
        .verify.elementPresent('div.content-field-container.organization-setting-input.org-name', 'research name').pause(model.pause + 1500)
        .click('div.content-field-container.organization-setting-input.org-name')
        .setValue('.content-field-textarea', ['Wystąpili po raz pierwszy na igrzyskach w Barcelonie w 1992 roku jako niezależni uczestnicy olimpijscy. Byli to sportowcy z Federalnej Republiki Jugosławii oraz Macedonii.', browser.Keys.ENTER]) 

        .verify.elementPresent('div.text-editor-container', 'hypothesis statement').pause(model.pause + 1500) 
        .click('div.text-editor-container')

        .useXpath()
        .click("//*[contains(text(), 'HYPOTHESIS STATEMENT')]")
        .keys('Niezależni sportowcy olimpijscy na letnich igrzyskach olimpijskich ')

        .useCss()
        .verify.elementPresent('.content-field-container.organization-setting-input.org-name div:nth-of-type(3)', 'Plan details').pause(model.pause + 1500)

        .useXpath()
        .click("//*[contains(text(), 'PLAN DETAILS')]")
        .keys('dlaczego komunistyczne władze prześladowały ostatniego żyjącego więźnia nazistowskiego obozu zagłady w Bełżcu?')
    
        .useCss()         
        .verify.elementPresent('div.reusable-circle-button', 'connect an assumption').pause(model.pause + 1500) 
        .click('div.reusable-circle-button')   
        .verify.elementPresent('div.content-field-container.success-metrics-input', 'what metrics will you measure?').pause(model.pause + 1500) 

        .useXpath()
        .pause(model.pause + 800) 
        .click("//*[contains(text(), 'WHAT METRIC WILL YOU MEASURE?')]")
        .keys('za co biskup Sylwester został objęty infamią?')

        .useXpath()
        .pause(model.pause + 800) 
        .click("//*[contains(text(), 'HOW WOULD YOU DEFINE SUCCESS FOR THIS METRIC?')]")
        .keys('które pająki mogą mieć tylko czworo oczu?')
        .pause(model.pause + 800) 
        .click("//*[contains(text(), 'ADD')]")

        // connects assumptions
        .waitForElementPresent("(//div[@class='hover position-relative float-right success-circle-button'])[2]", 6000) 
        .click("(//div[@class='hover position-relative float-right success-circle-button'])[2]")
        
        .useCss()
        .verify.elementPresent('div.connect-card-card-container', 'selects 1st assumption').pause(model.pause + 2000) 
        .click('div.connect-card-card-container')
        .verify.elementPresent('div.connect-card-card-container:nth-of-type(3)', 'selects 2nd assumption').pause(model.pause + 1500) 
        .click('div.connect-card-card-container:nth-of-type(3)')
        .verify.elementPresent('div.connect-card-card-container:nth-of-type(4)', 'selects 3rd assumption').pause(model.pause + 1500) 
        .click('div.connect-card-card-container:nth-of-type(4)')
        .verify.elementPresent('div.connect-card-card-container:nth-of-type(5)', 'selects 4th assumption').pause(model.pause + 1500) 
        .click('div.connect-card-card-container:nth-of-type(5)')

        //search for connectd assumptions
        .verify.elementPresent('input.connect-cards-search-input', 'search field').pause(model.pause + 900) 
        .click('input.connect-cards-search-input')
        .setValue('input.connect-cards-search-input', 'an')
        .pause(model.pause + 900) 
        .clearValue('input.connect-cards-search-input')
        .setValue('input.connect-cards-search-input', 'an')
        .pause(model.pause + 900) 
        .clearValue('input.connect-cards-search-input')
        .setValue('input.connect-cards-search-input', 'c')
        .pause(model.pause + 900) 
        .clearValue('input.connect-cards-search-input')
        .setValue('input.connect-cards-search-input', 'd')
        .pause(model.pause + 900) 
        .clearValue('input.connect-cards-search-input')

        //filter canvas section
        .verify.elementPresent('div.experiments-filter-icon', 'filter opens').pause(model.pause + 900) 
        .click('div.experiments-filter-icon')
        .pause(model.pause + 900) 

        .useXpath()
        .click("//*[contains(text(), 'CANVAS SECTION')]")
        .pause(model.pause + 900) 
        .click("//*[contains(text(), 'Key Resources')]")
        .pause(model.pause + 900) 
        .click("//*[contains(text(), 'Unassigned')]")
        .pause(model.pause + 900) 
        .click("//*[contains(text(), 'Cost Structure')]")
        .pause(model.pause + 900) 
        .click("//*[contains(text(), 'Channels')]")
        .pause(model.pause + 900) 

        .click("(//*[contains(text(), 'BACK')])[3]")
        .pause(model.pause + 900) 
        .click("//*[contains(text(), 'RESET')]")
        .pause(model.pause + 900) 

        //add a new assupmtion
        .verify.elementPresent("//div[text()='NEW']", 'add a new assumption').pause(model.pause + 1500) 
        .click("//div[text()='NEW']")
        .pause(model.pause + 900) 
        .click("(//textarea[@class='content-field-textarea'])[3]").pause(model.pause + 1000)
        .clearValue("(//textarea[@class='content-field-textarea'])[5]").pause(model.pause + 1000)
        .keys('Canvas Section Assumption').pause(model.pause + 500)
        .click("(//*[contains(text(), 'SUMMARY')])[2]")
        .keys('Hãy cùng xây dựng Wiktionary! Bitwa o Knipawę – całość zmagań o kontrolę nad portową dzielnicą Królewca, wzrost związanych z nią podatków skutkował zmianą orientacji politycznej pospólstwa i prokrzyżackim powstaniem. W jego następstwie dzielnice Stare Miasto i Lipnik powróciły pod władzę zakonu krzyżackiego, a wierna Kazimierzowi IV pozostała jedynie portowa dzielnica Knipawa. Wielki mistrz Zakonu Ludwig von Erlichshausen skierował przeciwko niej siły dowodzone przez wielkiego szpitalnika Heinricha Reuss von Plauena, które niedostatecznie silne aby przeprowadzić szturm, rozpoczęły oblężenie ufortyfikowanej i położonej na rzecznej wyspie dzielnicy. Wobec otrzymania niewystarczającej pomocy ze strony kierowanego przez Johannesa von Baysen Związku Pruskiego i rozbicia przez Krzyżaków odsieczy, zmuszona została po szturmie do kapitulacji na honorowych warunkach po 14 tygodniach oblężenia. Czytaj więcej…')
        .click("(//div[@class='publish-btn'])")
        .pause(model.pause + 1500)
        .click("(//*[contains(text(), 'RUN EXPERIMENT')])[2]")
        .pause(model.pause + 1000)
  },

  'Run an experiment connect an evidence': function(browser) {
     browser
        .verify.elementPresent("(//div[@class='hover position-relative float-right success-circle-button'])[2]", 'opens first connection box').pause(model.pause + 1500)
        .click("(//div[@class='hover position-relative float-right success-circle-button'])[2]")
        .pause(model.pause + 500)
        .click("(//div[@class='hover position-relative float-right success-circle-button'])[3]")
        .pause(model.pause + 500)

        .useCss()
        .verify.elementPresent('div.reusable-circle-button', 'clicks on circle btn').pause(model.pause + 500)
        .pause(model.pause + 500)
        .click('div.connect-more-info')
        .pause(model.pause + 500)
        .click('div.connect-more-info')

        // connecting evidences
        .verify.elementPresent('div.connect-card-card-container:nth-of-type(2)', 'connected 3rd evidence').pause(model.pause + 1500)
        .click('div.connect-card-card-container:nth-of-type(2)')
        .verify.elementPresent('div.connect-card-card-container:nth-of-type(3)', 'connected 4th evidence').pause(model.pause + 1500)
        .click('div.connect-card-card-container:nth-of-type(3)')
        .verify.elementPresent('div.connect-card-card-container:nth-of-type(4)', 'connected 5th evidence').pause(model.pause + 1500)
        .click('div.connect-card-card-container:nth-of-type(4)')
        
        //search for connectd evidence
        .verify.elementPresent('input.connect-cards-search-input', 'search field').pause(model.pause + 900) 
        .click('input.connect-cards-search-input')
        .setValue('input.connect-cards-search-input', 'an')
        .pause(model.pause + 900) 
        .clearValue('input.connect-cards-search-input')
        .setValue('input.connect-cards-search-input', 'an')
        .pause(model.pause + 900) 
        .clearValue('input.connect-cards-search-input')
        .setValue('input.connect-cards-search-input', 'c')
        .pause(model.pause + 900) 
        .clearValue('input.connect-cards-search-input')
        .setValue('input.connect-cards-search-input', 'd')
        .pause(model.pause + 900) 
        .clearValue('input.connect-cards-search-input')
        .pause(model.pause + 900) 

    },

'Add new Evidence to connections': function(browser){
      browser
        .useXpath()
        .click("//div[text()='NEW']")
        .waitForElementPresent("//div[@class='choose-card-type-selection-card-title' and text()='INTERVIEW']", 5000)
        .pause(model.pause + 2000)
        .click("//div[@class='choose-card-type-selection-card-title' and text()='INTERVIEW']")//select Interview
        .waitForElementPresent("(//div[text()='Add person'])[2]", 5000)
        .click("(//div[text()='Add person'])[2]")
        .pause(model.pause + 2000)
        .moveToElement("(//input[@class='new-interviewee-input'])[1]", 10, 10)
        .setValue("(//input[@class='new-interviewee-input'])[1]", 'Any name')//Adding Interviewee
        .pause(model.pause + 500)
        .moveToElement("(//input[@class='new-interviewee-input'])[2]", 10, 10)
        .setValue("(//input[@class='new-interviewee-input'])[2]", 'Anyemail@gmail.com')
        .pause(model.pause + 500)
        .moveToElement("(//input[@class='new-interviewee-input'])[3]", 10, 10)
        .setValue("(//input[@class='new-interviewee-input'])[3]", '3472104444')
        .pause(model.pause + 500)
        .moveToElement("(//input[@class='new-interviewee-input'])[4]", 10, 10)
        .setValue("(//input[@class='new-interviewee-input'])[4]", 'Any Title')
        .pause(model.pause + 500)
        .moveToElement("(//input[@class='new-interviewee-input'])[5]", 10, 10)
        .setValue("(//input[@class='new-interviewee-input'])[5]", 'Талас муж')
        .pause(model.pause + 500)
        .moveToElement("//button[@class='new-interviewee-submit']", 10, 10)
        .click("//button[@class='new-interviewee-submit']")
        .pause(model.pause + 1000)
        .click("//div[@class='interviewee-close-text']")
        .waitForElementPresent("(//div[@class='details-title no-content' and text()='KEY INSIGHTS'])[2]", 6000)
        .click("(//div[@class='details-title no-content' and text()='KEY INSIGHTS'])[2]")
        .keys('Википедиад тавтай морилно уу.')
        .pause(model.pause + 500)
        .click("(//div[@class='details-title no-content' and text()='NOTES'])[2]")
        .keys('1921 оны Ардын хувьсгал нь Монгол Ардын Намын удирдлаган дор явагдаж харийн түрэмгийллийг эсэргүүцсэн ардын бүрэн эрхт улсын төлөөх хувьсгал байв. Ардын хувьсгалын ялалтын үр дүнд харийн түрэмгийлэгчдийг хөөн гаргаж, феодалын байгууллыг халж, Ардын эрхт хэмжээт цаазат Бүгд Найрамдах Монгол Ард Улсыг тунхагласан. 1921 оны хувьсгал нь коммунист биш харин үндэсний ардчилсан хувьсгал юм. 1911 оны хувьсгалыг лам ноёд харин 1921 оны хувьсгалыг энгийн ард, доод, дунд ту')
        .pause(model.pause + 1000)
        
        //publishing Evidence
        .click("//div[@class='publish-btn']")
        .pause(model.pause + 4000)
        .click("(//*[contains(text(), 'Done Editing')])[2]")

        //.saveScreenshot('./reports/Experiments/experiments.png')
        .end();
      },
  }



