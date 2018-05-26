'use strict';

module.exports = function(arr) {
  let copiedArr = arr.splice();
  let newArr = [];

  while (newArr.length < arr.length) {
    let smallest = copiedArr[0];
    for (let i = 1; i < copiedArr.length; i++) {
      if (copiedArr[i] < smallest) {
        smallest = copiedArr[i];
      }
    }
    newArr.push(smallest);
  }

  return newArr;
};
