package uk.harrow.gov.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.harrow.gov.utility.Utility;

public class HomePage extends Utility {

    //Log the webelements and methods into Log4j reports
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

//Using selenium @Findby and initElement methods
// using _ help separate from variable

    @FindBy(xpath = "//span[@class='icon-fallback']")
    WebElement _loginLink;

    @FindBy(xpath = "//span[@class='button__text'][contains(text(),'Services')]")
    WebElement _servicesLink;


    public void clickOnLogin_RegisterLink() {
        Reporter.addStepLog("Clicking on Login link : " + _loginLink.toString());
        clickOnElement(_loginLink);
        log.info("Clicking on Login link : " + _loginLink.toString());
    }

    public void clickOnServicesLink() {
        Reporter.addStepLog("Clicking on Services link : " + _servicesLink.toString());
        clickOnElement(_servicesLink);
        log.info("Clicking on Services link : " + _servicesLink.toString());

    }
}
