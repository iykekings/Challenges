const { assertEq } = require('./test');

function connectedCell(matrix) {
  const h = matrix.length,
    w = matrix[0].length;
  let visited = new Set();
  function findNeighbours([x, y]) {
    const p = [
      [1, 1],
      [1, 0],
      [0, 1],
      [-1, -1],
      [-1, 0],
      [0, -1],
      [-1, 1],
      [1, -1],
    ];
    const valid = [];
    for (let [u, v] of p) {
      if (x + u < h && x + u >= 0 && y + v < w && y + v >= 0) {
        if (!visited.has(k([x + u, y + v]))) {
          valid.push([x + u, y + v]);
          visited.add(k([x + u, y + v]));
        }
      }
    }
    return valid;
  }
  let OnesQueue = [];
  let ZerosQueue = [];

  let answer = 0;
  let answers = new Set();

  if (matrix[0][0] === 1) {
    OnesQueue.push([0, 0]);
    answer++;
  } else {
    ZerosQueue.push([0, 0]);
  }

  visited.add(k([0, 0]));

  while (OnesQueue.length || ZerosQueue.length) {
    if (OnesQueue.length) {
      const current = OnesQueue.shift();
      const neighbours = findNeighbours(current);
      const ones = neighbours.filter(([x, y]) => matrix[x][y] === 1);
      const zeroes = neighbours.filter(([x, y]) => matrix[x][y] === 0);
      if (matrix[current[0]][current[1]] === 1) {
        answer += ones.length;
      } else {
        answer = 1;
      }

      for (let [x, y] of ones) {
        OnesQueue.push([x, y]);
      }
      for (let [x, y] of zeroes) {
        ZerosQueue.push([x, y]);
      }
    } else {
      answers.add(answer);
      answer = 0;
      const current = ZerosQueue.shift();
      const neighbours = findNeighbours(current);
      const ones = neighbours.filter(([x, y]) => matrix[x][y] === 1);
      const zeroes = neighbours.filter(([x, y]) => matrix[x][y] === 0);

      answer += maxCloseness(...ones);

      for (let [x, y] of ones) {
        OnesQueue.push([x, y]);
      }
      for (let [x, y] of zeroes) {
        ZerosQueue.push([x, y]);
      }
    }
  }
  return Math.max(...[...answers]);
}

function k([x, y]) {
  const row = `${x}`.padStart(2, '0');
  const col = `${y}`.padStart(2, '0');
  return row + col;
}

function maxCloseness(...arr) {
  let map = {};
  for (let entry of arr) {
    map[k(entry)] = 1;
  }
  const p = [
    [1, 1],
    [1, 0],
    [0, 1],
    [-1, -1],
    [-1, 0],
    [0, -1],
    [-1, 1],
    [1, -1],
  ];

  for (let [x, y] of p) {
    for (let [i, j] of arr) {
      const key = k([i + x, j + y]);
      if (key in map) {
        map[key] = map[key] + 1;
      }
    }
  }

  return Math.max(...Object.values(map));
}

// console.log(
//   maxCloseness(
//     ...[
//       [0, 0],
//       [0, 2],
//       // [1, 1],
//     ]
//   )
// );

assertEq(
  connectedCell([
    [1, 1, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [1, 0, 0, 0],
  ]),
  5
);

assertEq(
  connectedCell([
    [1, 0, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 1, 0, 0],
  ]),
  1
);

assertEq(
  connectedCell([
    [0, 0, 1, 1],
    [0, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ]),
  8
);
