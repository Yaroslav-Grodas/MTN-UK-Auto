const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: "sv1vuk",
  e2e: {
    baseUrl: "https://shopmtn.co.uk",
    retries: {
      runMode: 2,
      openMode: 2
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      

    },
  },
});
