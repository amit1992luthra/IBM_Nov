
Feature: facebook login

  Scenario: login facebook with valid credentials
    Given User navigates to facebook application
    When user enters valid credentials
    Then user logged in successfully
    
  Scenario: login facebook with invalid credentials
    Given User navigates to facebook application
    When user enters invalid credentials
    Then user gets validation message
    
    
    
    

