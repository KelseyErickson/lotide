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
  const keysObject2 = Object.keys(object2);
  

  if (!(keysObject1.length === keysObject2.length)) {
    return false;
  }
  for (const key of keysObject1) {
    if (object1[key] !== object2[key]) {
      return false;
      }
    }

    return true;
  }; 
 
console.log('ab vs ba:')
const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };

assertEqual(eqObjects(ab, ba), true);
console.log('ab vs abc:')
const abc = { a: '1', b: '2', c: '3' };
assertEqual(eqObjects(ab, abc), false);
console.log('cd vs dc:')
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true
console.log('cd vs cd2:')
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);; // => false
