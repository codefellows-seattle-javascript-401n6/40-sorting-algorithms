
module.exports = function(arr) {
  let dupArray = arr.slice();
  let newArr = [];

  while (dupArray.length > 0) {
    let minVal = dupArray.splice(0);
    for (let i = 1; i < dupArray.length; i++) {
      if (dupArray[i] < minVal) {
        minVal = dupArray.splice(0);
      }
    }
    newArr.push(minVal);
  }

  return newArr;
};