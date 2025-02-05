This repo contains tests for TodoMVC application.
Tests can be executed via different helpers.

![](todo.png)

# Installation

This is a playground for your first steps in testing, so instead of installing it from NPM it is recommended to clone it from repo instead and then install the dependencies:

```
git clone git@github.com:codecept-js/examples.git codeceptjs-examples && cd codeceptjs-examples && npm i
```

This will install CodeceptJS with Puppeteer, WebdriverIO & TestCafe packages. 

# Running Tests

The default helper is Playwright.

## Playwright

Use `codecept.conf.js` to run tests with Playwright:

```
npx codeceptjs run --steps
```

## Puppeteer

Use `codecept.puppeteer.conf.js` to run tests with Puppeteer:

```
npx codeceptjs run --steps -c codecept.puppeteer.conf.js 
```


## WebdriverIO

Use `codecept.webdriver.conf.js` to run tests with WebdriverIO in Chrome:

```
npx codeceptjs run -c codecept.webdriver.conf.js --steps 
```

## TestCafe

Use `codecept.testcafe.conf.js` to run tests with TestCafe in Chrome:

```
npx codeceptjs run -c codecept.testcafe.conf.js --steps 
```

## Headless Mode

Run tests in headless mode:

```
HEADLESS=true npx codeceptjs run --steps
```

## Parallel Execution

Run tests in parallel with 3 workers:

```
npx codeceptjs run-workers 3
```

## Lambdatest Execution

Prerequisites:
- Set `LT_USERNAME` and `LT_ACCESS_KEY` environment variables with your Lambdatest credentials
- `hyperexecute` binary should be installed

Run tests in Lambdatests's "Web Automation" product:

```
npx codeceptjs run --config codecept.webdriver-lambdatest.conf.js
```

Run tests in Lambdatests's "Hyperexecute" product: (requires `hyperexecute` binary to be installled)

```
hyperexecute
```

## Credits

Created as part of codepress by Stefan Huber.
Maintained by CodeceptJS Team.

## LICENSE

MIT
