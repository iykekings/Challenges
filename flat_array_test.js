const flat = require('./flat_array');
const { assertDeepEqual, shouldThrow } = require('./test');

assertDeepEqual(
  flat([1, 2, 3, [4, 5, [6, 7, 8, [9, 10]]], 11, 12, [13, 14]]),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  'Should flatten all nested arrays into a single one'
);

assertDeepEqual(
  flat([1, 2, 3, [4, 5, [6, 7, 8, [9, 10]]]]),
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  'Should flatten all nested arrays into a single one 2'
);

assertDeepEqual(
  flat([1, 2, 3]),
  [1, 2, 3],
  'Should return the same array if it is flattened already'
);
assertDeepEqual(flat([]), [], 'Return an empty array if the input is empty');

assertDeepEqual(flat([1, 2, 3, []]), [1, 2, 3], 'Ignore empty array');

shouldThrow(() => flat(1), 'Should throw an error if inout is not an array');
