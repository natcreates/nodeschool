const _ = require("lodash");

const worker = (freelancers) => {
  let freelanceIncome = {};
  let average = 0;
  _.forEach(freelancers, (freelancer) => average += freelancer.income);
  freelanceIncome.average = average / freelancers.length;
  // ALternative way using reduce
  // sumall  = _.reduce(item, function(num, sum) {
  //   return sum + num.income;
  // }, 0);
  freelanceIncome.underperform = _.chain(freelancers)
    .filter((freelancer) => freelancer.income <= freelanceIncome.average)
    .sortBy((freelancer) => freelancer.income);
  freelanceIncome.overperform = _.chain(freelancers)
    .filter((freelancer) => freelancer.income > freelanceIncome.average)
    .sortBy((freelancer) => freelancer.income);

  return freelanceIncome;
};

module.exports = worker;
