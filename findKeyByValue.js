const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function that takes an object and a value.
// Will scan the object and return the first key which contains the given value.
// If there is no value found it will return undefined.

const findKeyByValue = function(object, value) {
 
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
};

// Test Cases

// //Test 1

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// //Test 2

// const bestMusicByGenre = {
//   industrial: "Nine Inch Nails",
//   rock: "Nine Inch Nails",
//   nuMetal: "System of a Down",
//   pop:  "Everything Everything",
//   experimental: "The Dillinger Escape Plan"
// };


// assertEqual(findKeyByValue(bestMusicByGenre, "Nine Inch Nails"), "industrial");
// assertEqual(findKeyByValue(bestMusicByGenre, "Everything Everything"), "pop");
// assertEqual(findKeyByValue(bestMusicByGenre, "Lady Gaga"), undefined);

module.exports = findKeyByValue;