function* range(start, stop, step = 1) {
  for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
    yield i;
  }
}

console.log([...range(1, 10)]);
console.log([...range(10, 0, -1)]);
console.log([...range(10, 0)]);
console.log([...range(0, 40, 5)]);
console.log([...range(20, 10)]);
console.log([...range(10, -5, -1.5)]);
console.log([...range(-20, 10, 5)]);
console.log([...range(50, 10, -5)]);

let keeper = [];
for (let n of range(3, 30, 3.5)) {
  keeper.push(n);
}
console.log(keeper);
