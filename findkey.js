const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function will take an object and a callback function
// It will scan the object and return the first key for which the call back returns a truthy value
// If no key is found it will return undefined

const findkey = function(object, callback) {

};