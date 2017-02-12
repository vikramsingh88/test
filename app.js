var express = require('express'); // web application framework

var app = express();

app.get('/', function(req, res){
	res.sendFile(__dirname +'/login.html');
});

app.post('/login', function(req, res){
	res.end('Login sucessfull');
});

app.get('/query', function(req, res){
	res.json({name:'Vikram',job:'IT'});
});

app.listen(3000, function(){
	console.log('Server is running on port 3000');
});

console.log('Sample server is running');