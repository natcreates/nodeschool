const MAX = process.argv[2];

// new generator syntax does sumilar to an Iterable
let FizzBuzz = function*(){
    let num = 1;
    let val;
    while (num <= MAX) {
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
      yield val;
    }
  }();

for (let n of FizzBuzz) {
  console.log(n);
}
