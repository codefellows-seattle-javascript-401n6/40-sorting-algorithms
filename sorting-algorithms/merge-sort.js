'use strict';

module.exports = function(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let middleEl = Math.floor(arr.length / 2);
  let rightEl = arr.slice(middleEl);
  let leftEl = arr.slice(0, middle);

  return merge(mergerSort(leftEl), mergeSort(rightEl));

  function merge(leftEl, rightEl) {
    const result = [];

    while (leftEl.length && rightEl.length) {
      if (leftEl[0] <= rightEl[0]) {
        result.push(leftEl.shift());
        console.log('Result: ', result);
      } else {
        result.push(rightEl.shift());
        console.log('Result: ', result);
      }
    }
    while (leftEl.length) {
      result.push(leftEl.shift());
      console.log('Result: ', result);
    }
    while (rightEl.length) {
      result.push(rightEl.shift());
      console.log('Result: ', result);
    }
    console.log('Result: ', result);
    return result;
  }
};
