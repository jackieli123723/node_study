const
    webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    Key = webdriver.Key,
    until = webdriver.until,
    repl = require('repl'),
    ext = require('./index'),
    {co}= require('D:/github/node_study/example/001_Syntax/Promise/index'),
    chrome = require('selenium-webdriver/chrome');
    
function main(){
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
}
// process.env.PATH += ';
// console.log(process.env.PATH);

co(function*(){
    let driver = ext.createChrome({
        exePath : 'C:\\Users\\cwchiu\\AppData\\Local\\Temp\\chromedriver'
    });
    yield driver.get('https://www.i-sharing.com.tw/photo_data');
    
    driver.cssQuery('#city > option:nth-child(2)').click();
    driver.cssQuery('input[name="pm_na"]').sendKeys('王曉明');
    driver.cssQuery('input[name="pm_te"]').sendKeys('0910123456');
    driver.cssQuery('input[name="pm_a3"]').sendKeys('中正路1號');
    driver.cssQuery('input[name="pm_em"]').sendKeys('a@gmail.com');
    driver.cssQuery('input[name="checkbox"]').click();
    driver.cssQuery('#town > option:nth-child(2)').click();
    
    let r = repl.start({prompt: '>'});
    r.context.driver = driver;
    r.context.By = By;
    // driver.quit();
}).catch(console.error);