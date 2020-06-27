// Possible optimization step

// lazily find all path to all nodes once
// iterate until m

// O(n+m)
function bfs(n, m, edges, s) {
  // uniques nodes
  let nodes = [];
  // O(n)
  for (let i = 1; i <= n; i++) {
    if (i !== s) nodes.push(i);
  }

  let list = new Map();
  // make adj list: O(m)
  for (let [k, v] of edges) {
    if (list.has(k)) {
      list.set(k, [...list.get(k), v]);
    } else {
      list.set(k, [v]);
    }
    if (list.has(v)) {
      list.set(v, [...list.get(v), k]);
    } else {
      list.set(v, [k]);
    }
  }

  let distances = [];
  // get shortest path for all entries except start : O(n)
  for (let node of nodes) {
    distances.push(dsTo(node));
  }

  // O(n+m)
  function dsTo(node) {
    let queue = [];
    let visited = new Set();
    queue.push({ node: s, c: 0 });
    visited.add(s);

    // O(n)
    while (queue.length) {
      const cur = queue.shift();
      if (cur.node === node) return cur.c * 6;
      const nexts = list.get(cur.node);

      // O(<m)
      for (let n of nexts) {
        if (!visited.has(n)) {
          queue.push({ node: n, c: cur.c + 1 });
          visited.add(n);
        }
      }
    }
    return -1;
  }

  return distances;
}

console.log(
  bfs(
    4,
    2,
    [
      [1, 2],
      [1, 3],
    ],
    1
  )
);

console.log(bfs(3, 1, [[2, 3]], 2));

console.log(
  bfs(
    5,
    3,
    [
      [1, 2],
      [1, 3],
      [3, 4],
    ],
    1
  )
);
