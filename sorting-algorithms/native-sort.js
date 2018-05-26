// this function exists to prove that the test
// infrastructure works correctly with the native
// built-in sort.
module.exports = function(arr) {
  // big "gotcha" in the built-in sort.
  // it sorts by strings by default!
  // we must provide a comparator function to sort by numbers!
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  //
  // here's what it would return by default.
  // the 4 at the end is out of place number-wise.
  // var array1 = [1, 30, 4, 21];
  // array1.sort();
  // console.log(array1);
  // expected output: Array [1, 21, 30, 4]
  arr.sort((a,b) => a - b);
  return arr;
}
