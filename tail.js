// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// function tail (arr){
//   let newArray = [];
//   for(let i = 1; i < arr.length; i ++){
//     newArray.push(arr[i]);
//   }
//   return newArray;
// }

// // Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

var globalScope = 'I\'m all up in your codes!';

if (true) {
  let globalScope = 'Not anymore, you\'re not!';
}
console.log(globalScope);