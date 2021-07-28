const eqArrays = function(array1, array2) {
  let outcome = true;
  for (let i = 0; i < array1.length; i++) {
    if (array1.length === array2.length) {
      if (array1[i] !== array2[i]) {
        outcome = false;
      }
    } else {
      outcome = false;
    }
  }
  return outcome;
};



const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else if (eqArrays(array1, array2) === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};


const letterPositions = function(sentence) {
  const results = {};
  const indexArray = [];
  
  for (let i = 0; i < sentence.length; i++){
    if (sentence[i] !== ' ') {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }  
  }

  console.log(results);

  return results;

};



// TEST CODE 

//Test 1

const result1 = letterPositions('hello');

// All these tests should pass

console.log('Results for \'hello\'');
assertArraysEqual(result1['h'], [0]);
assertArraysEqual(result1['e'], [1]);
assertArraysEqual(result1['l'], [2, 3]);
assertArraysEqual(result1['o'], [4]);


// Test 2

const result2 = letterPositions('Lighthouse in the house');

// These should all pass
console.log('Count for \'Lighthouse in the house\'');
assertArraysEqual(result2['L'], [0]);
assertArraysEqual(result2['i'], [1, 11]);
assertArraysEqual(result2['g'], [2]);
assertArraysEqual(result2['h'], [3, 5, 15, 18]);
assertArraysEqual(result2['t'], [4, 14]);
assertArraysEqual(result2['o'], [6, 19]);
assertArraysEqual(result2['u'], [7, 20]);
assertArraysEqual(result2['s'], [8, 21]);
assertArraysEqual(result2['e'], [9, 16, 22]);
assertArraysEqual(result2['n'], [12]);

