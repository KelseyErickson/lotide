const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function to count how many of each letter is in a string and return that information as an object

const countLetters = function(sentence) {
  const results = {};

  for (const letter of sentence) {
    if (letter !== ' ') { // Skipping any spaces
      if (results[letter]) {
        results[letter] += 1; // if there is already this letter in the object we add one to the count
      } else {
        results[letter] = 1; // if there is not already this letter in the object we add the initial count
      }
    }

  }
  
  return results;
};

// // Test one

// const result1 = countLetters('A Sentence');
// // These should all pass
// console.log('Count for \'A Sentence\'');
// assertEqual(result1['A'], 1);
// assertEqual(result1['S'], 1);
// assertEqual(result1['e'], 3);
// assertEqual(result1['n'], 2);
// assertEqual(result1['t'], 1);
// assertEqual(result1['c'], 1);

// // Test 2
// const result2 = countLetters('Lighthouse in the house');

// // These should all pass
// console.log('Count for \'Lighthouse in the house\'');
// assertEqual(result2['L'], 1);
// assertEqual(result2['i'], 2);
// assertEqual(result2['g'], 1);
// assertEqual(result2['h'], 4);
// assertEqual(result2['t'], 2);
// assertEqual(result2['o'], 2);
// assertEqual(result2['u'], 2);
// assertEqual(result2['s'], 2);
// assertEqual(result2['e'], 3);
// assertEqual(result2['n'], 1);
// // This should Fail - we are not counting spaces
// assertEqual(result2[' '], 3);

module.exports = countLetters;