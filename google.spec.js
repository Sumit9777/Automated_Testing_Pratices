const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Google Search Test', function () {
  let driver;

  // Set timeout for the tests
  this.timeout(30000); // 30 seconds timeout

  before(async function () {
    // Initialize WebDriver for Chrome
    driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function () {
    // Quit the WebDriver session
    await driver.quit();
  });

  it('should load Google homepage and verify title', async function () {
    // Navigate to Google's homepage
    await driver.get('https://www.google.com');

    // Get and check the title of the page
    let title = await driver.getTitle();
    console.log('Page Title:', title);
    assert.strictEqual(title, 'Google', 'Page title is not Google');
  });

  it('should search for "Selenium" and verify results', async function () {
    // Find the search bar element and input a search query
    let searchBar = await driver.findElement(By.name('q'));
    await searchBar.sendKeys('Selenium');

    // Submit the search form
    await searchBar.submit();

    // Wait for the results page to load and display the results
    await driver.wait(until.titleContains('Selenium'), 5000);

    // Verify that the page title contains the search query
    let resultsTitle = await driver.getTitle();
    console.log('Search Results Title:', resultsTitle);
    assert(resultsTitle.includes('Selenium'), 'Search results title does not contain "Selenium"');
  });
});
