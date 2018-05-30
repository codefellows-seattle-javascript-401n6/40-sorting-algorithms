module.exports = function(array1) {
  let array2 = [];

  for (let i = 0; i < array1.length; i++) {
    if (array2[array1[i]] > 0) {
      array2[array1[i]]++;
    } else {
      array2[array1[i]] = 1;
    }
  }

  let array3 = [];

  for (let i = 0; i < array2.length; i++) {
    let value = array2[i];
    for (let j = 0; j < value; j++) {
      array3.push(array2[i]);
    }
  }

  return array3;
};
