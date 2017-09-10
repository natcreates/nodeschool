const test = require('tape');
const repeat = require(process.argv[2]);

test('check repeat calls callback', (t) => {
  // expect 5 assertions
  t.plan(5)
  // call the callback 5 times
  repeat(5, () => t.pass('callback called'));
})
