const [
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine
] = Array.from({ length: 10 }).map((_, i) => a =>
  a ? Math.floor(eval(`${i}` + a)) : `${i}`
);

const [plus, minus, times, divideBy] = ['+', '-', '*', '/'].map(sign => a =>
  sign + a
);

console.log(nine(times(eight()))); //
console.log(eight(plus(zero()))); //
console.log(five(minus(eight()))); //
console.log(nine(divideBy(nine()))); //
console.log(three(times(seven(times(two()))))); //
