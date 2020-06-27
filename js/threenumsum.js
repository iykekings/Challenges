function threeNumberSum(arr, target) {
  arr = arr.sort((a, b) => a - b);
  let collector = [];
  for (let i in arr) {
    for (let b of arr.slice(parseInt(i) + 1)) {
      for (let c of arr.slice(parseInt(i) + 2)) {
        const arri = [arr[i], b, c];
        const check = collector.some(c => deepEquals(c, arri));
        if (arr[i] + b + c === target && !check && b !== c) {
          collector.push(arri);
        }
      }
    }
  }
  function deepEquals(arr, arr1) {
    let b = [...arr1].sort();
    return [...arr]
      .sort()
      .map((a, i) => a === b[i])
      .every(e => e);
  }
  return collector;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
console.log(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 30));
