const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {

  it('does not modify the original array ["Yo Yo", "Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    const words = ['Yo Yo', 'Lighthouse', 'Labs'];
    tail(words);
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);

  });

  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);

  });


  it('returns an empty array [] for [1]', () => {
    assert.deepEqual(tail([1]), []);

  });



  it('returns an empty array [] for an empty array[]', () => {
    assert.deepEqual(tail([]), []);

  });

  it('returns [2, 3, 4, 5] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);

  });

});
