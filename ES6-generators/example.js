var Q    = require('q');
var fs   = require('fs');
var stat = Q.denodeify(fs.stat);

Q.spawn(function *(){
  var stat1 = yield stat('index.html');
  var stat2 = yield stat('notes.md');
  console.log(stat1.size, stat2.size);
});
