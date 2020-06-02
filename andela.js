function minimalSum(num, k) {
  if (num.length === 0) {
    return 0;
  }

  let index = 0;
  let max = Number.MAX_SAFE_INTEGER;
  while (k > 0) {
    let currentValue = num[index];
    if (currentValue <= max) {
      num.sort((a, b) => b - a);
      index = 0;
      max = num[0] / 2;
      continue;
    }
    k--;

    currentValue = Math.ceil(currentValue / 2);

    num[index] = currentValue;
    if (index + 1 < num.length) {
      index++;
    }
  }
  return num.reduce((a, b) => a + b, 0);
}

console.log(minimalSum([7, 10, 20], 4));
