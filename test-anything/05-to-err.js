const feedCat = require(process.argv[2]),
test = require('tape');

test('make sure feedCat does not allow chocolate', (t) => {
  t.equal(feedCat("mouse"), "yum", "Cat is fed");
  t.throws(() => feedCat('chocolate'));
  // alternative t.throws(feedCat.bind(null, 'chocolate'))
  t.end();
})
