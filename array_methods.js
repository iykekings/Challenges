// Array.prototype.map = function(cb) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(cb(this[i], i, this));
//   }
//   return result;
// };
Array.prototype.reduce = function(cb, init) {
  let acc = init;
  for (let i = 0; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }
  return acc;
};

console.log([1, 2, 3].reduce((a, b) => a + b, 0));
console.log(
  [1, 2, 3].reduce((a, b) => {
    a.push(b);
    return a;
  }, [])
);
