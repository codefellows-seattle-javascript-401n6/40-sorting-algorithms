module.exports = function(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 1; j < arr.length; j++) {
      if(arr[j - 1] > arr[j]) {
        let temp = arr[j-1];
           arr[j-1] = arr[j];
           arr[j] = temp;
      }
    }
  }
  return arr;
}
