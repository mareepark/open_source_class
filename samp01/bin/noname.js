/**
 * http://usejsdoc.org/
 */

var http = require('http');

http.createServer(function (request, response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.end('<h2>Test-Flie-1</h2>')
	
}).listen(52000, function(){
	console.log('server running');
});