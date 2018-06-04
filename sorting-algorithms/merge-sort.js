'use strict';

let mergeSort =module.exports = function(arr) {
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  while(arr.length > 1){
    return merge( mergeSort(left), mergeSort(right));
  }

  return arr;
};

function merge(left, right){
  let leftPointer = 0;
  let rightPointer = 0;
  let leftVal;
  let rightVal;
  let newArr = [];

  while( leftPointer < left.length && rightPointer < right.length) {
    leftVal = left[leftPointer];
    rightVal = right[rightPointer];
    if(leftVal <= rightVal){
      newArr.push(leftVal);
      leftPointer ++;
    }
    else {
      newArr.push(rightVal);
      rightPointer++
    }
  }
  if(!left[leftPointer]) newArr = newArr.concat(right.slice(rightPointer));
  if(!right[rightPointer]) newArr = newArr.concat(left.slice(leftPointer));

  return newArr;
  
}
