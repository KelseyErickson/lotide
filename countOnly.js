const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


// Function to take in a collection of items and return a count for a specific subset of those items

const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) { // To iterate through the allItems array
    if (itemsToCount[item]) { // If the name is in itemsToCount and...
      if (results[item]) { // If the name is already in results object - then add another count to the result
        results[item] += 1;
      } else {
        results[item] = 1; // If the name is not already in the results then it will just equal 1
      }
    }
  }
  return results;

};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;
