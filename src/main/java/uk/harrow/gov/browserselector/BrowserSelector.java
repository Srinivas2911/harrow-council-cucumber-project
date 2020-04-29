package uk.harrow.gov.browserselector;


import org.apache.log4j.Logger;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import uk.harrow.gov.basepage.BasePage;

public class BrowserSelector extends BasePage {

    /* projectPath as String is assigned for all project to choose local user directory
     * thru the ("user*dir")
     * Browser selector extends to BasePage in search of the Webdriver
     */
    private static final Logger log = Logger.getLogger(BrowserSelector.class.getName());

    String projectPath = System.getProperty("user.dir");

    public void selectBrowser(String browser) {
        if (browser.equalsIgnoreCase("chrome")) {
            System.setProperty("webdriver.chrome.driver", projectPath + "/drivers/chromedriver.exe");
            log.info("Launching Chrome Browser");
            driver = new ChromeDriver();
        } else if (browser.equalsIgnoreCase("firefox")) {
            System.setProperty("webdriver.gecko.driver", projectPath + "/drivers/geckodriver.exe");
            log.info("Launching Chrome Browser");
            driver = new FirefoxDriver();
        } else if (browser.equalsIgnoreCase("ie")) {
            System.setProperty("webdriver.ie.driver", projectPath + "/drivers/IEDriverServer.exe");
            log.info("Launching Chrome Browser");
            driver = new InternetExplorerDriver();
        } else {
            log.info("Browser Not Launched");
            System.out.println("Wrong browser name");
        }
    }
}
