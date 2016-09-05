const
    webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    Key = webdriver.Key,
    until = webdriver.until,
    chrome = require('selenium-webdriver/chrome');
    
let driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
driver.get('http://www.google.com')
    .then( ()=>driver.findElement(By.name('q')))
    .then( el => el.sendKeys('webdriver', Key.ENTER))
    .then( ()=> driver.wait(until.titleIs('webdriver - Google 搜尋'), 1000))
    .then( ()=> driver.findElements(By.css('h3.r > a')))
    .then( results => {
        for(let el of results){
            Promise.all([
                el.getAttribute('href'),
                el.getText()
            ])
            .then( v => {
                    let [data_href, text] = v;
                    console.log(`* [${text}](${data_href})`);
                });
        }
        
        return driver.quit();
    })
    .catch(console.error);
