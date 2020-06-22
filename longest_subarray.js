const assert = require('assert');

function longestSubarray(arr) {
  let i = 0;
  let max = 1;
  let maxFirstSeen = 0;
  function consume() {
    let count = 1;
    const startIndex = i;
    let min = Math.min(arr[i], arr[i + 1]);
    while (arr[i + 1] && Math.max(arr[i], arr[i + 1]) - min < 2) {
      if (arr[i] !== arr[i + 1]) {
        maxFirstSeen = i + 1;
      }
      count++;
      i++;
    }
    //  TODO: get to use maxFirstSeen
    max = Math.max(max, count);
  }
  while (i < arr.length) {
    consume();
  }
  return max;
}

assert.deepStrictEqual(longestSubarray([0, 1, 2, 1, 2, 3]), 4);
assert.deepStrictEqual(longestSubarray([1, 1, 1, 3, 3, 2, 2]), 4);
// assert.deepStrictEqual(longestSubarray([1, 1, 1, 2, 2, 3, 3, 2, 2]), 6);
