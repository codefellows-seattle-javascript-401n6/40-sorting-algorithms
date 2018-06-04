'use strict';

let quickSort = module.exports = function(arr){ 
  console.log('4 hi');
  let start = 0;
  let middle = Math.floor((arr.length) / 2);
     
  let pivot;
  let partitionIndex;
  console.log('10 stuff', start, middle, pivot, partitionIndex);
  console.log('20 arr', arr);
  if(start < middle){
    console.log('13 start < middle');
    pivot = middle;
    partitionIndex = partition(arr, pivot, start, middle);

    quickSort(arr, start, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, middle);
  }

  return arr;
};
      
function partition(arr, pivot, start, middle){
  console.log('24 partition')
  var pivotValue = arr[pivot],
    partitionIndex = start;

  for(var i = start; i < middle; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, middle, partitionIndex);
  return partitionIndex;
}

function swap(arr, i, j){

  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;

}
       

