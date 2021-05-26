// // FUNCTION IMPLEMENTATION
// const assertArraysEqual = function(a1, a2) {
//   if (eqArrays) {
//     console.log(`✅✅✅Assertion Passed: ${a1} === ${a2}`);
//   } else {
//     console.log(`🤬🤬🤬 Assertion Failed: ${a1} !== ${a2}`);
//   }
// };


// function eqArrays(arr1, arr2){
//   if(arr1.length !== arr2.length) return false;
//   for(let i = 0; i < arr1.length; i ++){
//     if(arr1[i] !== arr2[i]){
//       return false;
//     }
//   }
//   return true;
// }

// function without(source, toRemove){
//   let removed = [];
//   for(let i = 0; i < source.length; i ++){
//     if(!toRemove.includes(source[i])){
//       removed.push(source[i]);
//     }
//   }
//   return removed;
// }

// assertArraysEqual(eqArrays(without([1, 2, 3], [1]), [2, 3]), true); // => should PASS
// assertArraysEqual(eqArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]), true); // => should PASS
// assertArraysEqual(eqArrays(without(["1", "2", "3"], ["2"]), ["1", "3"]), true); // => should PASS

let input = process.argv[2];

if (input)
  console.log(reverse(input));

input = function reverse(original) {
  return orignal.split('').reverseList().join('');
}