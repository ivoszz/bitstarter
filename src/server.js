var fs = require('fs');
var express = require('express');

var port = process.env.PORT || 4000;

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', { layout: false });

app.use(app.router);
app.use(express.static(__dirname + '/public'));


app.get('/', function(request, response) {
  var text = fs.readFileSync(__dirname + '/index.html');
  response.send(text.toString());
});

app.listen(port);
console.log('Listening on port %d.', port);
