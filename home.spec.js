const {By,Builder,WebElementConsition,until} = require('selenium-webdriver');
const assert = require("assert");

(async function homeTest(){
    let driver;
    try{
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('https://admlucid.com/');

        let title = await driver.getTitle();
        console.log("******Home Page Title *****" + title);
        assert.equal("Home Page - Admlucid", title);

        await driver.manage().setTimeouts({implicit:500});
        await driver.manage().window().maximize();

        let url = await driver.getCurrentUrl();
        console.log("******Home Page URL *****" + url);

    }catch(e){
        console.log(e);
    } finally{
        await driver.quit();
    }
}());