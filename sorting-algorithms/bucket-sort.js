'use strict';

module.exports = function(arr) {
  let arrTwo = [];
  for (let i = 0; i < arr.length; i++) {
    if (arrTwo[arr[i]] > 0) {
      arrTwo[arr[i]]++;
      console.log('arrTwo: ', arrTwo);
    } else {
      arrTwo[arr[i]] = 1;
    }
  }
  let arrThree = [];
  for (let i = 0; i < arrTwo.length; i++) {
    let elementValue = arrTwo[i];
    for (let x = 0; x < elementValue; x++) {
      arrThree.push(arrTwo[i]);
    }
  }
  console.log('arrThree: ', arrThree);
  return arrThree;
};
