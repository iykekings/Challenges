const { equal } = require('assert');

// Ron and Hermione are deep in the Forbidden Forest collecting potion ingredients,
// and they've managed to lose their way. The path out of the forest is blocked,
// so they must make their way to a portkey that will transport them back to Hogwarts.

// Consider the forest as an  grid. Each cell is either empty (represented by .)
//  or blocked by a tree (represented by ). Ron and Hermione can move (together inside a single cell)
// LEFT, RIGHT, UP, and DOWN through empty cells, but they cannot travel through a tree cell.
// Their starting cell is marked with the character , and the cell with the portkey is marked with a .
// The upper-left corner is indexed as .

function countLuck(matrix, k) {
  let checker = new Set();
  const DIR = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const w = matrix[0].length,
    h = matrix.length;

  let M = { count: 0, id: 'M' };
  for (let i = 0; i < h; i++) {
    let j = matrix[i].indexOf('M');
    if (j >= 0) {
      M.r = i;
      M.c = j;
      break;
    }
  }

  let stack = [];
  stack.push(M);
  checker.add(`R${M.r}C${M.c}`);

  while (stack.length) {
    let current = stack.pop();
    let nPaths = nextPaths(current);
    if (current.id === '*' && k === current.count) return 'Impressed';
    if (current.id === '*' && k !== current.count) return 'Oops!';
    if (nPaths.length > 2 && current.count >= k) return 'Oops!';
    nPaths.forEach((path) => {
      stack.push(path);
    });
  }

  function nextPaths({ r, c, count }) {
    let res = [];
    for (const [dx, dy] of DIR) {
      if (r + dx < h && r + dx >= 0 && c + dy < w && c + dy >= 0) {
        if (
          matrix[r + dx][c + dy] !== 'X' &&
          !checker.has(`R${r + dx}C${c + dy}`)
        ) {
          res.push({ r: r + dx, c: c + dy, count, id: matrix[r + dx][c + dy] });
          checker.add(`R${r + dx}C${c + dy}`);
        }
      }
    }
    if (res.length > 1)
      res.forEach((p) => {
        p.count++;
      });
    return res;
  }
}
equal(countLuck(['*.M', '.X.'], 1), 'Impressed');
// *.M
// .X.
equal(
  countLuck(['.X.X......X', '.X*.X.XXX.X', '.XX.X.XM...', '......XXXX.'], 3),
  'Impressed'
);

equal(
  countLuck(['.X.X......X', '.X*.X.XXX.X', '.XX.X.XM...', '......XXXX.'], 4),
  'Oops!'
);

let test = `X.XXXX.XX....X.XX...X.XXXXXXXXX
X.XXX...XXX.X..XXX.XX..XXXXXXXX
...X.XX..X...X..XX.X..XXXXXXXXX
X.X..X..X.X.X..X.....XX.XXXXXXX
...X..X.X....X.X.X.X.X..XXXXXXX
.X..X....X.X.....XX....XXXXXXXX
..X..XX.X.X..XX.X..XX.XXXXXXXXX
.XXX.X.....X.X.X*.X.XX.XXXXXXXX
X..X..X.X.X.....X....X..XXXXXXX
..X.X....X..XXXX..XXX..XXXXXXXX
X....XXX..X.....X...X.XXXXXXXXX
..XX.....X.X.X.X..X.X..XXXXXXXX
XX.X.X.X...X.XX.X..X..X..XXXXXX
.M...XXXX.X.....X.X.X...XXXXXXX
X.XXX..X...X.X.X..X..X.XXXXXXXX
.XX...X.XX..X..X.X.X....XXXXXXX
....X......X..X......XXX.XXXXXX
X.X.XX.XXX..X.X.XX.XX.....XXXXX
X..X..X....XX.....X...X.X..XXXX
..X.X...XX....X.XX..X.X..XX.XXX
.X..X.X.X.X.XX...X.X.X.XX...XXX
XX.X...X....X..X........XX.X.XX
.....XX..X.X.XX..XX.X.X......XX
X.X.XX..X.XX....X..XXXXX.XXXX.X
XX..X.XX....XXX...X.X.X........
.XXXX...XXX.....X......XX.XX.XX
......XX....X.X..XX.XX...XX.XXX
X.X.X....X.X...X...X...X.....X.
XX...X.X..X..X.XXXX.XX.X.X.X...
XXXX..X..XXX.X......X.X...X..XX
XXX..XXX..X..XX.X.X....XX..X..X
X.XX..XX.X..X...X..X.X.XX.X..XX
...XXXX..X.X..X..X..XXX...XXXXX
XX...X..XX.XX..X..X.XX..X..XXXX
XX.XX..XXXXX.X.X.X...X.XXXXXXXX
X.....X.XXX..X.X..X.XXXXXXXXXXX
..X.X......X...X.X..XXXXXXXXXXX`;
equal(countLuck(test.split('\n'), 20), 'Oops!');
equal(
  countLuck(
    `.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.
M.......................................*
.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.`.split('\n'),
    29
  ),
  'Oops!'
);
equal(
  countLuck(
    `..........*
    .XXXXXXXXXX
    ...........
    XXXXXXXXXX.
    M..........`
      .split('\n')
      .map((m) => m.trim()),
    0
  ),
  'Impressed'
);
equal(
  countLuck(
    `.X.X......X
    .X*.X.XXX.X
    .XX.X.XM...
    ......XXXX.`
      .split('\n')
      .map((m) => m.trim()),
    4
  ),
  'Oops!'
);
equal(
  countLuck(
    `XXXXXXXXXXXXXXXXX
    XXX.XX.XXXXXXXXXX
    XX.*..M.XXXXXXXXX
    XXX.XX.XXXXXXXXXX
    XXXXXXXXXXXXXXXXX`
      .split('\n')
      .map((m) => m.trim()),
    1
  ),
  'Impressed'
);
console.time('Luck');
equal(
  countLuck(
    `.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.
    M........................................
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.
    .X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.
    .........................................
    .XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    .X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.
    .........................................
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.
    .X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.
    .........................................
    .XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    .X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.
    .........................................
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.
    .X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.
    .........................................
    .XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    .X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.
    .........................................
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.
    .X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.
    .........................................
    .XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    .X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.
    .........................................
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.
    .X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.
    .........................................
    .XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    .X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.
    .........................................
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.
    .X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.
    .........................................
    .XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    .X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.
    .........................................
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.
    .X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.X.
    .*.......................................`
      .split('\n')
      .map((m) => m.trim()),
    280
  ),
  'Impressed'
);
console.timeEnd('Luck');
