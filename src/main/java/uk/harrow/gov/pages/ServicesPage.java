package uk.harrow.gov.pages;

/*
Created by SP
*/

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.harrow.gov.utility.Utility;

public class ServicesPage extends Utility {

    //Log the webelements and methods into Log4j reports
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

//Using selenium @Findby and initElement methods
// using _ help separate from variable


    @FindBy(xpath="//a[@id='js-menu-first-item']")
    WebElement _adultSocialCare;

        public void clickOnAdultSocialCareLink() {
        Reporter.addStepLog("Clicking on Adult Social Care Link : " + _adultSocialCare.toString());
        clickOnElement(_adultSocialCare);
        log.info("Clicking on Adult Social Care Link : " + _adultSocialCare.toString());
    }


}
