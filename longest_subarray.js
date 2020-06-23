const assert = require('assert');

// Time complexity = O(N + Backtracks)
function longestSubarray(arr) {
  let i = 0;
  let max = 1;
  // counts number of elems that obeys the rule
  // (NB: can decide to cause backtrack -> see how `firstLatestOccurence` is used)
  function consume() {
    let count = 1;
    // used to increment i if loop wasn't ran
    const startIndex = i;
    // used for backtracking
    let firstLatestOccurence = i;
    // used to ensure the difference is within one for current consuming cycle
    let min = Math.min(arr[i], arr[i + 1]);

    while (arr[i + 1] && Math.max(arr[i], arr[i + 1]) - min < 2) {
      if (arr[i] !== arr[i + 1]) {
        firstLatestOccurence = i + 1;
      }
      count++;
      i++;
    }

    // backtracking
    if (firstLatestOccurence < i && Math.max(arr[i], arr[i + 1]) - min > 1) {
      i = firstLatestOccurence;
    }
    // increment if loop wasn't run at all
    if (startIndex === i) i++;
    // reset `max` to the current maximum between `max` and count
    max = Math.max(max, count);
  }

  // Walkthrough the array: function exec starts here
  while (i < arr.length - 1) {
    consume();
  }
  return max;
}

assert.deepStrictEqual(longestSubarray([0, 1, 2, 1, 2, 3]), 4);
assert.deepStrictEqual(longestSubarray([1, 1, 1, 3, 3, 2, 2]), 4);
assert.deepStrictEqual(longestSubarray([1, 1, 1, 2, 2, 3, 3, 2, 2, 3]), 7);
assert.deepStrictEqual(longestSubarray([1, 2, 2, 2, 2]), 5);
assert.deepStrictEqual(longestSubarray([2, 2, 2, 2, 2]), 5);
