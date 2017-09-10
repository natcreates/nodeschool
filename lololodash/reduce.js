const _ = require("lodash");

const worker = (orders) => {
  const ordersCounted = _.reduce(orders, (ordersCount, item) => {
    if (!ordersCount[item.article]) {
      ordersCount[item.article] = item.quantity;
    } else {
      ordersCount[item.article] += item.quantity;
    }
    return ordersCount;
  }, {});

  const counted = _.map(ordersCounted, (val, key) => {
    return {
      article: key,
      total_orders: val,
    };
  });

  return _.sortBy(counted, (item) => - item.total_orders);
};

module.exports = worker;
