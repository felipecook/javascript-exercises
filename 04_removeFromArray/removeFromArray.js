const removeFromArray = function (fullArray, ...remove) {
  for (let i = 0; i < remove.length; i++){
    for(let j = 0; j < fullArray.length; j++){
      if (remove[i] == fullArray[j]){
        if (Number.isInteger(remove[i])){
          fullArray.splice(j, 1);
        }
      }
    }
  }
  return fullArray;

};

// Do not edit below this line
module.exports = removeFromArray;
