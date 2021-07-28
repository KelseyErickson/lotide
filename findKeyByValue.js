const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function that takes an object and a value. 
// Will scan the object and return the first key with contains the given value. 
// If there is no value found will return undefined

const findKeyByValue = function(object, value) {


};