// naive reference for Q.spawn implementation

Q.spawn = function(gen) {
  var iter = gen();
  var prevresult = iter.next();
  for(;;) {
    if (prevresult.done) { break; }
    var v = prevresult.value;

    if (v && 'then' in v) {
      // assume $.ajax
      v.then(function(response) {
        iter.next(response);
      }, function(xhr, responseText, err) {
        iter.throw(err);
      });
    } else {
      // handle any other yielded value aside from a promise
    }
  }
}
