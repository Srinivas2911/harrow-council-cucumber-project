package uk.harrow.gov.pages;

/*
Created by SP
*/

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.harrow.gov.utility.Utility;

public class AdultSocialCarePage  extends Utility {

    //Log the webelements and methods into Log4j reports
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

//Using selenium @Findby and initElement methods
// using _ help separate from variable


//    @FindBy(xpath="//h1[@class='page-heading']")
            @FindBy(className = "page-heading")
    WebElement _adultSocialCareText;

    @FindBy(partialLinkText = "What is Adult Social")
    WebElement _whatIsAdultSocialCare;

    @FindBy(xpath="//h2[@class='supplement__heading']")
    WebElement _applyAdultSocialCare;


    public String getAdultSocialCareText (){
        Reporter.addStepLog("Getting Adult Social Care Text " + getTextFromElement(_adultSocialCareText)+" "+_adultSocialCareText.toString() + "<br>");
        log.info("Getting Adult Social Care Text : " +getTextFromElement(_adultSocialCareText)+" "+ _adultSocialCareText.toString());
        return getTextFromElement(_adultSocialCareText);
    }

    public void clickOnWhatIsAdultSocialCareLink() {
        Reporter.addStepLog("Clicking on What Is Adult Social Care Link : " + _whatIsAdultSocialCare.toString());
        clickOnElement(_whatIsAdultSocialCare);
        log.info("Clicking on What is Adult Social Care Link : " + _whatIsAdultSocialCare.toString());

    }
    public String getApplyForAdultSocialCareText (){
        Reporter.addStepLog("Getting Applying for Adult Social Care Text " + getTextFromElement(_applyAdultSocialCare)+" "+_applyAdultSocialCare.toString() + "<br>");
        log.info("Getting Applying for Adult Social Care Text : " +getTextFromElement(_applyAdultSocialCare)+" "+ _applyAdultSocialCare.toString());
        return getTextFromElement(_applyAdultSocialCare);
    }

}
