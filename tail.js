
function tail (arr){
  let newArray = [];
  for(let i = 1; i < arr.length; i ++){
    newArray.push(arr[i]);
  }
  return newArray;
}

module.exports = tail;
// // Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
