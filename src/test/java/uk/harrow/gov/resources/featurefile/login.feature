Feature: Login Functionality
  As a User I want to login to Harrow Council Website

  Background: User is on Home Page

  Scenario: Verify User is Able to Navigate to Login Page
    Given  I am on the home page
    When   I click on login link
    Then   Systems displays Welcome Guest Message

  Scenario Outline: Verify User is Unable to Login with Invalid Credentials
    Given I am on Login Page
    When I enter email "<email>" and password "<password>"
    And I click on the Login Button
    Then System displays Invalid User Message
    Examples:
      | email             | password  |
      | johnny@lenox.com  | lenox123  |
      | romeo@juliet.com  | juliet123 |
      | bobby@yahoo.co.uk | bobby123  |
