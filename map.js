onst eqArrays = function(array1, array2) {
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

// Function that uses eqArrays to print a message indicating if two arrays are equal or not

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else if (eqArrays(array1, array2) === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};




// Function will take an array to map and a callback function

const map = function(array, callback){
  const results = [];

  for (let item of array){
    results.push(callback(item));
  }
  return results;
}

const words = ['ground', 'control', 'to', 'major', 'tom'];
const results1 = map(words, word => word[0]);
console.log(results1);