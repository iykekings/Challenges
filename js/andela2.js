function valuation(reqArea, area, price) {
  let store = [];
  area.forEach((a, i) => {
    if (area.lastIndexOf(a) === area.indexOf(a)) {
      store.push([a, price[i]]);
    } else {
      const compList = price.filter((_, j) => {
        const state = area[j] === a && j !== i;
        return state;
      });
      let mean = compList.reduce((a, b) => a + b, 0) / compList.length;
      let std =
        compList.reduce((a, b) => a + (b - mean) ** 2 / compList.length, 0) **
        0.5;
      Math.abs(mean - price[i]) <= 3 * std && store.push([a, mean]);
    }
  });
  if (!store.length) return 1000;
  if (store.length === 1) return store[0][1];
  const fil = store.filter((a) => a[0] === reqArea);
  if (fil.length) return fil.reduce((a, b) => a + b[1], 0) / fil.length;

  store = store.sort((a, b) => a - b);
  //   extrapolate min
  if (reqArea < store[0][0]) {
    const min = store[0];
    const max = store[1];
    return (
      min[1] + ((reqArea - min[0]) * (max[1] - min[1])) / (max[0] - min[0])
    );
  }
  if (reqArea > store[store.length - 1][0]) {
    const min = store[store.length - 2];
    const max = store[store.length - 1];
    return (
      // min[1] + ((max[1] - min[1]) / (max[0] - min[0])) * (reqArea - min[0])
      min[1] + ((reqArea - min[0]) * (max[1] - min[1])) / (max[0] - min[0])
    );
  }

  // interpolate
  for (let i = 1; i < store.length; i++) {
    if (store[i - 1][0] < reqArea && store[i][0] > reqArea) {
      const min = store[i - 1];
      const max = store[i];
      return (
        min[1] + ((max[1] - min[1]) / (max[0] - min[0])) * (reqArea - min[0])
      );
    }
  }
}

let area = [1200, 1200, 1200, 2000],
  price = [15000, 11000, 17000, 25000];
console.log(valuation(2500, area, price));
// 13000 + (30000 - 13000) / ((2000 - 1500) * (1500 - 1200));
