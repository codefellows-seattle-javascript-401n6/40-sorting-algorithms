function emptyList() {
  return [];
}

function oneItemList() {
  return [92];
}

function fewItemList() {
  return [32, 16, 8, 99, 0];
}

function manyItemList() {
  let max = 10000;
  let list = [];
  for (let i = 0; i < max; i++) {
    list.push(Math.random());
  }
  return list;
}

function alreadySortedList() {
  let list = manyItemList();
  list.sort();
  return list;
}

module.exports = {
  emptyList,
  oneItemList,
  fewItemList,
  manyItemList,
  alreadySortedList,
};
