// go through arr and swap values 
// inefficent if you have a lot of values; swaps with every single thing in the array
// Run time: O(N^2)
module.exports = (arr) => {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        let swap = arr[i];
        arr[i] = arr[i -1];
        arr[i - 1] = swap;
        isSorted = false;
      }
    }
  }
  return arr;
};