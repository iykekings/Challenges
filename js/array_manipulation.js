const { assertEq } = require('./test');

// function arrayManipulation(n, queries) {
//   console.time('Start');
//   let res = Array(n).fill(0);
//   for (let [a, b, k] of queries) {
//     let diff = b - a + 1;
//     for (let i = a - 1; i < diff; i++) {
//       res[i] += k;
//     }
//   }
//   let result = res.sort((a, b) => b - a)[0];
//   console.timeEnd('Start');
//   return result;
// }
// function arrayManipulation(n, queries) {
//   console.time('Start');
//   let res = Array(n).fill(0);
//   let an = queries.map(q =>
//     res.map((r, i) => (i + 1 <= q[1] && i + 1 >= q[0] ? q[2] : r))
//   );
//   for (let i = 0; i < an.length; i++) {
//     for (let j = 0; j < res.length; j++) {
//       res[j] += an[i][j];
//     }
//   }
//   let result = res.sort((a, b) => b - a)[0];
//   console.timeEnd('Start');
//   return result;
// }
function arrayManipulation(n, queries) {
  console.time('Start');
  const arr = new Array(n).fill(0);
  let result = 0;

  queries.forEach(([a, b, k]) => {
    arr[a - 1] += k;
    if (b < arr.length) {
      arr[b] -= k;
    }
  });

  arr.reduce((a, b) => {
    const acc = a + b;
    result = Math.max(result, acc);
    return acc;
  }, 0);
  console.timeEnd('Start');
  return result;
}

assertEq(
  arrayManipulation(5, [
    [1, 2, 100],
    [2, 5, 100],
    [3, 4, 100]
  ]),
  200
);
