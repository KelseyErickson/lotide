const eqArrays = function (array1, array2) {
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

// function that returns true if both objects have identical keys with identical values
// Otherwise returns false

const eqObjects = function (object1, object2) {
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
    } else if (object1[key] !== object2[key]) { // else if the key values are not arrays then compare the primitive values
      return false;
    }
  }

  return true;
};

