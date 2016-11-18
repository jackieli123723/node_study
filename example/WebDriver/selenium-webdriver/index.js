const
    webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    Key = webdriver.Key,
    until = webdriver.until,
    // {co}= require('D:/github/node_study/example/001_Syntax/Promise/index'),
    chrome = require('selenium-webdriver/chrome');

function cssQuery( rule ){
    return this.findElement(By.css(rule));
}

function cssQuerys( rule ){
    return this.findElements(By.css(rule));
}

function createChrome(cfg={}){
    cfg = Object.assign({
        exePath: null
    }, cfg);
    if( !!cfg.exePath){
        process.env.PATH += ';' + cfg.exePath;
    }
    let driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();
    driver.cssQuery = cssQuery;        
    driver.cssQuerys = cssQuerys;        
    return driver;
}
    
module.exports = {
    cssQuery,
    cssQuerys,
    createChrome
};