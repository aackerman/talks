var Q = require('q'), fs = require('fs');

var immaThrowAnError = function() {
  return {then: function(){throw new Error('ham'); }};
};

Q.spawn(function *(){
  try {
    yield immaThrowAnError();
  } catch(e) {
    console.log('caught the error');
  }
  console.log('finished');
});
