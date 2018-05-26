'use strict';

module.exports = function(arr) {
  let copiedArr = arr.slice();
  let newArr = [];

  while (copiedArr.length > 0) {
    let smallest = copiedArr.splice(0);
    for (let i = 1; i < copiedArr.length; i++) {
      if (copiedArr[i] < smallest) {
        smallest = copiedArr.splice(0);
      }
    }
    newArr.push(smallest);
  }

  return newArr;
};
