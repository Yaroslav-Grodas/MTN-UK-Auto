const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: "sv1vuk",
  e2e: {
    baseUrl: "https://shopmtn.co.uk",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      

    },
  },
});
