var fs = require('fs');
var connect = require('connect');
var serve = connect.createServer();

var id = 'rin';
var pw = '1234';

serve.use(connect.cookieParser());
serve.use(connect.bodyParser());
serve.use(connect.router(function(app){
	app.get('/Login', function(request, response){
		if(request.cookies.auth == true){
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.end('<h1>Login Success</h1>');
		}else{
			fs.readFile('Login.html', function(error, data){
				response.writeHead(200, {'Content-Type': 'text/html'});
				response.end(data);
			});
		}});

app.post('/Login', function(request, response){
	if(request.body.id == id && request.body.password == pw){
		response.writeHead(302, {'Location': '/Login', 'Set-Cookie': ['auth = true']});
		response.end();
	}else{
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.end('<h1>Login FAIL</h1>');
	}
	});
}));

serve.listen(51238, function(){
	console.log('server 51234');
});