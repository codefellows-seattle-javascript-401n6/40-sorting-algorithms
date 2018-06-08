'use strict';
const InsertionSort = require('./insertion-sort');
module.exports = function (arr) {

  if (arr.length === 0) {
    console.log('hi 7');
    return arr;
  }

 
  var i,
    minValue = arr[0],
    maxValue = arr[0],
    bucketSize = bucketSize || 5;

  
  arr.forEach(function (currentVal) {
    console.log('hi 19');
    if (currentVal < minValue) {
      minValue = currentVal;
    } else if (currentVal > maxValue) {
      maxValue = currentVal;
    }
  });

  
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  var allBuckets = new Array(bucketCount);

  for (i = 0; i < allBuckets.length; i++) {
    console.log('hi 32');
    allBuckets[i] = [];
  }


  arr.forEach(function (currentVal) {
    console.log('hi 38');
    allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
  });

  arr.length = 0;

  allBuckets.forEach(function (bucket) {
    console.log('hi 46');
    InsertionSort(bucket);
    bucket.forEach(function (element) {
      console.log('hi 49');
      arr.push(element);
    });
  });
  console.log('hi 53')
  return arr;
};

