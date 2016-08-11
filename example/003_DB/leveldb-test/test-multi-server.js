const multilevel = require('multilevel'),
      net = require('net'),
      level = require('level');

let db = level('./multidb');
// server
net.createServer(function (con) {
  con.pipe(multilevel.server(db)).pipe(con);
}).listen(3000);
