
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬🤬 Assertion Failed: ${actual} !== ${expected}`);
  }
};
// inp: LHL out: L -> 2 H -> 1
countLetters = function(sentence){
  letterCount = {}
  for(let letter of sentence){
    if(letter === ' '){
      continue;
    }
    if(letterCount[letter]){
      letterCount[letter] += 1;
    }
    else{
      letterCount[letter] = 1;
    }
  }
  return letterCount;

}

module.exports = countLetters;

//console.log(countLetters("lighthouse in the house"));
