 ###E2E Tests for V2
1. Install nightwatch: npm install -g nightwatch
2. Install dependencies: npm install
3. Install Java: http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html 
4. Install Node (npm i node)
5. Install Selenium WebDriver standlone: https://www.seleniumhq.org/download/
6. Install (Download) Geckodriver (must be installed or moved to node_modules folder)
7. Install (Download) ChromeDriver
8. Install latest version of Firefox



 To run all tests on terminal:
  * On terminal log to ~/glidr-dev/integration-tests  on master

  * To run by group run with flag --group
  * nightwatch --group canvas  :: will only run canvas tests
  * nightwatch --skipgroup canvas   :: will run all tests except canvas
  * nightwatch --skipgroup canvas,activity    :: will run all tests except for canvas and activity feed
  
  To run individual test 
	 nightwatch --test tests/team-mgmt/Team_mgmt_accesslog.js


  *Selenium webdriver has been updated to geckodriver with Marionette. Firefox was updated to latest version 60. The update was necesary to run cleaner testing. 
    


  
 
 