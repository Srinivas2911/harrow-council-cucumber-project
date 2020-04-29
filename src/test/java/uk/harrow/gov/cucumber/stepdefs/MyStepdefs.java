package uk.harrow.gov.cucumber.stepdefs;/*
Created by SP
*/

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.commons.logging.Log;
import org.junit.Assert;
import uk.harrow.gov.pages.HomePage;
import uk.harrow.gov.pages.LoginPage;

public class MyStepdefs {
    @Given("^I am on the home page$")
    public void iAmOnTheHomePage() {
    }

    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLogin_RegisterLink();
    }

    @Then("^Systems displays Welcome Guest Message$")
    public void systemsDisplaysWelcomeGuestMessage() {
        Assert.assertEquals(new LoginPage().getWelcomeGuestText(), "Welcome Guest!");
    }

    @Given("^I am on Login Page$")
    public void iAmOnLoginPage() {
        new HomePage().clickOnLogin_RegisterLink();
    }

//    @When("^I enter email \"([^\"]*)\" and \"([^\"]*)\"$")
//    public void iEnterEmailAnd(String email, String password) {
//    }

    @And("^I click on the Login Button$")
    public void iClickOnTheLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

    @Then("^System displays Invalid User Message$")
    public void systemDisplaysInvalidUserMessage() {
        Assert.assertEquals(new LoginPage().getInvalidUserNameMessage(), "Invalid Username/Password supplied");

    }

    @When("^I enter email \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void iEnterEmailAndPassword(String email, String password) {
        new LoginPage().enterEmail(email);
        new LoginPage().enterPassword(password);
    }
}

