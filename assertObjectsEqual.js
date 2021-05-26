// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if(keys1.length !== keys2.length){
    return false;
  }
  for(let i of keys1){
    if(Array.isArray(object1[i]) && Array.isArray(object2[i])){
      if(!(eqArrays(object1[i], object2[i]))){
        return false;
      }
    }else if(!(object1[i] === object2[i])){
      return false;
    }
  }
  return true;
};


assertObjectsEqual(eqObjects({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3] }), true);


