const assert = require('assert');
const calculatePercent = require('.');

assert.equal( calculatePercent( 50,  100,    0) , 50 );
assert.equal( calculatePercent( 250, 1000,   0) , 25 );
assert.equal( calculatePercent( -50, 50,   -50) , 0 );
assert.equal( calculatePercent( 0,   50,   -50) , 50 );

const val = 50;
const max = 100;

console.log( calculatePercent(val, max) );
