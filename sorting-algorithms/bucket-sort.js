'use strict';
const InsertionSort = require('./insertion-sort');
module.exports = function (arr) {

  if (arr.length === 0) {
    return arr;
  }

 
  var i,
    minValue = arr[0],
    maxValue = arr[0],
    bucketSize = bucketSize || 5;

  
  arr.forEach(function (currentVal) {
    if (currentVal < minValue) {
      minValue = currentVal;
    } else if (currentVal > maxValue) {
      maxValue = currentVal;
    }
  });

  
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  var allBuckets = new Array(bucketCount);

  for (i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
  }


  arr.forEach(function (currentVal) {
    allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
  });

  arr.length = 0;

  allBuckets.forEach(function (bucket) {
    InsertionSort(bucket);
    bucket.forEach(function (element) {
      arr.push(element);
    });
  });
  return arr;
};

