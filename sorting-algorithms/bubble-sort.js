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


//1. Loop through the array for [i]
//2. Loop through the array for [j]
//3. Compare if arr[j - 1] is greater than arr[i]
//4. If it is greater, swap 
