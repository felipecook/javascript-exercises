const sumAll = function(start, end) {

  // let returnSum = 0;
  // if (Number.isInteger(start) && Number.isInteger(end)){
  //   for(let i = start; i <= end; i++){
  //     returnSum += i;
  //   }
  // }

  // return returnSum;



  if (start == end) {
    return start;
  } else {
    return end + sumAll(start, end - 1);
  }
  



};

// Do not edit below this line
module.exports = sumAll;
