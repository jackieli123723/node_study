const idm = require('./index');

idm.addLink({
    url: 'http://www.internetdownloadmanager.com/idman401.exe'
});

idm.addLinks({
    // urls:['http://www.internetdownloadmanager.com/idman401.exe']
}).catch(console.error);

