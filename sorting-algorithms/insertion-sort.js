module.exports = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    let small = arr[i];
    let smIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < small) {
        small = arr[j];
        smIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[smIndex];
    arr[smIndex] = temp;
  }
  return arr;
}
