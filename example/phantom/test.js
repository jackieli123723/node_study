function example1(){
    const phantom = require('phantom');

    var sitepage = null;
    var phInstance = null;
    phantom.create()
        .then(instance => {
            phInstance = instance;
            return instance.createPage();
        })
        .then(page => {
            sitepage = page;
            return page.open('https://stackoverflow.com/');
        })
        .then(status => {
            console.log(status);
            return sitepage.property('content');
        })
        .then(content => {
            console.log(content);
            sitepage.close();
            phInstance.exit();
        })
        .catch(error => {
            console.log(error);
            phInstance.exit();
        });
}
    
const ex = require('./index');
ex.doWork('https://stackoverflow.com/', function(page, status, instance){
    console.log(status);
    
    return page.property('content').then( console.log );
});
