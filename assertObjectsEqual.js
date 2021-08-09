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

// function that returns true if both objects have identical keys with identical values
// Otherwise returns false


const eqObjects = function(object1, object2) {
  const keysObject1 = Object.keys(object1);
  const keysObject2 = Object.keys(object2);


  if (!(keysObject1.length === keysObject2.length)) { // If the length of the keys of the objects do not equal then return false
    return false;
  }

  for (const key of keysObject1) { // for every key in the key objects array

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // if both key values are arrays
      if (!eqArrays(object1[key], object2[key])) { // if the eqArrays find them to be false - return false
        return false;
      }
    } else if (!Array.isArray(object1[key]) && (typeof (object1[key])) === 'object') {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {// else if the key values are not arrays then compare the primitive values
        return false;
      }

    }

  }
  return true;
};

// Function to take two objects and log a message to assert if the objects are equal

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // Using util library's inspect function to console.log the objects properly

  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (eqObjects(actual, expected) === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }

};



// Calling the function to be sure the output is accurate
console.log('ab vs ba:');
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
assertObjectsEqual(ab, ba); // Pass

console.log('ab vs abc:');
const abc = { a: '1', b: '2', c: '3' };
assertObjectsEqual(ab, abc); // Fail

console.log('cd vs dc:');
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // Pass

console.log('cd vs cd2:');
const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // Fail


