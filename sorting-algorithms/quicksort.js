module.exports = function(arr) {
  if(arr.length <= 1){
    return arr
  }
  let swapPosition = Math.floor((arr.length - 1) / 2);
  let swapValue = arr[swapPosition], less = [], more = [];
  arr = arr.slice(0, swapPosition).concat(arr.slice(swapPosition + 1));
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < swapValue){
      less.push(arr[i]);
    }else {
      more.push(arr[i]);
    }
  }
  return arr;
};
