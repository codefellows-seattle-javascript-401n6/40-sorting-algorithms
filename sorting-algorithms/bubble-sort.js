'use strict';

module.exports = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let x = 1; x < arr.length; x++) {
      if (arr[x - 1] > arr[x]) {
        let thing = arr[x - 1];
        arr[x - 1] = arr[x];
        arr[x] = thing;
      }
    }
  };
  return arr;
};