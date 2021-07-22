const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE

assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1,1);
assertEqual('Today is Wednesday', 'Today is Wednesday');
assertEqual('Today is Monday', 'Today is Tuesday');
assertEqual(23, 23);
assertEqual(56, 54);
assertEqual(false, true);