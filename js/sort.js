// function insertionSort1(n, arr) {
//   let i = 0;
//   while (i < arr.length) {
//     if (arr[i] < n && (arr[i + 1] > n || arr[i + 1] === undefined)) {
//       arr.splice(i + 1, 0, n);
//       return arr;
//     }
//     i++;
//   }
// }
// function insertionSort1(n, arr) {
//   let col = [];
//   let d = arr.slice(-1)[0];
//   for (let i = arr.length - 2; i >= -1; i--) {
//     if (arr[i] > d) {
//       arr[i + 1] = arr[i];
//       col.push([...arr].join(' '));
//     } else {
//       arr[i + 1] = d;
//       col.push([...arr].join(' '));
//       break;
//     }
//   }
//   return col.join('\n');
// }
// console.log(insertionSort1(5, [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]));

// function insertionSort2(n, arr) {
//   let col = [];
//   col.push(arr.join(' '));
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let p = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = p;
//         col.push(arr.join(' '));
//       }
//     }
//   }
//   return col.join('\n');
// }
// console.log(insertionSort2(2, [1, 4, 3, 5, 6, 2]));

var insert = function(array, rightIndex, value) {
  for (var j = rightIndex; j >= 0 && array[j] > value; j--) {
    array[j + 1] = array[j];
  }
  array[j + 1] = value;
};

var insertionSort = function(array) {
  for (var i = 1; i < array.length; i++) {
    insert(array, i - 1, array[i]);
  }
};

// var array = [22, 11, 99, 88, 9, 7, 42];
// insertionSort(array);
// console.log('Array after sorting:  ' + array);
//Program.assertEqual(array, [7, 9, 11, 22, 42, 88, 99]);

// MERGE SORT
function mergeSortedArr(left, right) {
  // special cases
  if (left.length === 0) return right;
  if (right.length === 0) return left;

  let rIndex = 0,
    lIndex = 0,
    result = [],
    totalLen = left.length + right.length;

  while (result.length < totalLen) {
    if (left[lIndex] <= right[rIndex]) {
      result.push(left[lIndex]);
      lIndex++;
    } else {
      result.push(right[rIndex]);
      rIndex++;
    }
    if (lIndex === left.length) {
      result = [...result, ...right.slice(rIndex)];
      break;
    }
    if (rIndex === right.length) {
      result = [...result, ...left.slice(lIndex)];
      break;
    }
  }
  return result;
}

// let test = [
//   [
//     [1, 2],
//     [3, 5]
//   ],
//   [
//     [3, 4, 5],
//     [6, 7]
//   ],
//   [[], []],
//   [[1, 2, 3], []]
// ];
// let result = test.map(([u, v]) => mergeSortedArr(u, v));
// console.log(result)

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const [left, right] = [
    arr.slice(0, arr.length / 2),
    arr.slice(arr.length / 2)
  ];
  return mergeSortedArr(mergeSort(left), mergeSort(right));
}

let test = [[9, 1, 10, 2], [5, 1, 1], [1], [], [2, 1], [1, 2]];
let result = test.map(t => mergeSort(t));
console.log(result);
