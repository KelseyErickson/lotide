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

// function that return the middle most elements of an array

const middle = function(array) {
  const divideByTwo = Math.floor(array.length / 2); // To find the approximate middle of the array and round down if needed
  const middleArray = [];

  if (array.length > 2) { // If statement to return an empty array if it's length is less than 2
    if ((array.length % 2) !== 0) {
      middleArray.push(array[divideByTwo]); // Using divideByTwo to push the middle element if the array is odd
    }
    if ((array.length % 2) === 0) {
      middleArray.push(array[divideByTwo - 1]); // If array is even it returns two middle numbers using the divideByTwo value
      middleArray.push(array[divideByTwo]);
    }

  } else {
    return [];
  }

  return middleArray;
};

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
