const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl:'https://practice.cydeo.com',
    video:false,
    retries:1,
    defaultCommandTimeout: 5000,// normal it is 4 sec
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
