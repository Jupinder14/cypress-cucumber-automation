Feature: Carbohydrate calculator
Scenario: Verify the calculator displays correct results for male using Mifflin St Jeor formula.
    Given I am on carbohydrate calculator page
    When I enter "28" in age
    And I select gender "male"
    And I enter "180" in height
    And I enter "80" in weight
    And I select "light" exercise
    And I click "calculate"
    Then I see "results"
    And I verify results are accurate

Scenario Outline: Verify functinality of carbohydrate calculator age field with boundary values
    Given I am on carbohydrate calculator page
    When I enter "<age>" in age
    And I select gender "male"
    And I enter "180" in height
    And I enter "80" in weight
    And I select "light" exercise
    And I click "calculate"
    Then I see "<result>"

    Examples:
        |age    |result         |
        |18     |results        |
        |80     |results        |
        |17     |error message  |
        |81     |error message  |