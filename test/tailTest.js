const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case that I am not modifying the original array
const words = ['Yo Yo', 'Lighthouse', 'Labs'];
tail(words);
assertEqual(words.length, 3);

// Test Case One
const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result.length, 2);
assertEqual(result[0], 'Lighthouse');
assertEqual(result[1], 'Labs');
console.log(result);

// Test Case Two
const oneElement = tail(['One']);
assertEqual(oneElement.length, 0);
assertEqual(oneElement[0], 'One');
console.log(oneElement);

// Test Case Three
const emptyArray = tail([]);
assertEqual(emptyArray.length, 0);
assertEqual(emptyArray[0], 'test');
console.log(emptyArray);

// Test Case Four
const numbers = tail([1, 2, 3, 4, 5]);
assertEqual(numbers.length, 4);
assertEqual(numbers[0], 2);
assertEqual(numbers[1], 3);
assertEqual(numbers[2], 4);
assertEqual(numbers[3], 5);
console.log(numbers);
