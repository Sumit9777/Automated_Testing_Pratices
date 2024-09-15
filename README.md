Automation Tests for Google and Admlucid Website
This repository contains automation tests for:

Performing a search on the Google homepage.
Verifying the homepage title and URL of the Admlucid website.
The tests are written using Selenium WebDriver with Node.js and Mocha as the test runner.

Table of Contents
Prerequisites
Installation
Test Cases
Running the Tests
Project Structure
License
Prerequisites
Before running these tests, ensure you have the following installed:

Node.js (version 12 or higher)
Google Chrome or another browser supported by Selenium
ChromeDriver (Make sure it matches your installed Chrome version)
Basic knowledge of JavaScript and testing with Mocha
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/automation-tests.git
cd automation-tests
Install dependencies:

Run the following command to install the required Node.js packages:

bash
Copy code
npm install
This will install:

selenium-webdriver: for browser automation
mocha: for running test cases
Test Cases
Test Case 1: Verify Google Homepage Title and Search Functionality
Description: This test will verify Google's homepage title and perform a search for the keyword "Selenium".
Steps:
Navigate to https://www.google.com.
Verify the page title is "Google".
Search for "Selenium".
Verify the search results page title contains the word "Selenium".
Test Case 2: Verify Admlucid Homepage
Description: This test will open the Admlucid website and verify if the title is "Home Page - Admlucid". It will also print and verify the current URL.
Steps:
Navigate to https://admlucid.com.
Verify the page title is "Home Page - Admlucid".
Print the current URL and log it.
Running the Tests
Once you have installed the dependencies, you can run the test cases by executing the following command:

bash
Copy code
mocha
This will run the google.spec.js and home.spec.js files and execute the tests in your terminal.

Sample Output
bash
Copy code
  Google Search Test
    ✓ should load Google homepage and verify title
    ✓ should search for "Selenium" and verify results

  Admlucid Website Test
    ✓ should load Admlucid homepage and verify title
    ✓ should verify the current URL

  4 passing (9s)
