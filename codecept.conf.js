/** @type {import('codeceptjs').MainConfig} */
exports.config = {
  tests: './tests/codeceptjs/**/*_test.js',
  timeout: 30,
  output: './e2e/output',
  helpers: {
    Puppeteer: {
      browser: 'chrome',
      url: 'http://localhost:9100/tests/pages/',
      show: true,
      disableScreenshots: false,
      waitForNavigation: 'networkidle0',
      waitForAction: 500,
      restart: false,
      chrome: {
        args: ['--ignore-certificate-errors', '--no-sandbox']
      }
    },
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost:9100/tests/pages/',
      show: true,
      disableScreenshots: false,
      waitForNavigation: 'networkidle0',
      waitForAction: 500,
      restart: false
    },
    customHelpers: {
      require: './config/codeceptjs_helpers.js'
    }
  },
  include: {
    I: './tests/codeceptjs/steps_file.js'
  },
  bootstrap: null,
  mocha: {
    reporterOptions: {
      reportDir: './e2e/reports',
      inlineAssets: true,
      reportPageTitle: 'E2E Test Reports',
      reportTitle: 'E2E Test Reports'
    }
  },
  name: 'codeceptjs-json-editor',
  plugins: {
    pauseOnFail: {},
    tryTo: {
      enabled: true
    }
  }
}
