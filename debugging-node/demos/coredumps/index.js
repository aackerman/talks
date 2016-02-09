// force v8 to calculate line numbers
new Error().stack;
var fs = require('fs');
var http = require('http');
var url = require('url');

var hostname = '0.0.0.0';
var port = 1337;
var data = { urls: [] };

var server = http.createServer(function createServer(req, res) {
  data.urls.push(req.url);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, function listenCallback() {
  console.log('Server running at http://' + hostname + ':' + port);
});
