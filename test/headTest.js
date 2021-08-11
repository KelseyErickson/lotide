const head = require('../head');
const assert = require('chai').assert;
// Test Code using assertEqual function to test if the returned item is the head


describe('#head', () => {
  it('returns "1" for [1, 2, 3,]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);

  });

  it('returns "5" for ["5"]', () => {
    assert.strictEqual(head(['5']), '5');

  });

  it('returns undefined for an empty array []', () => {
    assert.strictEqual(head([]), undefined);

  });

  it('returns "Hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');

  });

  it('returns true for [true, false, false, false]', () => {
    assert.strictEqual(head([true, false, false, false]), true);

  });

});