const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    loginBase: 'https://www.saucedemo.com'
  },
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
