
var url = 'http://www.europeangodatabase.eu/EGD/GetPlayerDataByData.php?lastname=&country=cz&club=Brno';

var client = require('wwwdude').createClient({
  headers: { 'User-Agent': 'wwwdude' },
  gzip: true,
  timeout: 4000 // 4000ms timeout
});

client.get(url)
  .addListener('error', function(err) {
    sys.puts('Network Error');
  })
  .addListener('http-error', function(data, response) {
    sys.puts('HTTP Error');
  })
  .addListener('redirect', function(data, response) {
    sys.puts('Redirection to:');
  })
  .addListener('success', function(data, response) {
    sys.puts('Headers:')
  });


