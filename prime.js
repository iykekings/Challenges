class Primes {
  static *stream() {
    yield 2;
    let n = 3;
    while (n < 15486042) {
      if (isPrime(n)) {
        yield n;
      }
      n += 2;
    }
  }
}

function isPrime(n) {
  for (let a = 3; a <= ~~Math.sqrt(n); a += 2) {
    if (n % a == 0) return false;
  }
  return true;
}

console.log(
  Array.from({ length: 10000 }, (_, i) => i + 1).filter(val => val % 2 !== 0)
    .length
);
