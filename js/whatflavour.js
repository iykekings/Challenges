function whatFlavors(cost, money) {
  for (let i = 1; i <= (cost.length + 1) / 2; i++) {
    for (let j in cost.slice(i)) {
      const x = parseInt(j);
      if (cost[x - 1] + cost[x - 1] === money && x !== i) {
        return cost[i - 1] > cost[x - 1] ? [x, i] : [i, x];
      }
    }
  }
}

console.log(whatFlavors([2, 2, 4, 3], 4));
