var express = require('express');
var fs=require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var res=fs.readFileSync('index.html');
  res=res.toString('utf8');
  response.send(res);
});
app.get('/css/bootstrap.css', function(request, response) {
  var res=fs.readFileSync('css/bootstrap.css');
  res=res.toString('utf8');
  response.send(res);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});