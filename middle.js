
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

module.exports = middle;