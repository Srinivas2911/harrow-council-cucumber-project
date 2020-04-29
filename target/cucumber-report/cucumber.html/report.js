$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/uk/harrow/gov/resources/featurefile/adultsocialcare.feature");
formatter.feature({
  "line": 1,
  "name": "Adult Social Care Feature",
  "description": "As a user I want to navigate to pages in Harrow Council",
  "id": "adult-social-care-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 19597664900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 6,
  "name": "Verify User able to Navigate to Services page",
  "description": "",
  "id": "adult-social-care-feature;verify-user-able-to-navigate-to-services-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on services link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on Adult Social Care Menu Link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see Adult Social Care Page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 294721400,
  "status": "passed"
});
formatter.match({
  "location": "MyServeSteps.iClickOnServicesLink()"
});
formatter.result({
  "duration": 413450700,
  "status": "passed"
});
formatter.match({
  "location": "MyServeSteps.iClickOnAdultSocialCareMenuLink()"
});
formatter.result({
  "duration": 1812340400,
  "status": "passed"
});
formatter.match({
  "location": "MyServeSteps.iShouldSeeAdultSocialCarePage()"
});
formatter.result({
  "duration": 210716600,
  "status": "passed"
});
formatter.after({
  "duration": 2028701900,
  "status": "passed"
});
formatter.before({
  "duration": 12408013600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 12,
  "name": "Verify User able to Navigate to Adults Social care page",
  "description": "",
  "id": "adult-social-care-feature;verify-user-able-to-navigate-to-adults-social-care-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I am on the Adult Social Care Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on What is Adult Social Care Link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see Apply for Adult Social Care Text",
  "keyword": "Then "
});
formatter.match({
  "location": "MyServeSteps.iAmOnTheAdultSocialCarePage()"
});
formatter.result({
  "duration": 1842620900,
  "status": "passed"
});
formatter.match({
  "location": "MyServeSteps.iClickOnWhatIsAdultSocialCareLink()"
});
formatter.result({
  "duration": 11266082900,
  "status": "passed"
});
formatter.match({
  "location": "MyServeSteps.iShouldSeeApplyForAdultSocialCareText()"
});
formatter.result({
  "duration": 172041300,
  "status": "passed"
});
formatter.after({
  "duration": 1570260300,
  "status": "passed"
});
formatter.uri("src/test/java/uk/harrow/gov/resources/featurefile/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "As a User I want to login to Harrow Council Website",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12919875400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 6,
  "name": "Verify User is Able to Navigate to Login Page",
  "description": "",
  "id": "login-functionality;verify-user-is-able-to-navigate-to-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Systems displays Welcome Guest Message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 53600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 12501642000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.systemsDisplaysWelcomeGuestMessage()"
});
formatter.result({
  "duration": 236115100,
  "status": "passed"
});
formatter.after({
  "duration": 1487473800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify User is Unable to Login with Invalid Credentials",
  "description": "",
  "id": "login-functionality;verify-user-is-unable-to-login-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I am on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"\u003cemail\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "System displays Invalid User Message",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "login-functionality;verify-user-is-unable-to-login-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 17,
      "id": "login-functionality;verify-user-is-unable-to-login-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "johnny@lenox.com",
        "lenox123"
      ],
      "line": 18,
      "id": "login-functionality;verify-user-is-unable-to-login-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "romeo@juliet.com",
        "juliet123"
      ],
      "line": 19,
      "id": "login-functionality;verify-user-is-unable-to-login-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "bobby@yahoo.co.uk",
        "bobby123"
      ],
      "line": 20,
      "id": "login-functionality;verify-user-is-unable-to-login-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13157298000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 18,
  "name": "Verify User is Unable to Login with Invalid Credentials",
  "description": "",
  "id": "login-functionality;verify-user-is-unable-to-login-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I am on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"johnny@lenox.com\" and password \"lenox123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "System displays Invalid User Message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnLoginPage()"
});
formatter.result({
  "duration": 12148540300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "johnny@lenox.com",
      "offset": 15
    },
    {
      "val": "lenox123",
      "offset": 47
    }
  ],
  "location": "MyStepdefs.iEnterEmailAndPassword(String,String)"
});
formatter.result({
  "duration": 720539100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnTheLoginButton()"
});
formatter.result({
  "duration": 1091778200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.systemDisplaysInvalidUserMessage()"
});
formatter.result({
  "duration": 217406900,
  "status": "passed"
});
formatter.after({
  "duration": 1648002700,
  "status": "passed"
});
formatter.before({
  "duration": 12895677200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 19,
  "name": "Verify User is Unable to Login with Invalid Credentials",
  "description": "",
  "id": "login-functionality;verify-user-is-unable-to-login-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I am on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"romeo@juliet.com\" and password \"juliet123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "System displays Invalid User Message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnLoginPage()"
});
formatter.result({
  "duration": 12617342300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "romeo@juliet.com",
      "offset": 15
    },
    {
      "val": "juliet123",
      "offset": 47
    }
  ],
  "location": "MyStepdefs.iEnterEmailAndPassword(String,String)"
});
formatter.result({
  "duration": 669092700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnTheLoginButton()"
});
formatter.result({
  "duration": 1145279800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.systemDisplaysInvalidUserMessage()"
});
formatter.result({
  "duration": 232394200,
  "status": "passed"
});
formatter.after({
  "duration": 1575402600,
  "status": "passed"
});
formatter.before({
  "duration": 13225020900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on Home Page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 20,
  "name": "Verify User is Unable to Login with Invalid Credentials",
  "description": "",
  "id": "login-functionality;verify-user-is-unable-to-login-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "I am on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"bobby@yahoo.co.uk\" and password \"bobby123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "System displays Invalid User Message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnLoginPage()"
});
formatter.result({
  "duration": 12112160600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bobby@yahoo.co.uk",
      "offset": 15
    },
    {
      "val": "bobby123",
      "offset": 48
    }
  ],
  "location": "MyStepdefs.iEnterEmailAndPassword(String,String)"
});
formatter.result({
  "duration": 722745800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnTheLoginButton()"
});
formatter.result({
  "duration": 969330700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.systemDisplaysInvalidUserMessage()"
});
formatter.result({
  "duration": 151890300,
  "status": "passed"
});
formatter.after({
  "duration": 1651791300,
  "status": "passed"
});
});