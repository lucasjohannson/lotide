
// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(testFunction, expectedValue) {
  if (testFunction === expectedValue) {
    console.log(`✅✅✅ Assertion Passed: ${testFunction} === ${expectedValue}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${testFunction} !== ${expectedValue}`);
  }
};

function eqArrays(arr1, arr2){
  if(arr1.length !== arr2.length) return false;
  for(let i = 0; i < arr1.length; i ++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
}



const takeUntil = function(array, callback) {
  result = []
  for(let elm of array){
    if(!callback(elm)){
      result.push(elm);
    }else{
      break;
    }
  }
  return result;
}
assertArraysEqual(eqArrays(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5],x => x < 0), [ 1, 2, 5, 7, 2 ]), true); // => should PASS

module.exports = takeUntil;