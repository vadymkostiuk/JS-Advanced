// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
//
//   In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
//
//   The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
//
//   Check the assertion tests for examples.

function uniteUnique(arr) {
  const arrArgs = [...arguments];
  const union = [];
  let i, size = arrArgs.length;

  for (i = 0; i < size; i += 1) {
    let j, size2 = arrArgs[i].length;

    for (j = 0; j < size2; j += 1) {

      if (union.indexOf(arrArgs[i][j]) === -1) {
        union.push(arrArgs[i][j]);
      }

    }

  }

  return union;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);