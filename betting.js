function bet(n, k) {
  if (n <= 1 || (!n && !k)) return 0;
  if (!k) return n - 1;
  return n % 2 !== 0 ? 2 + bet((n - 1) / 2, k - 1) : 1 + bet(n / 2, k - 1);
}

console.assert(bet(8, 0) === 7);
console.assert(bet(10, 10) === 4);
console.assert(bet(18, 2) === 6);
console.assert(bet(4, 0) === 3);
console.assert(bet(4, 1) === 2);
console.assert(bet(2, 1) === 1);
console.assert(bet(2, 3) === 1);
console.time('S');
bet(2345069669, 100); // ~0.120ms
console.timeEnd('S');
