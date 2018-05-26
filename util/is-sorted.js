module.exports = function(arr) {
  // empty lists and single-item lists are sorted
  if (arr.length < 2) {
    return true;
  }

  // make sure no value is bigger than the value that comes after it.
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
}

