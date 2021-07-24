const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function that returns the head of an array
// Otherwise return undefined

const head = function(array) {
  if (array[0]) {
    return array[0];
  } else {
    return undefined;
  }
};

// Test Code using assertEqual function to test if the returned item is the head

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5,6,7]), 6);
assertEqual(head([8]), 8);
assertEqual(head([]), 'Nothing');
assertEqual(head(['head']), 'head');
