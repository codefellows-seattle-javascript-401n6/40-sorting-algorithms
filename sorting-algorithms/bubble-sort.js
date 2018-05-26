'use strict';

module.exports = function(arr) {
  let isSorted = false;

  while (!isSorted) {
    let foundOutofOrder = false;
    for (let i = 0; i < arr.length; i++) {
      let first = arr[i];
      let second = arr[i + 1];
      if (second < first) {
        arr[i] = second;
        arr[i + 1] = first;
        foundOutofOrder = true;
      }
    }
    if (foundOutofOrder === false) {
      isSorted = true;
    }
  }
  return arr;
};
