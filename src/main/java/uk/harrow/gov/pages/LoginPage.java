package uk.harrow.gov.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import uk.harrow.gov.utility.Utility;

public class LoginPage extends Utility {


    //Log the webelements and methods into Log4j reports
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

//Using selenium @Findby and initElement methods
// using _ help separate from variable

    @FindBy(xpath = "//li[@class='navbar-text myprofile_salutation']")
    WebElement _welcomeGuestText;

    @FindBy(id="username-input")
    WebElement _yourEmail;

    public void enterEmail(String email) {
        Reporter.addStepLog("Entering email  : " + email + " on Email Field " + _yourEmail.toString());
        sendTextToElement(_yourEmail, email);
        log.info("Entering email  : " + email + " on Email Field " + _yourEmail.toString());
    }

    @FindBy(id="password-input")
    WebElement _password;

    public void enterPassword(String password) {
        Reporter.addStepLog("Entering password  : " + password + " on Password Field " + _password.toString());
        sendTextToElement(_password, password);
        log.info("Entering password  : " + password + " on Password Field " + _password.toString());
    }


    @FindBy(id="submitBtnSignIn")
    WebElement _loginBtn;

    public void clickOnLoginButton() {
        Reporter.addStepLog("Clicking on Login Button : " + _loginBtn.toString());
        clickOnElement(_loginBtn);
        log.info("Clicking on Services link : " + _loginBtn.toString());

    }
    @FindBy(id="password.errors")
    WebElement _invalidUsernameMsg;

    public String getInvalidUserNameMessage (){
        Reporter.addStepLog("Getting Welcome Guest Text " + getTextFromElement(_invalidUsernameMsg)+ " " +_invalidUsernameMsg.toString() + "<br>");
        log.info("Getting Welcome Guest Text : " +getTextFromElement(_invalidUsernameMsg)+" "+ _invalidUsernameMsg.toString());
        return getTextFromElement(_invalidUsernameMsg);
    }

    public void verifyWelcomeGuestText (){
        Reporter.addStepLog("Displaying Welcome Guest Text " + _welcomeGuestText.toString() + "<br>");
        verifyThatTextIsDisplayed(_welcomeGuestText, "Welcome Guest!");
        log.info("Displaying Welcome Guest Text : " + _welcomeGuestText.toString());

    }
    public String getWelcomeGuestText (){
        Reporter.addStepLog("Getting Welcome Guest Text " + getTextFromElement(_welcomeGuestText)+" "+_welcomeGuestText.toString() + "<br>");
        log.info("Getting Welcome Guest Text : " +getTextFromElement(_welcomeGuestText)+" "+ _welcomeGuestText.toString());
        return getTextFromElement(_welcomeGuestText);
    }
}
