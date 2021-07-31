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

// Function to take in two arrays
// Returns a new array with elements from the source array that are not in items to remove array

const without = function(sourceArray, itemsToRemoveArray) {
  let filteredArray = [];
  for (let element of sourceArray) {
    if (!itemsToRemoveArray.includes(element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;

};

// Test Cases

console.log(without([1, 2, 3], [1,]));// => [2, 3]
console.log(without([1, 1, 2, 3, 1, 4], [1, 4]));// => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without([true, false, false, 'Hello', 25, 'Hello', 47], [false, 'Hello']));

// Testing to see if array is modified
const words = ["hello", "world", "lighthouse"];
without(words,["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);



