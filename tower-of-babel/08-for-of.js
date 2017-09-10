const MAX = process.argv[2];

let FizzBuzz = {
  // make an iteratable object
  [Symbol.iterator]() {
    let num = 1;
    // iterator has to return next()
    return {
      next() {
        // checking condition for each iteration
        // do this check before increasing num variable
        if (num > MAX) return {
          done: true
        }

        let val;
        if ((num % 3 === 0) && (num % 5 === 0)) {
          val = "FizzBuzz";
        } else if (num % 3 === 0) {
          val = "Fizz";
        } else if (num % 5 === 0) {
          val = "Buzz";
        } else {
          val = num;
        }

        num++;

        return {
          done: false,
          value: val
        };
      }
    }
  }
}

for (let n of FizzBuzz) {
  console.log(n);
}
