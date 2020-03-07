// @ts-nocheck
const arr = [1, 2, 3, 4, 5, 6, 78, 9, 0, 65];

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j] && i !== j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

// sort(arr);
//map

const innerMap = ([head, ...tail], fn, i, orig) =>
  !head ? [] : [fn(head, i, orig), ...innerMap(tail, fn, i + 1, orig)];

const map = (arr, fn) => innerMap(arr, fn, 0, arr);

let res = map([1, 3, 4, 5, 2, 5], n => n * 2); //? [ 2, 6, 8, 10, 4, 10 ]

console.log(res);

// // reverse
// const reverse = arr => {
//   return arr.length === 0
//     ? []
//     : [...arr.slice(-1), ...reverse(arr.slice(0, -1))];
// };

// reverse([1, 2, 3, 4, 5, 6, 7]); //?
