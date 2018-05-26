'use strict';

module.exports = function(arr) {

  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }

  function sort(array) {
    let a1;
    let a2;

    if (array.length % 2 === 0) {
      a1 = array.slice(0, (array.length / 2));
      a2 = array.slice((array.length / 2), (array.length - 1));
    } else {
      let midPoint = Math.floor(array.length / 2);
      a1 = array.slice(0, midPoint);
      a2 = array.slice(midPoint, (array.length - 1));
    }

    if (a1.length >= 1) {
      a1 = sort(a1);
    }

    if (a2.length >= 1) {
      a2 = sort(a2);
    }
    
    let newArray = [];

    while (a1.length > 0 && a2.length > 0) {
      if (a1[0] < a2[0]) {
        newArray.push(a1.shift());
      }
      if (a2[0] < a1) {
        newArray.push(a2.shift());
      }
    }

    if (a1.length > 0) {
      for (let i = 0; i < a1.length; i++) {
        newArray.push(a1[i]);
      }
    }

    if (a2.length > 0) {
      for (let i = 0; i < a2.length; i++) {
        newArray.push(a2[i]);
      }
    }

    return newArray;
  }

  return sort(arr);

};
