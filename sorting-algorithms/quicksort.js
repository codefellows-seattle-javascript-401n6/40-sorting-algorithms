'use strict';

module.exports = quicksort = (arr) => {
  if (arr.length <= 1) {
    return arr;
    console.log('arr: ', arr);
  }
  let pivot = arr[arr.length - 1];
  let rightArr = [];
  let leftArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [...quicksort(leftArr), pivot, ...quicksort(rightArr)];
};
