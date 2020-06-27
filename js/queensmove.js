function queensAttack(n, r_q, c_q, obs) {
  let c = {};
  obs.forEach(([a, b]) => {
    c[`${a}${b}`] = 1;
  });
  return getDiagonals(n, r_q, c_q, c) + getQhorAndVert(n, r_q, c_q, c);
}

function checkObstacleInPath(r, c, check) {
  return `${r}${c}` in check;
}

function getQhorAndVert(n, rq, cq, obs) {
  let res = 0;
  // HR
  for (let i = cq + 1; i <= n; i++) {
    if (checkObstacleInPath(rq, i, obs)) break;
    res++;
  }
  // HL
  for (let i = cq - 1; i >= 1; i--) {
    if (checkObstacleInPath(rq, i, obs)) break;
    res++;
  }
  // VT
  for (let i = rq + 1; i <= n; i++) {
    if (checkObstacleInPath(i, cq, obs)) break;
    res++;
  }
  // VB
  for (let i = rq - 1; i >= 1; i--) {
    if (checkObstacleInPath(i, cq, obs)) break;
    res++;
  }
  return res;
}

function getDiagonals(n, rq, cq, obs) {
  let res = 0;
  // TR
  for (let [i, j] = [rq + 1, cq + 1]; i <= n && j <= n; i++, j++) {
    if (checkObstacleInPath(i, j, obs)) break;
    res++;
  }
  // TL
  for (let [i, j] = [rq + 1, cq - 1]; i <= n && j >= 1; i++, j--) {
    if (checkObstacleInPath(i, j, obs)) break;
    res++;
  }
  // BR
  for (let [i, j] = [rq - 1, cq + 1]; i >= 1 && j <= n; i--, j++) {
    if (checkObstacleInPath(i, j, obs)) break;
    res++;
  }
  // BL
  for (let [i, j] = [rq - 1, cq - 1]; i >= 1 && j >= 1; i--, j--) {
    if (checkObstacleInPath(i, j, obs)) break;
    res++;
  }
  return res;
}

// TESTS
const fs = require('fs');
const data = fs
  .readFileSync('./queensmove.txt', { encoding: 'utf8' })
  .split('\n')
  .map((m) => m.split(/\s+/).map((mm) => parseInt(mm, 10)));

console.time('Queen');
const result = queensAttack(data[0][0], data[1][0], data[1][1], data.slice(2));
console.timeEnd('Queen');
console.log(result);
