# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kerickson/lotide`

**Require it:**

`const _ = require('@kerickson/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: takes 2 arrays and logs a message to assert if they are equal or not.
* `assertEqual(actual, expected)`: takes 2 values and returns true if equal, false otherwise.
* `assertObjectsEqual(actual, expected)`: takes 2 objects and logs a message to assert if they are equal or not.
* `countLetters(string)`: takes a sentence and returns the count of each of the letters in the sentence.
* `countOnly(allItems, itemsToCount)`: takes in a collection of items and returns a count of a subset of those items.
* `eqArrays(array1, array2)`: takes in two arrays and returns true if the arrays are equal and false otherwise.
* `eqObjects(object1, object2)`: takes in 2 objects and returns true if they are equal and false otherwise.
* `findKey(object, callback)`: takes an object and a callback and returns the first key that meets the criteria of the callback.
* `findKeyByValue(object, value)`: takes in an object and value and return the key that corresponds to that value.
* `flatten(array)`: takes in an array that can be a nested array and return a flattened array. 
* `head(array)`: takes an array and returns the first element of the array.
* `letterPositions(string)`: takes in a string and returns the indices of the letter positions in the string.
* `map(array, callback)`: takes in an array and a callback and returns a new array with each item modified by the callback.
* `middle(array)`: takes in an array and returns the most middle element or elements of the array.
* `tail(array)`: takes in an array and returns all elements of the array except the first. 
* `takeUntil(array, callback)`: takes in an array and a callback and returns a slice of the array based on the criteria of the callback.
* `without(source, itemsToRemove)`: takes in two arrays and returns only the items from the source array that are not in the itemsToRemove array.