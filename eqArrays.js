const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function to check if two arrays are equal

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i])) {
      if (!eqArrays(array1[i], array2[i])) {
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      return false;
    }
    
  }
  return true;
};

// Un-nested Array Tests
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 4, 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 4, 3], [1, 2, '3']), false);
assertEqual(eqArrays(['hello', 'goodbye', false, 27], ['hello', 'goodbye', false, 27]), true);
assertEqual(eqArrays([], []), true);

// Nested Array Tests
assertEqual(eqArrays([1, [2], 3], [1, [2], 3]), true);
assertEqual(eqArrays([1, [2,['A']], 3], [1, [2, ['A']], 3]), true);
assertEqual(eqArrays([1, [2,['A']], 3], [1, [2, ['A']], 3]), true);
assertEqual(eqArrays([1, [2, ['A']], 3], [1, [2], 3]), false);
assertEqual(eqArrays([1, [2, [3], 4],[2 ['A',['Hello']]], 3], [1, [2, [3], 4],[2 ['A',['Hello']]], 3]), true);
assertEqual(eqArrays([1, [2, [3], 4],[2 ['A',['Hello']]], 3], [1, [2, [3], 4],[2, ['A']], 3]), false);
assertEqual(eqArrays([1, [2, [3], 4],[2 ['A',['Hello', ['Goodbye']]]], 3], [1, [2, [3], 4],[2 ['A',['Hello', ['Goodbye']]]], 3]), true);