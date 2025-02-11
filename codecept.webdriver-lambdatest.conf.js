const { setHeadlessWhen } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

if (!process.env.LT_USERNAME) {
  console.error('Please provide LambdaTest username with environment variable LT_USERNAME.');
  process.exit(0);
}

if (!process.env.LT_ACCESS_KEY) {
  console.error('Please provide LambdaTest access key with environment variable LT_ACCESS_KEY.');
  process.exit(0);
}

exports.config = {
  tests: './todomvc-tests/**/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://localhost', // where the application under test is running. the test scenario can still ignore it by going directly to a different url with "amOnPage".
      protocol: 'https',
      host: 'hub.lambdatest.com',
      port: 443,
      path: '/wd/hub',
      user: process.env.LT_USERNAME,
      key: process.env.LT_ACCESS_KEY,
      browser: 'chrome',
      capabilities: {
        'LT:Options': {
          build: 'Build ' + new Date().getTime(),
        }
      },
    },

    REST: {},

    CustomHelper: {
      require: './todomvc-tests/helpers/custom.helper.js'
    }
  },

  gherkin: {
    features: './todomvc-tests/features/*.feature',
    steps: [
      './todomvc-tests/step-definitions/create-todos.steps.js'
    ]
  },

  include: {
    TodosPage: './todomvc-tests/pages/todos.page.js'
  },

  bootstrap: null,
  mocha: {},
  name: 'codecept demo tests'
}
