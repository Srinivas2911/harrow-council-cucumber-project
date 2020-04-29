package uk.harrow.gov.cucumber.stepdefs;

/*
Created by SP
*/

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import uk.harrow.gov.pages.AdultSocialCarePage;
import uk.harrow.gov.pages.HomePage;
import uk.harrow.gov.pages.ServicesPage;

public class MyServeSteps {
    @When("^I click on services link$")
    public void iClickOnServicesLink() {
        new HomePage().clickOnServicesLink();
    }

    @And("^I click on Adult Social Care Menu Link$")
    public void iClickOnAdultSocialCareMenuLink() {
        new ServicesPage().clickOnAdultSocialCareLink();
    }

    @And("^I click on What is Adult Social Care Link$")
    public void iClickOnWhatIsAdultSocialCareLink() {
        new AdultSocialCarePage().clickOnWhatIsAdultSocialCareLink();
    }

    @Then("^I should see Adult Social Care Page$")
    public void iShouldSeeAdultSocialCarePage() {
        Assert.assertEquals(new AdultSocialCarePage().getAdultSocialCareText(), "Adult Social Care");
    }


    @Then("^I should see Apply for Adult Social Care Text$")
    public void iShouldSeeApplyForAdultSocialCareText() {
        Assert.assertEquals(new AdultSocialCarePage().getApplyForAdultSocialCareText(), "Applying for adult social care");
    }


    @Given("^I am on the Adult Social Care Page$")
    public void iAmOnTheAdultSocialCarePage() {
        new HomePage().clickOnServicesLink();
        new ServicesPage().clickOnAdultSocialCareLink();
    }
}
