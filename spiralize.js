// function spiralize(num) {
//   let arr = Array(num)
//     .fill(1)
//     .map(_ => Array(num).fill(1));
//   let col = 0;
//   let row = 1;
//   // first row
//   for (let i = col; i < arr.length - row; i++) {
//     arr[row][i] = 0;
//   }
//   col = arr.length - (row + 1);
//   // first column
//   for (let i = row; i < arr.length - row; i++) {
//     arr[i][col] = 0;
//   }
//   row = arr.length - 2;
//   //  second row
//   for (let i = arr.length - 2; i > 0; i--) {
//     arr[row][i] = 0;
//   }

//   arr.forEach(a => {
//     console.log(a.toString());
//   });
// }

// spiralize(5);

function loopInCirlce(index, len, arr) {
  let [row, col] = index;
  let rowActive = [false, true],
    colActive = [true, true];
  while (true) {
    console.log(arr[row][col]);

    if (row === index[0] + 1 && col === index[1]) {
      break;
    }
    if (colActive[0] && colActive[1]) {
      col++;
    }
    if (colActive[0] && !colActive[1]) {
      col--;
    }
    if (rowActive[0] && rowActive[1]) {
      row++;
    }
    if (rowActive[0] && !rowActive[1]) {
      row--;
    }
  }
}

let test = [
  [1, 2, 3, 4, 5],
  [16, 17, 18, 19, 6],
  [15, 24, 25, 20, 7],
  [14, 23, 22, 21, 8],
  [13, 12, 11, 10, 9]
];

loopInCirlce([0, 0], 5, test);
