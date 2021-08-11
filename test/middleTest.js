const middle = require('../middle');
const assert = require('chai').assert;


describe('#middle', () => {

  // Odd cases
  it('returns [2] for [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);

  });

  it('returns [3] for [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);

  });

  // Even Cases
  it('returns [2, 3] for [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);

  });

  it('returns [3, 4] for [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

  });

  // Arrays 2 or less
  it('returns [] for [1]', () => {
    assert.deepEqual(middle([1]), []);

  });

  it('returns [] for [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);

  });

  // Strings
  it('returns ["Hello"] for ["Testing", "Hello", "Test"]', () => {
    assert.deepEqual(middle(["Testing", "Hello", "Test"]), ["Hello"]);

  });

  it('returns ["Hello", "Test"] for ["Testing", "Hello", "Test", "Goodbye"]', () => {
    assert.deepEqual(middle(["Testing", "Hello", "Test", "Goodbye"]), ["Hello", "Test"]);

  });






});

// Test Cases



// // Strings
// assertArraysEqual(middle(['Testing', 'Hello', 'Test']), ['Hello']);
// assertArraysEqual(middle(['Testing', 'Hello', 'Test', 'Goodbye']), ['Hello', 'Test']);
