const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function (sentence) {
  const results = {};

  for (const letter of sentence){
    if(letter != ' '){
      if(results[letter]){
       results[letter] += 1
      } else {
        results[letter] = 1
      }
    }

  }
 console.log(results)
};

const result1 = countLetters('A Sentence');

//assertEqual(result1['A'], 1);
//assertEqual(result1['S'], 1);
//assertEqual(result1['e'], 3);
//assertEqual(result1['n'], 2);
//assertEqual(result1['t'], 3);
//assertEqual(result1['c'], 1);
