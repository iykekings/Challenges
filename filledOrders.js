const { equal } = require('assert');
const { O_DIRECT } = require('constants');

function filledOrders(orders, k) {
  orders.sort((a, b) => a - b);
  let count = 0;
  for (let order of orders) {
    if (k - order >= 0) {
      k -= order;
      count++;
    } else {
      break;
    }
  }
  return count;
}

equal(filledOrders([10, 30], 40), 2);
equal(filledOrders([5, 4, 6], 3), 0);
