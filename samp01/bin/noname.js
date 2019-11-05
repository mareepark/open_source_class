//samp.txt
//read_file.txt
//read_file2.txt

var fs = require('fs');

try{
	var data = fs.readFileSync('./sapm.txt', 'utf8');
	console.log(data.toString());
} catch(e){
	console.log('Error:', e.stack);
}

try{
	var data2 = fs.readFileSync(data, 'utf8');
	console.log(data2.toString());
} catch(e){
	console.log('Error:', e.stack);
}

try{
	var data3 = fs.readFileSync(data2, 'utf8');
	console.log(data3.toString());
} catch(e){
	console.log('Error:', e.stack);
}
