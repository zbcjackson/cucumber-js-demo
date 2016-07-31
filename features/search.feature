Feature: Search

Scenario: Search keyword
  When search "selenium"
  Then I can see "Web Browser Automation"