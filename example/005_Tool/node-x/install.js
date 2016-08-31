const 
    path = require('path'),
    Service = require('node-windows').Service;

function main(){
    let svc = new Service({
        name: 'node-test-app',
        description: 'windows node app service',
        script: path.join(__dirname, 'main.js')
    });
    svc.on('install', ()=>{
        svc.start();
    });
    // svc.install();
    svc.uninstall();
}

module.exports = {
    
};
    
if (require.main === module) {
    main();
}
