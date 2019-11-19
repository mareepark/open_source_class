/**
 * http://usejsdoc.org/
 */

/*
var express = require('express');
var app = express();
*/
/*
app.use(function(request, response){
	var output = [];
	for(var i = 0 ; i < 3 ; i++){
		output.push({
			count: i,
			name: 'name - ' + i
		});
	}
	
	response.send(output);
});

app.listen(52273, function(){
	console.log('server running')
})
*/

/*
app.use(function(request, response, next){
	response.status(404).send('<h1>Error</h1>');
});

app.listen(52274, function(){
	console.log('server run');
})
*/

/*
app.use(function(request, response){
	var agent = request.header('User-Agent');
	
	if(agent.toLowerCase().match(/chrome/)){
		response.send('<h1>hello chrome..</h1>');
	}else{
		response.send('<h1>hello express.. </h1>');
	}
});

app.listen(52276, function(){
	
})
*/
/*
app.use(function(request, response, next){
	var name = request.query.name;
	var region = request.query.region;
	response.send('<h1>' + name + '-' + region + '</h1>');
});

app.listen(52278, function(){})
*/

var express = require('express');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');

var app = express();

/*
app.use(function(request, response, next){
	console.log("1st");
	next();
});

app.use(function(request, response, next){
	console.log("2st");
	next();
});

app.use(function(request, response, next){
	console.log("3st");
	next();
	
	response.writeHead(200, {'Content-Type' : 'text/html'});
	response.end('<h1>Express Basic</h1>');
});

app.listen(52273, function(){
	console.log("server run");
});
*/

/*
var routerA = express.Router();
var routerB = express.Router();

routerA.get('/index', function(request, response){
	response.send('<h1>index page</h1>');
});

routerB.get('/index', function(request, response){
	response.send('<h1>index page</h1>');
});

app.use('/a', routerA);
app.use('/b', routerB);
*/
/*
app.use(express.static( __dirname + '/public'));
app.use(function(request, response){
	response.writeHead(200, {'Content-Type' : 'text/html'});
	response.end('<img src="/spring.png" width="100%" />');
});
*/
/*
var morgan = require('morgan');

app.use(morgan('short'));
app.use(function(request, response){
	response.send('<h1>express b</h1>');
});
*/
/*
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(request, response){
	if(request.cookies.auth){
		response.send('<h1>login success</h1>');
	}else{
		response.redirect('/login');
	}
});
app.get('/login', function(request, response){
	fs.readFile('./bin/login.html', function(error, data){
		console.log(error);
		console.log(data);
		response.send(data.toString());
	});
});
app.post('/login', function(request, response){
	var login = request.body.login;
	var password = request.body.password;
	
	if(login == 'rint' && password == '1234'){
		response.cookie('auth', true);
		response.redirect('/');
	}else{
		response.redirect('/login');
	}
});

app.listen(52284, function(){
	
});

*/

var fs = require('fs');
var multipart = require('connect-multiparty');

app.use(multipart({ uploadDir: __dirname + '/multipart' }) );
app.get('/', function(request, response){
	fs.readFile('./bin/htmlPage.html', function(error, data){
		response.send(data.toString());
		});
});

app.post('/', function(request, response){
	
	//console.log(request.body);
	//console.log(request.files);
	
	//response.redirect('/');
	
	var comment = request.body.comment;
	var imageFile = request.files.image;
	
	if(imageFile && imageFile.size > 0) {
		var name = imageFile.name;
		var path = imageFile.path;
		var type = imageFile.type;
		
		if(type.indexOf('image') != -1){
			var outputPath = __dirname + '/multipart/' + Date.now() + '_' + name;
			fs.rename(path, outputPath, function(error){
			response.redirect('/');
			});
		} else{
			fs.unlink(path, function(error){
				response.sendStatus(400);
			});
		}
	} else{
		response.sendStatus(404);
	}
 });

app.listen(52283, function(){
	
});
