const assert = require('assert');

function maxSubarray(arr) {
  console.time('Time');
  let maxSubArraySum = -Infinity;
  let currentSum = 0;
  let maxSubsequenceSum = -Infinity;
  for (let x of arr) {
    maxSubsequenceSum = Math.max(x, maxSubsequenceSum + x, maxSubsequenceSum);
    currentSum = Math.max(x, currentSum + x);
    maxSubArraySum = Math.max(maxSubArraySum, currentSum);
  }
  console.timeEnd('Time');
  return [maxSubArraySum, maxSubsequenceSum];
}

assert.deepStrictEqual(maxSubarray([-1, 2, 3, -4, 5, 10]), [16, 20]);
assert.deepStrictEqual(maxSubarray([-2, -3, -1, -4, -6]), [-1, -1]);
assert.deepStrictEqual(maxSubarray([1, 2, 3, 4]), [10, 10]);
assert.deepStrictEqual(maxSubarray([2, -1, 2, 3, 4, -5]), [10, 11]);
