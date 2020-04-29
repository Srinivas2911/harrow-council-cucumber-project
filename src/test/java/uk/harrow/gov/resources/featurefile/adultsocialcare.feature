Feature: Adult Social Care Feature
  As a user I want to navigate to pages in Harrow Council

  Background: I am on Home page

  Scenario: Verify User able to Navigate to Services page
    Given I am on the home page
    When I click on services link
    And I click on Adult Social Care Menu Link
    Then I should see Adult Social Care Page

  Scenario: Verify User able to Navigate to Adults Social care page
    Given I am on the Adult Social Care Page
    When I click on What is Adult Social Care Link
    Then I should see Apply for Adult Social Care Text

