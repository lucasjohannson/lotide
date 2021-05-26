// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(a1, a2) {
  if (eqArrays(a1, a2)) {
    console.log(`✅✅✅Assertion Passed: ${a1} === ${a2}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${a1} !== ${a2}`);
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

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS