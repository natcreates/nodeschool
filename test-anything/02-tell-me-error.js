const assert = require('assert');
const coolNumber = require(process.argv[2]);

// assert will throw an error with the 2nd arg as the message
// if this test fails
assert(coolNumber(42) === true, 'coolNumber(42) should be true');
