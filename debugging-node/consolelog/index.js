'use strict';
var assert = require('assert');
var callbacks = [];

for ( var i = 0; i < 100; i++ ) {
  callbacks.push(() => { return i; });
}

var v = callbacks.reduce((memo, fn) => {
  return memo + fn();
}, 0);

assert(v === 4950, 'v is not 4950 v is ' + v);
