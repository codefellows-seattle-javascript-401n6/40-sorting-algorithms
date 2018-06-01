module.exports = function(arr) {
  let arr2 = [];
  for(let i = 0; i < arr.length; i++){
    if(arr2[arr[i]] > 0) {
      arr2[arr[i]]++;
      console.log(arr2);
    }
    else{
      arr2[arr[i]] = 1;
    }
  }

  let arr3 = [];
  for (let i = 0; i < arr2.length; i++) {
    let value = arr2[i];
    for (let j = 0; j < value; j++) {
      arr3.push(arr2[i]);
    }
  }
  return arr3;
}
