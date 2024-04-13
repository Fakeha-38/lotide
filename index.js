// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');
const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');
const findKey = require('./findKey');
const flatten = require('./flatten');
const without = require('./without');
const takeUntil = require('./takeUntil');

module.exports = {
  head,
  tail,
  middle,
  eqArrays,
  assertArraysEqual,
  assertEqual,
  countOnly,
  countLetters,
  letterPositions,
  findKeyByValue,
  eqObjects,
  assertObjectsEqual,
  findKey,
  flatten,
  without,
  takeUntil
};