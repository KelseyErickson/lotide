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

// Function to return the indexes of an string as an object

const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (!results[sentence[i]]) { // if there is not the letter in the object we add an array with it's index
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i); // if the letter is already in the object we access the already existing array and push the index to that array
      }
    }
  }

  return results;

};



// TEST CODE

//Test 1



// All these tests should pass

console.log('Results for \'hello\'');
assertArraysEqual(letterPositions('hello').h, [0]);
assertArraysEqual(letterPositions('hello').e, [1]);
assertArraysEqual(letterPositions('hello').l, [2, 3]);
assertArraysEqual(letterPositions('hello').o, [4]);


// Test 2



// These should all pass
console.log('Results for \'Lighthouse in the house\'');
assertArraysEqual(letterPositions('Lighthouse in the house').L, [0]);
assertArraysEqual(letterPositions('Lighthouse in the house').i, [1, 11]);
assertArraysEqual(letterPositions('Lighthouse in the house').g, [2]);
assertArraysEqual(letterPositions('Lighthouse in the house').h, [3, 5, 15, 18]);
assertArraysEqual(letterPositions('Lighthouse in the house').t, [4, 14]);
assertArraysEqual(letterPositions('Lighthouse in the house').o, [6, 19]);
assertArraysEqual(letterPositions('Lighthouse in the house').u, [7, 20]);
assertArraysEqual(letterPositions('Lighthouse in the house').s, [8, 21]);
assertArraysEqual(letterPositions('Lighthouse in the house').e, [9, 16, 22]);
assertArraysEqual(letterPositions('Lighthouse in the house').n, [12]);

