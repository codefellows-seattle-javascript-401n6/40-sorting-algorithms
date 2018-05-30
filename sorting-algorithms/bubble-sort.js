module.exports = function(arr) {
  let isSorted = false;
  while(!isSorted){
    for(let i = 0; i < arr.length; i++){
      if(arr[i - 1] > a[i]){
        let swap = arr[i];
        arr[i] = arr[i - 1]
        arr[i - 1] = swap;
        isSorted = false;
      }
    }
  }
  return arr;
}
