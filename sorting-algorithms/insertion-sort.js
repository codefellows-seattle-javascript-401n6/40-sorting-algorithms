// Complexity: Best Case = O(n)
module.exports = (arr) => {
  let countOuter = 0;
  let countInner = 0;
  let countSwap = 0;
  for(let i = 0; i < arr.length; i++) {
    countOuter++;
    let j = i - 1;
    while(j >= 0 && arr[j] > arr[i]) {
      countInner++;
      countSwap++;
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = arr[i];
  }
  return arr;
};