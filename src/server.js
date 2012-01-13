var pg = require('pg');
var express = require('express');

console.log(process.env.DATABASE_URL);

pg.connect(process.env.DATABASE_URL, function(err, client) {
  var query = client.query('SELECT * FROM table');
  console.log(query);
});

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.PORT || 3000;

app.listen(port);
console.log('Listening on %d', port);
