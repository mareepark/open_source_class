/**
 * http://usejsdoc.org/
 */
/*
var http = require('http');

var server = http.createServer();

server.on('request',function(code){
console.log('Request On');
});

server.on('connection',function(code){
   console.log('Connection On');
});

server.on('close',function(code){
console.log('Close On');
});

server.listen(51234);
*/

/*
require('http').createServer(function(request, response){
	response.writeHead(200, ['Content-Type', 'Text/html']);
	response.end('<h1>Hello web server with Nodejs</h1>');
}).listen(52273, function(){
	console.log('server run at 52273');
});
*/
/*
var fs = require('fs');
var http = require('http');

http.createServer(function(request, response){
	fs.readFile
})
*/

var http = require('http');
http.createServer(function(request, response){
	response.writeHead(302, {'Location': 'http://www.naver.com'});
	response.end();
}).listen(52271, function(){
	console.log('server run at 52272');
});