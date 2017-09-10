var rawArgs = process.argv.slice(2);
    var args = [];

    rawArgs.forEach(val => {
      let commaSep = val.split(',');
      commaSep.forEach(val => {
        if(val !== '') args.push(+val);
      });
    });

    // write a function called `avg` here that calculates the average.
    const avg = (...vals) => {
      let total = vals.reduce((total, num) => total += num);
      return total /  vals.length;
    }

    console.log(avg(...args));
