const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual')
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects')
const findkey = require('./findkey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./LetterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without')


module.exports = {
  
  head: head,

  tail: tail,

  middle: middle,

  assertArraysEqual: assertArraysEqual,

  assertEqual: assertEqual,

  assertObjectsEqual: assertObjectsEqual,

  countLetters: countLetters, 

  countOnly: countOnly,

  eqArrays: eqArrays, 

  eqObjects: eqObjects, 

  findkey: findkey,

  findKeyByValue: findKeyByValue, 

  flatten: flatten, 

  letterPositions: letterPositions, 

  map: map, 

  takeUntil: takeUntil, 

  without: without


};

