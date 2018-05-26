'use strict';

module.exports = function(arr) {
  let midpoint = Math.floor((arr.length - 1) / 2);
  let beginning = arr[0];

  arr[0] = arr[midpoint];
  arr[midpoint] = beginning;
  

  for (let i = 0; i <= arr.length; i++) {
    let pivot = arr[0];
    
    for (let j = (i + 1); j <= arr.length; j++) {
      if (i !== j) {
        let current = arr[j];
        if (current < pivot) {
          let removed = arr.slice(j)[0];
          arr = arr.splice(i, 0, removed);
        }
      }
      
    }
  }


  return arr;
};
