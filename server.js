var express = require('express');
var app = new express();
var ejs = require('ejs');
var server = require('http').Server(app);

var dist = __dirname + '/dist/';

app.use(express.static( dist ));

app.get('/', function(req, res){
  res.sendFile( dist + 'index.html');
});

console.log('Server listening on port 3000');

server.listen(3000);
