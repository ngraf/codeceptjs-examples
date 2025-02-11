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

-> This will produce error `Error: Failed to execute WebDriver Bidi command "sessionSubscribe" as no Bidi session was established. Make sure you enable it by setting "webSocketUrl: true" in your capabilities and verify that your environment and browser supports it.` in CodeceptJS 3.7.1 with WebDriver 8+.
Test will still run, but it looks frightening:

```
$ npx codeceptjs run -c codecept.webdriver.conf.js
[..]
@first Create Todos @step:06 @smoke @story:12345 --
Error: Failed to execute WebDriver Bidi command "sessionSubscribe" as no Bidi session was established. Make sure you enable it by setting "webSocketUrl: true" in your capabilities and verify that your environment and browser supports it.
  ✔ Create a new todo item in 2727ms
Error: Failed to execute WebDriver Bidi command "sessionSubscribe" as no Bidi session was established. Make sure you enable it by setting "webSocketUrl: true" in your capabilities and verify that your environment and browser supports it.
  ✔ Create multiple todo items in 6493ms
Error: Failed to execute WebDriver Bidi command "sessionSubscribe" as no Bidi session was established. Make sure you enable it by setting "webSocketUrl: true" in your capabilities and verify that your environment and browser supports it.
  ✔ Todos containing weird characters | {"Todo Text":"Todo with umlauts äöü","Result":"is in list"} in 2150ms
[..]
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

## Credits

Created as part of codepress by Stefan Huber.
Maintained by CodeceptJS Team.

## LICENSE

MIT
