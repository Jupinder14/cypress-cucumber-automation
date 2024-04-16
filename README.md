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

### Reporting

In this project, we are using the cypress-mochawesome-reporter for generating html reports for test run.

If you are running the tests locally, you can access the report in cypress/reports folder.

To access the reports for tests executions in Github actions, you can either download it from artifacts, or access it using github pages.

1. Github pages: Report for each test run is deployed to github pages. Latest test run will be shown there.

Github pages link - https://jupinder14.github.io/cypress-cucumber-automation/

2. Artifacts: If you want to look at the older test runs, go to the pipeline run and download the report from the Artifacts section. Github actions store the build artifacts for 90 days after which they will expire.

Example of the uploaded artifacts can be accessed at https://github.com/Jupinder14/cypress-cucumber-automation/actions/runs/8710683385