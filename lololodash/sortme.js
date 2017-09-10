const _ = require("lodash");

const worker = (collection) =>
  _.sortBy(collection, (item) => {
    return - item.quantity;
  });

module.exports = worker;
