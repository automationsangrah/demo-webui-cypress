const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    loginBase: 'https://www.saucedemo.com'
  },
  viewportHeight: 1080,
  viewportWidth: 1920,
  
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    screenshotsFolder: "output-generation/screenshots",
    videosFolder: "output-generation/videos"
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome, mocha-junit-reporter',
    mochawesomeReporterOptions: {
      reportDir: 'output-generation/reports/mocha',
      quite: true,
      overwrite: false,
      html: false,
      json: true
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: 'output-generation/reports/junit/results-[hash].xml'
    }
  }
});
