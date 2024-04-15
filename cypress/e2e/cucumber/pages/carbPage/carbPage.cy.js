import 'cypress-xpath';
import { calculatorPage } from "../../../../../utils/locators";
import { compareObjects } from '../../../../../utils/common';
import { url } from '../../../../../utils/utils';

class CarbPage {
  enter_url() {
    cy.visit(url.carbohydrateCalculator);
  }
  enter_age(age) {
    cy.get(calculatorPage.ageId).clear().type(age);
  }
  enter_height(height) {
    cy.get(calculatorPage.heightId).clear({force: true}).type(height, { force: true });
  }
  enter_weight(weight) {
    cy.get(calculatorPage.weightId).clear().type(weight);
  }
  select_male() {
    cy.xpath(calculatorPage.genderXpath).click();
  }
  select_activity(activity_type) {
    if (activity_type == "light") {
      cy.get(calculatorPage.activityId).select([1]);
    }
  }
  click_button(button) {
    if (button == "calculate") {
      cy.xpath(calculatorPage.calculateButtonXpath).click()
    }
  }
  check_results_visible() {
    cy.get(calculatorPage.resultHeader).should('be.visible').and('contain', 'Result')
  }
  check_error_message_visible() {
    cy.xpath(calculatorPage.error_message).should('be.visible').and('contain', "Please provide an age between 18 and 80.")
  }
  verify_result() {
    const expectedTableData = {
      "Weight Maintenance": "2,461 Calories,263 grams,361 grams,427 grams,492 grams",
      "Lose 0.5 kg/week": "1,961 Calories,209 grams,288 grams,340 grams,392 grams",
      "Lose 1 kg/week": "1,461 Calories,156 grams,214 grams,253 grams,292 grams",
      "Gain 0.5 kg/week": "2,961 Calories,316 grams,434 grams,513 grams,592 grams",
      "Gain 1 kg/week": "3,461 Calories,369 grams,508 grams,600 grams,692 grams"
    };

    cy.get(calculatorPage.tableRows)
    .eq(0).nextAll()
    .then($rows => {
      const tableData = {};
      $rows.each((index, row) => {
        const dataFor = Cypress.$(row).find('td:first-child').text().trim();
        const rowData = [];
        for (let i = 2; i <= 6; i++) {
          rowData.push(Cypress.$(row).find(`td:nth-child(${i})`).text().trim());
        }
        tableData[dataFor] = rowData.join(',');
      });
      const comparison = compareObjects(tableData, expectedTableData)
      expect(comparison).to.deep.equal(true);
    });
  }
 }
 const carbPage = new CarbPage();
 export default carbPage;