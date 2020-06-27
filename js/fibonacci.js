function fibonacci(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
}

console.log(fibonacci(8));

// fib(n) => fib(n-1) + fib(n-2)
// 0 1 1 2 3
function fibR(n) {
  if (n < 2) {
    return n;
  }
  return fibR(n - 1) + fibR(n - 2);
}

console.log(fibR(5));
