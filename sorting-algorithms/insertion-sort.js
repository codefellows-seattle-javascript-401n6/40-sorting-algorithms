'use strict';

module.exports = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    let x = (i - 1);
    while (x >= 0 && arr[x] > element) {
      arr[x + 1] = arr[x];
      x--;
    }
    arr[x + 1] = element;
  }
  return arr;
};
