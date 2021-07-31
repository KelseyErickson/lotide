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


// Function will take an array to map and a callback function

const map = (array, callback) => {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

// Test 1

const words = ['ground', 'control', 'to', 'major', 'tom'];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); // Should Pass

// Test 2

const results2 = map([1, 2, 3, 4, 5, 6], num => num * 2);
assertArraysEqual(results2, [2, 4, 6, 8, 10, 12]); // Should Pass

// Test 3

const results3 = map([], num => num * 2);
assertArraysEqual(results3, []); // Should Pass

// Test 4
const results4 = map([1], num => num + ' String');
assertArraysEqual(results4, ['1 String']); // Should Pass

