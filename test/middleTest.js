// Importing middle.js
const middle = require('../middle')
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual(middle([2, 'mid of array', 54]), ['mid of array']);
assertArraysEqual(middle([2, 4, 6, 58, 8, 5, 6, 7]), [58, 8]);