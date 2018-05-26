'use strict';

module.exports = function(arr) {
  let arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr2[arr[i]] > 0) {
      arr2[arr[i]]++;
    } else {
      arr2[arr[i]] = 1;
    }
  }

  let arr3 = [];

  for (let i = 0; i < arr2.length; i++) {
    let current = arr2[i];
    for (let j = 0; j < current; j++) {
      arr3.push(arr2[i]);
    }
  }

  return arr3;
};
