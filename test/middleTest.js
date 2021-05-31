
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle')

assertArraysEqual(eqArrays(middle([1,2,3]), [2]), true); // => should PASS
assertArraysEqual(eqArrays(middle([1,2,3,4]), [2,3]), true); // => should PASS
assertArraysEqual(eqArrays(middle([1,2,3,4,5,6,7,8,9]), [5]), true); // => should PASS
//assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS