var fs = require('fs');

try{
	var data = fs.readFileSync('./examp/filename.txt', 'utf8');
	console.log(data);
} catch(e){
	console.log('Error:', e.stack);
}

try{
	var data2 = fs.readFileSync(data, 'utf8');
	console.log(data2);
} catch(e){
	console.log('Error:', e.stack);
}

fs.readFile('./examp/filename.txt', function(err, data3){
	console.log(data3.toString());
	fs.readFile(data3, function(err, data4){
		console.log(data4.toString());
	})
})