/**
 * http://usejsdoc.org/
 */
/*
var express = require('express');
var session = require('express-session');

var app = express();

app.use(session({
	secret: 'secret key',
	resave: false,
	saveUninitialized: true,
	cookie:{
		maxAge: 60*1000
	}
}));

app.use(function (request, response){
	request.session.now = (new Date()).toUTCString();
	response.send(request.session);
});

app.listen(52273, function(){
	console.log('server run');
});
*/

var rs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

var DummyDB = (function(){
  var DummyDB = {};
  var storage = [];
  var count = 1;

  DummyDB.get = function (id){
    if(id){
      id = (typeof id == 'string') ? Number(id) : id;
      for(var i in storage) if (storage[i].id == id){
        return storage[i];
      }
    }else{
      return storage;
    }
  };

  DummyDB.insert = function(data){
    data.id = count++;
    storage.push(data);
    return data;
  };

  DummyDB.remove = function (id){
    id = (typeof id == 'string') ? Number(id) : id;

    for(var i in storage) if (storage[i].id == id){
      storage.splice(i,1);
      return true;
    }
    return false;
  };
  return DummyDB;
})();

var app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/user',function(request,response){
  response.send(DummyDB.get());
});
app.get('/user/:id',function(request,response){
  response.send(DummyDB.get(request.params.id));
});
app.post('/user',function(request,response){
  var name = request.body.name;
  var region = request.body.region;

  if(name && region){
    response.send(DummyDB.insert({
      name: name,
      region: region
    }));
  } else{
    throw new Error('error');
  }
});

app.put('/user/:id',function(request,response){
  var id = request.params.id;
  var name = request.body.name;
  var region = request.body.region;

  var item = DummyDB.get(id);
  item.name = name || item.name;
  item.region = region || item.region;

  response.send(item);
});

app.delete('/user/:id',function(request,response){
  response.send(DummyDB.remove(request.params.id));
});

app.listen(52273,function(){
  console.log('Server running at http://127.0.0.1:52273');
});




