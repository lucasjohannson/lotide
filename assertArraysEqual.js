// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(testFunction, expectedValue) {
  if (testFunction === expectedValue) {
    console.log(`✅✅✅ Assertion Passed: ${testFunction} === ${expectedValue}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${testFunction} !== ${expectedValue}`);
  }
};


module.exports = assertArraysEqual;
