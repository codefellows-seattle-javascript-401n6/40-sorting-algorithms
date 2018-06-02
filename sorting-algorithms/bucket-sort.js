// find largest number in arr
// O(N)

module.exports = (arr1) => {
  let arr2 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2[arr1[i]] > 0) {
      arr2[arr1[i]]++;
    } else {
      arr2[arr1[i]] = 1;
    }
  }

  let arr3 = [];
  for (let i = 0; i < arr2.length; i++) {
    let val = arr2[i];
    for (let j = 0; j < val; j++) {
      arr3.push(arr2[i]);
    }
  }
  return arr3;
};