const head = require('../head');
const assertEqual = require('../assertEqual');
// Test Code using assertEqual function to test if the returned item is the head

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5,6,7]), 6);
assertEqual(head([8]), 8);
assertEqual(head([]), 'Nothing');
assertEqual(head(['head']), 'head');