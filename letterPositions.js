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
  
  for(let i = 0; i < sentence.length; i++){
    if (sentence[i] !== ' ') {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
  
      }
    } 
    
  }

  console.log(results)

  return results;

};


assertArraysEqual(letterPositions('hello'), [0, 1, 2, 3, 4]);