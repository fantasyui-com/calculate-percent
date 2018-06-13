const assert = require('assert');
const pct = require('./index.js');

const input = {input:'rgb.png'};
const expected = [[255,0,0,1],[255,0,0,1],[255,0,0,1],[0,255,0,1],[0,255,0,1],[0,255,0,1],[0,255,0,1],[0,0,255,1],[0,0,255,1],[0,0,255,1]];

const actual = pct( 39, 77, 3);
assert.equal( actual , 0.506 ); // my percentage through life
assert.equal( typeof actual  , 'number' );
