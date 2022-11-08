$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/ibm.feature");
formatter.feature({
  "name": "facebook login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "login facebook with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    },
    {
      "name": "@active"
    }
  ]
});
formatter.step({
  "name": "User navigates to facebook application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinationclass.user_navigates_to_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid credentials",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinationclass.user_enters_valid_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinationclass.user_logged_in_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Login facebook with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@amit"
    }
  ]
});
formatter.step({
  "name": "User navigates to facebook application",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter \"\u003cusername\u003e\" username and \"\u003cpassword\u003e\" password",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on ok button",
  "keyword": "And "
});
formatter.step({
  "name": "user gets validation message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "amit",
        "xyz"
      ]
    },
    {
      "cells": [
        "abc",
        "123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login facebook with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@amit"
    }
  ]
});
formatter.step({
  "name": "User navigates to facebook application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinationclass.user_navigates_to_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"amit\" username and \"xyz\" password",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinationclass.user_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on ok button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user gets validation message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinationclass.user_gets_validation_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login facebook with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@amit"
    }
  ]
});
formatter.step({
  "name": "User navigates to facebook application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinationclass.user_navigates_to_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter \"abc\" username and \"123\" password",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinationclass.user_enter_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on ok button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user gets validation message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinationclass.user_gets_validation_message()"
});
formatter.result({
  "status": "skipped"
});
});