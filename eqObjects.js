const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function that returns true if both objects have identical keys with identical values
// Otherwise returns false

const eqObjects = function (object1, object2) {
  const keysObject1 = Object.keys(object1);
  const keysObject2 = Object.keys(object1);
  let result = false;

  if (keysObject1.length === keysObject2.length) {
    for (const key in object1) {
      if (object1[key] === object2[key]) {
        result = true;
      }
    }
  } 
 return result;
};

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };

assertEqual(eqObjects(ab, ba), true);

const abc = { a: '1', b: '2', c: '3' };
assertEqual(eqObjects(ab, abc), false);