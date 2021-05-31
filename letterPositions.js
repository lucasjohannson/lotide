// FUNCTION IMPLEMENTATION
function eqArrays(arr1, arr2){
  if(arr1.length !== arr2.length) return false;
  for(let i = 0; i < arr1.length; i ++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(testFunction, expectedValue) {
  if (eqArrays(testFunction, expectedValue)) {
    console.log(`✅✅✅ Assertion Passed: ${testFunction} === ${expectedValue}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${testFunction} !== ${expectedValue}`);
  }
};


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i ++){
    if(sentence[i] === ' '){
      continue;
    }
    if(results[sentence[i]]){
      results[sentence[i]].push(i);
    }
    else{
      results[sentence[i]] = [i];
    }
  }
  return results;
};
//console.log(letterPositions("Lighthouse in the house"));
// console.log(letterPositions("hello").e);
assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;