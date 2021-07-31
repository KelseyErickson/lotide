const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
    
  }
  return true;
};

// Function that uses eqArrays to print a message indicating if two arrays are equal or not

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else if (eqArrays(array1, array2) === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};


// Function will take in two parameters - an array and a callback function
// Return a slice of the array with elements taken from the beginning and will continue until the callback returns a truthy value


const takeUntil = function(array, callback) {
  for (const element of array) {
    if (callback(element)) {
      return array.slice(0, array.indexOf(element));
    }
  }
};

// Test one
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]); // Pass

// Test two
const data2 = ['I\'ve', 'been', 'to', 'Hollywood', ',', 'I\'ve', 'been', 'to', 'Redwood'];
assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']); // Pass

// Test three
const data3 = [27, 'Hello', false, false, true, 'Potato'];
assertArraysEqual(takeUntil(data3, x => x === true), [27, 'Hello', false, false]); // Pass

// Test three
const data4 = [1, 1, 1, 1, 1, 15, 1, 1, 1];
assertArraysEqual(takeUntil(data4, x => x !== 1), [1, 1, 1, 1, 1]); // Pass

