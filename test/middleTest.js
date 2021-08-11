const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// Test Cases

// Odd Cases
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// Even Cases
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

// When array is < 2
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

// Strings
assertArraysEqual(middle(['Testing', 'Hello', 'Test']), ['Hello']);
assertArraysEqual(middle(['Testing', 'Hello', 'Test', 'Goodbye']), ['Hello', 'Test']);
