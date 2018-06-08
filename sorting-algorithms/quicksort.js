'use strict';

let quickSort = module.exports = function(arr){ 
  if (arr.length < 2){
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2),
    pivot = arr[pivotIndex],
    lows = [],
    highs = [],
    index, 
    current;

  for(let index = 0; index < arr.length; index++){
    if(index === pivotIndex){
      continue;
    }
    current = arr[index];
    if(current < pivot){
      lows.push(current);
    }else{
      highs.push(current);
    }
  }
  return quickSort(lows).concat([pivot]).concat(quickSort(highs));
}; [32, 16, 8, 99, 0];
       

