var pg = require('pg');
var express = require('express');

/*
console.log(process.env.DATABASE_URL);

pg.connect(process.env.DATABASE_URL, function(err, client) {
  var query = client.query('SELECT * FROM table');
  console.log(query);
}); */

var app = express.createServer();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', { layout: false });

app.configure(function() {
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

var pageInfo = { pageTitle: 'Go klub Brno' };

app.get('/', function(request, response) {
  response.render('index', { pageInfo: pageInfo });
});

app.get('/players', function(request, response) {
  response.render('players', { pageInfo: pageInfo })
});

var port = process.env.PORT || 4000;

app.listen(port);
console.log('Listening on port %d.', port);
