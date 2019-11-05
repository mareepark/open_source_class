/**
 * http://usejsdoc.org/
 */

var express = require('express');
var app = express();

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

app.use(function(request, response, next){
	var name = request.query.name;
	var region = request.query.region;
	response.send('<h1>' + name + '-' + region + '</h1>');
});

app.listen(52278, function(){})