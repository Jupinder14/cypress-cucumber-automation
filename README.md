# e2e tests using Cypress and Cucumber

This project contains automated tests for carbohydrate calculator using cypress and cucumber
This is the url for the application: https://www.calculator.net/carbohydrate-calculator.html

### Run tests

In order to run tests locally, first install requirements from project root

`npm install`

To run tests in command line terminal

`npx cypress run`

To run tests in Cypress test runner
`npx cypress open`

This will open up the Cypress test runner and run tests on changes. This is very helpful in debugging tests.

### Run tests in Github actions pipeline

To run tests in pipeline, you will need to run tests in headless mode using the command
`npx cypress run`

This will run tests in CI environment in default browser which is Electron.

To run tests in specific browser such as Chrome
`npx cypress run --browser chrome`
