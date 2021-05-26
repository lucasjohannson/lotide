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

function middle(array){
  const returnArray = []
  if(array.length <= 2){
    return returnArray;
  }else if (array.length % 2 === 0){ // the number is even 
    returnArray.push(array[(array.length / 2) - 1]);
    returnArray.push(array[(array.length / 2)]);
    return returnArray;
  } else { //odd number
    returnArray.push(array[(Math.ceil(array.length / 2)) - 1]);
    return returnArray;
  }

}
console.log(middle([1,2,3]));

assertArraysEqual(eqArrays(middle([1,2,3]), [2]), true); // => should PASS
assertArraysEqual(eqArrays(middle([1,2,3,4]), [2,3]), true); // => should PASS
assertArraysEqual(eqArrays(middle([1,2]), []), true); // => should PASS
//assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS