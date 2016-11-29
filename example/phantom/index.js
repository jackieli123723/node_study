const
    {co} = require('../001_Syntax/Promise/index'),
    phantom = require('phantom');
    
function doWork(url, work){
    return co(function*(){
        let instance = yield phantom.create([
            '--ignore-ssl-errors=yes', 
            '--load-images=no'
        ]);
        
        let page = yield instance.createPage();
        let status = yield page.open(url);
        let result = yield work(page, status, instance).catch(console.error);
        yield page.close();
        instance.exit();
        
        return result;
    });
}

module.exports = {
    doWork
};