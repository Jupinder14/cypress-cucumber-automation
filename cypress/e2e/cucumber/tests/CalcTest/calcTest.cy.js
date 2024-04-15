/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import carbPage from "../../pages/carbPage/carbPage.cy";

Given("I am on carbohydrate calculator page", () => {
    carbPage.enter_url();
});

When("I enter {string} in age", function (age) {
    carbPage.enter_age(age)
});

When("I select gender {string}", function (gender) {
    carbPage.select_male()
});

When("I enter {string} in height", function (height) {
    carbPage.enter_height(height)
});

When("I enter {string} in weight", function (weight) {
    carbPage.enter_weight(weight)
});

When("I select {string} exercise", function (activity_type) {
    carbPage.select_activity(activity_type)
});

When("I click {string}", function (button) {
    carbPage.click_button(button)
});

Then("I see {string}", function (result) {
    if (result == 'results') {
        carbPage.check_results_visible()
    }
    if (result == 'error message') {
        return carbPage.check_error_message_visible()
    }
});

Then("I verify results are accurate", function () {
    carbPage.verify_result()
});