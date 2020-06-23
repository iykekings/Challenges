const assert = require('assert');

function maxSubArraySum(arr) {
  let store = [];
  for (let i = 0; i < arr.length; i++) {
    store[i] = arr.slice(0, i + 1).reduce((a, b) => a + b, 0);
  }
  let max = -Infinity;
  let acc = 0;
  for (let i = 0; i < store.length; i++) {
    if (store[i] < 0) {
      max = Math.max(max, arr[i]);
      acc = 0;
    } else {
      acc = acc + arr[i];
      max = Math.max(acc, max);
    }
  }
  return max;
}

function maxSubarray(arr) {
  return [maxSubArraySum(arr), maxSubsequenceSum(arr)];
}

function maxSubsequenceSum(arr) {
  let pos = 0;
  let neg = -Infinity;
  let hasPos = false;
  for (let a of arr) {
    if (a >= 0) {
      pos += a;
      hasPos = true;
    } else {
      neg = Math.max(neg, a);
    }
  }
  return hasPos ? pos : neg;
}

assert.deepStrictEqual(maxSubarray([-1, 2, 3, -4, 5, 10]), [16, 20]);
assert.deepStrictEqual(maxSubarray([-2, -3, -1, -4, -6]), [-1, -1]);
assert.deepStrictEqual(maxSubarray([1, 2, 3, 4]), [10, 10]);
assert.deepStrictEqual(maxSubarray([2, -1, 2, 3, 4, -5]), [10, 11]);
