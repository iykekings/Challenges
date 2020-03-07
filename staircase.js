const staircase = (n, cache = {}) => {
  // check cache
  if (cache[n]) {
    return cache[n];
  }

  if (n === 0) {
    return 1;
  }

  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 2;
  }

  if (n === 3) {
    return 4;
  }
  else {
    cache[n] = staircase(n - 1, cache) + staircase(n - 2, cache) + staircase(n - 3, cache);
    return cache[n];
  }
}


const staircasePerms = (n) =>  {
  const cache = [];
  if (cache[n]) {
    return cache[n];
  }

  else {
    const ans = staircase(n, cache);
    cache[n] = ans;
    return cache[n];
  }
}

console.log(staircasePerms(7));
