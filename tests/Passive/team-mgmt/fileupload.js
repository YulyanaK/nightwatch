
import junit.framework.Assert;
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



// The relevant lines in this gist for the upload are #21 (where the LocalFileDetector is set) and #28 (where the file input is typed into).
// Here's the result job in Sauce Labs: https://saucelabs.com/jobs/1a408cf60af0601f49052f66fa37812c
        // .click('.file-upload-lable')
        // .setValue('input[type="file"]', require('path').resolve(__dirname + '/nunavut.gif'))
