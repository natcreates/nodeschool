// It's best practice to put a rejection handler at bottom of promise chain
// A promise can only be resolved once
// If a then block has only a fulfilment param
// Any error will bubble up to the next rejection handler
// until it hits the global context
// Also if the rejection handler itself throws an error, this causes issues
// Many promise libs provide a done handler to deal with uncaught errors
// So if you are NOT returning a value from your promise to a caller
// then attach a done handler

function iterate (num) {
  console.log(num);
  return ++num;
};

function alwaysThrows () {
  throw new Error("OH NOES");
};

Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null, console.log);