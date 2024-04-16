const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on("file:preprocessor", cucumber());
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
      });
    }
  }
});
