var debug = require('debug')('http')
  , http = require('http')
  , name = 'My App';

// fake app

debug('booting %s', name);

http.createServer(function(req, res){
  debug(req.method + ' ' + req.url);
  res.end('Hello World!\n');
}).listen(1337, function(){
  debug('listening');
});

// fake worker of some kind

require('./worker');
