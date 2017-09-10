var coins = {
  "p" : 1,
  "n" : 5,
  "d" : 10,
  "q" : 25,
}
// for 42 expect q, d, n, p, p
module.exports = {
  getAmount: function(coinType) {
    // COINS:
    // [p]enny
    // [n]ickel
    // [d]ime
    // [q]uarter

    if(!coins.hasOwnProperty(coinType)) {
      throw new Error('Unrecognized coin ' + coinType);
    }
    return coins[coinType];
  },

  convertToChange: function(amount) {
    let coinAmounts = ["q", "d", "n", "p"];
    let change = [];
    let count = amount;

    coinAmounts.forEach((coin) => {
      var division;
      while (count >= coins[coin]) {
        division = Math.floor(count / coins[coin]);
        count = count % coins[coin];
        for (var i = 0; i < division; i++) {
          change.push(coin);
        }
      }
    });

    // OFFICAL SOLUTION
    // for(var i in coinAmounts) {
    //   var coinType = coinAmounts[i];
    //   var coinValue = coins[coinType];
    //
    //   while(amount >= coinValue) {
    //     change.push(coinType);
    //     amount -= coinValue;
    //   }
    // }


    return change;
  }
}
