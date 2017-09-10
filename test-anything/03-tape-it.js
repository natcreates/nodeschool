const test = require('tape');
const fancify = require(process.argv[2]);

const testString = 'test'

test('fancify', (t) => {
  t.equal(fancify(testString),` ~*~${testString}~*~`, "String should be wrapped in ~*~");
  t.equal(fancify('test', true), "~*~TEST~*~", "String would be uppercase");
  t.equal(fancify('test', false, "?"), "~?~test~?~", "String should be wrapped in char given to 3rd arg");
  t.end();
})
