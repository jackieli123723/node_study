let https = require('https'),
    fs = require('fs'),
    path = require('path'),
    https_options = {
        key: fs.readFileSync(path.join(__dirname,'config/achat.node.pem')),
        cert: fs.readFileSync(path.join(__dirname,'config/achat.node.crt'))
    };
    
https.createServer(https_options, function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(443);