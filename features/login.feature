Feature: User Login
    As a user
    I want to login to the application
    So that I can access my account
    
    Scenario: Successful Login with valid credentials
        Given I am on the login page
        When I enter valid username and password
        And I click on the login button
        Then I should be redirected to the my-account page
        And I should see a welcome message
    
    Scenario: Unsuccessful Login with invalid credentials
        Given I am on the login page
        When I enter invalid username or password
        And I click on the login button
        Then I should see an error message indicating invalid credentials
    
    Scenario: Logout
        Given I am logged in as a valid user
        When I click on the logout button
        Then I should be redirected to the login page
        And I should see a message confirming successful logout