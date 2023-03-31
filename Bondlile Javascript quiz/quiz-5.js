`Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0.`

module.exports = function sumOfDifferences(arr) {
  if (arr.length <= 1) {
    return 0;
  }

  const diffs = arr
    .sort((a, b) => b - a)
    .map((num, i, arr) => num - arr[i + 1])
    .slice(0, -1);

  return diffs.reduce((sum, diff) => sum + diff, 0);
};
  