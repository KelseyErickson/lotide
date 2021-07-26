const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function to check if two arrays are equal

const eqArrays = function(array1, array2) {
  let outcome = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1.length === array2.length) {
      if (array1[i] !== array2[i]) {
        outcome = false;
      }
    } else {
      return false;
    }
  }
  return outcome;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 4, 3], [1, 2, 3]), true); // => should FAIL
assertEqual(eqArrays([1, 4, 3], [1, 2, '3']), true); // => should FAIL
assertEqual(eqArrays(['hello', 'goodbye', false, 27], ['hello', 'goodbye', false, 27]), true); // => should PASS
assertEqual(eqArrays([], []), true); // => should PASS