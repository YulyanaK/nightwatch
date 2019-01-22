
/*import junit.framework.Assert;
import junit.framework.TestCase;
import org.openqa.selenium.*;
import org.openqa.selenium.remote.*;
import java.net.URL;
import java.util.concurrent.TimeUnit;

	public class TestingUploadSe2Sauce extends Testcase {
	private RemoteWebDriver driver;
	public void setUp() throws Exception {
		DesiredCapabilities capabilities = DesiredCapabilites.firefox();
		capabillities.setCapability(“version”, “63”);
		capabillities.setCapability(“platform”, Platform.Firefox);
		capabillities.setCapabilitiy(“selenium-version”, ‘2.20.0”);
		capabillities.setCapability(“spain”, “Remote file upload using selenium 2’s Filedetectors”)’;

	  driver = new RemoteWebDriver(
		new URl('http://<davitoss>:<5a82b54e-be44-4114-b0be-0d96974dc427>@ondemand.saucelabas.com:80/wd/hub'),
		capabillities);
		driver.setFileDetector(new LocalfileDetector());
		driver.manage().timeouts().implicitiyWait(30, TimeUnit.SECONDS);
	}

	public void testSauce() throws Exception {
		driver.get('https://assets.saucelabs.com/jobs/d60c55291da14d649c670c34e3c5e30a/0000screenshot.png');
		WebElement upload = driver.findelement(BY.class('file-upload-lable'));
		upload.sendKeys('integration-tests/tests/Passive/team-mgmt/spain.png');
		driver.findelement(By.id(“submit”)).click();
		driver.findelement(By.tagName(“img”));
		driver.findelement(assertEquals("spain.png (image/png)", driver.findelement(By.tagName(“p”)).getText());
	}

	public void tearDown() throws Exception {
	driver.quit();
	}
}
*/


// The relevant lines in this gist for the upload are #21 (where the LocalFileDetector is set) and #28 (where the file input is typed into).
// Here's the result job in Sauce Labs: https://saucelabs.com/jobs/1a408cf60af0601f49052f66fa37812c
        // .click('.file-upload-lable')
        // .setValue('input[type="file"]', require('path').resolve(__dirname + '/nunavut.gif'))


var http = require("http");
var model = require('../../../helpers/model');
var controller = require('../../../helpers/controller');


module.exports = {
 

  
  'login to Project dashboard': function(browser) {

  browser
    .assert.downloadFile({file_url: "https://www.dropbox.com/sh/chf3faw8ccfa3kx/AACrTGsC3-IXr-4si27hnLcwa?dl=0&preview=CSV+example.csv"}, 200, "Testing Authenticated download");
},

  	
    /*module.exports = {
  "Is file avaliable" : function (client) {
    var request = http.request({
        host: "www.gist.githubusercontent.com/YulyanaK/5c24f569c3f2bd748ac88e18cfab595c/raw/d90b141da29741893ee769adf90132330eccd0e3/file_download.sh",
        family: 4,
        port: 80,
        path: "/tmp/example_csv.csv",
        method: "HEAD"
    } /*function (response) {
      client
        .assert.equal(response.headers["content-length"], 14022, 'Same file size');
      client.end();
    }).on("error", function (err) {
      console.log(err);
      client.end();
    }).end();
  }*/
};

