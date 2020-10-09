// Possible optimization step
const { deepStrictEqual } = require('assert');
const { readFileSync } = require('fs');
// lazily find all path to all nodes once
// iterate until m

// O(n+m)
function bfs(n, m, edges, s) {
  let dict = new Map();
  // O(n)
  for (let i = 1; i <= n; i++) {
    if (i !== s) {
      dict.set(i, -1);
    }
  }

  let adjList = new Map();
  // O(m)
  for (let [k, v] of edges) {
    if (adjList.has(k)) {
      adjList.get(k).add(v);
    } else {
      adjList.set(k, new Set([v]));
    }
    if (adjList.has(v)) {
      adjList.get(v).add(k);
    } else {
      adjList.set(v, new Set([k]));
    }
  }

  let queue = [];
  let visited = new Set();
  const nexts = adjList.get(s);
  // O(m)
  nexts.forEach((i) => {
    queue.push({ node: i, c: 6 });
    dict.set(i, 6);
    visited.add(i);
  });

  // O(n) + O(m) => O(n+m)
  while (queue.length) {
    const cur = queue.shift();
    const nexts = adjList.get(cur.node);
    // O(m)
    for (let n of nexts) {
      if (!visited.has(n) && n !== s) {
        queue.push({ node: n, c: cur.c + 6 });
        dict.set(n, cur.c + 6);
        visited.add(n);
      }
    }
  }
  return [...dict.values()];
}

deepStrictEqual(
  bfs(
    4,
    2,
    [
      [1, 2],
      [1, 3],
    ],
    1
  ),
  [6, 6, -1]
);

deepStrictEqual(bfs(3, 1, [[2, 3]], 2), [-1, 6]);

deepStrictEqual(
  bfs(
    5,
    3,
    [
      [1, 2],
      [1, 3],
      [3, 4],
    ],
    1
  ),
  [6, 6, 12, -1]
);

const file = readFileSync('shortest_reach.txt', 'utf-8').split('\n');
const s = parseInt(file.slice(-1)[0], 10);
const [n, m] = file
  .slice(1, 2)[0]
  .split(/\s+/)
  .map((d) => parseInt(d, 10));
const data = file
  .slice(2, -1)
  .map((s) => s.split(/\s+/).map((d) => parseInt(d, 10)));

const result = bfs(n, m, data, s);
const used = process.memoryUsage();
for (let key in used) {
  console.log(`${key} ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`);
}

console.log(result);
