const { assertEq } = require('./test.js');
function maximumToys(prices, k) {
  prices = prices.sort((a, b) => a - b);
  let counter = 0;
  let totalPrice = 0;

  for (let price of prices) {
    if (totalPrice + price <= k) {
      totalPrice += price;
      counter++;
    } else {
      break;
    }
  }
  return counter;
}
// maximumToys([1, 12, 5, 111, 200, 1000, 10], 50);

assertEq(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50), 4);
