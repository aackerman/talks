var Q    = require('q');
var fs   = require('fs');
var iPromiseToThrowAnError = function() {
  return {
    then: function(){
      throw new Error('ham');
    }
  };
};

Q.spawn(function *(){
  try {
    yield iPromiseToThrowAnError();
  }
  catch(e) {
    console.log('caught the error');
  }
  console.log('finished');
});
