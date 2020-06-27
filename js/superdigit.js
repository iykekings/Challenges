const { assertEq } = require('./test');
const fs = require('fs');

const text = fs.readFileSync('superdigit.txt', {
  encoding: 'utf8'
});
const [largeN, largeK] = text.split(' ');
// v1
// function digitSum(n, k) {
//   let det = n.match(/\d{1,12}/g).reduce((a, b) => a + superDigit(b), 0) * k;
//   return superDigit(String(det));
// }

// function superDigit(n) {
//   if (n.length < 2) {
//     return parseInt(n);
//   }
//   let next = n.split('').reduce((a, b) => a + parseInt(b), 0);
//   return superDigit(String(next));
// }

// v2
// function digitSum(n, k) {
// return superDigit(
//   String(n.match(/\d{1,12}/g).reduce((a, b) => a + superDigit(b), 0) * k)
// );
// }

const superDigit = n =>
  `${n}`.length < 2
    ? n
    : superDigit(`${n}`.split('').reduce((a, b) => a + parseInt(b), 0));

const digitSum = (n, k) => superDigit(superDigit(n) * k);

assertEq(superDigit(9875), 2);
assertEq(superDigit(29), 2);
assertEq(superDigit(11), 2);
assertEq(superDigit(2), 2);
assertEq(digitSum(148, 3), 3);
assertEq(digitSum(9875, 4), 8);
assertEq(digitSum(123, 3), 9);
assertEq(digitSum(largeN.trim(), parseInt(largeK.trim())), 4);
