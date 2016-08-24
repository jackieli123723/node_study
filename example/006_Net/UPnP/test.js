const UPnpServer = require('upnpserver');
let server = new UPnpServer({
    name: 'Arick UPnP Server'
}, [
    '.'
]);
server.start();    