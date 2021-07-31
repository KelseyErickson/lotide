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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else if (eqArrays(array1, array2) === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

// Function to return a 'flattened' version of an array
// If it is a nested array it will un-nest the elements

const flatten = function(array) {
  let flattenArray = [];
  for (let element of array) {
    if (!Array.isArray(element)) {
      flattenArray.push(element);
    } else if (Array.isArray(element)) {
      for (let nestedElement of element) {
        flattenArray.push(nestedElement);
      }
    }
  }

  return flattenArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[6]]), [6]);
assertArraysEqual(flatten([[]]), []);
assertArraysEqual(flatten([[true, false], 'Hello', [5, 6, 7]]), [true, false, 'Hello', 5, 6, 7]);

