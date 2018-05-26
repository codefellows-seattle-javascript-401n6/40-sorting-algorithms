module.exports = function(arr) {
  let isSorted = false;
  while (!isSorted)  {
    isSorted = true;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        // indicate that it's not sorted on this round.
        isSorted = false;

        // swap the two values
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}
