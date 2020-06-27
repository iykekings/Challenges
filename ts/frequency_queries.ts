import { assertDeepEqual } from "./deno_test.ts";
// naive
function freqQuery1(queries: number[][]) {
  let collector = [];
  let current = [];
  for (let [key, val] of queries) {
    if (key === 1) {
      current.push(val);
    } else if (key === 2) {
      let index = current.findIndex(a => a === val);
      if (index > -1) current.splice(index, 1);
    } else if (key === 3) {
      let str = `:${current.join("::")}:`;
      if (
        [...new Set(current)].some(s => {
          let sub = str.match(new RegExp(`:${s}:`, "g"));
          console.log(sub);
          return sub.length === val;
        })
      ) {
        collector.push(1);
      } else {
        collector.push(0);
      }
    }
  }
  return collector;
}
// v2
function freqQuery2(queries: number[][]) {
  let collector = [];
  let map: Map<number, number> = new Map();
  for (let [key, val] of queries) {
    if (key === 1) {
      if (map.has(val)) {
        map.set(val, map.get(val) + 1);
      } else {
        map.set(val, 1);
      }
    } else if (key === 2) {
      let value = map.get(val);
      if (map.has(val) && value !== 0) {
        map.set(val, value - 1);
      }
    } else if (key === 3) {
      if ([...map.values()].includes(val)) {
        collector.push(1);
      } else {
        collector.push(0);
      }
    }
  }
  return collector;
}

// v3
function freqQuery3(queries) {
  let collector = [];
  let map = {};
  for (let [key, val] of queries) {
    if (key === 1) {
      if (map[val]) {
        map[val] += 1;
      } else {
        map[val] = 1;
      }
    } else if (key === 2) {
      if (map[val]) {
        map[val] -= 1;
      }
    } else if (key === 3) {
      if (Object.values(map).includes(val)) {
        collector.push(1);
      } else {
        collector.push(0);
      }
    }
  }
  return collector;
}

// v4
function freqQuery(queries: number[][]) {
  let collector = [];
  let map: Map<number, number> = new Map();
  for (let [key, val] of queries) {
    switch (key) {
      case 1:
        if (map.has(val)) {
          map.set(val, map.get(val) + 1);
        } else {
          map.set(val, 1);
        }
        break;
      case 2:
        if (map.has(val)) {
          map.set(val, map.get(val) - 1);
        }
        break;
      case 3:
        if (new Set(map.values()).has(val)) {
          collector.push(1);
        } else {
          collector.push(0);
        }
        break;
    }
  }
  return collector;
}

assertDeepEqual(
  freqQuery([[1, 5], [1, 6], [3, 2], [1, 10], [1, 10], [1, 6], [2, 5], [3, 2]]),
  [0, 1],
  "Returns expected values"
);

assertDeepEqual(
  freqQuery([
    [1, 3],
    [1, 38],
    [2, 1],
    [1, 16],
    [2, 1],
    [2, 2],
    [1, 64],
    [1, 84],
    [3, 1],
    [1, 100],
    [1, 10],
    [2, 2],
    [2, 1],
    [1, 67],
    [2, 2],
    [3, 1],
    [1, 99],
    [1, 32],
    [1, 58],
    [3, 2]
  ]),
  [1, 1, 0],
  "Returns expected values"
);
