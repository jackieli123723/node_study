let http = require("http");

http.createServer(function(request, response) {
	var body = 'hello world, Arick';
	response.writeHead(200, {'Content-Length': body.length, 'Content-Type': 'text/html' });
	response.write(body);
	response.end()
}).listen(8099);

console.log("Server running at http://localhost:8099/");