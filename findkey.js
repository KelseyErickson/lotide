const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Function will take an object and a callback function
// It will scan the object and return the first key for which the call back returns a truthy value
// If no key is found it will return undefined

const findKey = (object, callback) => {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};


// Test One

assertEqual(findKey({
  'Blue Hill': { stars: 1 },
  'Akaleri':   { stars: 3 },
  'noma':      { stars: 2 },
  'elBulli':   { stars: 3 },
  'Ora':       { stars: 2 },
  'Akelarre':  { stars: 3 }
}, x => x.stars === 2), 'noma'); // => True

//Test Two

assertEqual(findKey({
  'Blue Hill': { stars: 1 },
  'Akaleri':   { stars: 3 },
  'noma':      { stars: 2 },
  'elBulli':   { stars: 3 },
  'Ora':       { stars: 2 },
  'Akelarre':  { stars: 3 }
}, x => x.stars === 4), undefined); // => True

//Test Three

assertEqual(findKey({
  'blueberries': 1 ,
  'strawberries': 3 ,
  'melons': 2 ,
  'bananas': 3 ,
}, x => x === 3), 'strawberries'); // => True

// Test Four

assertEqual(findKey({
  'blueberries':  { status: 'good'},
  'strawberries': { status: 'good' },
  'melons':       { status: 'good' },
  'bananas':      { status: 'good'},
  'apples':       { status: 'rotton' },
  'grapes':       { status: 'rotton' }
}, x => x.status === 'rotton'), 'apples'); // => True