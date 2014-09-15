var co = require('co');
var fs = require('fs');

function size(file) {
  return function(fn){
    fs.stat(file, function(err, stat){
      if (err) return fn(err);
      fn(null, stat.size);
    });
  };
}

co(function *(){
  var a = yield size('index.html');
  var b = yield size('notes.md');
  console.log(a, b);
  return [a, b];
})();
