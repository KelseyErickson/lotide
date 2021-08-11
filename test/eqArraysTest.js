const eqArrays = require("../eqArrays");
const assertEqual = require('../assertEqual');


// Un-nested Array Tests
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 4, 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 4, 3], [1, 2, '3']), false);
assertEqual(eqArrays(['hello', 'goodbye', false, 27], ['hello', 'goodbye', false, 27]), true);
assertEqual(eqArrays([], []), true);

// Nested Array Tests
assertEqual(eqArrays([1, [2], 3], [1, [2], 3]), true);
assertEqual(eqArrays([1, [2,['A']], 3], [1, [2, ['A']], 3]), true);
assertEqual(eqArrays([1, [2,['A']], 3], [1, [2, ['A']], 3]), true);
assertEqual(eqArrays([1, [2, ['A']], 3], [1, [2], 3]), false);
assertEqual(eqArrays([1, [2, [3], 4],[2, ['A',['Hello']]], 3], [1, [2, [3], 4],[2, ['A',['Hello']]], 3]), true);
assertEqual(eqArrays([1, [2, [3], 4],[2, ['A',['Hello']]], 3], [1, [2, [3], 4],[2, ['A',['Hello', [1]]]], 3]), false);