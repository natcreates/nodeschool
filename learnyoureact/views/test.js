var coins = {
  "p" : 1,
  "n" : 5,
  "d" : 10,
  "q" : 25,
}

function convertChange(amount) {
    var coinAmounts = ["q", "d", "n", "p"];
    var change = [];
    var count = amount;
    // for (var i = 0; i < coinAmounts.length; i++) {
    //   if (amount > 0) {
    //     amount = amount % coins[coinAmounts[i]];
    //     change.push(coinAmounts[i]);
    //   }
    // }

    coinAmounts.forEach((coin) => {
      var division;
      while (count > 0 && count >= coins[coin]) {
        division = Math.floor(count / coins[coin]);
        console.log(division);
        count = count % coins[coin];
        console.log(count);
        for (var i = 0; i < division; i++) {
          change.push(coin);
        }
      }
    });

    console.log(change);
    return change;
}

convertChange(process.argv[2]);
