const 
    config = require('./config'),
    {File} = require('../010_File/fs-test/index'),
    {newError} = require('../002_Lib/verror/index'),
    {co}=require('../001_Syntax/Promise/index'),
    {downloadProgress, httpGet, checkFile, request}=require('../004_Web/request-test/index');
    
function checkProcessExplorer(){
    const APP_KEY = 'ProcessExplorer';
    let version = Object.assign({
        major: 0,
        minor: 0
    }, config[APP_KEY]);
    // console.log(version);
    return co(function*(){
        let $ = yield httpGet('https://technet.microsoft.com/en-us/sysinternals/processexplorer.aspx');
        let txt = $('div.MiddleColumn h1').text();
        let r = /v(\d+)\.(\d+)/.exec(txt);
        if(!r){
            throw newError({name:'VersionNotFoundError'});
        }
        let [_,major,minor] = r;
        // console.log(major);
        
        if(+major > version.major || (+major == version.major && +minor > version.minor)){
            downloadProgress('https://download.sysinternals.com/files/ProcessExplorer.zip', `ProcessExplorer-v${major}.${minor}.zip`);
        }else{
            return;
        }
        
        config[APP_KEY] = {
            major: +major,
            minor: +minor
        };
        console.log(config);
    });
}
function checkAutoruns(){
    const APP_KEY = 'Autoruns';
    let version = Object.assign({
        major: 0,
        minor: 0
    }, config[APP_KEY]);
    // console.log(version);
    return co(function*(){
        let $ = yield httpGet('https://technet.microsoft.com/en-us/sysinternals/bb963902');
        let txt = $('div.MiddleColumn h1').text();
        let r = /v(\d+)\.(\d+)/.exec(txt);
        if(!r){
            throw newError({name:'VersionNotFoundError'});
        }
        let [_,major,minor] = r;
        // console.log(major);
        
        if(+major > version.major || (+major == version.major && +minor > version.minor)){
            downloadProgress('https://download.sysinternals.com/files/Autoruns.zip', `Autoruns-v${major}.${minor}.zip`);
        }else{
            return;
        }
        
        config[APP_KEY] = {
            major: +major,
            minor: +minor
        };
        // console.log(config);
    });
}
function checkHandle(){
    const APP_KEY = 'Handle';
    let version = Object.assign({
        major: 0,
        minor: 0
    }, config[APP_KEY]);
    // console.log(version);
    return co(function*(){
        let $ = yield httpGet('https://technet.microsoft.com/en-us/sysinternals/handle');
        let txt = $('div.MiddleColumn h1').text();
        let r = /v(\d+)\.(\d+)/.exec(txt);
        if(!r){
            throw newError({name:'VersionNotFoundError'});
        }
        let [_,major,minor] = r;
        // console.log(major);
        
        if(+major > version.major || (+major == version.major && +minor > version.minor)){
            downloadProgress('https://download.sysinternals.com/files/Handle.zip', `Handle-v${major}.${minor}.zip`);
        }else{
            return;
        }
        
        config[APP_KEY] = {
            major: +major,
            minor: +minor
        };
        // console.log(config);
    });
}
function main(){
    Promise.all([
        checkProcessExplorer(),
        checkHandle(),
        checkAutoruns()
    ]).then( results => {
        console.log(results);
        return File.write('config.json', JSON.stringify(config))
    });
}
    
main();