// using Map
function groupArray(arr) {
  let store = new Map();
  for (let entry of arr) {
    if (store.has(entry)) {
      const currentValue = store.get(entry);
      store.set(entry, [...currentValue, entry])
    } else {
      store.set(entry, [entry])
    }
  }
  return [...store.values()];
}

console.log(groupArray(['wings', 'mds', 'wings', 'mdsds', 'mdsds', 'wings']))
// [ [ 'wings', 'wings', 'wings' ], [ 'mds' ], [ 'mdsds', 'mdsds' ] ]

// using JS Object
function groupArray(arr) {
  let store = {};
  for (let entry of arr) {
    if (entry in store) {
      const currentValue = store[entry];
      store[entry] = [...currentValue, entry];
    } else {
      store[entry] = [entry];
    }
  }
  return Object.values(store);
}
console.log(groupArray(['wings', 'mds', 'wings', 'mdsds', 'mdsds', 'wings']))
// [ [ 'wings', 'wings', 'wings' ], [ 'mds' ], [ 'mdsds', 'mdsds' ] ]