ArrayFactory = require('../util/array-factory');
isSorted = require('../util/is-sorted');
Sorters = require('../sorting-algorithms');

function sortArrayWithAlgorithm(arrayFactory, sortingFunction) {
  let initial = arrayFactory();
  let result = sortingFunction(initial);
  expect(isSorted(result)).toBe(true);
}

describe("Sorting Algorithms", () => {
  testWithAlg("Native Sort", Sorters.NativeSort);
  testWithAlg("Bubble Sort", Sorters.BubbleSort);
  // uncomment these as you start working on them.
  testWithAlg("Bucket Sort", Sorters.BucketSort);
  testWithAlg("Insertion Sort", Sorters.InsertionSort);
  testWithAlg("Merge Sort", Sorters.MergeSort);
  testWithAlg("Quicksort", Sorters.Quicksort);
});

function testWithAlg(name, alg) {
  describe(name, () => {
    it("should work for an empty list", () => {
      sortArrayWithAlgorithm(ArrayFactory.emptyList, alg)  
    });

    it("should work for a single-item list", () => {
      sortArrayWithAlgorithm(ArrayFactory.oneItemList, alg)  
    });

    it("should work for a few-item list", () => {
      sortArrayWithAlgorithm(ArrayFactory.fewItemList, alg)  
    });

    it("should work for a many-item list", () => {
      sortArrayWithAlgorithm(ArrayFactory.manyItemList, alg)  
    });

    it("should work for an already-sorted-list", () => {
      sortArrayWithAlgorithm(ArrayFactory.alreadySortedList, alg)  
    });
  });
}
