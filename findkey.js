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


// Test One

assertEqual(findKey({
  'Blue Hill': { stars: 1 },
  'Akaleri':   { stars: 3 },
  'noma':      { stars: 2 },
  'elBulli':   { stars: 3 },
  'Ora':       { stars: 2 },
  'Akelarre':  { stars: 3 }
}, x => x.stars === 2), 'noma') // => True

